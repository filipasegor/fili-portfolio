import styles from '../../../styles/works/Title.module.scss'

export default function Main(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        {props.children}
      </div>
    </>
  );
}
