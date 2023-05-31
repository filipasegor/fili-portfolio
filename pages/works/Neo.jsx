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

import head from '../../public/works/neo/head.png'
import logo from '../../public/works/neo/logo.png'
import billboard from '../../public/works/neo/billboard.png'
import book from '../../public/works/neo/book.png'
import books from '../../public/works/neo/books.png'
import calendar from '../../public/works/neo/calendar.png'
import id from '../../public/works/neo/id.png'
import magazine from '../../public/works/neo/magazine.png'
import magazine2 from '../../public/works/neo/magazine2.png'
import pack from '../../public/works/neo/pack.png'
import paper from '../../public/works/neo/paper.png'
import sign from '../../public/works/neo/sign.png'
import sign2 from '../../public/works/neo/sign2.png'
import tshirt from '../../public/works/neo/tshirt.png'
import logos from '../../public/works/neo/logos.png'

import thumbCharus from '../../public/thumbCharus.png'
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
              <h3>
                <FormattedMessage id="taskName" /> 
              </h3>
              <p>
                <FormattedMessage id="neoTaskDesc" /> 
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle>
            <h1>
              <FormattedMessage id="neoHeadline" /> 
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="neoTask" />
            </DescriptionTitle>
            <DescriptionPar>
            <p>
              <FormattedMessage id="neoTaskPar1" />
            </p>
            <p>
              <FormattedMessage id="neoTaskPar2" />
            </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={sign}
          />

          <Media
            label="true"
            media="img"
            right="right"
            src={logos}
          >
          <p>
            <FormattedMessage id="neoContex" />
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={pack}
          />

          <Media
            label="true"
            media="img"
            right="right"
            src={paper}
          >
          <p>
            <FormattedMessage id="neoPrint" />
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={sign2}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              <FormattedMessage id="neoIdea" />
            </DescriptionTitle>
            <DescriptionPar>
            <p>
              <FormattedMessage id="neoIdeaPar1" />
            </p>
            <p>
              <FormattedMessage id="neoIdeaPar2" />
            </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/main-theme.mp4")}
          />

          <Media
            label="false"
            media="img"
            src={books}
          />

          <Media
            label="false"
            media="img"
            src={tshirt}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/main-value.mp4")}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/stats.mp4")}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/const.mp4")}
          />

          <Media
            label="false"
            media="img"
            src={book}
          />

          <Media
            label="false"
            media="img"
            src={calendar}
          />

          <Media
            label="false"
            media="img"
            src={magazine2}
          />

          <Media
            label="false"
            media="img"
            src={billboard}
          />

          <Media
            label="false"
            media="img"
            src={id}
          />

          <ProjectFooter date="25.08.2019" />
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

          <MdProject href="/works/Mms"
          src={require("../../public/works/mms/head.mp4")}
          type="arrow"
          media="video">
            <h1>
            <FormattedMessage id="worksMmc" />
            </h1>
          </MdProject>

          <MdProject
          href="/works/Som"
          srcThumb={som} altThumb="thumbSom"
          src={require('../../public/videos/som.mp4')}
          type="arrow" media="video">
            <h1>
            <FormattedMessage id="worksSom" />
            </h1>
          </MdProject>

        </Suggested>

      </div>
    </>
  )
}
