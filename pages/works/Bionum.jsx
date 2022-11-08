

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


import head from '../../public/works/bionum/head-present.png'
import logo from '../../public/works/bionum/logo.png'
import billboard from '../../public/works/bionum/billboard.png'
import book from '../../public/works/bionum/book.png'

import som from '../../public/som.png'

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
          taskDesc="Разработать айдентику и дизайна сайта"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Бионум — это сервис, который рассказывает про то, как обычные бытовые предметы влияют на окружающую среду и на жизнь человека</h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
             Задача и цель дизайна
            </DescriptionTitle>
            <DescriptionPar>
              Отличие Бионума от остальных изданий про экологию, это то, что там просто и по-научному рассказывается про влияние предметов. Поэтому в фирменной графике и логотипе отображается слияние науки и простоты. Предметы являются основой графики и хорошо выделяются в контексте всего визуального контента
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={billboard}
          />

          <Media
            label="false"
            media="img"
            src={book}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/bionum/gargage.mp4")}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/bionum/circle.mp4")}
          />

          <Media
            label="true"
            media="video"
            src={require("../../public/works/bionum/slider.mp4")}
            right="right"
          >
          <p>
            В Бионуме собраны все привычные человеку домашние и бытовые предметы. На каждый предмет пишется отдельная статья, где и рассказывается про его влияние на человека и среду. Любой желающий может добавить новый предмет и написать к нему статью. А редакция все проверит и выложит.
          </p>
          </Media>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/bionum/article.mp4")}
          />

          <Media
            label="left"
            media="video"
            src={require("../../public/works/bionum/search.mp4")}
            right="right"
          >
          <p>
            Поиск и загрузка на сайте происходит в фирменном стиле Бионума с классной аннимацией
          </p>
          </Media>


          <ProjectFooter date="22.04.2019" />
        </section>

        <Suggested>
          <MdProject href="/works/Som" src={som} type="arrow" media="img">
            <h1>Айдентика<br /> для интеренет издания Сом</h1>
          </MdProject>
        </Suggested>

      </div>
    </>
  )
}
