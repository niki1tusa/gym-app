import express from 'express';
import {
	createNewWorkout,
	getWorkout,
	getWorkouts,
	updateWorkout,
	deleteWorkout
} from './workout.controller';
import { protect } from '../middleware/auth.middleware';
import { createNewWorkoutLog } from './log/create-workout-log.controller';
import { getWorkoutLog } from './log/get-workout-log.controller';
import { completeWorkoutLog } from './log/update-workout-log.controller';

const router = express.Router();

router.route('/').post(protect, createNewWorkout).get(protect, getWorkouts);

router
	.route('/:id')
	.get(protect, getWorkout)
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout);


router
	.route('/log/:id')
	.post(protect, createNewWorkoutLog)
	.get(protect, getWorkoutLog)

router.route('/log/complete/:id').patch(protect, completeWorkoutLog)


export default router;
