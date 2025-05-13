import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma.js';

const SECRET_KEY = process.env.SECRET_KEY!;
export const signOut = async (req: Request, res: Response): Promise<any> => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({
          error: 'Token no proporcionado'
        });
      }
  
      const token = authHeader.split(' ')[1];
      
      try {
        const decoded = jwt.verify(token, SECRET_KEY) as { id: string, email: string };
        
        await prisma.user.update({
          where: { id: decoded.id },
          data: {
            jwt_hash: "", // mejor que null??
            jwt_version: {increment: 1}
          }
        });
        
        return res.status(200).json({
          message: 'Sesión cerrada exitosamente'
        });
      } catch (jwtError) {
        return res.status(401).json({
          error: 'Token inválido o expirado'
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Error al cerrar sesión',
        detail: err
      });
    }
  };