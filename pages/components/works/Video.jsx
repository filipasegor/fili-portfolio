import Link from 'next/link'
import Image from 'next/image'

import {useState, useEffect, useRef} from "react"

import styles from '../../../styles/works/Video.module.scss'



export default function Video(props){

  const [loading, setLoading] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [startstop, setStartstop] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);
 

  function loadingData(){
    setLoading(true);
  }

  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    video.controls = false;
    video.currentTime = currentVideoTime;
    setVideoDuration(Math.floor(video.duration));

    if(startstop){
      setCurrentVideoTime(Math.floor(video.currentTime));

      const intervalId = setInterval(() => {
        setCurrentVideoTime(video.currentTime + 1);
      }, 1000)

      return () => {
        clearInterval(intervalId)
      }    

      }
  
  });


  function handleProgressChange(e){
    setCurrentVideoTime(Number(e.target.value))
  }

  function handleStopClick() {
    const video = ref.current;
    video.pause();
    setStartstop(false)
  }

  function handleStartClick() {
    const video = ref.current;
    video.play();
    setStartstop(true)
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

  const stop = (
    <button className={styles.stopButton} onClick={handleStopClick}></button>
  );

  const start = (
    <button className={styles.startButton} onClick={handleStartClick}></button>
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
          <div style={{ display: loading ? "block" : "none" }}>
          <video 
            onLoadedData={() => {
              loadingData();
            }}
            ref={ref}
            autoPlay muted loop playsInline controls 
            className={styles.video}>
            <source src={props.src} />
          </video>
            <div className={styles.currentTimeWrapper}>
              <div className={styles.ButtonWrapper}>
                {startstop ? stop : start}
              </div>
              <div className={styles.timeLineWrapper}>
                <span className={styles.currentTimeWrapperText}>
                  {currentVideoTime < 10 ? `0:0${currentVideoTime}` : `0:${currentVideoTime}`}
                </span>
                <input
                className={styles.progressBarInput}
                type="range"
                min={props.min}
                max={props.max}
                value={currentVideoTime}
                onChange={(e) => handleProgressChange(e)}
                />
                <span className={styles.currentTimeWrapperText}>
                  {`0:${videoDuration}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
