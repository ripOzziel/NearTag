import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import prisma from '../../lib/prisma.js';
import { userSchema } from '../../schemas/user.schema.js';
dotenv.config();


export const createUser = async (req: Request, res: Response): Promise<any> => {
    const validation = userSchema.safeParse(req.body);
  
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.format() });
    }
  
    const { username, phone_number, email, password_u } = validation.data;
    
    try {
      const uniqueEmail = await prisma.user.findUnique({
        where: { email },
      });
    
      if(uniqueEmail) return res.status(401).json({
        error: 'este email ya esta registrado en otra cuenta'
      });
      const hashedPassword = await bcrypt.hash(password_u, 10);
      
      await prisma.$transaction([
        prisma.user.create({
          data: {
            username: username,
            phone_number: phone_number,
            email: email,
            password_u: hashedPassword,
            creation_date: new Date(),
            jwt_version: 0
          }
        })
      ])

      return res.status(201).json({ message: 'usuario creado con exito'});
    } catch (err) {
      return res.status(500).json({ error: 'Error al crear usuario', detail: err });
    }
  };