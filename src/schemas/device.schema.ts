import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// DEVICES
export const deviceSchema = z.object({
    id_device: z.string().uuid().optional(),
    name_device: z.string().max(20),
    status_d: z.string().max(1),
    update_date: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/).optional()
  });

const deviceIdSchema = z.object({
  deviceId: z.string().uuid(),
});

export const validateDeviceId = (req: Request, res: Response, next: NextFunction) => {
  const validation = deviceIdSchema.safeParse(req.params);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.format() });
  }
  next();
};

const removeDeviceSchema = z.object({
  userId: z.string().uuid(),
  deviceId: z.string().uuid(),
});

export const validateRemoveDevice = (req: Request, res: Response, next: NextFunction) => {
  const validation = removeDeviceSchema.safeParse(req.params);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.format() });
  }
  next();
};
