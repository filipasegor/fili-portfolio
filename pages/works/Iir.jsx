import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Project.module.scss";

import HeadMedia from "../components/works/HeadMedia";
import Media from "../components/works/Media";
import MainTitle from "../components/works/MainTitle";
import DescriptionLayout from "../components/works/DescriptionLayout";
import DescriptionPar from "../components/works/DescriptionPar";
import DescriptionTitle from "../components/works/DescriptionTitle";
import MdProject from "../components/_MdProject";
import LgProject from "../components/_LgProject";
import Suggested from "../components/works/Suggested";
import ProjectFooter from "../components/works/ProjectFooter";
import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import Video from "../components/works/Video";

import scenarios from "../../public/works/iir/scenarios.png";
import head from "../../public/works/iir/head.png";
import thumbProfile from "../../public/works/iir/thumbProfile.png";
import thumbParams from "../../public/works/iir/thumbParams.png";
import thumbProceed from "../../public/works/iir/thumbProceed.png";
import thumbProducts from "../../public/works/iir/thumbProducts.png";

import charus_site from "../../public/charus_site.png";
import rkeeper from "../../public/rkeeper.png";

import { FormattedMessage } from "react-intl";

export default function Project(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Egor Filipas</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeadMedia media="img" alt="head" src={head} />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3 className={styles.TaskDescName}>
                <FormattedMessage id="taskName" />
              </h3>
              <p>
                <FormattedMessage id="iirTaskDesc" />
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="iirHeadline" />
            </h1>
          </MainTitle>

          {/* <Media
            srcThumb={thumbProfile}
            altThumb="thumbProfile"
            label="true"
            media="video"
            left="left"
            src={require("../../public/works/iir/profile.mp4")}>
            <p>
              <FormattedMessage id="iirTest" />
            </p>
          </Media> */}

          <Video
            label="true"
            left="left"
            srcThumb={thumbProfile}
            altThumb="thumbProfile"
            src={require("../../public/works/iir/profile.mp4")}
            min="0"
            max="25">
            <p>
              <FormattedMessage id="iirTest" />
            </p>
          </Video>

          <Video
            label="true"
            right="right"
            srcThumb={thumbParams}
            altThumb="thumbParams"
            src={require("../../public/works/iir/params.mp4")}
            min="0"
            max="14">
            <p>
              <FormattedMessage id="iirSettings" />
            </p>
          </Video>

          {/* <Media
            srcThumb={thumbParams}
            altThumb="thumbParams"
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/iir/params.mp4")}>
            <p>
              <FormattedMessage id="iirSettings" />
            </p>
          </Media> */}

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="iirPortfolio" />
            </DescriptionTitle>
            <DescriptionPar>
              <p>
                <FormattedMessage id="iirPortfolioPar1" />
              </p>
              <p>
                <FormattedMessage id="iirPortfolioPar2" />
              </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Video
            label="false"
            srcThumb={thumbProducts}
            altThumb="thumbProducts"
            src={require("../../public/works/iir/products.mp4")}
            min="0"
            max="35"
          />

          {/* <Media
            srcThumb={thumbProducts}
            altThumb="thumbProducts"
            label="false"
            media="video"
            src={require("../../public/works/iir/products.mp4")}
          /> */}

          <Video
            label="true"
            right="right"
            srcThumb={thumbProceed}
            altThumb="thumbProceed"
            src={require("../../public/works/iir/proceed.mp4")}
            min="0"
            max="21">
            <p>
              <FormattedMessage id="iirProceed" />
            </p>
          </Video>

          {/* <Media
            srcThumb={thumbProceed}
            altThumb="thumbProceed"
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/iir/proceed.mp4")}>
            <p>
              <FormattedMessage id="iirProceed" />
            </p>
          </Media> */}

          <Media label="true" right="right" media="img" src={scenarios}>
            <p>
              <FormattedMessage id="iirUx" />
            </p>
          </Media>

          <ProjectFooter date="03.10.2021" />
        </section>

        <Suggested>
          <MdProject
            href="/works/CharusSite"
            srcThumb={charus_site}
            altThumb="charus_site"
            src={require("../../public/works/charus_site/header_media.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksCharusSite" />
            </h1>
          </MdProject>

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
        </Suggested>
      </div>
    </>
  );
}
