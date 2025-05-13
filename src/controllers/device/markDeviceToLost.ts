import { Request, Response } from 'express';
import  prisma  from '../../lib/prisma.js';

export const markDeviceAsLost = async (req: Request, res: Response): Promise<any> => {
    try {
      const { deviceId } = req.params;
      const authId = req.user?.id;
  
      // Verificar si el dispositivo existe
      const device = await prisma.device.findUnique({ where: { id_device: deviceId } });
      if (!device) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
      }
  
      if (device.userId !== authId) {
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