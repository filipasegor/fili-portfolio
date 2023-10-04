import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import styles from "../../../styles/works/Media.module.scss";

export default function Media(props) {
  const [loaded, setLoaded] = useState(false);

  function loadedData() {
    setLoaded(true);
    console.log("Video loaded!");
  }

  // const video = document.getElementById('video');
  // const videoWorks = !!document.createElement('video').canPlayType;

  // function removeControls(){
  //   if (videoWorks) {
  //     video.controls = false;
  //     videoControls.classList.remove('hidden');
  //   }
  // }

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
      <video
        id="video"
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
        onLoadedData={() => {
          loadedData();
        }}
        style={{ display: loaded ? "block" : "none" }}>
        <source src={props.src} />
      </video>
    </div>
  );

  const label = (
    <div
      className={styles.labelWrapper}
      style={{ justifyContent: props.left ? "flex-start" : "flex-end" }}>
      <div className={styles.textWrapper}>{props.children}</div>
    </div>
  );

  return (
    <>
      <div
        className={styles.mediaWrapper}
        style={{ marginTop: props.label === "true" ? "60px" : "0px" }}>
        {props.label === "true" && label}
        {props.media === "video" ? video : img}
      </div>
    </>
  );
}
