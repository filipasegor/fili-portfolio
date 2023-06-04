import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Project.module.scss'

import HeadMedia from '../components/works/HeadMedia'
import Media from '../components/works/Media'
import MainTitle from '../components/works/MainTitle'
import DescriptionLayout from '../components/works/DescriptionLayout'
import TextLayout from '../components/works/TextLayout'
import DescriptionPar from '../components/works/DescriptionPar'
import DescriptionTitle from '../components/works/DescriptionTitle'
import MdProject from '../components/_MdProject'
import LgProject from '../components/_LgProject'
import Suggested from '../components/works/Suggested'
import ProjectFooter from '../components/works/ProjectFooter'
import SubHeading from '../components/works/SubHeading'
import Video from '../components/works/Video'

import TaskDescLayout from '../components/works/TaskDescLayout'
import TaskDesc from '../components/works/TaskDesc'
import TaskLink from '../components/works/TaskLink'

import tasks from '../../public/works/sberspp/tasks.png'
import PrimeResults from '../../public/works/sberspp/PrimeResults.png'
import MainResults from '../../public/works/sberspp/MainResults.png'
import Crosses from '../../public/works/sberspp/Crosses.png'
import ZlsResults from '../../public/works/sberspp/ZlsResults.png'
import allPages from '../../public/works/sberspp/allPages.png'

import thumb_sberProducts from '../../public/works/sberspp/thumb_sberProducts.png'
import thumb_start from '../../public/works/sberspp/thumb_start.png'
import thumb_zls from '../../public/works/sberspp/thumb_zls.png'
import thumb_alloperations from '../../public/works/sberspp/thumb_alloperations.png'
import thumb_desposits from '../../public/works/sberspp/thumb_desposits.png'
import thumb_prime  from '../../public/works/sberspp/thumb_prime.png'
import thumb_ds  from '../../public/works/sberspp/thumb_ds.png'
import thumb_crosses  from '../../public/works/sberspp/thumb_crosses.png'
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
         src={require("../../public/videos/SberCover.mp4")}
        />
        

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>
                <FormattedMessage id="taskName" />
              </h3>
              <p>
               <FormattedMessage id="sberTaskDesc" />
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="sberH1" />
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="sberP1" />
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            srcThumb={thumb_sberProducts} 
            altThumb="sberTest"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/SberProducts.mp4')}
          />

          <Media
            label="false"
            media="img"
            src={tasks}
            alt="tasks"
          />


          <Video
            label="true"
            left="left"
            srcThumb={thumb_start} 
            altThumb="start"
            src={require('../../public/works/sberspp/start.mp4')}
            min="0"
            max="26"
          >
          <p>
           <FormattedMessage id="sberP2" />
          </p>
          </Video>

          <Video
            label="true"
            left="left"
            srcThumb={thumb_alloperations} 
            altThumb="alloperations"
            src={require('../../public/works/sberspp/alloperations.mp4')}
            min="0"
            max="49"
          >
          <p>
            <FormattedMessage id="sberP3" />
          </p>
          </Video>

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="sberH2" />
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="sberP4" />
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="video"
            src={require('../../public/works/sberspp/building.mp4')}
          />

          <Media
            srcThumb={thumb_ds} 
            altThumb="thumb_ds"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/ds.mp4')}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="sberH3" />
            </DescriptionTitle>

            <TextLayout>
              <DescriptionPar heading="heading">
                <FormattedMessage id="worksTask" />
              </DescriptionPar>
              <DescriptionPar lastChild="lastChild">
                <FormattedMessage id="sberP16" />
              </DescriptionPar>
              <DescriptionPar heading="heading">
                <FormattedMessage id="worksProblems" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP5" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP6" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP7" />
              </DescriptionPar>
            </TextLayout>
          </DescriptionLayout>
          

          <Video
            srcThumb={thumb_prime} 
            altThumb="prime"
            src={require('../../public/works/sberspp/prime.mp4')}
            min="0"
            max="25"
          />

          <SubHeading>
            <FormattedMessage id="sberH4" />
          </SubHeading>

          <Media
            label="false"
            media="img"
            src={PrimeResults}
            alt="tasks"
          />

          <DescriptionLayout>
            <DescriptionTitle> 
              <FormattedMessage id="sberH5" />
            </DescriptionTitle>

            <TextLayout>
              <DescriptionPar heading="heading">
                <FormattedMessage id="worksTask" />
              </DescriptionPar>
              <DescriptionPar lastChild="lastChild">
                <FormattedMessage id="sberTask2" />
              </DescriptionPar>
              <DescriptionPar heading="heading">
                <FormattedMessage id="worksProblems" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP8" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP9" />
              </DescriptionPar>
            </TextLayout>
          </DescriptionLayout>

          <Video
            srcThumb={thumb_desposits} 
            altThumb="deposits"
            src={require('../../public/works/sberspp/deposits.mp4')}
            min="0"
            max="38"
          />


          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="sberH6" />
            </DescriptionTitle>

            <TextLayout>
              <DescriptionPar heading="heading">
                <FormattedMessage id="worksTask" />
              </DescriptionPar>
              <DescriptionPar lastChild="lastChild">
                <FormattedMessage id="sberContructorTask" />
              </DescriptionPar>
              <DescriptionPar heading="heading">
                <FormattedMessage id="worksProblems" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP10" />
              </DescriptionPar>
              <DescriptionPar>
                <FormattedMessage id="sberP11" />
              </DescriptionPar>
            </TextLayout>
          </DescriptionLayout>

          <Video
            label="false"
            srcThumb={thumb_zls} 
            altThumb="zls"
            src={require('../../public/works/sberspp/zls.mp4')}
            min="0"
            max="36"
          />

          <Media
            label="false"
            media="img"
            src={ZlsResults}
            alt="ZlsResults"
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="sberH7" />
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="sberP12" />
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={Crosses}
            alt="Crosses"
          />

          <Video
            label="true"
            left="left"
            srcThumb={thumb_crosses} 
            altThumb="none"
            src={require('../../public/works/sberspp/crosses.mp4')}
            min="0"
            max="40"
          >
            <p>
              <FormattedMessage id="sberP13" />
            </p>
          </Video> 

          <SubHeading>
            <FormattedMessage id="sberH8" />
          </SubHeading>

          <Media
            label="false"
            media="img"
            src={MainResults}
            alt="MainResults"
          />

          <Media
            label="true"
            right="r"
            altThumb="start"
            src={allPages}
          >
            <p>
            <FormattedMessage id="sberP14" />
            </p>
          </Media>
          
          <ProjectFooter date="15.03.2023" />
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
