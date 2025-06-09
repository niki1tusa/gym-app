import { env } from './app/lib/env';
import express from 'express';
import cors from 'cors';
import authRoute from './app/auth/auth.routes';
import userRoute from './app/user/user.routes';
import 'colors';
import morgan from 'morgan';
import { createAppContext, prisma } from './app/lib/ctx';
import { errorHandler, notFound } from './app/middleware/error.middleware';
import exercisesRoute from './app/exercise/exercise.routes';
import workoutRoute from './app/workout/workout.routes';
import path from 'path';

const app = express();
const PORT = env.PORT;
// const ctx = createAppContext();
void (async () => {
	if (env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}
	app.use(cors());

	app.use(express.json());

	const __dirname = path.resolve();
	app.use('/uploads', express.static(path.join(__dirname, '/uploads/')));

	app.use('/api/auth', authRoute);

	app.use('/api/users', userRoute);
	app.use('/api/exercises', exercisesRoute);
	app.use('/api/workouts', workoutRoute);
	app.use(notFound);
	app.use(errorHandler);

	app.listen(PORT, () => {
		console.log(`App is running on port ${PORT}`.blue.bold);
	});
})()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
