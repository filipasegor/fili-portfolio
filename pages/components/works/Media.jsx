import Link from 'next/link'
import Image from 'next/image'

import {useState, useEffect} from "react"

import styles from '../../../styles/works/Media.module.scss'



export default function Media(props){

  const [loading, setLoading] = useState(false);

  function loadingData(){
    setLoading(true);
  }

  const img = (
      <div className={styles.imgWraper}>
        <Image
         className={styles.Image}
         alt="media-img"
         src={props.src}
         layout="responsive"
         objectFit="cover"
         placeholder="blur"
       />
      </div>
  );

  const video = (
    <div className={styles.videoWrapper}>
      
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

  const label = (
    <div className={styles.labelWrapper}
    style ={{justifyContent: props.left ? "flex-start" : "flex-end"}}
    >
      <div className={styles.textWrapper}>
       {props.children}
      </div>
    </div>
  )

  return(
    <>
      <div
      className={styles.mediaWrapper}
      style={{marginTop: props.label === "true" ? "60px" : "0px"}}
      >
        {props.label === "true" && label}
        {props.media === "video" ? video : img}
      </div>
    </>
  )
}
