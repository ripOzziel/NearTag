import { Router } from "express";
import { 
        assignDeviceToUser, 
        getUserDevices, 
        markDeviceAsLost 
    } from "../controllers/device.controller.js";

import { createUser, getUser } from "../controllers/user.controller.js";
import { getCurrentLocation } from "../controllers/location.controller.js";

const router = Router();

router.post('/', createUser);
router.post('/login', getUser);
router.post('/assign', assignDeviceToUser);
router.patch('/:deviceId/lost', markDeviceAsLost); // Ruta para marcar un dispositivo como perdido
router.get('/user/:userId', getUserDevices); // Ruta para obtener los dispositivos asociados a un usuario
router.get('/:deviceId/location', getCurrentLocation);


export default router;