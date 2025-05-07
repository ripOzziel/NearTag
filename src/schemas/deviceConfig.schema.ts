import { z } from "zod";

// DEVICE CONFIGURATION
export const deviceConfigSchema = z.object({
    id_device: z.string().uuid(),
    device_name: z.string().max(25),
    mac_address: z.string().regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/).max(20),
    channel: z.number().int()
  });