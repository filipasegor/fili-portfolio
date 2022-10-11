
import Par from './Par.jsx'
import styles from '../../styles/Home.module.css'


export default function Header(props) {

  return (
    <>
    <section className={styles.section}>
      {props.children}
    </section>
    </>
  )
}
