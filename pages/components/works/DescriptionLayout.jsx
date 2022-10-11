import styles from '../../../styles/works/DescriptionLayout.module.scss'

export default function DescriptionLayout(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        {props.children}
      </div>
    </>
  );
}
