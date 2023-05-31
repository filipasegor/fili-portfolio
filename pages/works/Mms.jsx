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
import TaskLink from '../components/works/TaskLink'

import arrow from '../../public/works/mms/arrow.png'
import billboard from '../../public/works/mms/billboard.png'
import bus from '../../public/works/mms/bus.png'
import card from '../../public/works/mms/card.png'
import eng from '../../public/works/mms/eng.png'
import mail from '../../public/works/mms/mail.png'
import paper from '../../public/works/mms/paper.png'
import posters from '../../public/works/mms/posters.png'
import sign from '../../public/works/mms/sign.png'
import sign2 from '../../public/works/mms/sign2.png'
import sign3 from '../../public/works/mms/sign3.png'
import stairs from '../../public/works/mms/stairs.png'
import two from '../../public/works/mms/two.png'
import wall from '../../public/works/mms/wall.png'
import wear from '../../public/works/mms/wear.png'
import thumbCharus from '../../public/thumbCharus.png'

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
         src={require("../../public/works/mms/head.mp4")}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3 className={styles.TaskDescName}>
                <FormattedMessage id="taskName" /> 
              </h3>
              <p>
                <FormattedMessage id="mmcTaskDesc" /> 
              </p>
            </TaskDesc>
            <TaskLink>
              <Link href="https://mmc.help">
                <a className={styles.TaskDescLink}>
                  mmc.help
                </a>
              </Link>
                <p>
                  <FormattedMessage id="mmcLinkDesc" /> 
                </p>
            </TaskLink>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="mmcHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/mms/logo.mp4")}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="mmcTask" /> 
            </DescriptionTitle>
            <DescriptionPar>
            <p>
              <FormattedMessage id="mmcTaskPar1" /> 
            </p>
            <p>
              <FormattedMessage id="mmcTaskPar2" /> 
            </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={sign3}
          />

          <Media
            label="false"
            media="img"
            src={billboard}
          />

          <Media
            label="false"
            media="img"
            src={stairs}
          />

          <Media
            label="false"
            media="img"
            src={wear}
          />

          <Media
            label="false"
            media="img"
            src={bus}
          />

          <Media
            label="false"
            media="img"
            src={two}
          />

          <Media
            label="true"
            media="img"
            right="right"
            src={card}
          >
          <p>
            <FormattedMessage id="mmcPaper" /> 
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={paper}
          />

          <Media
            label="false"
            media="img"
            src={mail}
          />

          <Media
            label="true"
            media="img"
            left="left"
            src={eng}
          >
          <p>
            <FormattedMessage id="mmcLatin" /> 
          </p>
          </Media>

          <Media
            label="true"
            media="img"
            right="right"
            src={sign2}
          >
          <p>
            <FormattedMessage id="mmcArrow" /> 
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={wall}
          />

          <Media
            label="false"
            media="img"
            src={arrow}
          />

          <Media
            label="true"
            media="video"
            left="left"
            src={require("../../public/works/mms/interface.mp4")}
          >
          <p>
            <FormattedMessage id="mmcInterfaces" /> 
          </p>
          </Media>

          <ProjectFooter date="04.02.2021" />
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

          <MdProject href="/works/Deff"
          src={require("../../public/works/deff/deff.mp4")}
          type="arrow" media="video">
            <h1>
              <FormattedMessage id="worksDeff" /> 
            </h1>
          </MdProject>
          
        </Suggested>

      </div>
    </>
  )
}
