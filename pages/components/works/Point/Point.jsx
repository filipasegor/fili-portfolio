import styles from "./styles.module.scss";
import Image from "next/image";

import tick from "./tick.svg";
import crosshair from "./crosshair.svg";

const tickIcon = (
  <div className={styles.Image}>
    <Image alt="media-img" src={tick} />
  </div>
);

const crosshairIcon = (
  <div className={styles.Image}>
    <Image src={crosshair} alt="media-img" />
  </div>
);

export default function Point(props) {
  return (
    <div className={styles.Wrapper}>
      {props.type === "tickIcon" ? tickIcon : crosshairIcon}
      <div className={styles.textWrapper}>
        <span className={styles.Text}>{props.children}</span>
      </div>
    </div>
  );
}
