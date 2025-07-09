import express from 'express';
import { registerController, loginControler } from '../controllers/userController.js';


const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginControler);






export default router;

