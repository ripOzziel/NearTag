import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
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

    //! PONERLE TIEMPO DE EXPIRACION
    //! PONERLE UN LIMITE DE PETICIONES A CADA TOKEN
    const token = jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email,
      tokenVersion: user.jwt_version
    }, SECRET_KEY); //unix time 

    const jwtHash = await bcrypt.hash(token, 10);

    await prisma.user.update({
      where: {email},
      data: {
        jwt_hash: jwtHash
      }
    });

    return res.status(201).json({token});
  } catch (err){
    return res.status(500).json({
      error: 'error al iniciar sesion',
      detail: err
    })
  }
}