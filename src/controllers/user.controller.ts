import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { userSchema } from '../schemas/user.schema.js';
import prisma from '../lib/prisma.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const createUser = async (req: Request, res: Response): Promise<any> => {
  const validation = userSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.format() });
  }

  const { username, phone_number, email, password_u } = validation.data;
  const uniqueEmail = await prisma.user.findUnique({
    where: { email },
  });

  if(uniqueEmail) return res.status(401).json({
    error: 'este email ya esta registrado en otra cuenta'
  });
  
  try {
    const hashedPassword = await bcrypt.hash(password_u, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        phone_number,
        email,
        creation_date: new Date(),
        password_u: hashedPassword,
      },
    });

    return res.status(201).json({ 
        id: newUser.id, 
        username, 
        phone_number, 
        email, 
        creation_date: new Date() 
      });
  } catch (err) {
    return res.status(500).json({ error: 'Error al crear usuario', detail: err });
  }
};

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

    const token = jwt.sign({
      id: user.id,
      username: user.username,
      email: user.email
    }, SECRET_KEY);

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
          jwt_hash: "" // mejor que null??
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
