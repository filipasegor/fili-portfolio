import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import LgProject from './components/_LgProject'
import MdProject from './components/_MdProject'
import SmProject from './components/_SmProject'
import styles from '../styles/Works.module.scss'

import blackLogo from '../public/black-logo.svg'
import rkeeper from '../public/rkeeper.png'
import charus_site from '../public/charus_site.png'
import bashnya from '../public/bashnya.png'
import som from '../public/som.png'
import olimpatlet from '../public/olimp_atlet.png'
import beans from '../public/beans.png'
import neo from '../public/neo.png'
import lk from '../public/lk.png'
import bionum from '../public/bionum.png'
import cil from '../public/cil.png'
import pack from '../public/pack.png'

import thumbShmot from '../public/thumbShmot.png'
import thumbCharus from '../public/thumbCharus.png'
import thumbNhs from '../public/thumbNhs.png'
import thumbBezlimit from '../public/thumbBezlimit.png'
import thumbDeff from '../public/thumbDeff.png'
import thumbIir from '../public/thumbIir.png'
import thumbMMS from '../public/thumbMMS.png'
import thumbLip from '../public/thumbLip.png'
import thumbRunup from '../public/thumbRunup.png'
import thumbNeosite from '../public/thumbNeosite.png'



export default function Projects(props) {

  return (
    <>
    <div className={styles.container}>
    <div className={styles.gradient}>
    </div>
      <Head>
        <title>Fili</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.Projects}>
        <div className={styles.headlineContainer}>
          <h1 className={styles.headline}>
            Придумываю, проектирую, дизайню, разрабатываю и держусь молодцом
          </h1>
        </div>

        <LgProject
        href="https://www.artlebedev.ru/narayone/"
        srcThumb={thumbShmot} altThumb="thumbShmot"
        src={require("../public/videos/narayone.mp4")}
        type="logo"
        media="video">
          <h1>Сайт проекта «На районе»</h1>
          <p>Работа студии Артемия Лебедева</p>
        </LgProject>


        <LgProject href="https://www.artlebedev.ru/rkeeper/interface/" alt="rkeeper-img" src={rkeeper} type="logo" media="img">
          <h1>Интерфейс приложения «Эркипер»</h1>
          <p>Работа студии Артемия Лебедева</p>
        </LgProject>

        <MdProject href="/works/CharusSite"
        srcThumb={charus_site} altThumb="charus_site"
        src={require("../public/works/charus_site/header_media.mp4")}
        type="arrow"
        media="video">
          <h1>Сайт Чаруса</h1>
        </MdProject>

        <MdProject href="/works/CharusLogo"
        srcThumb={thumbCharus} altThumb="thumbCharus"
        src={require("../public/videos/charus.mp4")}
        type="arrow"
        media="video">
          <h1>Айдентика<br /> для компании Чарус</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject
          href="https://www.artlebedev.ru/bashnya-v-tsaritsino/"
          alt="rkeeper-img"
          src={bashnya}
          type="logo"
          media="img">
            <h1>Логотип мини-отеля «Башня<br /> в Царицыно»</h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>

          <SmProject
          href="/works/Deff"
          srcThumb={thumbDeff} altThumb="thumbDeff"
          alt="deff" src={require('../public/videos/deff.mp4')}
          type="arrow" media="video">
            <h1>Айдентика производителя сантехники Дефф</h1>
          </SmProject>
        </div>

        <MdProject
        href="/works/Som"
        srcThumb={som} altThumb="thumbDeff"
        src={require('../public/videos/som.mp4')}
        type="arrow" media="video">
        <h1>Айдентика<br /> для интеренет издания Сом</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject
          href="/works/Iir"
          srcThumb={thumbIir} altThumb="thumbIir"
          alt="rkeeper-img" src={require("../public/videos/iir.mp4")} type="arrow" media="video">
            <h1>
            Интерфейсы<br /> для мобильного приложения Сбера
            </h1>
          </SmProject>

          <SmProject
          href="/works/Mms"
          srcThumb={thumbMMS} altThumb="thumbMMS"
          src={require("../public/videos/mms.mp4")}
          alt="deff" type="arrow" media="video">
            <h1>
            Айдентика миграционного центра ММС
            </h1>
          </SmProject>
        </div>

        <MdProject
        href="https://www.artlebedev.ru/nighthawk-solutions/site/"
        srcThumb={thumbNhs} altThumb="thumbNhs"
        src={require("../public/videos/nhs.mp4")}
         type="logo" media="video">
          <h1>Сайт компании «Найтхок солюшнс»</h1>
          <p>Работа студии Артемия Лебедева</p>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject
          srcThumb={thumbRunup} altThumb="thumbRunup"
          href="https://www.artlebedev.ru/runup/"
          alt="runup-img"
          src={require("../public/videos/runup.mp4")} type="logo"
          media="video">
            <h1>
            Логотип школы бега «Ранап»
            </h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>

          <SmProject
          href="https://www.artlebedev.ru/olimp-atlet/"
          src={olimpatlet}
          alt="deff" type="logo" media="img">
            <h1>
            Логотип компании «Олимп атлет»
            </h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>
        </div>

        <MdProject
        href="/works/Neo"
        src={neo}
        type="arrow" media="img">
        <h1>Айдентика<br /> для HЭО-Бюро</h1>
        </MdProject>


        <div className={styles.SmContainer}>
          <SmProject href="https://www.artlebedev.ru/beans/"
          alt="beans-img"
          src={beans} type="logo"
          media="img">
            <h1>
            Логотип сервиса Бинс
            </h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>

          <SmProject
          href="https://www.artlebedev.ru/levoshich-i-partnery/"
          srcThumb={thumbLip} altThumb="thumbLip"
          src={require("../public/videos/lip.mp4")}
          type="logo" media="video">
            <h1>
            Логотип фирмы «Левошич<br />и партнеры»
            </h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>
        </div>

        <MdProject
        href="https://www.artlebedev.ru/bezlimit/site/"
        srcThumb={thumbBezlimit} altThumb="thumbBezlimit"
        src={require("../public/videos/bezlimit.mp4")}
         type="logo" media="video">
          <h1>Сайт «Безлимита»</h1>
          <p>Работа студии Артемия Лебедева</p>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject
          href="/works/Neosite"
          alt="lk"
          srcThumb={thumbNeosite} altThumb="thumbNeosite"
          src={require("../public/videos/neosite.mp4")}
          type="arrow"
          media="video">
            <h1>
            Промо-страница для НЭО-Бюро
            </h1>
          </SmProject>

          <SmProject
          href="/works/Bionum"
          src={bionum}
          alt="bionum-img"
          type="arrow"
          media="img">
            <h1>
              Стратегия и визуализация Бионум
            </h1>
          </SmProject>
        </div>

        <MdProject
        href="/works/Trimyas"
        src={pack}
         type="arrow"
         media="img">
          <h1>Дизайн упаковки мясокомбината Тримяс</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject
          href="/works/Lkneo"
          alt="lk"
          src={lk}
          type="arrow"
          media="img">
            <h1>
            Интерфейс<br />для личного кабинета НЭО-Бюро
            </h1>
          </SmProject>

          <SmProject href="/works/Coffeiludi"
          alt="coffeiludi"
          src={cil}
          type="arrow"
          media="img">
            <h1>
            Айдентика<br /> для кофейни Кофе и Люди
            </h1>
          </SmProject>
        </div>

      </div>
    </div>
    </>
  )
}
