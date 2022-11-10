import Head from 'next/head'
import Image from 'next/image'
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


import pages from '../../public/works/charus_site/pages.png'
import ds from '../../public/works/charus_site/ds.mp4'
import pies from '../../public/works/charus_site/pies.png'

import thumbMain_Page from '../../public/works/charus_site/thumbMain_Page.png'
import thumbPages from '../../public/works/charus_site/thumbPages.png'
import thumbDs from '../../public/works/charus_site/thumbDs.png'

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
         src={require("../../public/works/charus_site/header_media.mp4")}
        />

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Спроектировать сайт для инженерной компнии"
          href="https://www.charus.ru/"
          linkName="Charus.ru"
          linkDesc="Собирается заказчиком самостоятельно"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Чарус проектирует и устанавливает системы коммунникации и водоснабжения, поставляет и ремонтирует сантехнику</h1>
          </MainTitle>

          <Media
            srcThumb={thumbMain_Page} altThumb="thumbMain_Page"
            label="false"
            media="video"
            src={require('../../public/works/charus_site/main_page.mp4')}
          />

          <Media
            label="true"
            media="img"
            src={pages}
            right="right"
          >
          <p>На сайте продемонстрированы все услуги, которые оказываает компания</p>
          </Media>

          <Media
            srcThumb={thumbPages} altThumb="thumbMain_Page"
            label="true"
            media="video"
            src={require('../../public/works/charus_site/pages_video.mp4')}
            left="left"
          >
          <p>Посетителя сайта встречает крутая заставка на страницах услуг</p>
          </Media>

          <DescriptionLayout>
            <DescriptionTitle>
            Дизайн система и автоматизация сборки страниц
            </DescriptionTitle>
            <DescriptionPar>
            Мы разработали система компонентов, из которых собираются все страницы на сайте. Таким образом экономится куча времени и ресурсов на сборку страниц. Также, спроектировали шаблон, по которому рассказываем про услуги. По этой единой структуре заказчику будет легко самостоятельно добавлять новые услуги в будущем.
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            srcThumb={thumbDs} altThumb="thumbDs"
            label="false"
            media="video"
            src={ds}
          />

          <Media
            label="true"
            media="img"
            src={pies}
            right="right"
          >
          <p>Также было задизайнено куча вспомогательных страниц
          </p>
          </Media>
          <ProjectFooter date="15.07.2022" />
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
