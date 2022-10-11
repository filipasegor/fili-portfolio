import styles from '../../styles/Home.module.css'

export default function SkillDesc(props) {

  return (
    <>
      <div className={styles.SkillDescContainer}>
       <div className={props.side === "right" ? styles.right : styles.left}>
        <h2 className={styles.SkillTitle}>{props.title}</h2>
        <p className={styles.SkillDesc}>{props.descFirst}</p>
        <p className={styles.SkillDesc}>{props.descSecond}</p>
        <p className={styles.SkillDesc}>{props.descThird}</p>
       </div>
      </div>
    </>
  );
}
