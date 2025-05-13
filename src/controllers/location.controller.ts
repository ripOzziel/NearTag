import { Request, Response } from 'express';
import prisma from '../lib/prisma.js';

export const getCurrentLocation = async (req: Request, res: Response): Promise<any> => {
  const { deviceId } = req.params;
  const authId = req.user?.id;

  try {
    // Verificar si el dispositivo existe
    const device = await prisma.device.findUnique({ where: { id_device: deviceId } });
    if (!device) {
      return res.status(404).json({ error: 'dispositivo no encontrado' });
    }

    if (device.userId !== authId) {
      return res.status(403).json({ error: 'No tiene permisos para acceder a la ubicación de este dispositivo' });
    }
    
    // Obtener la última ubicación registrada del dispositivo
    const location = await prisma.locations.findFirst({
      where: { id_device: deviceId },
      orderBy: { date_l: 'desc' }, // Ordenar por la fecha más reciente
    });

    if (!location) {
      return res.status(404).json({ error: 'No se encontró ubicación para este dispositivo' });
    }

    return res.status(200).json({ location });
  } catch (err) {
    return res.status(500).json({ error: 'Error al consultar la ubicación', detail: err });
  }
};