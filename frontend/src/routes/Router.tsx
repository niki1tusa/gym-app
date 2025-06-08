import { useAuth } from '../hooks/useAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes.data';
import { NotFoundPage } from '../screens/NotFoundPage';
import { AppContext } from '../context';



export const Router = () => {
	const { isAuth } = useAuth();
	return (
		<AppContext.Provider value=''>
					<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return false;
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					);
				})}
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
		</AppContext.Provider>

	);
};
