import { useNavigate } from 'react-router';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/Button';
import styles from './index.module.scss';
import { useAuth } from '../../hooks/useAuth';
export const HomePage = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();
	return (
		<Layout bgImage='../../../images/home-arnold-bg.jpg'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'SignIn'}
			</Button>
			<h1 className={styles.heading}>Just do it!</h1>
		</Layout>
	);
};
