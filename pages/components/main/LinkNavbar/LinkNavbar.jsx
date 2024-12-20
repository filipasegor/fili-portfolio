import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { FormattedMessage } from "react-intl";

import linkArrow from "./LinkArrow.svg";

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push();
  };

  if (router.asPath === "/") {
    return (
      <>
        <nav className={styles.navbarContainer}>
          <Link href="/">
            <a className={styles.active}>
              <FormattedMessage id="profile" />
            </a>
          </Link>
          <Link href="/Works">
            <a className={styles.default}>
              <FormattedMessage id="works" />
            </a>
          </Link>
        </nav>
      </>
    );
  }

  if (router.asPath === "/Works") {
    return (
      <>
        <nav className={styles.navbarContainer}>
          <Link href="/">
            <a className={styles.default}>
              <FormattedMessage id="profile" />
            </a>
          </Link>
          <Link href="/Works">
            <a className={styles.active}>
              <FormattedMessage id="works" />
            </a>
          </Link>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className={styles.navbarContainer}>
        <Link href="/Works">
          <a className={styles.ArrowLink}>
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
          </a>
        </Link>
        <div></div>
        <Link href="/">
          <a className={styles.default}>
            <FormattedMessage id="profile" />
          </a>
        </Link>
        <Link href="/Works">
          <a className={styles.active}>
            <FormattedMessage id="works" />
          </a>
        </Link>
      </nav>
    </>
  );
}

export default ActiveLink;
