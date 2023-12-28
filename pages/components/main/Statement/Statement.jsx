import styles from "./styles.module.scss";

export default function Statement(props) {
  return (
    <>
      <div className={styles.statementWrapper} style={props.style}>
        <h3 className={styles.upperCaseText}>{props.text}</h3>

        <div className={styles.headlinetWrapper}>{props.children}</div>
      </div>
    </>
  );
}
