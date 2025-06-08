import { menu } from '../menu.data';
import styles from '../index.module.scss';
import cn from 'clsx';
import { Link } from 'react-router';

export const Menu = ({ isShow }) => {
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, i) => (
					<Link to={item.link} key={`${i}-${item.title}`}>
						<li>{item.title}</li>
					</Link>
				))}
				<li>
					<button onClick={() => {}}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};
