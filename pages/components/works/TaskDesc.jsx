import styles from '../../../styles/works/TaskDesc.module.scss'
import Link from 'next/link'

export default function TaskDesc(props) {

  return (
    <>
    <div className={styles.Wrapper}>
      <div className={styles.innerWrapper}>
        <h3 className={styles.name}
        >
        {props.taskName}
        </h3>
        <p>{props.taskDesc}</p>
      </div>
      <div className={styles.innerWrapper}>
        <Link href={props.href ?? ""}>
          <a className={styles.name}>
          {props.linkName}
          </a>
        </Link>
        <p>{props.linkDesc}</p>
      </div>
    </div>
    </>
  );
}
