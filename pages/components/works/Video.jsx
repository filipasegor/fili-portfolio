import Link from 'next/link'
import Image from 'next/image'

import {useState, useEffect, useRef} from "react"

import styles from '../../../styles/works/Video.module.scss'



export default function Video(props){

  const [loading, setLoading] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  function loadingData(){
    setLoading(true);
  }


  const ref = useRef(null);


  useEffect(() => {
    const video = ref.current;
    video.controls = false;
    video.currentTime = currentVideoTime;
    setCurrentVideoTime(Math.floor(video.currentTime));

    const intervalId = setInterval(() => {
      setCurrentVideoTime(prev => video.currentTime + 1);
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
    

  },  [currentVideoTime]);



  function handleProgressChange(e){
    setCurrentVideoTime(Number(e.target.value))

  }

  const label = (
    <div className={styles.labelWrapper}
    style ={{justifyContent: props.left ? "flex-start" : "flex-end"}}
    >
      <div className={styles.textWrapper}>
       {props.children}
      </div>
    </div>
  );
  
  return(
    <>
      <div className={styles.mediaWrapper} style={{marginTop: props.label === "true" ? "60px" : "0px"}} >
        {props.label === "true" && label}
        <div className={styles.videoWrapper}>
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
          <video 
            onLoadedData={() => {
              loadingData();
            }}
            ref={ref}
            autoPlay muted loop playsInline controls 
            className={styles.video}
            style={{ display: loading ? "block" : "none" }}>
            >
            <source src={props.src} />
          </video>
          <div className={styles.currentTimeWrapper}>{currentVideoTime < 10 ? `0:0${currentVideoTime}` : `0:${currentVideoTime}`}</div>
          <input
              className={styles.progressBarInput}
              type="range"
              min="0"
              max="30"
              value={currentVideoTime}
              onChange={(e) => handleProgressChange(e)}
            />
        </div>
      </div>
    </>
  );
}
