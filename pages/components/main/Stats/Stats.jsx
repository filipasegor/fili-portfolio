import styles from "./styles.module.scss";

export default function Stats(props) {
  return (
    <>
      <div className={styles.statsWrapper}>
        <h1 className={styles.Headline}>{props.headline}</h1>
        <p className={styles.desc}>{props.desc}</p>
      </div>
    </>
  );
}
