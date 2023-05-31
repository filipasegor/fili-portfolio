import styles from '../../../styles/works/TaskLink.module.scss'
import Link from 'next/link'


export default function TaskLink(props) {

  return (
    <div className={styles.innerWrapper}>
      {props.children }
    </div>
  );
}
