import { Request, Response } from 'express';
import prisma from '../../lib/prisma.js';

export const signOut = async (req: Request, res: Response): Promise<any> => {
    try {
      const userId = req.user?.id;
      const currentTokenId = req.tokenId;

      if (!currentTokenId) {
        return res.status(400).json({
          error: 'token id no proporicionado'
        });
      }

      await prisma.$transaction([
        prisma.jwtToken.update({
          where: { id: currentTokenId },
          data: {
            isRevoked: true
          }
        }),

        prisma.jwtActivity.create({
          data: {
            tokenId: currentTokenId,
            action: 'cierre de sesion'
          }
        }),

        prisma.user.update({
          where: { id: userId },
          data:{
            jwt_version:{ increment: 1 }
          }
        }),

        prisma.jwtToken.updateMany({
          where: {
            userId: userId,
            isRevoked: false
          },
          data: {
            isRevoked: true
          }
        })
      ]);

      return res.status(200).json({ message: 'sesion cerrada exitosamente' })
    } catch (err) {
      return res.status(500).json({
        error: 'Error al cerrar sesión',
        detail: err instanceof Error ? err.message : String(err)
      });
    }
  };