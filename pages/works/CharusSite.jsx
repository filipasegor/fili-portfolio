import Head from 'next/head'
import Image from 'next/image'
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
import TaskLink from '../components/works/TaskLink'


import pages from '../../public/works/charus_site/pages.png'
import ds from '../../public/works/charus_site/ds.mp4'
import pies from '../../public/works/charus_site/pies.png'

import thumbMain_Page from '../../public/works/charus_site/thumbMain_Page.png'
import thumbPages from '../../public/works/charus_site/thumbPages.png'
import thumbDs from '../../public/works/charus_site/thumbDs.png'

import thumbCharus from '../../public/thumbCharus.png'
import thumbNhs from '../../public/thumbNhs.png'
import thumbShmot from '../../public/thumbShmot.png'

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
         media="video"
         alt="header_img"
         src={require("../../public/works/charus_site/header_media.mp4")}
        />

        <section className={styles.content}>
    
          <TaskDescLayout>
            <TaskDesc>
              <h3 className={styles.TaskDescName}>
                <FormattedMessage id="taskName" /> 
              </h3>
              <p>
                <FormattedMessage id="charusTaskDesc" /> 
              </p>
            </TaskDesc>
            <TaskLink>
              <Link href="https://www.charus.ru/">
                <a className={styles.TaskDescLink}>
                  Charus.ru
                </a>
              </Link>
                <p>
                  <FormattedMessage id="charuslinkDesc" /> 
                </p>
            </TaskLink>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="charusSiteMainHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            srcThumb={thumbMain_Page} altThumb="thumbMain_Page"
            label="false"
            media="video"
            src={require('../../public/works/charus_site/main_page.mp4')}
          />

          <Media
            label="true"
            media="img"
            src={pages}
            right="right"
          >
          <p>
           <FormattedMessage id="charusSiteHomePage" /> 
          </p>
          </Media>

          <Media
            srcThumb={thumbPages} altThumb="thumbMain_Page"
            label="true"
            media="video"
            src={require('../../public/works/charus_site/pages_video.mp4')}
            left="left"
          >
          <p>
            <FormattedMessage id="charusSiteScreenSaver" /> 
          </p>
          </Media>

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="charusSiteDS" /> 
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="charusSiteComponents" /> 
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            srcThumb={thumbDs} altThumb="thumbDs"
            label="false"
            media="video"
            src={ds}
          />

          <Media
            label="true"
            media="img"
            src={pies}
            right="right"
          >
          <p>
            <FormattedMessage id="charusSiteAdditionalPages" /> 
          </p>
          </Media>
          <ProjectFooter date="15.07.2022" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusLogo"
          srcThumb={thumbCharus} altThumb="thumbCharus"
          src={require("../../public/videos/charus.mp4")}
          type="arrow"
          media="video">
            <h1>
              <FormattedMessage id="worksCharusLogo" />
            </h1>
          </MdProject>

          <LgProject
          href="https://www.artlebedev.ru/narayone/"
          srcThumb={thumbShmot} altThumb="thumbShmot"
          src={require("../../public/videos/narayone.mp4")}
          type="logo"
          media="video">
            <h1>
              <FormattedMessage id="worksNarayone" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </LgProject>

          <MdProject
          href="https://www.artlebedev.ru/nighthawk-solutions/site/"
          srcThumb={thumbNhs} altThumb="thumbNhs"
          src={require("../../public/videos/nhs.mp4")}
           type="logo" media="video">
            <h1>
              <FormattedMessage id="worksNhs" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </MdProject>
        </Suggested>

      </div>
    </>
  )
}
