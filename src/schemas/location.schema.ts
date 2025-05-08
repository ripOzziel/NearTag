import { z } from "zod";

// LOCATIONS
export const locationSchema = z.object({
    id_device: z.string().uuid(),
    longitude: z.number(),
    latitude: z.number(),
    date_l: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
  });