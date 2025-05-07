import { z } from "zod";

// RECORD
export const recordSchema = z.object({
    id_device: z.string().uuid(),
    longitude: z.number(),
    latitude: z.number(),
    date_r: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
  });