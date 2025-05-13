import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';
import bcrypt from 'bcrypt';

const SECRET_KEY = process.env.SECRET_KEY!;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const decoded = jwt.verify(token, SECRET_KEY) as { id: string, email: string, username?: string, tokenVersion: number};
    
    // Verificar si el usuario existe y tiene un jwt_hash válido
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user || !user.jwt_hash || (user.jwt_version !== decoded.tokenVersion)) {
      return res.status(401).json({ error: 'Sesión no válida' });
    }

    // Verificar si el token actual coincide con el hash almacenado
    const isValidToken = await bcrypt.compare(token, user.jwt_hash);
    
    if (!isValidToken) {
      return res.status(401).json({ error: 'Sesión expirada o inválida' });
    }

    // Agregar el usuario decodificado a la request
    req.user = { ...decoded, username: user.username || '' };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};