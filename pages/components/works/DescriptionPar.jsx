import styles from '../../../styles/works/DescriptionPar.module.scss'

export default function DescriptionPar(props) {

  return (
    <>
      <div className={styles.Wrapper}>
        {props.children}
      </div>
    </>
  );
}
