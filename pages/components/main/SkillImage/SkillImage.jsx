import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function SkillImage(props) {
  return (
    <div className={styles.SkillImageWrapper}>
      <Image {...props} />
    </div>
  );
}
