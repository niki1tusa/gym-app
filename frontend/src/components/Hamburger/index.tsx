import styles from './index.module.scss';
import { FaRegWindowClose } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { Menu } from './Menu';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
export const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false);
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{!isShow ?
					<CiMenuFries color='white' size={30}/>
				:	<FaRegWindowClose color='white' size={30}/>}
			</button>
			<Menu isShow={isShow} />
		</div>
	);
};
