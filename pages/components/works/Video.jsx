import Image from "next/image";

import { useState, useEffect, useRef } from "react";

import styles from "../../../styles/works/Video.module.scss";

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function Video(props) {
  const [loaded, setLoaded] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [startstop, setStartstop] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const ref = useRef(null);

  function loadedData() {
    setLoaded(true);
    if (ref.current) {
      setVideoDuration(ref.current.duration || 0);
    }
    console.log("Video loaded!");
  }

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.controls = false;

    // Получаем длительность видео когда оно загрузится
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration || 0);
    };

    // Плавное обновление времени при воспроизведении
    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentVideoTime(video.currentTime);
      }
    };

    // Обновляем длительность при изменении
    const handleDurationChange = () => {
      setVideoDuration(video.duration || 0);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
    };
  }, [isDragging]);

  function handleProgressChange(e) {
    const newTime = Number(e.target.value);
    setCurrentVideoTime(newTime);
    if (ref.current) {
      ref.current.currentTime = newTime;
    }
  }

  function handleProgressClick(e) {
    e.stopPropagation();
    // Клик на input range уже обрабатывается через onChange
    // Эта функция нужна для клика на область вокруг input
    const input = e.currentTarget.querySelector(`.${styles.progressBarInput}`);
    if (input && e.target !== input) {
      const rect = input.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, clickX / rect.width));
      const newTime = percentage * videoDuration;

      if (ref.current && !isNaN(newTime) && videoDuration > 0) {
        setCurrentVideoTime(newTime);
        ref.current.currentTime = newTime;
        // Обновляем значение input программно
        input.value = newTime;
      }
    }
  }

  function handleProgressMouseDown() {
    setIsDragging(true);
  }

  function handleProgressMouseUp() {
    setIsDragging(false);
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
            <div
              style={{
                display: props.hideControls === "true" ? "none" : "flex",
              }}
              className={styles.currentTimeWrapper}>
              <div className={styles.ButtonWrapper}>
                {startstop ? stop : start}
              </div>
              <div className={styles.timeLineWrapper}>
                <span className={styles.currentTimeWrapperText}>
                  {formatTime(currentVideoTime)}
                </span>
                <div
                  className={styles.progressBarContainer}
                  onClick={handleProgressClick}>
                  <input
                    className={styles.progressBarInput}
                    type="range"
                    min="0"
                    max={videoDuration || 0}
                    step="0.1"
                    value={currentVideoTime}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleProgressChange(e);
                    }}
                    onInput={(e) => {
                      e.stopPropagation();
                      handleProgressChange(e);
                    }}
                    onMouseDown={handleProgressMouseDown}
                    onMouseUp={handleProgressMouseUp}
                    onTouchStart={handleProgressMouseDown}
                    onTouchEnd={handleProgressMouseUp}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProgressChange(e);
                    }}
                  />
                </div>
                <span className={styles.currentTimeWrapperText}>
                  {formatTime(videoDuration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
