import { useAuth } from '../../hooks/useAuth'
import styles from './index.module.scss'

export const Header = ({backLink}:{backLink?: false}) => {
  const {isAuth} = useAuth()
  return (
    <header className={styles.header}>
    <button onClick={()=>{}}>
      { /* there should be ArrowLeft from lib react-icons*/}
    </button> 
      {/* user profile */}
      { /* there should be hamburger from lib react-icons*/}
    </header>
  )
}
