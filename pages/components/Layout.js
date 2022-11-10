import Image from 'next/image'
import {useState, useEffect} from "react"
import { useRouter } from 'next/router'
import logo from '../../public/logo.svg'
import blacklogo from '../../public/black-logo.svg'
import styles from '../../styles/Layout.module.scss'
import Footer from "./Footer"
import ActiveLink from "./LinkNavbar"

export default function Layout(props) {
const router = useRouter()

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  if(typeof window !== "undefined" && router.asPath !== "/"){
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
  }
});

function detectWindowSize() {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
 }


if(typeof window !== "undefined"){
  window.onresize = detectWindowSize;
}

  const withBlackLogo = (
    <div className={router.asPath === "/" ? styles.body : ""}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.logo}
         alt="logo"
         src={blacklogo}
       />
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  const withWhiteLogo = (
    <div className={router.asPath === "/" ? styles.body : ""}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.logo}
         alt="logo"
         src={logo}
       />
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  if(router.asPath === "/Works"){
    return withBlackLogo
  }

  if(isMobile){

    return withBlackLogo

  }
  if(router.asPath === "/" ){
    return withWhiteLogo

  } else {
    return withWhiteLogo
  }
}
