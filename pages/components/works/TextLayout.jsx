import styles from '../../../styles/works/TextLayout.module.scss'

export default function (props) {

  return (
    <>
      <div className={styles.Wrapper}>
        {props.children}
      </div>
    </>
  );
}
