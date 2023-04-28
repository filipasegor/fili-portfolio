import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

import MainSection from './components/MainSection'
import Media from './components/works/Media'
import IndexMedia from './components/works/IndexMedia'
import SkillDesc from './components/SkillDesc'
import SkillImage from './components/SkillImage'
import Par from './components/Par.jsx'
import Eyes from './components/Eyes.jsx'
import thumbDevelop from '../public/thumbDevelop.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Egor Filipas</title>
        <meta name="description" />
        <meta property="og:title" content="Portfolio"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="https://filipas-portfolio.vercel.app/public/Opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>
          Меня зовут<br />  Егор Филипас,<br /> я дизайнер
        </h1>
      </div>
      <div className={styles.parContainer}>
        <Par>
          Я помогаю бизнесу решать задачи с помощью дизайна.
        </Par>
        <Par>
          Например: привлечь внимание к продукту, спроектировать пользовательский опыт и интерфейс для приложения или разработать и запустить сайт.
        </Par>
        <Par>
          В конечном счете, я помогаю компаниям зарабатывать больше, улучшая их продукты и сервисы
        </Par>
      </div>
      <div className={styles.buttonContainer}>
      </div>
      </Header>


      <MainSection />
      <section className={styles.skillsWrapper}>
        <section className={styles.Skill}>
          <SkillDesc side="left"
          title="Дизайн и разработка цифровых продуктов"
          descFirst="Изучу, что важно клиентам и придумаю, как донести до них пользу продукта или услуги. Спроектирую понятную логику сайта или приложения с удобным интерфейсом, чтобы посетители покупали или обращались в компанию"
          descSecond="Помогу с разработкой и запуском, чтобы итоговый результат приносил прибыль бизнесу, а пользователям — радость">
          </SkillDesc>
          <IndexMedia
            altThumb="thumb_ds"
            src={require('../public/videos/graf.mp4')}
          />
        </section>
        <section className={styles.Skill}>
          <IndexMedia
            altThumb="thumb_ds"
            src={require('../public/videos/sites.mp4')}
          />
          <SkillDesc side="right"
          title="Айдентинка и графический дизайн"
          descFirst="Ознакомлюсь с тем, какую идею бизнесу важно донести до людей и придумаю бренд-стратегию. Помогу определить что, как и кому рассказать, чтобы получился запоминающийся и узнаваемый образ бизнеса"
          descSecond="Разработаю логотип и фирменный стиль, и систематизирую это все в брендбуке, чтобы помочь правильно и легко пользоваться айдентикой" >
          </SkillDesc>
        </section>
        <section className={styles.Skill}>
          <SkillDesc side="left"
          title="Систематизаци и разработка дизайна"
          descFirst="Я удешевляю процесс разработки дизайна тем, что систематизирую и автоматизирую дизайн"
          descSecond="Например: в процессе проектирования сайтов или приложений я создаю дизайн-систему всех элементов интерфейса и композиций, поэтому страницы быстро и легко собираются"
          descThird="Навыки программирования помогают мне воплощать макеты в жизнь и делать дизайн, который не требует больших ресурсов на разработку и запуск">
          </SkillDesc>

          <IndexMedia
            srcThumb={thumbDevelop} altThumb="thumbCharus"
            src={require('../public/videos/develop.mp4')}
          />

        </section>
      </section>
    </div>
  )
}
