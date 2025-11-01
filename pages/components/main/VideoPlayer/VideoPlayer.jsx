import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
      // Перезапускаем видео с начала
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="auto">
        <source src="/projects/me2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className={styles.muteButton} onClick={toggleMute}>
        {isMuted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 9V15H7L12 20V4L7 9H3Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23 9L17 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 9L23 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 9V15H7L12 20V4L7 9H3Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 9C19.5 10.5 19.5 13.5 19 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 10.5C16.1667 11.5 16.1667 12.5 15.5 13.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
