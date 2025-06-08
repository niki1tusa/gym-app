import { AuthPage } from '../screens/AuthPage';
import { HomePage } from '../screens/HomePage';
import { ProfilePage } from '../screens/ProfilePage';

export const routes = [
	{ path: '/', component: HomePage, auth: false },
	{ path: '/auth', component: AuthPage, auth: false },
	{ path: '/profile', component: ProfilePage, auth: false },
];
