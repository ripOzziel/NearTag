import { z } from "zod";
import { Request, Response, NextFunction } from "express";

// USERS
export const userSchema = z.object({
  id: z.string().uuid().optional(),
  username: z.string().min(4).max(30),
  phone_number: z.string().max(15),
  email: z.string().email(),
  password_u: z.string().min(8).max(60),
  device_id: z.string().uuid().nullable().optional(),
  creation_date: z.coerce.date(),
  update_date: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).optional()
});

const userIdSchema = z.object({
  userId: z.string().uuid(),
});

export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
  const validation = userIdSchema.safeParse(req.params);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.format() });
  }
  next();
};
