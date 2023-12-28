import styles from "./styles.module.scss";

export default function PointBolded(props) {
  return (
    <div>
      <p className={styles.PointBolded}>{props.children}</p>;
    </div>
  );
}
