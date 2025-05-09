import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import  prisma  from '../lib/prisma.js';
import { z } from 'zod';

const SECRET_KEY = process.env.SECRET_KEY!;

// Esquema de validación para la asignación de dispositivos
const assignDeviceSchema = z.object({
  userId: z.string().uuid(),
  deviceName: z.string().optional(),
  macAddress: z.string(),
  channel: z.number().optional(),
  longitude: z.number(),
  latitude: z.number(),
});

export const assignDeviceToUser = async (req: Request, res: Response): Promise<any> => {
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error: 'jwt invalido'});

  try{
    const decoded = jwt.verify(token, SECRET_KEY) as {id: string};

    const validation = assignDeviceSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.format() });
    }

    const { userId, deviceName, macAddress, channel, longitude, latitude } = validation.data;

    // Verificar permisos
    if (decoded.id !== userId) {
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

export const markDeviceAsLost = async (req: Request, res: Response): Promise<any> => {
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error: 'jwt invalido'});

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as {id: string};
    const { deviceId } = req.params;

    // Verificar si el dispositivo existe
    const device = await prisma.device.findUnique({ where: { id_device: deviceId } });
    if (!device) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    if (device.userId !== decoded.id) {
      return res.status(403).json({ error: 'No tiene permisos sobre este dispositivo' });
    }

    // Actualizar el estado del dispositivo a 'perdido'
    const updatedDevice = await prisma.device.update({
      where: {id_device: deviceId},
      data: {
        status_d: 'perdido',
        update_date: new Date()
      },
      include: { configuration: true }
    });

    return res.status(200).json({ message: 'Dispositivo marcado como perdido', device: updatedDevice });
  } catch (err) {
    return res.status(500).json({ error: 'Error al marcar el dispositivo como perdido', detail: err });
  }
};

export const getUserDevices = async (req: Request, res: Response): Promise<any> => {
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error: 'jwt invalido'});

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as {id: string};
    const { userId } = req.params;
    // Verificar si el usuario existe
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: 'usuario no encontrado' });
    }

    if (user.id !== decoded.id) {
      return res.status(403).json({ error: 'No tiene permisos sobre este dispositivo' });
    }

    // Obtener los dispositivos asociados al usuario
    const userDevices = await prisma.device.findMany({
      where: { userId: user.id },
      select: {
        name_device: true,
        status_d: true,
        update_date: true,
        connections: true,
        configuration: true,
        locations: true,
        records: true,
        user: true
      },
    });

    if (userDevices.length === 0) {
      return res.status(200).json({ message: 'No tienes dispositivos asociados.' });
    }

    return res.status(200).json({ userDevices });
  } catch (err) {
    return res.status(500).json({ error: 'Error al consultar los dispositivos', detail: err });
  }
};

export const removeDeviceFromUser = async (req: Request, res: Response): Promise<any> => {
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error: 'jwt invalido'});

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as {id: string};
    const { deviceId } = req.params; // IDs del usuario y del dispositivo

    // Verificar si el dispositivo existe
    const device = await prisma.device.findUnique({ where: { id_device: deviceId }, include: { user: true } });
    if (!device) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    if (device.userId !== decoded.id) {
      return res.status(403).json({ error: 'No tiene permisos sobre este dispositivo' });
    }

    //se deben eliminar tambien las relaciones de fk q tenia
    await prisma.deviceConfiguration.deleteMany({ where: { id_device: deviceId } });
    await prisma.locations.deleteMany({ where: { id_device: deviceId } });
    await prisma.record.deleteMany({ where: { id_device: deviceId } });
    await prisma.connection.deleteMany({ where: { id_device: deviceId } });

    await prisma.device.delete({where: {id_device: deviceId }});    
    return res.status(200).json({ message: 'neartag eliminado correctamente'});
  } catch (err) {

    return res.status(500).json({ error: 'Error al eliminar el neartag', detail: err });
  }
};