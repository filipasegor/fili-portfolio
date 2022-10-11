import Image from 'next/image'
import me from '../../public/me.png'
import star from '../../public/star.svg'
import Par from './Par.jsx'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


export default function MainSection(props) {

  return (
    <>
    <section className={styles.mainSection}>
      <div className={styles.linksContainer}>
        <Link   href="/">
          <a className={styles.linkMainSectionInst}>
          INST:@filipassss
          </a>
        </Link>
        <Link href="/" >
          <a className={styles.linkMainSectionMail}>
          filipas@gmail.com
          </a>
        </Link>
        <Link href="/" >
          <a className={styles.linkMainSectionTg}>
          TG:@filipas
          </a>
        </Link>
        <div className={styles.Geo}>
          <Image
           alt="star"
           src={star}
           layout="intrinsic"
           width={31.64}
           height={48.51}
         />
         <p>Based<br />
         in Moscow</p>
        </div>
      </div>
      <div className={styles.imgContainerMainSection}>
        <Image className={styles.me}
         alt="me"
         src={me}
         objectFit="cover"
         layout="responsive"
         placeholder="blur"
       />
      </div>
    </section>
    </>
  )
}
