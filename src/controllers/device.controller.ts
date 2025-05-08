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

    const { userId, deviceName, macAddress, channel } = validation.data;

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

      await tx.deviceConfiguration.create({
        data: {
          id_device: device.id_device,
          device_name: deviceName || 'default',
          mac_address: macAddress,
          channel: channel ?? 0
        }
      });

      return tx.device.findUnique({
        where: { id_device: device.id_device },
        include: { configuration: true }
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
  const { deviceId } = req.params;

  try {
    // Verificar si el dispositivo existe
    const device = await prisma.device.findUnique({ where: { id_device: deviceId } });
    if (!device) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    // Actualizar el estado del dispositivo a 'perdido'
    const updatedDevice = await prisma.device.update({
      where: { id_device: deviceId },
      data: { status_d: 'perdido' },
    });

    return res.status(200).json({ message: 'Dispositivo marcado como perdido', device: updatedDevice });
  } catch (err) {
    return res.status(500).json({ error: 'Error al marcar el dispositivo como perdido', detail: err });
  }
};

export const getUserDevices = async (req: Request, res: Response): Promise<any> => {
  const { userId } = req.params; // El ID del usuario se pasa como parámetro

  try {
    // Verificar si el usuario existe
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Obtener los dispositivos asociados al usuario
    const devices = await prisma.device.findMany({
      where: { userId },
      select: {
        id_device: true,
        name_device: true,
        status_d: true,
      },
    });

    // Si no hay dispositivos asociados, devolver un mensaje
    if (devices.length === 0) {
      return res.status(200).json({ message: 'No tienes dispositivos asociados.' });
    }

    // Devolver la lista de dispositivos
    return res.status(200).json({ devices });
  } catch (err) {
    return res.status(500).json({ error: 'Error al consultar los dispositivos', detail: err });
  }
};

export const removeDeviceFromUser = async (req: Request, res: Response): Promise<any> => {
  const { userId, deviceId } = req.params; // IDs del usuario y del dispositivo

  try {
    // Verificar si el dispositivo existe
    const device = await prisma.device.findUnique({ where: { id_device: deviceId } });
    if (!device) {
      return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    // Verificar si el dispositivo está asociado al usuario
    if (device.userId !== userId) {
      return res.status(403).json({ error: 'El dispositivo no está asociado a este usuario' });
    }

    // Eliminar la asociación del dispositivo con el usuario
    const updatedDevice = await prisma.device.update({
      where: { id_device: deviceId },
      data: { userId: null }, // Eliminar la asociación
    });

    return res.status(200).json({ message: 'El dispositivo ha sido eliminado correctamente', device: updatedDevice });
  } catch (err) {
    return res.status(500).json({ error: 'Error al eliminar el dispositivo', detail: err });
  }
};