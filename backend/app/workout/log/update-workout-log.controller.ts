import asyncHandler from 'express-async-handler';
import { prisma } from '../../lib/ctx';


// @desc update status of complete workout log
// @route PATCH api/workouts/log/complete/:id
// @access private

export const completeWorkoutLog = asyncHandler(async (req, res, next) => {
    const {isCompleted} = req.body
    const logId = +req.params.id
        try {
        const workoutLogComplete = await prisma.workoutLog.update({
            where: {
                id:logId 
            },
            data: {
                isCompleted: true
            }
        });
        res.json(workoutLogComplete);
    } catch (error) {
        res.status(404);
        throw new Error('Workouts log complete not found :(');
    }
})