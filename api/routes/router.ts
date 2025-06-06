import { Router } from "express";
import { getCurrentLocation } from "../controllers/location.controller.js";
import { authMiddleware } from "../middleware/auth.js";
import { createUser } from "../controllers/auth/register.controller.js";
import { getUser } from "../controllers/auth/login.controller.js";
import { signOut } from "../controllers/auth/logout.controller.js";
import { updateUsername } from "../controllers/user/updateUsername.controller.js";
import { updatePassword } from "../controllers/user/updatePassword.controller.js";
import { updateEmail } from "../controllers/user/updateEmail.controller.js";
import { updatePhoneNumber } from "../controllers/user/updatePhoneNumber.controller.js";
import { getUserData } from "../controllers/user/getUserData.controller.js";
import { assignDeviceToUser } from "../controllers/device/asignDeviceToUser.js";
import { markDeviceAsLost } from "../controllers/device/markDeviceToLost.js";
import { getUserDevices } from "../controllers/device/getUserDevices.js";
import { removeDeviceFromUser } from "../controllers/device/removeDeviceFromUser.js";
import { refreshToken } from "../middleware/refreshToken.js";
import { notFoundHandler } from '../controllers/error/notFound.controller.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger/swagger.json' with { type: "json" };

const router = Router();

router.get('/', (req, res) =>{
    res.send('API SECURITE')

})
//public routes
router.post('/register', createUser); 
router.post('/login', getUser); 

router.post('/signOut', authMiddleware, signOut); 
router.post('/assign', authMiddleware, assignDeviceToUser); 
router.patch('/:deviceId/lost', authMiddleware, markDeviceAsLost); 
router.get('/user/:userId/devices', authMiddleware, getUserDevices);  
router.delete('/:deviceId/delete', authMiddleware, removeDeviceFromUser); 
router.get('/:deviceId/location', authMiddleware, getCurrentLocation); 
router.patch('/user/:userId/username', authMiddleware, updateUsername); 
router.patch('/user/:userId/email', authMiddleware, updateEmail); 
router.patch('/user/:userId/phone-number', authMiddleware, updatePhoneNumber); 
router.patch('/user/:userId/password', authMiddleware, updatePassword); 
router.get('/user/:userId', authMiddleware, getUserData); 

router.post('/refresh-token', refreshToken); 

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument, {
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
  customJs: [
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
  ],
}));

// Admin endpoints
//! endpoints para administradores
//! agregar un endpoint para que un administrador pueda eliminar dispositivos
//! tambien obtener el numero de dispositivos activos, perdidos, apagados

// 404 handler - debe ir al final de todas las rutas
router.use(notFoundHandler);

export default router;