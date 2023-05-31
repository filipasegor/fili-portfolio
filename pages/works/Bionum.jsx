

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
import Suggested from '../components/works/Suggested'
import ProjectFooter from '../components/works/ProjectFooter'

import TaskDescLayout from '../components/works/TaskDescLayout'
import TaskDesc from '../components/works/TaskDesc'

import head from '../../public/works/bionum/head-present.png'
import logo from '../../public/works/bionum/logo.png'
import billboard from '../../public/works/bionum/billboard.png'
import book from '../../public/works/bionum/book.png'
import thumbArticle from '../../public/works/bionum/thumbArticle.png'
import thumbGargage from '../../public/works/bionum/thumbGargage.png'
import thumbSearch from '../../public/works/bionum/thumbSearch.png'
import thumbSlider from '../../public/works/bionum/thumbSlider.png'

import som from '../../public/som.png'
import neo from '../../public/neo.png'

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
                <FormattedMessage id="bionumTaskDesc" /> 
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="bionumHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="bionumTask" /> 
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="bionumTaskPar1" /> 
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={billboard}
          />

          <Media
            label="false"
            media="img"
            src={book}
          />

          <Media
            srcThumb={thumbGargage} altThumb="thumbGargage"
            label="false"
            media="video"
            src={require("../../public/works/bionum/gargage.mp4")}
          />

          <Media
            srcThumb={thumbSearch} altThumb="thumbSearch"
            label="false"
            media="video"
            src={require("../../public/works/bionum/circle.mp4")}
          />

          <Media
            srcThumb={thumbSlider} altThumb="thumbSlider"
            label="true"
            media="video"
            src={require("../../public/works/bionum/slider.mp4")}
            right="right"
          >
          <p>
            <FormattedMessage id="bionumAbout" />
          </p>
          </Media>

          <Media
            srcThumb={thumbArticle} altThumb="thumbArticle"
            label="false"
            media="video"
            src={require("../../public/works/bionum/article.mp4")}
          />

          <Media
            srcThumb={thumbSearch} altThumb="thumbSearch"
            label="true"
            media="video"
            src={require("../../public/works/bionum/search.mp4")}
            right="right"
          >
          <p>
            <FormattedMessage id="bionumSearch" />
          </p>
          </Media>


          <ProjectFooter date="22.04.2019" />
        </section>

        <Suggested>
          <MdProject href="/works/Som" src={som} type="arrow" media="img">
            <h1>
            <FormattedMessage id="worksSom" />
            </h1>
          </MdProject>

          <MdProject
          href="/works/Neo"
          src={neo}
          type="arrow" media="img">
          <h1>
          <FormattedMessage id="worksNeo" />
          </h1>
          </MdProject>


        </Suggested>

      </div>
    </>
  )
}
