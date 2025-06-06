import asyncHandler from 'express-async-handler';
import { prisma } from '../lib/ctx';

// @desc create new exercise
// @route  post api/exercise
// @access private

export const createNewExercise = asyncHandler(async (req, res, next) => {
	const { name, times, iconPath } = req.body;

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	});
	res.json(exercise);
});
// @desc get all exercise
// @route  get api/exercise
// @access private
export const getAllExercise = asyncHandler(async (req, res, next) => {
	const exercise = await prisma.exercise.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
	res.json(exercise);
});

// @desc update exercise
// @route  put api/exercise/:id
// @access private

export const updateExercise = asyncHandler(async (req, res, next) => {
	const { name, times, iconPath } = req.body;
	try {
		const exercise = await prisma.exercise.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				times,
				iconPath
			}
		});
		res.json(exercise);
	} catch (error) {
		res.status(404);
		throw new Error('Exercises is not found :(');
	}
});

// @desc delete exercise
// @route  delete api/exercise/:id
// @access private
export const deleteExercise = asyncHandler(async (req, res, next) => {
	try {
		 await prisma.exercise.delete({
			where: {
				id: +req.params.id
			}
		});
		res.json('exercise deleted is successfuly');
	} catch (error) {
		res.status(404);
		throw new Error('Exercises is not found :(');
	}
});
