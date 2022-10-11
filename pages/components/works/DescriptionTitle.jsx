import styles from '../../../styles/works/DescriptionTitle.module.scss'

export default function DescriptionTitle(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        <h2>{props.children}</h2>
      </div>
    </>
  );
}
