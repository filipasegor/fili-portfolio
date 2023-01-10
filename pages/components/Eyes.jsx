import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import eyes from '../../public/eyes.svg'

export default function Eyes(props) {

  return (
    <>
      <Link href="/Works">
        <div className={styles.eyesWrapper}>
          <a className={styles.eyesTitle}>ПОСМОТРЕТЬ ВСЕ РАБОТЫ</a>
          <div className={styles.imageWrapper}>
            <Image
             className={styles.eyesImage}
             alt={eyes}
             src={eyes}
             />
          </div>
        </div>
      </Link>
    </>
  );
}
