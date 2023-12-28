import styles from "./styles.module.scss";

export default function Par(props) {
  return <p className={styles.par}>{props.children}</p>;
}
