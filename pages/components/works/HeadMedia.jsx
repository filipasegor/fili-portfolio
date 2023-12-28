import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import styles from "../../../styles/works/HeadMedia.module.scss";

export default function HeadMedia(props) {
  const [loading, setLoading] = useState(false);

  function loadingData() {
    setLoading(true);
  }

  const img = (
    <div className={styles.headImageWrapper}>
      <Image
        className={styles.headMedia}
        alt="media-img"
        src={props.src}
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />
    </div>
  );

  const video = (
    <div className={styles.headMedia}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
        onLoadedData={() => {
          loadingData();
        }}>
        <source src={props.src} />
      </video>
    </div>
  );

  return (
    <>
      <div style={props.style} className={styles.headMediaWrapper}>
        {props.media === "video" ? video : img}
      </div>
    </>
  );
}
