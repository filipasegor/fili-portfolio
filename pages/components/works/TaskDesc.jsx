import styles from '../../../styles/works/TaskDesc.module.scss'

export default function MainTitle(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        <h2>Задача:</h2>
        {props.children}
      </div>
    </>
  );
}
