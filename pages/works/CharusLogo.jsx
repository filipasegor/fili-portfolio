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


import logo from '../../public/works/charus_logo/logo.png'
import paper from '../../public/works/charus_logo/paper.png'
import site from '../../public/works/charus_logo/site.png'
import eng from '../../public/works/charus_logo/eng.png'
import box from '../../public/works/charus_logo/box.png'
import label from '../../public/works/charus_logo/label.png'
import textbook from '../../public/works/charus_logo/textbook.png'
import pipe from '../../public/works/charus_logo/pipe.png'
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
         media="video"
         alt="header_img"
         src={require("../../public/videos/charus.mp4")}
        />

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Разработать айдентику и логотип для инженерной компании"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Чарус проектирует и устанавливает системы водоснабжения с 1995 года. Новый логотип и айдентика раскрывают и передают суть их инженерного бизнеса
            и уверенность на рынке.</h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <Media
            label="false"
            media="img"
            src={paper}
          />

          <Media
            label="false"
            media="img"
            src={site}
          />

          <Media
            label="true"
            media="img"
            src={eng}
            right="right"
          >
          <p>
            Также была сделана латинская версия логотип
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={box}
          />

          <Media
            label="false"
            media="img"
            src={label}
          />

          <Media
            label="false"
            media="img"
            src={textbook}
          />

          <Media
            label="true"
            media="img"
            src={pipe}
            right="left"
          >
          <p>
            Знак великолепно себя чувствует в материальном мире, поэтому любой невзрачный объект или предмет становится заметным, когда на нем логотип Чаруса
          </p>
          </Media>

          <ProjectFooter date="03.08.2022" />
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
