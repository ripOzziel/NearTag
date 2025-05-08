import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { userSchema } from '../schemas/user.schema.js';
import prisma from '../lib/prisma.js';

export const createUser = async (req: Request, res: Response): Promise<any> => {
  const validation = userSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({ error: validation.error.format() });
  }

  const { username, phone_number, email, password_u, creation_date } = validation.data;

  try {
    const hashedPassword = await bcrypt.hash(password_u, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        phone_number,
        email,
        creation_date,
        password_u: hashedPassword,
      },
    });

    return res.status(201).json(
      { id: newUser.id, 
        username, 
        phone_number, 
        email, 
        creation_date });
  } catch (err) {
    return res.status(500).json({ error: 'Error al crear usuario', detail: err });
  }
};
