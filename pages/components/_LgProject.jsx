import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from "react"

import styles from '../../styles/_LgProject.module.scss'
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




export default function LgProject(props){

  const [loading, setLoading] = useState(false);

  function loadingData(){
    setLoading(true);
  }

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
      <div
      className={styles.thumbWrapper}
      style={{ display: loading ? "none" : "block" }}>
        <Image
         className={styles.thumb}
         alt={props.altThumb}
         src={props.srcThumb}
         layout="responsive"
         objectFit="cover"
       />
      </div>
      <video autoPlay muted loop playsInline
      className={styles.video}
      onLoadedData={() => {
          loadingData();
        }}
      style={{ display: loading ? "block" : "none" }}
      >
      <source src={props.src} />
      </video>
    </div>
  );

  return(
    <>
      <Link href={props.href ?? ""}>
        <a className={styles.WrapperLink} target={props.type === "logo" && "_blank"}>
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
