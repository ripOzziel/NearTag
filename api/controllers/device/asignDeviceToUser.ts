import { Request, Response } from 'express';
import  prisma  from '../../lib/prisma.js';
import { z } from 'zod';
  
export const assignDeviceToUser = async (req: Request, res: Response): Promise<any> => {
    const assignDeviceSchema = z.object({
        userId: z.string().uuid(),
        deviceName: z.string().optional(),
        macAddress: z.string(),
        channel: z.number().optional(),
        longitude: z.number(),
        latitude: z.number(),
    });

    try{
      const authId = req.user?.id;
      const tokenId = req.tokenId!;

      const validation = assignDeviceSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ error: validation.error.format() });
      }
  
      const { userId, deviceName, macAddress, channel, longitude, latitude } = validation.data;
  
      // Verificar permisos
      if (authId !== userId) {
        return res.status(403).json({ error: 'No tiene permisos para asignar este dispositivo' });
      }
      
      // Verificar que el usuario existe
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });
      
      if (!user) { return res.status(404).json({ error: 'Usuario no encontrado' }); }
  
      const existingDeviceWithMac = await prisma.deviceConfiguration.findFirst({
        where: { mac_address: macAddress }
      });
  
      if (existingDeviceWithMac) {
        return res.status(409).json({ error: 'la dirección MAC ya está registrada en otro dispositivo' });
      }
  
      // usar transacción para garantizar la integridad de datos
      const newDevice = await prisma.$transaction(async (tx) => {
        await  tx.jwtActivity.create({
          data:{
            tokenId: tokenId,
            action: 'asignar un dispositivo'
          }
        })

        const device = await tx.device.create({
          data: {
            name_device: deviceName || 'default',
            status_d: "activo", 
            userId,
            update_date: new Date()
          }
        });
  

        await tx.user.update({
          where: {id : userId},
          data: {
            update_date: new Date()
          }
        })
  
        await tx.deviceConfiguration.create({
          data: {
            id_device: device.id_device,
            device_name: deviceName || 'default',
            mac_address: macAddress,
            channel: channel ?? 0
          }
        });
  
        await tx.locations.create({
          data:{
            id_device: device.id_device,
            longitude,
            latitude
          }
        })
  
        return tx.device.findUnique({
          where: { id_device: device.id_device },
          include: { 
            configuration: true,
            locations: {
              orderBy: {date_l: 'desc'},
              take: 1
            }
          }
        });
      });
  
      return res.status(201).json({ 
        message: 'dispositivo asignado correctamente', 
        device: newDevice 
      });
    }catch (err){
      return res.status(500).json({ error: 'Error al asignar el dispositivo', detail: err });
    }
};