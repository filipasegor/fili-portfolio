import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

import Vector from "../../public/Vector.svg";

export default function Eyes(props) {
  return (
    <>
      <Link href="/Works">
        <div className={styles.eyesWrapper}>
          <a className={styles.eyesTitle}>ПОСМОТРЕТЬ РАБОТЫ</a>
          <div className={styles.imageWrapper}>
            <Image className={styles.Vector} alt={Vector} src={Vector} />
          </div>
        </div>
      </Link>
    </>
  );
}
