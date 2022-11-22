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

import thumbCast from '../../public/works/neosite/thumbCast.png'
import head from '../../public/works/neosite/head.png'

import charus_site from '../../public/charus_site.png'
import thumbNhs from '../../public/thumbNhs.png'

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
         media="img"
         alt="header_img"
         src={head}
        />

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Разработать сайт"
          href="https://www.msk.neoburo.ru"
          linkName="Msk.neoburo.ru"
          linkDesc="Наполняется заказчиком самостоятельно"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Компания НЭО-Бюро занимается независимой оценкой и экспертизой всех видов имущества. Для них была сделана промо-страница, на которой рассказывается про их услуги
            </h1>
          </MainTitle>

          <Media
            srcThumb={thumbCast} altThumb="thumbCast"
            label="false"
            media="video"
            src={require("../../public/works/neosite/cast.mp4")}
          />


          <ProjectFooter date="25.08.2019" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusSite"
          srcThumb={charus_site} altThumb="charus_site"
          src={require("../../public/works/charus_site/header_media.mp4")}
          type="arrow"
          media="video">
            <h1>Сайт Чаруса</h1>
          </MdProject>

          <MdProject
          href="https://www.artlebedev.ru/nighthawk-solutions/site/"
          srcThumb={thumbNhs} altThumb="thumbNhs"
          src={require("../../public/videos/nhs.mp4")}
           type="logo" media="video">
            <h1>Сайт компании «Найтхок солюшнс»</h1>
            <p>Работа студии Артемия Лебедева</p>
          </MdProject>

        </Suggested>


      </div>
    </>
  )
}
