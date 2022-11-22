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
         src={require("../../public/works/deff/deff.mp4")}
        />

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Разработать айдентику и оформление упаковки"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Дефф производит удобную и эстетичную сантехнику. Разработанная айдентика помогает бизнесу быть узнаваемым и контрастным на прилавках по сравнению с остальными брендами</h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
            Идея айдентики и как она работает мире
            </DescriptionTitle>
            <DescriptionPar>
            <p>
              В знаке сочетаются красивый водоворот и первая буква в названии бренда, образуя уникальный элемент. Таким образом логотип передает суть того, для чего нужна сантехника в доме.
            </p>
            <p>
              А еще этот элемент легко подстраивается под любой физический носитель и делает его контрастным к прочим  и узнаваемым для зрителя
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
            Фирменные элементы оформляют упаковку и легко подстраиваются под разные типы упаковки: премиум товары, небольшие размеры сантехники или товары запакованные в простой пакет или бумагу
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
            Людям нравятся коробочки на всех этапах покупки, они нетерпеливо ждут доставку, чтобы ее поскорее распаковать
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
            <h1>Айдентика<br /> для интеренет издания Сом</h1>
          </MdProject>
          
          <MdProject
          href="/works/Trimyas"
          src={pack}
           type="arrow"
           media="img">
            <h1>Дизайн упаковки мясокомбината Тримяс</h1>
          </MdProject>

        </Suggested>

      </div>
    </>
  )
}
