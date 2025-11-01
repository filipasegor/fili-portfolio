import Image from "next/image";
import me from "../../../../public/me.png";
import styles from "./styles.module.scss";

export default function MainSection(props) {
  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.imgContainerMainSection}>
          <Image
            className={styles.me}
            alt="me"
            src={me}
            objectFit="cover"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </section>
    </>
  );
}
