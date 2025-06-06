import asyncHandler from 'express-async-handler';
import { prisma } from '../lib/ctx';

// @desc create new workout
// @route  post api/workouts
// @access private

export const createNewWorkout = asyncHandler(async (req, res, next) => {
	const { name, exerciseIds } = req.body;

	const workout = await prisma.workout.create({
		data: {
			name,
			exercises: {
				connect: exerciseIds.map((id: any) => ({ id: +id }))
			}
		}
	});
	res.json(workout);
});
// @desc get all workout
// @route  get api/workouts
// @access private
export const getWorkout = asyncHandler(async (req, res, next) => {
	const workout = await prisma.workout.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			exercises: true
		}
	});
		if (!workout) {
		res.status(404)
		throw new Error('Workout not found!')
	}
	const randomMinutes = Math.ceil(workout.exercises.length * 2);
	res.json({ ...workout, randomMinutes });
});
export const getWorkouts = asyncHandler(async (req, res, next) => {
	const workout = await prisma.workout.findMany({
		orderBy: {
			createdAt: 'desc'
		},
				include: {
			exercises: true
		}
	});
	res.json(workout);
});

// @desc update workout
// @route  put api/workout/:id
// @access private

export const updateWorkout = asyncHandler(async (req, res, next) => {
	const { name, exerciseIds } = req.body;
	try {
		const workout = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				exercises: {
				set: exerciseIds.map((id: any) => ({ id: +id }))

				}
			}
		});
		res.json(workout);
	} catch (error) {
		res.status(404);
		throw new Error('Workouts is not found :(');
	}
});

// @desc delete workout
// @route  delete api/workout/:id
// @access private
export const deleteWorkout = asyncHandler(async (req, res, next) => {
	try {
		 await prisma.workout.delete({
			where: {
				id: +req.params.id
			}
		});
		res.json('workout deleted is successfuly');
	} catch (error) {
		res.status(404);
		throw new Error('Workouts is not found :(');
	}
});
