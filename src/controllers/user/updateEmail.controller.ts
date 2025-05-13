import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import prisma from '../../lib/prisma.js';
import { z } from 'zod';

export const updateEmail = async (req: Request, res: Response): Promise<any> => {
    const emailSchema = z.object({
        newEmail: z.string().email(),
        password: z.string().min(8)
      });

    const { userId } = req.params;
    const authId = req.user?.id;
  
    const parse = emailSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Datos inválidos', detail: parse.error.format() });
    }
    
    const { newEmail, password } = parse.data;
    try {
        if(userId !== authId){
            return res.status(403).json({ error: 'No tiene permisos para modificar la contraseña' });
        }
      
        const user = await prisma.user.findUnique({where: {id: userId}});
        if(!user){
          return res.status(404).json({ error: 'este usuario no existe' });
        }
        
        const emailTaken = await prisma.user.findUnique({ where: { email: newEmail } });
        if (emailTaken && emailTaken.id !== userId) {
          return res.status(409).json({ error: 'Este correo ya está en uso por otra cuenta' });
        }

        const passwordMatches = await bcrypt.compare(password, user.password_u);
        if (!passwordMatches) {
          return res.status(401).json({ error: 'La contraseña actual es incorrecta' });
        }

        await prisma.user.update({
            where: { id: userId },
            data: {
              email: newEmail,
              update_date: new Date()
            }
        });

        return res.status(200).json({ message: 'correo actualizado correctamente' });
    } catch (err){
        return res.status(500).json({
            error: 'error al actualizar el email',
            detail: err
          });
    }
}