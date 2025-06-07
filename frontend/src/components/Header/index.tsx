import { useAuth } from '../../hooks/useAuth'
import { Hamburger } from '../Hamburger';
import styles from './index.module.scss'
import { RiArrowLeftSLine } from "react-icons/ri";



export const Header = ({backLink}:{backLink?: false}) => {
  const {isAuth} = useAuth()
  return (
    <header className={styles.header}>
    <button onClick={()=>{}}>
      <RiArrowLeftSLine color='white' size={30}/>
    </button> 
      {/* user profile */}
			<Hamburger/>
    </header>
  )
}
