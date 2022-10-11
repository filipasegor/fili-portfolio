import styles from '../../styles/Home.module.css'


export default function Par(props) {


  return (

    <p className={styles.par}>{props.children}</p>

  );
}
