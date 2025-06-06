import asyncHandler from 'express-async-handler';
import { prisma } from '../../lib/ctx';

// @desc    Create new exerciseLog
// @route   POST /api/exercises/log/:id
// @access  Private
export const createNewExerciseLog = asyncHandler(async (req, res) => {
	const exerciseId = +req.params.id;
    const { times } = req.body || {};

	let timesDefault = [];
	for (let i = 0; i < times; i++) {
		timesDefault.push({
			weight: 0,
			repeat: 0
		});
	}

	const exerciseLog = await prisma.exerciseLog.create({
		data: {
			user: {
				connect: {
					id: req.user.id
				}
			},
			exercise: {
				connect: {
					id: exerciseId
				}
			},
			times: {
				createMany: {
					data: timesDefault
				}
			}
		},
        include:{
            times: true
        }
	});
	res.json(exerciseLog);
});
