

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
import LgProject from '../components/_LgProject'
import Suggested from '../components/works/Suggested'
import ProjectFooter from '../components/works/ProjectFooter'

import head from '../../public/works/lkneo/lk-head-present 1.png'
import site from '../../public/works/lkneo/site.png'

import charus_site from '../../public/charus_site.png'
import thumbNhs from '../../public/thumbNhs.png'
import rkeeper from '../../public/rkeeper.png'

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
          taskDesc="Спроектировать интерфейсы и дизайн сайта"
          >
          </TaskDesc>

          <MainTitle>
            <h1>
            Компания НЭО-Бюро занимается независимой оценкой и экспертизой всех видов имущества. А личный кабинет это их сервис, в котором партнеры бюро оставляют заявки на нужные услуги
            </h1>
          </MainTitle>

          <Media
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/lkneo/main.mp4")}
          >
            <p>
              В личном кабинете можно легко и быстро оставлять заявки на нужные услуги, загружать необходимые фотки и документы и вводить данные клиента
            </p>
          </Media>


          <Media
            label="true"
            left="left"
            media="video"
            src={require("../../public/works/lkneo/creation.mp4")}
          >
            <p>
              Все созданные заявки находятся в одном месте. Их удобно контролировать и проверять готовность. Также, можно добавлять новые файлы.
            </p>
          </Media>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/lkneo/requests.mp4")}
          />

          <Media
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/lkneo/mobile.mp4")}
          >
            <p>
              Интерфейс личного кабинета спроектирован так, чтобы им было удобно пользоваться на смартфоне
            </p>
          </Media>


          <Media
            label="true"
            left="left"
            media="img"
            src={site}
          >
            <p>
              Также, была задизайнена страница, на которой понятно рассказывается про все преимущества личного кабинета
            </p>
          </Media>

          <ProjectFooter date="28.12.2018" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusSite"
          srcThumb={charus_site} altThumb="charus_site"
          src={require("../../public/works/charus_site/header_media.mp4")}
          type="arrow"
          media="video">
            <h1>Сайт Чаруса</h1>
          </MdProject>

          <LgProject href="https://www.artlebedev.ru/rkeeper/interface/" alt="rkeeper-img" src={rkeeper} type="logo" media="img">
            <h1>Интерфейс приложения «Эркипер»</h1>
            <p>Работа студии Артемия Лебедева</p>
          </LgProject>
        </Suggested>

      </div>
    </>
  )
}
