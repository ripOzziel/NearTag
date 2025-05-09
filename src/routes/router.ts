import { Router } from "express";
import { 
        assignDeviceToUser, 
        getUserDevices, 
        markDeviceAsLost, 
        removeDeviceFromUser
    } from "../controllers/device.controller.js";
    
import { createUser, getUser, signOut } from "../controllers/user.controller.js";
import { getCurrentLocation } from "../controllers/location.controller.js";
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = Router();

// Rutas públicas
router.post('/', createUser);
router.post('/login', getUser);

// Rutas protegidas
router.use((req, res, next) => {
    authMiddleware(req, res, next).catch(error => {
        return res.status(500).json({ 
            error: 'Error en la autenticación',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    });
});

// Rutas que requieren autenticación
router.post('/signOut', signOut);
router.post('/assign', assignDeviceToUser);
router.patch('/:deviceId/lost', markDeviceAsLost);
router.get('/user/:userId', getUserDevices);
router.delete('/:deviceId/delete', removeDeviceFromUser);
router.get('/:deviceId/location', getCurrentLocation);

export default router;