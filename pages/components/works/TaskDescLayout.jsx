import styles from '../../../styles/works/TaskDescLayout.module.scss'


export default function TaskDescLayout(props) {

  return (
    <div className={styles.Wrapper}>
      {props.children}
    </div>
  );
}
