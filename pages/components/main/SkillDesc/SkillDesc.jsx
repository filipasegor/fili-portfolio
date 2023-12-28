import styles from "./styles.module.scss";

export default function SkillDesc(props) {
  return (
    <>
      <div className={styles.SkillDescContainer}>
        <div className={props.side === "right" ? styles.right : styles.left}>
          {props.children}
        </div>
      </div>
    </>
  );
}
