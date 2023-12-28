import styles from "./styles.module.scss";

export default function Header(props) {
  return (
    <>
      <section className={styles.section}>{props.children}</section>
    </>
  );
}
