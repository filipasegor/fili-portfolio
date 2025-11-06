import footerLogo from "./footer-logo.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Footer(props) {
  return (
    <>
      <footer className={styles.footerContainer}>
        <p>@fili 2025</p>
        <p>Made by Egor Filipas</p>
        <p className={styles.footerRights}>All Rights Reserved</p>
      </footer>
    </>
  );
}
