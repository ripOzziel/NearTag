import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import prisma from '../../lib/prisma.js';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY!;
export const getUser = async (req: Request, res: Response): Promise<any> => {
  const {email, password} = req.body;

  if(!email || !password) return res.status(400).json({
    error: 'email y contraseña son requeridos'
  });

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if(!user) return res.status(401).json({
      error: 'email no registrado'
    });

    const validPassword = await bcrypt.compare(password, user.password_u);
    if(!validPassword) return res.status(401).json({
      error: 'constraseña incorrecta'
    });

    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
    const refreshExpiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

    const accessToken = jwt.sign({
      id: user.id,
      username: user.username,
      tokenVersion: user.jwt_version,
      iat: Math.floor(Date.now() / 1000),
      type: 'access'
    }, SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: '15m'
    });

    const refreshToken = jwt.sign({
      id: user.id,
      username: user.username,
      tokenVersion: user.jwt_version,
      iat: Math.floor(Date.now() / 1000),
      type: 'refresh'
    }, SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: '1d'
    })


    const accessTokenHash = crypto.createHash('sha256').update(accessToken).digest('hex');
    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');

    const [accessTokenRecord, refreshTokenRecord] = await prisma.$transaction([
      prisma.jwtToken.create({
        data: {
          tokenHash: accessTokenHash,
          userId: user.id,
          expiresAt,
          maxUses: 30,
          tokenType: 'access' 
        }
      }),

      prisma.jwtToken.create({
        data: {
          tokenHash: refreshTokenHash,
          userId: user.id,
          expiresAt: refreshExpiresAt,
          maxUses: 10,
          tokenType: 'refresh'
        }
      }),

      prisma.user.update({
        where: { id: user.id },
        data: {
          last_login: new Date()
        }
      })
    ]);

    await prisma.$transaction([
      prisma.jwtActivity.create({
        data: {
          tokenId: accessTokenRecord.id,
          action: 'creacion de token de acceso',
        }
      }),

      prisma.jwtActivity.create({
        data: {
          tokenId: refreshTokenRecord.id,
          action: 'creacion de refresh token',
        }
      }),

      prisma.jwtActivity.create({
        data: {
          tokenId: accessTokenRecord.id,
          action: 'login',
        }
      })
    ]);

    return res.status(200).json({
      accessToken,
      refreshToken,
      user:{
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err){
    return res.status(500).json({
      error: 'error al iniciar sesion',
      detail: err
    })
  }
}