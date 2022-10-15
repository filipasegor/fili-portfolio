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
import charus from '../public/charus.png'
import bashnya from '../public/bashnya.png'
import som from '../public/som.png'
import olimpatlet from '../public/olimp_atlet.png'
import beans from '../public/beans.png'
import lip from '../public/lip.png'
import neo from '../public/neo.png'
import lk from '../public/lk.png'
import bionum from '../public/bionum.png'
import cil from '../public/cil.png'
import pack from '../public/pack.png'
import thumbShmot from '../public/thumbShmot.png'


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
          Successful and interesting businesses come to me
          </h1>
          <button className={styles.button}>RUS</button>
        </div>

        <LgProject href="https://www.artlebedev.ru/narayone/"
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

        <MdProject href="/" src={charus} type="arrow" media="img">
        <h1>Айдентика<br /> для компании Чарус</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject href="https://www.artlebedev.ru/rkeeper/interface/"        alt="rkeeper-img" src={bashnya} type="logo" media="img">
            <h1>Логотип мини-отеля «Башня<br /> в Царицыно»</h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>

          <SmProject href="/" alt="deff" src={require('../public/videos/deff.mp4')} type="arrow" media="video">
            <h1>Айдентика производителя сантехники Дефф</h1>
          </SmProject>
        </div>

        <MdProject href="/works/Som" src={som} type="arrow" media="img">
        <h1>Айдентика<br /> для интеренет издания Сом</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject href="https://www.artlebedev.ru/rkeeper/interface/" alt="rkeeper-img" src={require("../public/videos/iir.mp4")} type="arrow" media="video">
            <h1>
            Интерфейсы<br /> для мобильного приложения Сбера
            </h1>
          </SmProject>

          <SmProject href="/"
          src={require("../public/videos/mms.mp4")}
          alt="deff" type="arrow" media="video">
            <h1>
            Айдентика миграционного центра ММС
            </h1>
          </SmProject>
        </div>

        <MdProject href="/works/Som"
        src={require("../public/videos/nhs.mp4")}
         type="logo" media="video">
          <h1>Сайт компании «Найтхок солюшнс»</h1>
          <p>Работа студии Артемия Лебедева</p>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject href="https://www.artlebedev.ru/runup/"
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

        <MdProject href="https://www.artlebedev.ru/bezlimit/site/"
        src={require("../public/videos/bezlimit.mp4")}
         type="logo" media="video">
          <h1>Сайт «Безлимита»</h1>
          <p>Работа студии Артемия Лебедева</p>
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
          src={lip}
          alt="lip-img" type="logo" media="img">
            <h1>
            Логотип фирмы «Левошич<br />и партнеры»
            </h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>
        </div>

        <MdProject href=""
        src={neo}
         type="arrow"
         media="img">
          <h1>Айдентика НЭО</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject href=" "
          alt="beans-img"
          src={lk}
          type="arrow"
          media="img">
            <h1>
            Интерфейс<br />для личного кабинета НЭО
            </h1>
          </SmProject>

          <SmProject
          href="https://www.artlebedev.ru/levoshich-i-partnery/"
          src={bionum}
          alt="bionum-img"
          type="arrow"
          media="img">
            <h1>
              Стратегия и визуализация Бионум
            </h1>
          </SmProject>
        </div>

        <MdProject href="https://www.artlebedev.ru/bezlimit/site/"
        src={pack}
         type="arrow"
         media="img">
          <h1>Дизайн упаковки мясокомбината Тримяс</h1>
        </MdProject>

        <div className={styles.SmContainer}>
          <SmProject href=" "
          alt="beans-img"
          src={cil}
          type="arrow"
          media="img">
            <h1>
            Айдентика<br /> для кофейни Кофе и Люди
            </h1>
            <p>Работа студии Артемия Лебедева</p>
          </SmProject>
        </div>
      </div>
    </div>
    </>
  )
}
