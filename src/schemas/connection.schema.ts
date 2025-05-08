import { z } from "zod";

// CONNECTION
export const connectionSchema = z.object({
    id_usuario: z.string().uuid(),
    nombre_usuario_invitado: z.string(),
    id_device: z.string().uuid(),
    type_connection: z.string().max(10)
  });