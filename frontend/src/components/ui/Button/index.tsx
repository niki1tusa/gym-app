import styles from './index.module.scss';
import cn from 'clsx';

interface BtnProps {
	children?: React.ReactNode;
	clickHandler?: () => void;
	disdabled?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'primary' | 'secondary' | 'outline';
	className?: string;
}
export const Button = ({ children, clickHandler, size = 'xl' }: BtnProps) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	);
};
