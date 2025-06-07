import { useState } from 'react';
import styles from './index.module.scss';
import { FaRegWindowClose } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { Menu } from './Menu';
export const Hamburger = () => {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{!isShow ? <CiMenuFries color='white' size={30}/> : <FaRegWindowClose color='white' size={30}/>}
			</button>
      <Menu isShow={isShow}/>
		</div>
	);
};
