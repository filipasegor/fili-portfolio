import Head from "next/head";
import styles from "../../styles/Project.module.scss";
import Statement from "../components/main/Statement/Statement";
import Headline from "../components/main/Headline/Headline";
import Par from "../components/main/Par/Par";

export default function Sber() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Редизайн продуктовых страниц в Сбере | Egor Filipas</title>
          <meta
            name="description"
            content="Редизайн продуктовых страниц в Сбере"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            textAlign: "center",
          }}>
          <Par>Проект под NDA 😥 С удовольствием покажу детали лично</Par>
        </div>
      </div>
    </>
  );
}
