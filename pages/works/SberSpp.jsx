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
import LgProject from '../components/_LgProject'
import Suggested from '../components/works/Suggested'
import ProjectFooter from '../components/works/ProjectFooter'
import SubHeading from '../components/works/SubHeading'
import Bubble from '../components/works/Bubble'

import thumbMain_Page from '../../public/works/charus_site/thumbMain_Page.png'
import thumbPages from '../../public/works/charus_site/thumbPages.png'

import tasks from '../../public/works/sberspp/tasks.png'

import thumbCharus from '../../public/thumbCharus.png'
import thumbNhs from '../../public/thumbNhs.png'
import thumbShmot from '../../public/thumbShmot.png'


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
         src={require("../../public/videos/SberCover.mp4")}
        />
        

        <section className={styles.content}>
          <TaskDesc
          taskName="Задача"
          taskDesc="Сделать систему, с помощью которой сотрудники могли бы рассказывать про все 214 услуг и сервисы Сбера клиентам, которые пришли в оффлайн офис."
          >
          </TaskDesc>

          <DescriptionLayout>
            <DescriptionTitle>
            Объединение всех действий менеджера в одну систему
            </DescriptionTitle>
            <DescriptionPar>
            СБОЛ Про — это цифровая система работы для сотрудников, с помощью которой они консультируют клиентов, продают услуги и сервисы Сбера, ведут учет продаж, оформляют сделки, анализируют информацию о клиенте и выполняют все остальные функции, которые могут понадобиться для клиента.
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            srcThumb={thumbPages} 
            altThumb="sberTest"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/SberProducts.mp4')}
          />

          <Media
            label="false"
            media="img"
            src={tasks}
            alt="tasks"
          />


          <Media
            label="true"
            media="video"
            right="right"
            srcThumb={thumbPages} 
            altThumb="start"
            src={require('../../public/works/sberspp/start.mp4')}
          >
          <p>
            Типичный сценарий обслуживания
          </p>
          </Media>

          <Media
            label="true"
            media="video"
            left="left"
            srcThumb={thumbPages} 
            altThumb="alloperations"
            src={require('../../public/works/sberspp/alloperations.mp4')}
          >
          <p>
            Все продукты в одном месте
          </p>
          </Media>

          <DescriptionLayout>
            <DescriptionTitle>
              Автоматизация и системность
            </DescriptionTitle>
            <DescriptionPar>
              Задач и продуктов много, в день может выходить по несколько новый лендингов для разных продуктов. Чтобы поддерживать быстрые темпы создания дизайна и разработки, была создана дизайн система и правила по которым собираются презентации продуктов
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            srcThumb={thumbPages} 
            altThumb="building"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/building.mp4')}
          />

          <Media
            srcThumb={thumbPages} 
            altThumb="ds"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/ds.mp4')}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              Продуктовые решения
            </DescriptionTitle>
            <DescriptionPar>
              По отдельным важным продуктам были созданы сценарии и интерфейсы отличающиеся из системных пользовательских сценариев
            </DescriptionPar>
          </DescriptionLayout>

          <SubHeading>
            СберПрайм
          </SubHeading>
          
          <Bubble 
          small_H="ЗАДАЧА"
          small_P="Рассказать про подписку СберПрайм и ее премущества"
          large_H="ПРОБЛЕМЫ"
          > 
            <ul>
              <li>Продукт сложный, поэтому про него сложно рассказывать менеджерам</li>
              <li>Много тратиться времени и сил на рассказ</li>
              <li>Менеджеру сложно изначально понять в чем польза от прайма для конкретного клиента</li>
            </ul>
          </Bubble>
          <Media
            srcThumb={thumbPages} 
            altThumb="prime"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/prime.mp4')}
          />

          
          <ProjectFooter date="15.03.2023" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusLogo"
          srcThumb={thumbCharus} altThumb="thumbCharus"
          src={require("../../public/videos/charus.mp4")}
          type="arrow"
          media="video">
            <h1>Айдентика<br /> для компании Чарус</h1>
          </MdProject>

          <LgProject
          href="https://www.artlebedev.ru/narayone/"
          srcThumb={thumbShmot} altThumb="thumbShmot"
          src={require("../../public/videos/narayone.mp4")}
          type="logo"
          media="video">
            <h1>Сайт проекта «На районе»</h1>
            <p>Работа студии Артемия Лебедева</p>
          </LgProject>

          <MdProject
          href="https://www.artlebedev.ru/nighthawk-solutions/site/"
          srcThumb={thumbNhs} altThumb="thumbNhs"
          src={require("../../public/videos/nhs.mp4")}
           type="logo" media="video">
            <h1>Сайт компании «Найтхок солюшнс»</h1>
            <p>Работа студии Артемия Лебедева</p>
          </MdProject>
        </Suggested>

      </div>
    </>
  )
}
