import { useRouter } from 'next/router'
import styles from '../../styles/LinkNavbar.module.scss'

function ActiveLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push()
  }

  if(router.asPath === '/' ){
    return(
      <>
       <nav className={styles.navbarContainer}>
        <a href="/" className={styles.active}>
          PROFILE
        </a>
        <a href="/Works" className={ styles.default}
         >
          WORKS
        </a>
      </nav>
      </>
    )
  }

  return (
    <>
    <nav className={styles.navbarContainer}>
      <a href="/" className={styles.default}>
        PROFILE
      </a>
      <a href="/Works" className={ styles.active}>
        WORKS
      </a>
    </nav>
    </>
  )
}

export default ActiveLink
