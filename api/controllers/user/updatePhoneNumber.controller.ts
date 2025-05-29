import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import prisma from '../../lib/prisma.js';
import { z } from 'zod';

export const updatePhoneNumber = async (req: Request, res: Response): Promise<any> => {
    const phoneNumberSchema = z.object({
        newPhoneNumber: z.string().max(15),
        password: z.string().min(8)
      });

    const { userId } = req.params;
    const authId = req.user?.id;
    const tokenId = req.tokenId!;
  
    const parse = phoneNumberSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Datos inválidos', detail: parse.error.format() });
    }
    
    const { newPhoneNumber, password } = parse.data;
    try {
        if(userId !== authId){
            return res.status(403).json({ error: 'No tiene permisos para modificar el numero de celular' });
        }
      
        const user = await prisma.user.findUnique({where: {id: userId}});
        if(!user){
          return res.status(404).json({ error: 'este usuario no existe' });
        }
        
        const phoneTaken = await prisma.user.findFirst({ where: { phone_number: newPhoneNumber } });
        if (phoneTaken && phoneTaken.id !== userId) {
          return res.status(409).json({ error: 'Este numero de telefono ya está en uso por otra cuenta' });
        }

        const passwordMatches = await bcrypt.compare(password, user.password_u);
        if (!passwordMatches) {
          return res.status(401).json({ error: 'contraseña incorrecta' });
        }

        await prisma.jwtActivity.create({
          data:{
            tokenId: tokenId,
            action: 'actualizacion de numero de telefono del usuario'
          }
        })

        await prisma.user.update({
            where: { id: userId },
            data: {
              phone_number: newPhoneNumber,
              update_date: new Date()
            }
        });

        return res.status(200).json({ message: 'numero de telefono actualizado correctamente' });
    } catch (err){
        return res.status(500).json({
            error: 'error al actualizar el numero de telefono',
            detail: err
          });
    }
}