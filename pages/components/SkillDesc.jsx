import styles from '../../styles/Home.module.css'

export default function SkillDesc(props) {

  return (
    <>
      <div className={styles.SkillDescContainer}>
       <div className={props.side === "right" ? styles.right : styles.left}>
        {/* <div className={styles.SkillTitle}>{props.children}</div>
        <div className={styles.SkillDesc}>{props.children}</div>
        <div className={styles.SkillDesc}>{props.children}</div>
        <div className={styles.SkillDesc}>{props.children}</div> */}
        {props.children}
       </div>
      </div>
    </>
  );
}
