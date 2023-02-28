
import styles from '../../../styles/works/SubHeading.module.scss'

export default function SubHeading(props) {
  return (
    <>
      <div className={styles.Wrapper}>
        <h3>{props.children}</h3>
      </div>
    </>
  );
}
