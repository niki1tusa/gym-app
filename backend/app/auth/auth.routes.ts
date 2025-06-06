import express from 'express';
import { authUser } from './auth.controller';
import { registerUser } from './register.controller';

const router = express.Router();

router.route('/login').post(authUser)
router.route('/register').post(registerUser)

export default router;