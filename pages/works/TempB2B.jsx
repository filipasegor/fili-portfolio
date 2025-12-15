import Head from "next/head";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";

import Headline from "../components/main/Headline/Headline";
import Media from "../components/works/Media";
import Video from "../components/works/Video";

import Par from "../components/main/Par/Par";
import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import MainTitle from "../components/works/MainTitle";
import ProjectFooter from "../components/works/ProjectFooter";
import Suggested from "../components/works/Suggested";
import Statement from "../components/main/Statement/Statement";
import MdProject from "../components/_MdProject";
import SmProject from "../components/_SmProject";
import Stats from "../components/main/Stats/Stats";

import { FormattedMessage } from "react-intl";

import Candidate from "../../public/works/TempiB2B/Candidate.png";
import CandidateSearch from "../../public/works/TempiB2B/CandidateSearch.png";
import Shifts from "../../public/works/TempiB2B/Shifts.png";
import ShiftsPopup from "../../public/works/TempiB2B/ShiftsPopup.png";
import Vacansies from "../../public/works/TempiB2B/Vacansies.png";

export default function Project(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>B2B Tempi App | Egor Filipas</title>
          <meta
            name="description"
            content="Редизайн и внедрение новых ключевых сценариев для работодателя в Tempi"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          style={{
            width: "100%",
            height: "400px",
            background:
              "radial-gradient(72.03% 84.94% at 50% 1.67%, #480593 0%, rgba(136, 204, 40, 0.00) 80.57%)",
            margin: "0 auto",
          }}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2024-2025</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Role</h3>
              <p>Lead Product Designer</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Scope</h3>
              <p>UI/UX, Prototyping, Analysis, Design system</p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle style={{ marginTop: "30px", marginBottom: "200px" }}>
            <h1>
              Редизайн и внедрение новых ключевых сценариев для работодателя
            </h1>
          </MainTitle>

          <div
            style={{
              width: "400px",
              height: "191px",
              margin: "0 auto",
              padding: "15px",
              backgroundColor: "#1a1a1a",
              borderRadius: "15px",
              marginBottom: "20px",
            }}>
            <Par>Кейс пока в работе ⚒️ процесс могу рассказать лично</Par>
            <Par>Пока просто посмотрите красивые экраны из этого проекта😄</Par>
          </div>

          <Image
            style={{ width: "100%", height: "auto", marginBottom: "50px" }}
            src={Shifts}
            alt="Shifts"
          />

          <Image
            style={{ width: "100%", height: "auto", marginBottom: "50px" }}
            src={ShiftsPopup}
            alt="Shifts Popup"
          />

          <Image
            style={{ width: "100%", height: "auto", marginBottom: "50px" }}
            src={Candidate}
            alt="Candidate"
          />

          <Image
            style={{ width: "100%", height: "auto", marginBottom: "50px" }}
            src={CandidateSearch}
            alt="Candidate Search"
          />

          <Image
            style={{ width: "100%", height: "auto", marginBottom: "50px" }}
            src={Vacansies}
            alt="Vacansies"
          />
        </section>

        {/* <ProjectFooter /> */}
      </div>
    </>
  );
}
