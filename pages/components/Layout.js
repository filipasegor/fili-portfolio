import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import logo from "../../public/logo.svg";
import blacklogo from "../../public/black-logo.svg";
import styles from "../../styles/Layout.module.scss";
import Footer from "./main/Footer/Footer";
// import Suggested from "../Suggested"
import ActiveLink from "./main/LinkNavbar/LinkNavbar";
import Link from "next/link";
import { useRouter } from "next/router";

import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/locales";

export default function Layout(props) {
  let router = useRouter();

  const languages = [
    { name: "EN", code: LOCALES.EN },
    { name: "RU", code: LOCALES.RU },
  ];

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
        <Link href="/" className={styles.logoWrapper}>
          <Image className={styles.logo} alt="logo" src={blacklogo} />
        </Link>
        <div>
          {/* Language switch dropdown */}
          <select
            className={styles.select}
            onChange={props.handleChange}
            value={props.currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  const withWhiteLogo = (
    <div className={router.asPath === "/" ? styles.body : ""}>
      <div className={styles.imgContainer}>
        <Link href="/" className={styles.logoWrapper}>
          <Image className={styles.logo} alt="logo" src={logo} />
        </Link>
        <div>
          {/* Language switch dropdown here */}
          <select
            className={styles.select}
            onChange={props.handleChange}
            value={props.currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  const blackBg = (
    <div className={styles.body}>
      <div className={styles.imgContainer}>
        <Link href="/" className={styles.logoWrapper}>
          <Image className={styles.logo} alt="logo" src={logo} />
        </Link>
        <div>
          {/* Language switch dropdown here */}
          <select
            className={styles.select}
            onChange={props.handleChange}
            value={props.currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ActiveLink />
      {props.children}
      <Footer />
    </div>
  );

  if (router.asPath === "/Works") {
    return blackBg;
  }
  if (router.asPath === "/About") {
    return blackBg;
  }
  if (router.asPath === "/") {
    return withWhiteLogo;
  }
  if (isBreakpoint) {
    return withBlackLogo;
  } else {
    return withWhiteLogo;
  }
}
