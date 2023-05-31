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

import logo from '../../public/works/charus_logo/logo.png'
import paper from '../../public/works/charus_logo/paper.png'
import site from '../../public/works/charus_logo/site.png'
import eng from '../../public/works/charus_logo/eng.png'
import box from '../../public/works/charus_logo/box.png'
import label from '../../public/works/charus_logo/label.png'
import textbook from '../../public/works/charus_logo/textbook.png'
import pipe from '../../public/works/charus_logo/pipe.png'


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
         media="video"
         alt="header_img"
         src={require("../../public/videos/charus.mp4")}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3 className={styles.TaskDescName}>
                <FormattedMessage id="taskName" /> 
              </h3>
              <p>
                <FormattedMessage id="charusTaskName" /> 
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="charusLogoHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <Media
            label="false"
            media="img"
            src={paper}
          />

          <Media
            label="false"
            media="img"
            src={site}
          />

          <Media
            label="true"
            media="img"
            src={eng}
            right="right"
          >
          <p>
           <FormattedMessage id="charusLogoEng" /> 
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={box}
          />

          <Media
            label="false"
            media="img"
            src={label}
          />

          <Media
            label="false"
            media="img"
            src={textbook}
          />

          <Media
            label="true"
            media="img"
            src={pipe}
            right="left"
          >
          <p>
            <FormattedMessage id="charusEnd" /> 
          </p>
          </Media>

          <ProjectFooter date="03.08.2022" />
        </section>

        <Suggested>
          <MdProject href="/works/Som" src={som} type="arrow" media="img">
            <h1>
              <FormattedMessage id="worksSom" /> 
            </h1>
          </MdProject>

          <MdProject href="/works/Mms"
          src={require("../../public/works/mms/head.mp4")}
          type="arrow"
          media="video">
            <h1>
              <FormattedMessage id="worksMmc" /> 
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
