

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

import head from '../../public/works/trimyas/head-present.png'
import animals from '../../public/works/trimyas/animals.png'
import billboard1 from '../../public/works/trimyas/billboard-1.png'
import billboard from '../../public/works/trimyas/billboard.png'
import packs from '../../public/works/trimyas/packs.png'
import posters from '../../public/works/trimyas/posters.png'
import salami from '../../public/works/trimyas/salami.png'
import shop from '../../public/works/trimyas/shop.png'
import wood from '../../public/works/trimyas/wood.png'
import meatroll from '../../public/works/trimyas/meatroll.png'
import thumbSausages from '../../public/works/trimyas/thumbSausages.png'

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
                <FormattedMessage id="trimyasTaskName" /> 
              </p>
            </TaskDesc>
            <TaskLink>
              <Link href="https://tolyatty.ru/text/longread/2021/11/02/70230482/">
                <a className={styles.TaskDescLink}>
                  <FormattedMessage id="trimyasLinkName" /> 
                </a>
              </Link>
                <p>
                  <FormattedMessage id="trimyasLinkDesc" /> 
                </p>
            </TaskLink>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="trimyasHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={animals}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="trimyasTask" /> 
            </DescriptionTitle>
            <DescriptionPar>
              <FormattedMessage id="trimyasTaskPar1" /> 
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={salami}
          />

          <Media
            label="false"
            media="img"
            src={packs}
          />

          <Media
            label="true"
            media="img"
            src={billboard}
            right="right"
          >
          <p>
            <FormattedMessage id="trimyasUsage" /> 
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={posters}
          />

          <Media
            label="false"
            media="img"
            src={billboard1}
          />

          <Media
            label="false"
            media="img"
            src={wood}
          />

          <Media
            label="false"
            media="img"
            src={meatroll}
          />

          <Media
            srcThumb={thumbSausages} altThumb="thumbCast"
            label="false"
            media="video"
            src={require("../../public/works/trimyas/sausages.mp4")}
          />

          <ProjectFooter date="03.06.2019" />
        </section>

        <Suggested>
          <MdProject href="/works/Som" src={som} type="arrow" media="img">
            <h1>
              <FormattedMessage id="worksSom" />               
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
