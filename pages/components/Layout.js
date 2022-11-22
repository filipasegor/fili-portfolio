import Image from 'next/image'
import {useState, useEffect, useCallback} from "react"
import { useRouter } from 'next/router'
import logo from '../../public/logo.svg'
import blacklogo from '../../public/black-logo.svg'
import styles from '../../styles/Layout.module.scss'
import Footer from "./Footer"
// import Suggested from "../Suggested"
import ActiveLink from "./LinkNavbar"
import Link from 'next/link'

export default function Layout(props) {
const router = useRouter()

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const isBreakpoint = useMediaQuery(768);

  const withBlackLogo = (
    <div className={router.asPath === "/" ? styles.body : ""}>
      <div className={styles.imgContainer}>
      <Link href="/">
      <a className={styles.logoWrapper}>
        <Image
         className={styles.logo}
         alt="logo"
         src={blacklogo}
       />
      </a>
      </Link>
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  const withWhiteLogo = (
    <div className={router.asPath === "/" ? styles.body : ""}>
      <div className={styles.imgContainer}>
        <Link href="/">
        <a className={styles.logoWrapper}>
          <Image
           className={styles.logo}
           alt="logo"
           src={logo}
         />
        </a>
        </Link>
      </div>
      <ActiveLink />
      {props.children}

      <Footer />
    </div>
  );

  const blackBg = (
    <div className={styles.body}>
      <div className={styles.imgContainer}>
      <Link href="/">
      <a className={styles.logoWrapper}>
        <Image
         className={styles.logo}
         alt="logo"
         src={logo}
       />
      </a>
      </Link>
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  if(router.asPath === "/Works"){
    return blackBg
  }
  if(router.asPath === "/" ){
    return withWhiteLogo
  }
  if(isBreakpoint){
    return withBlackLogo
  } else {
    return withWhiteLogo
  }
}
