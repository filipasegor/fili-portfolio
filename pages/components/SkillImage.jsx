import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'



export default function SkillImage(props) {

  return (
    <div className={styles.SkillImageWrapper}>
      <Image
       {...props}
     />
    </div>

  );
}
