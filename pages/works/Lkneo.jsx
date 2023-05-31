

import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/Project.module.scss'

import HeadMedia from '../components/works/HeadMedia'
import Media from '../components/works/Media'
import MainTitle from '../components/works/MainTitle'
import DescriptionLayout from '../components/works/DescriptionLayout'
import DescriptionPar from '../components/works/DescriptionPar'
import DescriptionTitle from '../components/works/DescriptionTitle'
import MdProject from '../components/_MdProject'
import LgProject from '../components/_LgProject'
import Suggested from '../components/works/Suggested'
import ProjectFooter from '../components/works/ProjectFooter'

import TaskDescLayout from '../components/works/TaskDescLayout'
import TaskDesc from '../components/works/TaskDesc'

import head from '../../public/works/lkneo/lk-head-present 1.png'
import site from '../../public/works/lkneo/site.png'

import charus_site from '../../public/charus_site.png'
import thumbNhs from '../../public/thumbNhs.png'
import rkeeper from '../../public/rkeeper.png'

import { FormattedMessage } from "react-intl";

export default function Project(props){
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Egor Filipas</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeadMedia
         media="img"
         alt="header_img"
         src={head}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3 className={styles.TaskDescName}>
                <FormattedMessage id="taskName" /> 
              </h3>
              <p>
                <FormattedMessage id="lkTaskDesc" /> 
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="lkHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/lkneo/main.mp4")}
          >
            <p>
              <FormattedMessage id="lkUX" />               
            </p>
          </Media>


          <Media
            label="true"
            left="left"
            media="video"
            src={require("../../public/works/lkneo/creation.mp4")}
          >
            <p>
              <FormattedMessage id="lkRequests" /> 
            </p>
          </Media>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/lkneo/requests.mp4")}
          />

          <Media
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/lkneo/mobile.mp4")}
          >
            <p>
              <FormattedMessage id="lkUi" /> 
            </p>
          </Media>


          <Media
            label="true"
            left="left"
            media="img"
            src={site}
          >
            <p>
              <FormattedMessage id="lkPromoPage" /> 
            </p>
          </Media>

          <ProjectFooter date="28.12.2018" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusSite"
          srcThumb={charus_site} altThumb="charus_site"
          src={require("../../public/works/charus_site/header_media.mp4")}
          type="arrow"
          media="video">
            <h1>
              <FormattedMessage id="worksCharusSite" /> 
            </h1>
          </MdProject>

          <LgProject href="https://www.artlebedev.ru/rkeeper/interface/" alt="rkeeper-img" src={rkeeper} type="logo" media="img">
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
  )
}
