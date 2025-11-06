import Head from "next/head";
import styles from "../../styles/Project.module.scss";
import Statement from "../components/main/Statement/Statement";
import Headline from "../components/main/Headline/Headline";
import Par from "../components/main/Par/Par";

export default function TempiApp() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Design leading in Tempi | Egor Filipas</title>
          <meta name="description" content="Design leading in Tempi" />
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
          <Par>Кейс в работе ⚒️ С удовольствием покажу детали лично</Par>
        </div>
      </div>
    </>
  );
}
