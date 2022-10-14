import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../../public/logo.svg'
import blacklogo from '../../public/black-logo.svg'
import styles from '../../styles/Layout.module.scss'
import Footer from "./Footer"
import ActiveLink from "./LinkNavbar"

export default function Layout(props) {
const router = useRouter()

  return (
    <>
      <div className={router.asPath === "/" ? styles.body : ""}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.logo}
           alt="logo"
           src={router.asPath === "/Works" ? blacklogo : logo}
           layout="intrinsic"
           width={167}
           height={59}
         />
        </div>
        <ActiveLink />
        {props.children}
        <Footer />
      </div>
    </>
  )
}
