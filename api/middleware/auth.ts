import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

interface DecodedToken {
  id: string;
  username: string;
  tokenVersion: number;
  type: string;
  iat: number;
  exp: number;
}

const SECRET_KEY = process.env.SECRET_KEY!;
export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'token no proporcionado' });
    }

    const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;
    if (decoded.type !== 'access') {
      return res.status(401).json({ error: 'Token inválido. Se requiere un access token.' });
    }
    
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const jwtToken = await prisma.jwtToken.findUnique({
      where: { tokenHash, tokenType: 'access' },
      include: { user: true }
    });

    //validaciones del token
    if (!jwtToken) {
      return res.status(401).json({ error: 'token inválido o no existe' });
    }

    if (jwtToken.isRevoked){
      return res.status(401).json({ error: 'token inválido o no existe' });
    }

    if (new Date() > jwtToken.expiresAt) {
      return res.status(401).json({ error: 'Token expirado' });
    }

    if (jwtToken.user.jwt_version !== decoded.tokenVersion) {
      return res.status(401).json({ error: 'Token desactualizado, inicie sesión nuevamente' });
    }

    if (jwtToken.useCount >= jwtToken.maxUses) {
      return res.status(401).json({ error: 'Excedido el límite de uso del token' });
    }

    await prisma.jwtToken.update({
      where: {id: jwtToken.id},
      data: {
        useCount: { increment: 1 },
        lastUsedAt: new Date()
      }
    });

    await prisma.jwtActivity.create({
      data:{
        tokenId: jwtToken.id,
        action: 'uso en middleware'
      }
    });

    req.user = {
      id: decoded.id,
      username: decoded.username,
    }
    req.tokenId = jwtToken.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};