import { Request, Response } from 'express';
import { z } from 'zod';
import prisma from '../../lib/prisma.js';

export const updateUsername = async (req: Request, res: Response): Promise<any> => {
    const { userId } = req.params;
    const authId = req.user?.id;
    const schema = z.object({
      newUsername: z.string().min(3).max(30),
    });
  
  
    const validation = schema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.format() });
    }
  
    const { newUsername } = validation.data;
  
    try{
      const user = await prisma.user.findUnique({where: {id: userId}});
      if(!user){
        return res.status(404).json({ error: 'este usuario no existe' });
      }
  
      if(user.id !== authId){
        return res.status(403).json({ error: 'No tiene permisos para acceder a la ubicación de este dispositivo' });
      }
  
      await prisma.user.update({
        where: {id: userId},
        data:{
          username: newUsername,
          update_date: new Date()
        }
      });
  
      return res.status(200).json({message: 'username actuzalido correctamente'})
    }catch (err){
      return res.status(500).json({
        error: 'error al cambiar el nombre de usuario',
        detail: err
      });
    }
}
  