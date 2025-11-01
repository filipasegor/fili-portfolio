import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Project.module.scss";

import HeadMedia from "../components/works/HeadMedia";
import Media from "../components/works/Media";
import MainTitle from "../components/works/MainTitle";
import DescriptionLayout from "../components/works/DescriptionLayout";
import DescriptionPar from "../components/works/DescriptionPar";
import DescriptionTitle from "../components/works/DescriptionTitle";
import MdProject from "../components/_MdProject";
import Suggested from "../components/works/Suggested";
import ProjectFooter from "../components/works/ProjectFooter";

import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import TaskLink from "../components/works/TaskLink";

import headSom from "../../public/works/som/head-som.png";
import logoBlack from "../../public/works/som/logo-black.png";
import stickers from "../../public/works/som/stickers.png";
import som from "../../public/som.png";
import som1 from "../../public/works/som/som1.png";
import som2 from "../../public/works/som/som2.png";
import som3 from "../../public/works/som/som3.png";
import card from "../../public/works/som/card.png";
import phonecase from "../../public/works/som/case.png";
import flaers from "../../public/works/som/flaers.png";
import oil from "../../public/works/som/oil.png";
import post from "../../public/works/som/post.png";
import site from "../../public/works/som/site.png";
import templates from "../../public/works/som/templates.png";
import thumbCharus from "../../public/thumbCharus.png";

import neo from "../../public/neo.png";

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

        <HeadMedia
          media="video"
          alt="head-som"
          src={require("../../public/videos/som.mp4")}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3 className={styles.TaskDescName}>
                <FormattedMessage id="taskName" />
              </h3>
              <p>
                <FormattedMessage id="somTaskDesc" />
              </p>
            </TaskDesc>
            <TaskLink>
              <Link
                href="https://vk.com/somsomsom_io"
                className={styles.TaskDescLink}
                target="_blank"
                rel="noopener noreferrer">
                <FormattedMessage id="somLinkName" />
              </Link>
              <p>
                <FormattedMessage id="somLinkDesc" />
              </p>
            </TaskLink>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="somHeadline" />
            </h1>
          </MainTitle>

          <Media label="none" media="img" src={logoBlack} />
          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="somSymbol" />
            </DescriptionTitle>
            <DescriptionPar>
              <p>
                <FormattedMessage id="somSymbolPar1" />
              </p>
              <p>
                <FormattedMessage id="somSymbolPar2" />
              </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media label="false" media="img" src={phonecase} />

          <Media label="none" media="img" src={som1} />
          <Media label="none" media="img" src={som2} />
          <Media label="none" media="img" src={stickers} />
          <Media label="none" media="img" src={card} />

          <Media label="none" media="img" src={som} />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="somGraphic" />
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="somGraphicPar" />
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="none"
            media="video"
            src={require("../../public/works/som/prew.mp4")}
          />
          <Media label="none" media="img" src={post} />
          <Media
            label="none"
            media="video"
            src={require("../../public/works/som/stories.mp4")}
          />
          <Media label="none" media="img" src={flaers} />
          <Media label="none" media="img" src={templates} />
          <Media label="none" media="img" src={site} />
          <Media label="none" media="img" src={oil} />

          <ProjectFooter date="21.09.2020" />
        </section>

        <Suggested>
          <MdProject
            href="/works/CharusLogo"
            srcThumb={thumbCharus}
            altThumb="thumbCharus"
            src={require("../../public/videos/charus.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksCharusLogo" />
            </h1>
          </MdProject>

          <MdProject
            href="/works/Mms"
            src={require("../../public/works/mms/head.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksMmc" />
            </h1>
          </MdProject>

          <MdProject href="/works/Neo" src={neo} type="arrow" media="img">
            <h1>
              <FormattedMessage id="worksNeo" />
            </h1>
          </MdProject>
        </Suggested>
      </div>
    </>
  );
}
