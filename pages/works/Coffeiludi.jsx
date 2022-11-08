

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


import head from '../../public/works/coffeiludi/head-present.png'
import logo from '../../public/works/coffeiludi/logo.png'
import billboard from '../../public/works/coffeiludi/billboard.png'
import cards from '../../public/works/coffeiludi/cards.png'
import cup from '../../public/works/coffeiludi/cup.png'
import food from '../../public/works/coffeiludi/cup.png'
import inst from '../../public/works/coffeiludi/inst.png'
import poster from '../../public/works/coffeiludi/poster.png'
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
          taskDesc="Разработка айдентику и логотипа"
          >
          </TaskDesc>

          <MainTitle>
            <h1>«Кофе и люди» — это уютная кофейня в центре Самары. Там часто собираются незнакомые люди, чтобы попить вкусный кофе, познакомиться с новыми людьми</h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
             Задача и цель айдентики
            </DescriptionTitle>
            <DescriptionPar>
              Концепция кофейни в том, чтобы собирать незнакомых людей в одном месте и знакомить их с друг другом. Это место, где нет политики, насилия и обычных бытовых проблем. Есть только вкусный кофе и добрые люди
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={cup}
          />

          <Media
            label="false"
            media="img"
            src={food}
          />

          <Media
            label="false"
            media="img"
            src={inst}
          />

          <Media
            label="false"
            media="img"
            src={cards}
          />

          <Media
            label="false"
            media="img"
            src={poster}
          />

          <Media
            label="false"
            media="img"
            src={billboard}
          />


          <ProjectFooter date="03.08.2018" />
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
