

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


import head from '../../public/works/trimyas/head-present.png'
import animals from '../../public/works/trimyas/animals.png'
import billboard1 from '../../public/works/trimyas/billboard-1.png'
import billboard from '../../public/works/trimyas/billboard.png'
import packs from '../../public/works/trimyas/packs.png'
import posters from '../../public/works/trimyas/posters.png'
import salami from '../../public/works/trimyas/salami.png'
import shop from '../../public/works/trimyas/shop.png'

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
          taskDesc="Разработать дизайн упаковки"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Тримяс и Золушка Металлист производят и продают колбасы, салями, полуфабрикаты и всякие другие мясные продукты. Для их продукции был сделан дизайн этикеток</h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={animals}
          />

          <DescriptionLayout>
            <DescriptionTitle>
             Задача и цель дизайна
            </DescriptionTitle>
            <DescriptionPar>
              Основная задача графики — показать, что продукция сделана для тех, кто ценит и любит мясо. Поэтому за основу взяты наскальные рисунки, которые отсылают к традициям наших предков. Такая графика хорошо выделяет продукт на фоне остальных и ассоциирует с брендом.
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
            Фирменная графика может использоваться не только на самой упаковке. Она распространяется и хорошо ложится на все носители компании.
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
            src={shop}
          />

          <Media
            label="false"
            media="img"
            src={billboard1}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/trimyas/sausages.mp4")}
          />

          <ProjectFooter date="03.06.2019" />
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
