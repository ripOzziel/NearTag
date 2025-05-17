import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const SECRET_KEY = process.env.SECRET_KEY!;
export const refreshToken = async (req: Request, res: Response): Promise<any> => {
    const { refreshToken } = req.body;
  
    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token no proporcionado' });
    }
  
    try {
      const decoded = jwt.verify(refreshToken, SECRET_KEY) as {
        id: string;
        username: string;
        tokenVersion: number;
        type: string;
      };
  
      if (decoded.type !== 'refresh') {
        return res.status(401).json({ error: 'Token inválido. No es un refresh token.' });
      }

      const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');
  
      const jwtToken = await prisma.jwtToken.findUnique({
        where: { tokenHash: refreshTokenHash },
        include: { user: true }
      });
  
      // validar que el token exista y sea válido
      if (!jwtToken || 
          jwtToken.isRevoked || 
          new Date() > jwtToken.expiresAt || 
          jwtToken.user.jwt_version !== decoded.tokenVersion ||
          jwtToken.useCount >= jwtToken.maxUses ||
          jwtToken.tokenType !== 'refresh') { 
        return res.status(401).json({ error: 'Refresh token inválido o expirado' });
      }
  
      // actualizacion de uso
      await prisma.jwtToken.update({
        where: { id: jwtToken.id },
        data: {
          useCount: { increment: 1 },
          lastUsedAt: new Date()
        }
      });
  
      
      await prisma.jwtActivity.create({
        data: {
          tokenId: jwtToken.id,
          action: 'refrescar token',
        }
      });
  
      
      const accessExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutotes

      // creacion de un nuevo token
      const newAccessToken = jwt.sign({
        id: decoded.id,
        username: decoded.username,
        tokenVersion: decoded.tokenVersion,
        iat: Math.floor(Date.now() / 1000),
        type: 'access'
      }, SECRET_KEY, {
        algorithm: 'HS256',
        expiresIn: '15m'
      });
  

      const newAccessTokenHash = crypto.createHash('sha256').update(newAccessToken).digest('hex');
  
      // almecenar el nuevo hash del token
      const newJwtToken = await prisma.jwtToken.create({
        data: {
          tokenHash: newAccessTokenHash,
          userId: decoded.id,
          expiresAt: accessExpiresAt,
          maxUses: 30,
          tokenType: 'access' 
        }
      });
  
      
      await prisma.jwtActivity.create({
        data: {
          tokenId: newJwtToken.id,
          action: 'refrescar token de acceso',
        }
      });
  
      return res.status(200).json({ 
        accessToken: newAccessToken
      });
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
  };