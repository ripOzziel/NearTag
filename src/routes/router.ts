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

const router = Router();

router.post('/', createUser);
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


//! endpoints para administradores
//! agregar un endpoint para que un administrador pueda eliminar dispositivos
//! tambien obtener el numero de dispositivos activos, perdidos, apagados


export default router;