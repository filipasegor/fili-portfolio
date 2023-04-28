import Link from 'next/link'
import Image from 'next/image'

import {useState, useEffect} from "react"

import styles from '../../../styles/works/IndexMedia.module.scss'



export default function IndexMedia(props){

  const [loaded, setLoaded] = useState(false);

  const handleMediaLoading = () => {
    setLoaded(true);
    console.log("Data loaded");
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

  
  return(
    <>
    <div className={styles.mediaWrapper}>
      <div className={styles.videoWrapper}>
        <video id="video" autoPlay muted loop playsInline
        onLoadedData={handleMediaLoading}
        style={{animation: loaded ? "none" : "color 1.5s infinite linear" }}
        className={styles.video}>
        <source src={props.src} />
        </video>
      </div>
    </div>
    </>
  );
}
