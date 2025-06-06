import asyncHandler from 'express-async-handler';
import { prisma } from '../../lib/ctx';
import { addPrevValues } from './add-prev-utils';

// @desc    get exerciseLog
// @route   GET /api/exercises/log/:id
// @access  Private
export const getExerciseLog = asyncHandler(async (req, res) => {
	const exerciseLog = await prisma.exerciseLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercise: true,
			times: {
                orderBy: {
                    id: 'asc'
                }
            }
		}
	});
	if (!exerciseLog) {
		res.status(404);
		throw new Error('Workout not found!');
	}
	const prevExerciseLog = await prisma.exerciseLog.findFirst({
		where: {
			id: exerciseLog.id,
			isCompleted: true
		},
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			times: true
		}
	});

	const newTimes = addPrevValues(exerciseLog, prevExerciseLog);
	res.json({ ...exerciseLog, times: newTimes });
});




