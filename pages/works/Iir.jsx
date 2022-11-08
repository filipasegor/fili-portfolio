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


import scenarios from '../../public/works/iir/scenarios.png'
import head from '../../public/works/iir/head.png'

import charus_site from '../../public/charus_site.png'



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
         alt="head"
         src={head}
        />

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Спроектировать интерфейсы для инвестиционного продукта Сбера"
          >
          </TaskDesc>

          <MainTitle>
            <h1>В приложении СберБанк Онлайн клиент может получить профессиональную рекомендацию, куда инвестировать</h1>
          </MainTitle>

          <Media
            label="true"
            media="video"
            left="left"
            src={require("../../public/works/iir/profile.mp4")}
          >
          <p>
            Сначала клиент проходит короткий тест на знание экономики и рассказывает про свой опыт. По результатам ответов алгоритм понимает какой перед ним инвестор. Это нужно чтобы инвестиционная рекомендация подходила клиенту
          </p>
          </Media>

          <Media
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/iir/params.mp4")}
          >
          <p>
            Клиенту предлагается настроить под себя портфель
          </p>
          </Media>

          <DescriptionLayout>
            <DescriptionTitle>
             Инвестиционная стратегия
            </DescriptionTitle>
            <DescriptionPar>
            По итогу клиенту предлагается портфель состоящий из разных ценных бумаг. Этот портфель соответствует профилю клиента и его хотелкам. 

            Мы демонстрируем клиенту какие именно бумаги входят в портфель и в каких долях, прогноз доходности и также историческую доходность. Все это помогает клиенту оценить риски и принять решение о покупке
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/iir/products.mp4")}
          />

          <Media
            label="true"
            right="right"
            media="video"
            src={require("../../public/works/iir/proceed.mp4")}
          >
          <p>
            Оформить портфель удобно и быстро в несколько кликов
          </p>
          </Media>

          <Media
            label="true"
            right="right"
            media="img"
            src={scenarios}
          >
          <p>
            Также было спроектировано несколько версий сценариев и они разрабатывались по мере готовности. Таким образом заказчик смог запустить продукт в самые короткие сроки, а не ждать годы на разработку и отлаживание.
          </p>
          </Media>


          <ProjectFooter date="03.10.2021" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusSite"
          srcThumb={charus_site} altThumb="charus_site"
          src={require("../../public/works/charus_site/header_media.mp4")}
          type="arrow"
          media="video">
            <h1>Сайт Чаруса</h1>
          </MdProject>
        </Suggested>

      </div>
    </>
  )
}
