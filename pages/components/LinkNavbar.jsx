import Link from 'next/link'
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
        <Link href="/">
          <a className={styles.active}>PROFILE</a>
        </Link>
        <Link href="/Works">
          <a className={styles.default}>WORKS</a>
        </Link>
      </nav>
      </>
    )
  }

  return (
    <>
    <nav className={styles.navbarContainer}>
      <Link href="/">
        <a className={styles.default}>PROFILE</a>
      </Link>
      <Link href="/Works">
        <a className={ styles.active}>WORKS</a>
      </Link>
    </nav>
    </>
  )
}

export default ActiveLink
