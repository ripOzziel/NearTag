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