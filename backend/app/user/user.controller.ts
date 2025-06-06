import asyncHandler from 'express-async-handler';
import { prisma } from '../lib/ctx';
import { userFields } from '../lib/user.utils';
import { Request, Response } from 'express';

// @desc get user profile
// @route GET /api/users/profile
// @access Private

export const getUserProfile = asyncHandler(async (req, res, next) => {
	const id = req.user.id;
	const user = await prisma.user.findUnique({
		where: {
			id
		},
		select: userFields
	});
	const countExerTime = await prisma.exerciseLog.count({
		where: {
			userId: id,
			isCompleted: true
		}
	});
	const kgs = await prisma.exerciseTime.aggregate({
		where: {
			exerciseLog: {
				userId: id
			},
			isCompleted: true
		},
		_sum: {
			weight: true
		}
	});
	const workouts = await prisma.workoutLog.count({
		where: {
			userId: id,
			isCompleted: true
		}
	});
	res.json({
		...user,
		statistics: [
			{
				label: 'Minutes',
				value: Math.ceil(countExerTime * 2)
			},
			{
				label: 'Workouts',
				value: workouts
			},
			{
				label: 'Kgs',
				value: kgs._sum.weight || 0
			}
		]
	});
});
