import { Router } from 'express';
import { getCurrentLocation } from '../controllers/location.controller';

const router = Router();

// Ruta para obtener la ubicación actual de un dispositivo
router.get('/:deviceId/location', async (req, res) =>{
    try {
            const result = await getCurrentLocation(req, res);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
        }

});

export default router;