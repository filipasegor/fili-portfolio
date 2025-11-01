import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FormattedMessage } from "react-intl";

import Vector from "./Vector.svg";

export default function WorkButton(props) {
  return (
    <>
      <Link legacyBehavior href="/About">
        <a className={styles.eyesWrapper}>
          <div className={styles.eyesTitle}>
            <FormattedMessage id="eyesButton" />
          </div>
          <div className={styles.imageWrapper}>
            <Image className={styles.Vector} alt={Vector} src={Vector} />
          </div>
        </a>
      </Link>
    </>
  );
}
