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

import headSom from '../../public/works/som/head-som.png'
import logoBlack from '../../public/works/som/logo-black.png'
import stickers from '../../public/works/som/stickers.png'
import som from '../../public/som.png'
import som1 from '../../public/works/som/som1.png'
import som2 from '../../public/works/som/som2.png'
import som3 from '../../public/works/som/som3.png'
import card from '../../public/works/som/card.png'
import phonecase from '../../public/works/som/case.png'
import flaers from '../../public/works/som/flaers.png'
import oil from '../../public/works/som/oil.png'
import post from '../../public/works/som/post.png'
import site from '../../public/works/som/site.png'
import templates from '../../public/works/som/templates.png'
import thumbCharus from '../../public/thumbCharus.png'



export default function Project(props) {
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
       alt="head-som"
       src={require('../../public/videos/som.mp4')}
      />

      <section className={styles.content}>
        <TaskDesc
        taskName="Задача"
        taskDesc="Разработать айдентику для цифрового журнала"

        href="https://vk.com/somsomsom_io"
        linkName="Посмотреть в реальной жизни"
        linkDesc="Айдентика используется заказчиком самостоятельно"
        >
        </TaskDesc>

        <MainTitle>
          <h1>Сом — медиа о культурных событиях, моде, еде, сериалы, фильмы и про все, что волнует  милиниалов и зумеров в Самаре. Волжский гедонизм в каждой строчке.</h1>
        </MainTitle>

        <Media
          label="none"
          media="img"
          src={logoBlack}
        />
        <DescriptionLayout>
          <DescriptionTitle>
            В духе текущего времени с отсылкой на старую кириллицу
          </DescriptionTitle>
          <DescriptionPar>
            <p>
              Сом рассказывает про то, что волнует молодую адиторию в Самарской области. Поэтому в основе логотипа лежат традицонные элементы из старославянской письменности, которые переосмысленны и преобразованы в современную и трендовую пластику букв.
            </p>
            <p>
             Таким образом, в логотипе раскрывается история русской типографики, и при этом зумерам нестыдно наклеить стикер с логотипом на свой девайс
            </p>
          </DescriptionPar>
        </DescriptionLayout>

        <Media
          label="false"
          media="img"
          src={phonecase}
        />

        <Media
          label="none"
          media="img"
          src={som1}
        />
        <Media
          label="none"
          media="img"
          src={som2}
        />
        <Media
          label="none"
          media="img"
          src={stickers}
        />
        <Media
          label="none"
          media="img"
          src={card}
        />

        <Media
          label="none"
          media="img"
          src={som}
        />


        <DescriptionLayout>
          <DescriptionTitle>
            Фирменная графика
          </DescriptionTitle>
          <DescriptionPar>
            Также был придуман фирменный элемент для графики, напоминающий движение реки Волги. С помощью этого фирменного элемента любой пост в соцсетях визуально выделяется из общего потока и стновится интересным
          </DescriptionPar>
        </DescriptionLayout>

        <Media
          label="none"
          media="video"
          src={require('../../public/works/som/prew.mp4')}
        />
        <Media
          label="none"
          media="img"
          src={post}
        />
        <Media
          label="none"
          media="video"
          src={require('../../public/works/som/stories.mp4')}
        />
        <Media
          label="none"
          media="img"
          src={flaers}
        />
        <Media
          label="none"
          media="img"
          src={templates}
        />
        <Media
          label="none"
          media="img"
          src={site}
        />
        <Media
          label="none"
          media="img"
          src={oil}
        />

          <ProjectFooter date="21.09.2020" />
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
  );
}
