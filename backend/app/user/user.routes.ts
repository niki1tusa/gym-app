import express from 'express';
import { getUserProfile } from './user.controller';
import { protect } from '../middleware/auth.middleware';


const router = express.Router();

router.route('/profile').get(protect, getUserProfile)


export default router;