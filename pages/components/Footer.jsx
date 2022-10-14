import footerLogo from '../../public/footer-logo.svg'
import styles from '../../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer(props) {

  return (
    <>
    <footer className={styles.footerContainer}>
      <p>@fili 2022</p>
      <div className={styles.footerImg}>
        <Image
         alt="footer-logo"
         src={footerLogo}
         layout="responsive"
        />
      </div>
      <p className={styles.footerRights}>All Rights Reserved</p>
    </footer>
    </>
  );
}
