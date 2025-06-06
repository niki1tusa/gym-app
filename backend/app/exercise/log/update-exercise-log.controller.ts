import asyncHandler from 'express-async-handler';
import { prisma } from '../../lib/ctx';

// @desc update exercise time
// @route  put api/exercise/log/time/:id
// @access private

export const updateExerciseLogTime = asyncHandler(async (req, res, next) => {
    const { weight, repeat, isCompleted} = req.body;
    try {
        const exerciseLogTime = await prisma.exerciseTime.update({
            where: {
                id: +req.params.id
            },
            data: {
                weight,
                repeat,
                isCompleted
            }
        });
        res.json(exerciseLogTime);
    } catch (error) {
        res.status(404);
        throw new Error('Exercises log time not found :(');
    }
});

// @desc update status of complete exercise log
// @route PATCH api/exercise/log/complete/:id
// @access private

export const completeExerciseLog = asyncHandler(async (req, res, next) => {
    const {isCompleted} = req.body
        try {
        const exerciseLogComplete = await prisma.exerciseLog.update({
            where: {
                id: +req.params.id
            },
            data: {
                isCompleted: true
            },
            include: {
                exercise: true,
                workoutLog: true
            }
        });
        res.json(exerciseLogComplete);
    } catch (error) {
        res.status(404);
        throw new Error('Exercises log complete not found :(');
    }
})