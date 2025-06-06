import asyncHandler from 'express-async-handler';
import { prisma } from '../../lib/ctx';

// @desc    Get workout log
// @route   GET /api/workouts/log/:id
// @access  Private

export const getWorkoutLog = asyncHandler(async (req, res) => {
	const id = parseInt(req.params.id, 10);

	if (isNaN(id)) {
		res.status(400);
		throw new Error('Invalid workout log ID');
	}

	const workoutLog = await prisma.workoutLog.findUnique({
		where: { id },
		include: {
			workout: {
				include: {
					exercises: true
				}
			},
			exerciseLogs: {
				orderBy: {
					id: 'asc'
				},
				include: {
					exercise: true
				}
			}
		}
	});

	if (!workoutLog) {
		res.status(404);
		throw new Error('Workout not found!');
	}

	const randomMinutes = Math.ceil(workoutLog.exercise.length * 2);
	res.json({ workoutLog, randomMinutes });
});
