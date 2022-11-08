
import styles from '../../../styles/works/ProjectFooter.module.scss'

export default function ProjectFooter(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.Line}></div>
        <p>
          Дедлайн: {props.date}
        </p>
      </div>
    </>
  );
}
