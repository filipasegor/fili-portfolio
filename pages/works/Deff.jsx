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

import logo from '../../public/works/deff/logo.png'
import box from '../../public/works/deff/box.png'
import ad from '../../public/works/deff/ad.png'
import cardboard from '../../public/works/deff/cardboard.png'
import bag from '../../public/works/deff/bag.png'
import boxes from '../../public/works/deff/boxes.png'
import cards from '../../public/works/deff/cards.png'
import paper from '../../public/works/deff/paper.png'
import sink from '../../public/works/deff/sink.png'

import som from '../../public/som.png'
import pack from '../../public/pack.png'

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
         src={require("../../public/works/deff/deff.mp4")}
        />

        <section className={styles.content}>
        <TaskDescLayout>
          <TaskDesc>
            <h3 className={styles.TaskDescName}>
              <FormattedMessage id="taskName" /> 
            </h3>
            <p>
              <FormattedMessage id="deffTaskDesc" /> 
            </p>
          </TaskDesc>
        </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="deffHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
             <FormattedMessage id="deffIdea" /> 
            </DescriptionTitle>
            <DescriptionPar>
            <p>
              <FormattedMessage id="deffIdeaPar1" /> 
            </p>
            <p>
              <FormattedMessage id="deffIdeaPar2" /> 
            </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={cards}
          />

          <Media
            label="false"
            media="img"
            src={paper}
          />

          <Media
            label="false"
            media="img"
            src={box}
          />


          <Media
            label="true"
            media="img"
            right="right"
            src={boxes}
          >
          <p>
            <FormattedMessage id="deffElements" /> 
          </p>
          </Media>

          <Media
            media="img"
            src={bag}
          />

          <Media
            label="true"
            media="img"
            left="left"
            src={cardboard}
          >
          <p>
            <FormattedMessage id="deffPeopleLike" /> 
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={ad}
          />

          <Media
            label="false"
            media="img"
            src={sink}
          />

          <ProjectFooter date="23.08.2022" />
        </section>

        <Suggested>

          <MdProject href="/works/Som" src={som} type="arrow" media="img">
            <h1>
              <FormattedMessage id="worksSom" /> 
            </h1>
          </MdProject>
          
          <MdProject
          href="/works/Trimyas"
          src={pack}
           type="arrow"
           media="img">
            <h1>
              <FormattedMessage id="worksTrimyas" />
            </h1>
          </MdProject>

        </Suggested>

      </div>
    </>
  )
}
