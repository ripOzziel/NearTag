import { Request, Response } from 'express';
import prisma from '../../lib/prisma.js';

export const getUserData = async (req: Request, res: Response): Promise<any> => {
  const { userId } = req.params;
  const authId = req.user?.id;
  const tokenId = req.tokenId!;

  try {
    if (authId !== userId) {
      return res.status(403).json({ error: 'No tiene permiso para acceder a estos datos' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
        email: true,
        phone_number: true,
        creation_date: true,
        update_date: true,
      },
    });

    await prisma.jwtActivity.create({
      data:{
        tokenId: tokenId,
        action: 'obtener los datos del usuario'
      }
    })
    
    if (!user) {
      return res.status(404).json({ error: 'usuario no encontrado' });
    }

    return res.status(200).json({ message:'usuario encontrado', user });
  } catch (err) {
    return res.status(500).json({
      error: 'error al obtener los datos del usuario',
      detail: err,
    });
  }
};
