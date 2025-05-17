import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import prisma from '../../lib/prisma.js';
import { z } from 'zod';
dotenv.config();

export const updatePassword = async (req: Request, res: Response): Promise<any> => {
    const passwordSchema = z.object({
      currentPassword: z.string().min(8),
      newPassword: z.string().min(8, 'La nueva contraseña debe tener al menos 8 caracteres'),
    });
  
    const { userId } = req.params;
    const authId = req.user?.id;
    const tokenId = req.tokenId!;
  
    const parse = passwordSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Datos inválidos', detail: parse.error.format() });
    }
    
    const { currentPassword, newPassword } = parse.data;
    try{
      if(userId !== authId){
        return res.status(403).json({ error: 'No tiene permisos para modificar la contraseña' });
      }
  
      const user = await prisma.user.findUnique({where: {id: userId}});
      if(!user){
        return res.status(404).json({ error: 'este usuario no existe' });
      }
  
      const passwordMatches = await bcrypt.compare(currentPassword, user.password_u);
      if (!passwordMatches) {
        return res.status(401).json({ error: 'La contraseña actual es incorrecta' });
      }
      
      await prisma.jwtActivity.create({
        data:{
          tokenId: tokenId,
          action: 'actualizacion de contraseña del usuario'
        }
      })

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { id: userId },
        data: {
          password_u: hashedPassword,
          update_date: new Date()
        }
      });
  
      return res.status(200).json({ message: 'contraseña actualizada correctamente' });
    }catch(err){
      return res.status(500).json({
        error: 'error al actualizar la contraseña',
        detail: err
      });
    }
  }