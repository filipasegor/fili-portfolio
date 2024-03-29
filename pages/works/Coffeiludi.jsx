

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

import head from '../../public/works/coffeiludi/head-present.png'
import logo from '../../public/works/coffeiludi/logo.png'
import billboard from '../../public/works/coffeiludi/billboard.png'
import cards from '../../public/works/coffeiludi/cards.png'
import cup from '../../public/works/coffeiludi/cup.png'
import food from '../../public/works/coffeiludi/food.png'
import inst from '../../public/works/coffeiludi/inst.png'
import poster from '../../public/works/coffeiludi/poster.png'
import som from '../../public/som.png'

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
                <FormattedMessage id="coffeeILudiTaskDesc" /> 
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle>
            <h1>
            <FormattedMessage id="coffeeILudiHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="coffeeILudiTask" /> 
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="coffeeILudiTaskPar1" /> 
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={cup}
          />

          <Media
            label="false"
            media="img"
            src={food}
          />

          <Media
            label="false"
            media="img"
            src={inst}
          />

          <Media
            label="false"
            media="img"
            src={cards}
          />

          <Media
            label="false"
            media="img"
            src={poster}
          />

          <Media
            label="false"
            media="img"
            src={billboard}
          />


          <ProjectFooter date="03.08.2018" />
        </section>

        <Suggested>
          <MdProject href="/works/Som" src={som} type="arrow" media="img">
            <h1>
            <FormattedMessage id="worksSom" /> 
            </h1>
          </MdProject>

          <MdProject href="/works/CharusLogo"
          src={require("../../public/videos/charus.mp4")}
          type="arrow"
          media="video">
            <h1>
              <FormattedMessage id="worksCharusLogo" /> 
            </h1>
          </MdProject>
          
        </Suggested>

      </div>
    </>
  )
}
