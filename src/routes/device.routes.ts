import { Router } from 'express';
import { assignDeviceToUser, markDeviceAsLost, getUserDevices } from '../controllers/device.controller';

const router = Router();

// Ruta para asignar un dispositivo a un usuario
router.post('/assign', async (req, res) => {
    try {
        const result = await assignDeviceToUser(req, res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
    }
});

// Ruta para marcar un dispositivo como perdido
router.patch('/:deviceId/lost', async (req, res) => {
    try {
        const result = await markDeviceAsLost(req, res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
    }
});

// Ruta para obtener los dispositivos asociados a un usuario
router.get('/user/:userId', async (req, res) => {
    try {
        const result = await getUserDevices(req, res);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: (error as Error).message });
    }
});

export default router;