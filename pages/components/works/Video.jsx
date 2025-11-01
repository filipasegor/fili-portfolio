import Image from "next/image";

import { useState, useEffect, useRef } from "react";

import styles from "../../../styles/works/Video.module.scss";

export default function Video(props) {
  const [loaded, setLoaded] = useState(false);

  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [startstop, setStartstop] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);

  function loadedData() {
    setLoaded(true);
    console.log("Video loaded!");
  }

  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    video.controls = false;
    video.currentTime = currentVideoTime;
    setVideoDuration(Math.floor(video.duration));

    if (startstop) {
      setCurrentVideoTime(Math.floor(video.currentTime));

      const intervalId = setInterval(() => {
        setCurrentVideoTime(video.currentTime + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  });

  function handleProgressChange(e) {
    setCurrentVideoTime(Number(e.target.value));
  }

  function handleStopClick() {
    const video = ref.current;
    video.pause();
    setStartstop(false);
  }

  function handleStartClick() {
    const video = ref.current;
    video.play();
    setStartstop(true);
  }

  function handleVideoClick(e) {
    // Предотвращаем срабатывание при клике на кнопки управления и элементы управления
    const target = e.target;
    if (
      target.tagName === "BUTTON" ||
      target.tagName === "INPUT" ||
      target.closest("button") ||
      target.closest("input")
    ) {
      return;
    }

    const video = ref.current;
    if (!video) return;

    if (startstop) {
      handleStopClick();
    } else {
      handleStartClick();
    }
  }

  const label = (
    <div
      className={styles.labelWrapper}
      style={{ justifyContent: props.left ? "flex-start" : "flex-end" }}>
      <div className={styles.textWrapper}>{props.children}</div>
    </div>
  );

  const stop = (
    <button
      className={styles.playStopButton}
      onClick={(e) => {
        e.stopPropagation();
        handleStopClick();
      }}>
      <svg className={styles.svg}>
        <path
          transform="translate(-10,-3)"
          d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>
      </svg>
    </button>
  );

  const start = (
    <button
      className={styles.playStopButton}
      onClick={(e) => {
        e.stopPropagation();
        handleStartClick();
      }}>
      <svg className={styles.svg}>
        <path
          transform="translate(-10, -3)"
          d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
      </svg>
    </button>
  );

  return (
    <>
      <div
        className={styles.mediaWrapper}
        style={{ marginTop: props.label === "true" ? "60px" : "0px" }}>
        {props.label === "true" && label}
        <div className={styles.videoWrapper} onClick={handleVideoClick}>
          <div
            className={styles.thumbWrapper}
            style={{ display: loaded ? "none" : "block" }}>
            <Image
              className={styles.thumb}
              alt={props.altThumb}
              src={props.srcThumb}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div style={{ display: loaded ? "block" : "none" }}>
            <video
              onCanPlayThrough={() => {
                loadedData();
              }}
              ref={ref}
              autoPlay
              muted
              loop
              playsInline
              controls
              className={styles.video}>
              <source src={props.src} />
            </video>
            <div className={styles.currentTimeWrapper}>
              <div className={styles.ButtonWrapper}>
                {startstop ? stop : start}
              </div>
              <div className={styles.timeLineWrapper}>
                <span className={styles.currentTimeWrapperText}>
                  {currentVideoTime < 10
                    ? `0:0${currentVideoTime}`
                    : `0:${currentVideoTime}`}
                </span>
                <input
                  className={styles.progressBarInput}
                  type="range"
                  min={props.min}
                  max={props.max}
                  value={currentVideoTime}
                  onChange={(e) => handleProgressChange(e)}
                  onClick={(e) => e.stopPropagation()}
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
