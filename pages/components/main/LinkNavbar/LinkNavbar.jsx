import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { FormattedMessage } from "react-intl";

import linkArrow from "./LinkArrow.svg";

function ActiveLink({ children, href }) {
  const router = useRouter();

  if (router.asPath === "/") {
    return (
      <>
        <nav className={styles.navbarContainer}>
          <Link href="/" className={styles.active}>
            <FormattedMessage id="profile" />
          </Link>
          <Link href="/Works" className={styles.default}>
            <FormattedMessage id="works" />
          </Link>
          <Link href="/About" className={styles.default}>
            <FormattedMessage id="about" />
          </Link>
        </nav>
      </>
    );
  }

  if (router.asPath === "/Works") {
    return (
      <>
        <nav className={styles.navbarContainer}>
          <Link href="/" className={styles.default}>
            <FormattedMessage id="profile" />
          </Link>
          <Link href="/Works" className={styles.active}>
            <FormattedMessage id="works" />
          </Link>
          <Link href="/About" className={styles.default}>
            <FormattedMessage id="about" />
          </Link>
        </nav>
      </>
    );
  }

  if (router.asPath === "/About") {
    return (
      <>
        <nav className={styles.navbarContainer}>
          <Link href="/" className={styles.default}>
            <FormattedMessage id="profile" />
          </Link>
          <Link href="/Works" className={styles.default}>
            <FormattedMessage id="works" />
          </Link>
          <Link href="/About" className={styles.active}>
            <FormattedMessage id="about" />
          </Link>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className={styles.navbarContainer}>
        <Link href="/Works" className={styles.ArrowLink}>
          <div className={styles.ImageWrapper}>
            <Image
              className={styles.Image}
              alt={linkArrow}
              src={linkArrow}
              objectFit="scale-down"
              width={31}
              height={17}
            />
          </div>
        </Link>
        <div></div>
        <Link href="/" className={styles.default}>
          <FormattedMessage id="profile" />
        </Link>
        <Link href="/Works" className={styles.default}>
          <FormattedMessage id="works" />
        </Link>
        <Link href="/About" className={styles.default}>
          <FormattedMessage id="about" />
        </Link>
      </nav>
    </>
  );
}

export default ActiveLink;
