import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LgProject from "./components/_LgProject";
import MdProject from "./components/_MdProject";
import SmProject from "./components/_SmProject";
import styles from "../styles/Works.module.scss";

import blackLogo from "../public/black-logo.svg";
import rkeeper from "../public/rkeeper.png";
import charus_site from "../public/charus_site.png";
import deposits from "../public/deposits.png";
import insurances from "../public/insurances.png";
import bashnya from "../public/bashnya.png";
import som from "../public/som.png";
import olimpatlet from "../public/olimp_atlet.png";
import beans from "../public/beans.png";
import neo from "../public/neo.png";
import lk from "../public/lk.png";
import bionum from "../public/bionum.png";
import cil from "../public/cil.png";
import pack from "../public/pack.png";
import test from "../public/test.png";

import thumbSber from "../public/thumbSber.png";
import thumbShmot from "../public/thumbShmot.png";
import thumbCharus from "../public/thumbCharus.png";
import thumbNhs from "../public/thumbNhs.png";
import thumbBezlimit from "../public/thumbBezlimit.png";
import thumbDeff from "../public/thumbDeff.png";
import thumbIir from "../public/thumbIir.png";
import thumbMMS from "../public/thumbMMS.png";
import thumbLip from "../public/thumbLip.png";
import thumbRunup from "../public/thumbRunup.png";
import thumbNeosite from "../public/thumbNeosite.png";
import thumbSelection from "../public/thumbSelection.png";
import prime from "../public/prime.png";
import finesApp from "../public/projects/fines-app.png";
import resumeRedesign from "../public/projects/resume-redesign.png";
import thumbtollroads from "../public/projects/thumbTollRoads.png";
import thumbDashboard from "../public/projects/thumbDashboard.png";
import thumbTempiAi from "../public/projects/thumbTempiAi.png";
import worksDashboard from "../public/projects/worksDashboard.png";
import tempiAppBg from "../public/projects/TempiAppBgProject.png";
import thumbSberProducts from "../public/thumbSberProducts.png";
import TempiB2B from "../public/projects/TempiB2B.png";

import { FormattedMessage } from "react-intl";

