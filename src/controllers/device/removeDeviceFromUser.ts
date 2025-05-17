import { Request, Response } from 'express';
import  prisma  from '../../lib/prisma.js';
import { z } from 'zod';


export const removeDeviceFromUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const { deviceId } = req.params; // IDs del usuario y del dispositivo
      const authId = req.user?.id;
      const tokenId = req.tokenId!;
  
      // Verificar si el dispositivo existe
      const device = await prisma.device.findUnique({ where: { id_device: deviceId }, include: { user: true } });
      if (!device) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
      }
  
      if (device.userId !== authId) {
        return res.status(403).json({ error: 'No tiene permisos sobre este dispositivo' });
      }
      
      await prisma.jwtActivity.create({
        data:{
          tokenId: tokenId,
          action: 'eliminacion de un dispositivo'
        }
      })
  
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