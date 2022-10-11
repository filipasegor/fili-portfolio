import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from './components/Header'

import MainSection from './components/MainSection'
import SkillDesc from './components/SkillDesc'
import SkillImage from './components/SkillImage'
import Par from './components/Par.jsx'
import app from '../public/app-mob.png'
import print from '../public/print.png'
import ds from '../public/ds.png'
import footerLogo from '../public/footer-logo.svg'
import logo from '../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fili</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
      <div className={styles.headlineContainer}>
        <h1 className={styles.headline}>
        My name is Egor Filipas and I am a designer
        </h1>
      </div>
      <div className={styles.parContainer}>
        <Par>
          I help businesses solve complex problems through design
        </Par>
        <Par>
          For example: to draw attention to a product, design user experience and interface for app, develop and launch a website
        </Par>
        <Par>
          Ultimately, I help businesses make money from their own products
        </Par>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>RUS</button>
      </div>
      </Header>


      <MainSection />
      <section className={styles.Skill}>
        <SkillDesc side="left"
        title="Дизайн и разработка цифровых продуктов"
        descFirst="Изучу, что важно клиентам и придумаю, как донести до них пользу продукта или услуги. Спроектирую понятную логику сайта или приложения с удобным интерфейсом, чтобы посетители покупали или обращались в компанию. "
        descSecond="Помогу с разработкой и запуском, чтобы итоговый результат приносил прибыль бизнесу, а пользователям — радость">
        </SkillDesc>
        <SkillImage className={styles.SkillImage}
        alt="app"
        src={app}
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        />
      </section>
      <section className={styles.Skill}>
        <SkillImage className={styles.SkillImage}
        alt="print"
        src={print}
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        />
        <SkillDesc side="right"
        title="Айдентинка и графический дизайн"
        descFirst="Ознакомлюсь с тем, какую идею бизнесу важно донести до людей и придумаю бренд-стратегию. Помогу определить, что, как и кому рассказать, чтобы получился запоминающийся и узнаваемый образ бизнеса."
        descSecond="Разработаю логотип и фирменный стиль, и систематизирую это все в брендбуке, чтобы помочь правильно и легко пользоваться айдентикой." >
        </SkillDesc>
      </section>
      <section className={styles.Skill}>
        <SkillDesc side="left"
        title="Систематизаци и разработка дизайна"
        descFirst="Я удешевляю процесс разработки дизайна, тем, что систематизирую и автоматизирую дизайн. "
        descSecond="Например: в процессе проектирования сайтов или приложений я создаю дизайн-систему всех элементов интерфейса и композиций, поэтому страницы быстро и легко собираются."
        descThird="И еще мои навыки кодить позволяют не только воплощать дизайн на макетах, но приводить его в жизнь: разрабатывать, проектировать дизайн, который легко производить и помогать запускать. Так, я экономлю бизнесу много ресурсов, которые можно проинвестировать или оставить себе.">
        </SkillDesc>
        <SkillImage className={styles.SkillImage}
        alt="app"
        src={ds}
        objectFit="cover"
        layout="responsive"
        placeholder="blur"
        />
      </section>
      <footer className={styles.footerContainer}>
        <p>@fili 2022</p>
        <div className={styles.footerImg}>
          <Image
           alt="footer-logo"
           src={footerLogo}
           layout="intrinsic"
           width={1000}
           height={100}
          />
        </div>
        <p className={styles.footerRights}>All Rights Reserved</p>
      </footer>
    </div>
  )
}
