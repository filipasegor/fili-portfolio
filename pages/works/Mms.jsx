import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/Project.module.scss'

import HeadMedia from '../components/works/HeadMedia'
import TaskDesc from '../components/works/TaskDesc'
import Media from '../components/works/Media'
import MainTitle from '../components/works/MainTitle'
import DescriptionLayout from '../components/works/DescriptionLayout'
import DescriptionPar from '../components/works/DescriptionPar'
import DescriptionTitle from '../components/works/DescriptionTitle'
import MdProject from '../components/_MdProject'
import Suggested from '../components/works/Suggested'
import ProjectFooter from '../components/works/ProjectFooter'


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

export default function Project(props){
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Fili</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeadMedia
         media="video"
         alt="header_img"
         src={require("../../public/works/mms/head.mp4")}
        />

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Разработать айдентику для ммиграционного центра"
          >
          </TaskDesc>

          <MainTitle>
            <h1>ММС помогает мигрантам с работой, документами и с прочими вопросами адаптации в России. А новая айдентика помогает эффективно и четко рассказывать про свои услуги</h1>
          </MainTitle>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/mms/logo.mp4")}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              Задача и цель айдентики
            </DescriptionTitle>
            <DescriptionPar>
              Мигранты испытывают страх и тревогу, потому что им сложно адаптироваться: как найти работу, понять какие нужны для этого документы, куда их нести, как получить патент для работы и так далее. Поэтому основная цель визуальной коммуникации — понятно и четко доносить сигналы мигрантам о том, как им решить свои проблемы с работой и документами
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
            Такая айдентику легко используется для оформления корпоративных визиток, писем, карточек, бланков и так далее
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
            Также была сделана латинская версия логотипа
          </p>
          </Media>

          <Media
            label="true"
            media="img"
            right="right"
            src={sign2}
          >
          <p>
            Стрелочка в логотипе делает знак самостоятельным элементом навигации. Поэтому логотип достаточно просто разместить на любой вывеске или на любом другом элементе навигации и сразу понятно куда идти
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
            Также были сделаны фирменные элементы интерфейсов, использующие идею айдентики. Такие штучки могут быть только на сайте или в приложении ММС, потому что они уникальны
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
            <h1>Айдентика<br /> для компании Чарус</h1>
          </MdProject>
        </Suggested>

      </div>
    </>
  )
}
