import { Request, Response } from 'express';
import  prisma  from '../../lib/prisma.js';

export const getUserDevices = async (req: Request, res: Response): Promise<any> => {
    try {
      const { userId } = req.params;
      const authId = req.user?.id;
      // Verificar si el usuario existe
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ error: 'usuario no encontrado' });
      }
  
      if (user.id !== authId) {
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
  