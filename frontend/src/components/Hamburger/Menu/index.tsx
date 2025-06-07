import { menu } from '../menu.data';
import styles from '../index.module.scss';
import cn from 'clsx';

export const Menu = ({ isShow }) => {
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, i) => (
					<li key={`${i}-${item.title}`}>{item.title}</li>
				))}
                <li>
                    <button onClick={()=>{}}>Logout</button>
                </li>
			</ul>
		</nav>
	);
};