export default function Projects(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gradient}></div>
        <Head>
          <title>Egor Filipas</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.Projects}>
          <div className={styles.headlineContainer}>
            <h1 className={styles.headline}>
              <FormattedMessage id="worksH1" />
            </h1>
          </div>

          {/* <MdProject
            href="/works/SberSpp"
            srcThumb={thumbSber}
            altThumb="thumbSber"
            src={require("../public/videos/SberCover.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksSber" />
            </h1>
          </MdProject> */}

          <MdProject
            href="/works/Tempi"
            srcThumb={thumbTempiAi}
            altThumb="tempi"
            src={require("../public/projects/worksTempiAi1.mp4")}
            type="arrow"
            media="video">
            <h1>Редизайн флоу резюме</h1>
            <p>Улучшил и упростил создание резюме</p>
          </MdProject>

          <MdProject
            href="/works/RoadsApp"
            srcThumb={thumbtollroads}
            altThumb="roads-app"
            src={require("../public/projects/worksTollroads.mp4")}
            type="arrow"
            media="video">
            <h1>Платные дороги в Штрафы.ру</h1>
            <p>Добавление нового сервиса</p>
          </MdProject>

          <MdProject
            href="/works/TempiApp"
            alt="tempi-app"
            src={tempiAppBg}
            type="arrow"
            media="img">
            <h1>Design leading in Tempi</h1>
            <p>Дизайн ключевых сценариев</p>
          </MdProject>

          <MdProject
            href="/works/Sber"
            srcThumb={thumbSberProducts}
            altThumb="sber-product"
            src={require("../public/projects/SberProductScreenProject.mp4")}
            type="arrow"
            media="video">
            <h1>Редизайн продуктовых страниц в Сбере</h1>
            <p>Проект под NDA 🔒 Покажу детали лично</p>
          </MdProject>

          <MdProject
            href="/works/Dashboard"
            alt="dashboard"
            src={worksDashboard}
            type="arrow"
            media="img">
            <h1>Дэшборд в приложении Штрафы.ру</h1>
            <p>Объединение всех сервисов</p>
          </MdProject>

          <MdProject
            href="/works/TempB2B"
            alt="tempi-app"
            src={TempiB2B}
            type="arrow"
            media="img">
            <h1>B2B Tempi App</h1>
            <p>Кейс в работе 🔒 Покажу детали лично</p>
          </MdProject>

          <MdProject
            href="/works/Prime"
            srcThumb={prime}
            altThumb="prime"
            src={require("../public/videos/Prime.mp4")}
            type="arrow"
            media="video">
            <h1>Интерфейсы СберПрайма</h1>
            <p>Работа в Сбере</p>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              href="/works/Deposits"
              alt="deposits"
              src={deposits}
              type="arrow"
              media="img">
              <h1>Вклады СберБанка</h1>
              <p>Работа в Сбере</p>
            </SmProject>

            <SmProject
              href="/works/Insurances"
              alt="insurances"
              src={insurances}
              type="arrow"
              media="img">
              <h1>Конструктор страховок</h1>
            </SmProject>
          </div>

          <MdProject
            href="/works/SelectionSystem"
            srcThumb={thumbSelection}
            altThumb="thumbSelection"
            src={require("../public/videos/SelectionFull.mp4")}
            type="arrow"
            media="video">
            <h1>Система подбора продуктов </h1>
            <p>Работа в Сбере</p>
          </MdProject>

          <LgProject
            href="https://www.artlebedev.ru/narayone/"
            srcThumb={thumbShmot}
            altThumb="thumbShmot"
            src={require("../public/videos/narayone.mp4")}
            type="logo"
            media="video">
            <h1>
              <FormattedMessage id="worksNarayone" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </LgProject>

          <LgProject
            href="https://www.artlebedev.ru/rkeeper/interface/"
            alt="rkeeper-img"
            src={rkeeper}
            type="logo"
            media="img">
            <h1>
              <FormattedMessage id="worksRkeeper" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </LgProject>

          <MdProject
            href="/works/CharusSite"
            srcThumb={charus_site}
            altThumb="charus_site"
            src={require("../public/works/charus_site/header_media.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksCharusSite" />
            </h1>
          </MdProject>

          <MdProject
            href="/works/CharusLogo"
            srcThumb={thumbCharus}
            altThumb="thumbCharus"
            src={require("../public/videos/charus.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksCharusLogo" />
            </h1>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              href="https://www.artlebedev.ru/bashnya-v-tsaritsino/"
              alt="rkeeper-img"
              src={bashnya}
              type="logo"
              media="img">
              <h1>
                <FormattedMessage id="worksBashnya" />
              </h1>
              <p>
                <FormattedMessage id="projectWith" />
              </p>
            </SmProject>

            <SmProject
              href="/works/Deff"
              srcThumb={thumbDeff}
              altThumb="thumbDeff"
              alt="deff"
              src={require("../public/videos/deff.mp4")}
              type="arrow"
              media="video">
              <h1>
                <FormattedMessage id="worksDeff" />
              </h1>
            </SmProject>
          </div>

          <MdProject
            href="/works/Som"
            srcThumb={som}
            altThumb="thumbDeff"
            src={require("../public/videos/som.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksSom" />
            </h1>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              href="/works/Iir"
              srcThumb={thumbIir}
              altThumb="thumbIir"
              alt="rkeeper-img"
              src={require("../public/videos/iir.mp4")}
              type="arrow"
              media="video">
              <h1>
                <FormattedMessage id="worksInvest" />
              </h1>
            </SmProject>

            <SmProject
              href="/works/Mms"
              srcThumb={thumbMMS}
              altThumb="thumbMMS"
              src={require("../public/videos/mms.mp4")}
              alt="deff"
              type="arrow"
              media="video">
              <h1>
                <FormattedMessage id="worksMmc" />
              </h1>
            </SmProject>
          </div>

          <MdProject
            href="https://www.artlebedev.ru/nighthawk-solutions/site/"
            srcThumb={thumbNhs}
            altThumb="thumbNhs"
            src={require("../public/videos/nhs.mp4")}
            type="logo"
            media="video">
            <h1>
              <FormattedMessage id="worksNhs" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              srcThumb={thumbRunup}
              altThumb="thumbRunup"
              href="https://www.artlebedev.ru/runup/"
              alt="runup-img"
              src={require("../public/videos/runup.mp4")}
              type="logo"
              media="video">
              <h1>
                <FormattedMessage id="worksRunup" />
              </h1>
              <p>
                <FormattedMessage id="projectWith" />
              </p>
            </SmProject>

            <SmProject
              href="https://www.artlebedev.ru/olimp-atlet/"
              src={olimpatlet}
              alt="deff"
              type="logo"
              media="img">
              <h1>
                <FormattedMessage id="worksAo" />
              </h1>
              <p>
                <FormattedMessage id="projectWith" />
              </p>
            </SmProject>
          </div>

          <MdProject href="/works/Neo" src={neo} type="arrow" media="img">
            <h1>
              <FormattedMessage id="worksNeo" />
            </h1>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              href="https://www.artlebedev.ru/beans/"
              alt="beans-img"
              src={beans}
              type="logo"
              media="img">
              <h1>
                <FormattedMessage id="worksBeans" />
              </h1>
              <p>
                <FormattedMessage id="projectWith" />
              </p>
            </SmProject>

            <SmProject
              href="https://www.artlebedev.ru/levoshich-i-partnery/"
              srcThumb={thumbLip}
              altThumb="thumbLip"
              src={require("../public/videos/lip.mp4")}
              type="logo"
              media="video">
              <h1>
                <FormattedMessage id="worksLev" />
              </h1>
              <p>
                <FormattedMessage id="projectWith" />
              </p>
            </SmProject>
          </div>

          <MdProject
            href="https://www.artlebedev.ru/bezlimit/site/"
            srcThumb={thumbBezlimit}
            altThumb="thumbBezlimit"
            src={require("../public/videos/bezlimit.mp4")}
            type="logo"
            media="video">
            <h1>
              <FormattedMessage id="worksBezlimit" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              href="/works/Neosite"
              alt="lk"
              srcThumb={thumbNeosite}
              altThumb="thumbNeosite"
              src={require("../public/videos/neosite.mp4")}
              type="arrow"
              media="video">
              <h1>
                <FormattedMessage id="worksNeoSite" />
              </h1>
            </SmProject>

            <SmProject
              href="/works/Bionum"
              src={bionum}
              alt="bionum-img"
              type="arrow"
              media="img">
              <h1>
                <FormattedMessage id="worksBionum" />
              </h1>
            </SmProject>
          </div>

          <MdProject href="/works/Trimyas" src={pack} type="arrow" media="img">
            <h1>
              <FormattedMessage id="worksTrimyas" />
            </h1>
          </MdProject>

          <div className={styles.SmContainer}>
            <SmProject
              href="/works/Lkneo"
              alt="lk"
              src={lk}
              type="arrow"
              media="img">
              <h1>
                <FormattedMessage id="worksNeoLk" />
              </h1>
            </SmProject>

            <SmProject
              href="/works/Coffeiludi"
              alt="coffeiludi"
              src={cil}
              type="arrow"
              media="img">
              <h1>
                <FormattedMessage id="worksCoffeiLudi" />
              </h1>
            </SmProject>
          </div>
        </div>
      </div>
    </>
  );
}
