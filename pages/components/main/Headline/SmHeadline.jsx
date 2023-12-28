import styles from "./styles.module.scss";

export default function Headline(props) {
  return (
    <>
      <h1 className={styles.smHeadline}>{props.children}</h1>
    </>
  );
}
