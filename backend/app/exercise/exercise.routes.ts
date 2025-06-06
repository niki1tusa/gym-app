import express from 'express';
import {
	createNewExercise,
	getAllExercise,
	updateExercise,
	deleteExercise
} from './exercise.controller';
import { protect } from '../middleware/auth.middleware';
import { createNewExerciseLog } from './log/create-exercise-log.controller';
import { getExerciseLog } from './log/get-exercise-log.controller';
import { completeExerciseLog, updateExerciseLogTime } from './log/update-exercise-log.controller';

const router = express.Router();

router.route('/').post(protect, createNewExercise).get(protect, getAllExercise);

router.route('/:id').put(protect, updateExercise).delete(protect, deleteExercise);

router.route('/log/:id').post(protect, createNewExerciseLog ).get(protect, getExerciseLog)

router.route('/log/time/:id').put(protect, updateExerciseLogTime)

router.route('/log/complete/:id').patch(protect, completeExerciseLog)

export default router;
