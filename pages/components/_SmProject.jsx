import Link from 'next/link'
import Image from 'next/image'
// import ProjectButton from './ProjectButton'
import styles from '../../styles/_SmProject.module.scss'
import arrow from '../../public/arrow.svg'
import als from '../../public/als.svg'

const logoButton = (
  <div className={styles.Button}>
    <Image
      className={styles.Image}
     alt={als}
     src={als}
     width={80}
     height={25}
     />
  </div>
);

const arrowButton = (
  <div className={styles.Button}>
    <Image
      className={styles.Image}
     alt={arrow}
     src={arrow}
     width={40}
     height={20}
     />
  </div>
);




export default function SmProject(props){
  const img = (
      <div className={styles.mediaWrapper}>
        <Image
          className={styles.ProjectImage}
         alt={props.alt}
         src={props.src}
         layout="responsive"
         objectFit="cover"
         placeholder="blur"
       />
      </div>
  );

  const video = (
    <div className={styles.mediaWrapper}>
      <video autoPlay muted loop className={styles.video}>
      <source src={props.src} />
      </video>
    </div>
  );

  return(
    <>
      <Link href={props.href}>
        <a className={styles.WrapperLink}
        target={props.type === "logo" && "_blank"}>
          <div className={styles.Wrapper}>
            <div className={styles.Desc}>
              {props.children}
              {props.type === "logo" ? logoButton : arrowButton}
            </div>
              {props.media === "video" ? video : img}
          </div>
        </a>
      </Link>
    </>
  )
}
