import Link from 'next/link'
import Image from 'next/image'

import {useState, useEffect, useRef} from "react"

import styles from '../../../styles/works/Media.module.scss'



export default function Video(props){

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function loadingData(){
    setLoading(true);
  }

  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    console.log(video);
    console.log(video.id);
    video.controls = false;

    setProgress((video.currentTime / video.duration) * 100)
  }, []);


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
      <div className={styles.mediaWrapper} style={{marginTop: props.label === "true" ? "60px" : "0px"}} >
        {props.label === "true" && label}
        <div className={styles.videoWrapper} >
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
        <video ref={ref} id="video" autoPlay muted loop playsInline controls
          className={styles.video}
          onLoadedData={() => {
              loadingData();
            }}
          style={{ display: loading ? "block" : "none" }}>
          <source src={props.src} />
        </video>
        {progress}
      </div>
      </div>
    </>
  );
}
