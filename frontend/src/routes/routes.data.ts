import { AuthPage } from '../screens/AuthPage';
import { HomePage } from '../screens/HomePage';
import { NewWorkoutPage } from '../screens/NewWorkoutPage';
import { ProfilePage } from '../screens/ProfilePage';

export const routes = [
	{ path: '/', component: HomePage, auth: false },
	{ path: '/auth', component: AuthPage, auth: false },
	{ path: '/profile', component: ProfilePage, auth: false },
	{ path: '/new-workout', component: NewWorkoutPage, auth: true },
	// {
	// 	path: '/new-exercise',

	// 	component: NewExercise,
	// 	isAuth: true
	// },

	// {
	// 	path: '/workout/:id',

	// 	component: SingleWorkout,
	// 	auth: true
	// },
	// {
	// 	path: '/workouts',

	// 	component: ListWorkouts,
	// 	isAuth: true
	// },
	// {
	// 	path: '/exercise/:id',

	// 	component: SingleExercise,
	// 	isAuth: true
	// }
];
