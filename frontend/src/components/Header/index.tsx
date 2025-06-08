import  { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth'
import { Hamburger } from '../Hamburger';
import styles from './index.module.scss'
import { RiArrowLeftSLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


export const Header = ({backLink = '/'}) => {
  const {isAuth} = useAuth()
  const navigate = useNavigate()
  const {pathname} = useLocation()
  return (
    <header className={styles.header}>
{pathname !== '/'?    <button onClick={()=>navigate(backLink)}>
      <RiArrowLeftSLine color='white' size={30}/>
    </button>:  <button onClick={()=>navigate('/profile')}><CgProfile color='white' size={30}/></button>}
      
		<Hamburger/>
    </header>
  )
}
