import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FormattedMessage } from "react-intl";

import Vector from "./Vector.svg";

export default function WorkButton(props) {
  return (
    <>
      <Link href="/Works">
        <div className={styles.eyesWrapper}>
          <a className={styles.eyesTitle}>
            <FormattedMessage id="eyesButton" />
          </a>
          <div className={styles.imageWrapper}>
            <Image className={styles.Vector} alt={Vector} src={Vector} />
          </div>
        </div>
      </Link>
    </>
  );
}
