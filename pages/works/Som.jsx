import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import TaskDesc from '../components/works/TaskDesc'
import MainTitle from '../components/works/MainTitle'
import DescriptionLayout from '../components/works/DescriptionLayout'
import DescriptionPar from '../components/works/DescriptionPar'
import DescriptionTitle from '../components/works/DescriptionTitle'
import styles from '../../styles/Project.module.scss'


import headSom from '../../public/works/som/head-som.png'
import logoBlack from '../../public/works/som/logo-black.png'
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



export default function Projects(props) {

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Fili</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Image
         alt="head-som"
         src={headSom}
         placeholder="blur"
         layout="responsive"
        />
        <section className={styles.content}>
        <div className={styles.textWrapper}>
          <TaskDesc>
          <p>Разработать айдентику и логотип<br /> для цифрового журнала</p>
          </TaskDesc>
          <MainTitle>
            <h1>Сом — цифровой журнал, рассказывает про культурные события, моду, еду, сериалы, фильмы и про все, что волнует  милиниалов и зумеров в Самаре. Волжский гедонизм в каждой строчке.</h1>
          </MainTitle>
        </div>
        <Image
          className={styles.fullWidth}
         alt="head-som"
         src={logoBlack}
         placeholder="blur"
         layout="responsive"
        />
        <DescriptionLayout>
          <DescriptionTitle>
          Шрифт в духе текущего времени и отсылкой на старую кириллицу
          </DescriptionTitle>
          <DescriptionPar>
          Ознакомлюсь с тем, какую идею бизнесу важно донести до людей и придумаю бренд-стратегию. Помогу определить, что, как и кому рассказать, чтобы получился запоминающийся и узнаваемый образ бизнеса. Разработаю логотип и фирменный стиль, и систематизирую это все в брендбуке, чтобы помочь правильно и легко пользоваться айдентикой
          </DescriptionPar>
        </DescriptionLayout>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="som1"
           src={som1}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="som2"
           src={som2}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="som3"
           src={som3}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="card"
           src={card}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="phonecase"
           src={phonecase}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="flaers"
           src={flaers}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="oil"
           src={oil}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="post"
           src={post}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="templates"
           src={templates}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <Image
            className={styles.fullWidth}
           alt="site"
           src={site}
           placeholder="blur"
           layout="responsive"
          />
        </div>

        <div className={styles.mediaWrapper}>
          <video autoPlay muted loop className={styles.video}>
          <source src={require('../../public/works/som/prew.mp4')} />
          </video>
        </div>

        <div className={styles.mediaWrapper}>
          <video autoPlay muted loop className={styles.video}>
          <source src={require('../../public/works/som/stories.mp4')} />
          </video>
        </div>

      </section>
    </div>
    </>
  )
};
