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
import Video from '../components/works/Video'

import thumbMain_Page from '../../public/works/charus_site/thumbMain_Page.png'
import thumbPages from '../../public/works/charus_site/thumbPages.png'

import tasks from '../../public/works/sberspp/tasks.png'
import PrimeResults from '../../public/works/sberspp/PrimeResults.png'
import MainResults from '../../public/works/sberspp/MainResults.png'
import Crosses from '../../public/works/sberspp/Crosses.png'
import ZlsResults from '../../public/works/sberspp/ZlsResults.png'
import content from '../../public/works/sberspp/content.png'

import thumb_sberProducts from '../../public/works/sberspp/thumb_sberProducts.png'
import thumb_start from '../../public/works/sberspp/thumb_start.png'
import thumb_zls from '../../public/works/sberspp/thumb_zls.png'
import thumb_alloperations from '../../public/works/sberspp/thumb_alloperations.png'
import thumb_desposits from '../../public/works/sberspp/thumb_desposits.png'
import thumb_prime  from '../../public/works/sberspp/thumb_prime.png'
import thumb_ds  from '../../public/works/sberspp/thumb_ds.png'
import thumb_crosses  from '../../public/works/sberspp/thumb_crosses.png'
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
            Объединение всех действий менеджера в&nbsp;одну систему
            </DescriptionTitle>
            <DescriptionPar>
            СБОЛ Про&nbsp;&mdash; это цифровая система работы для сотрудников, с&nbsp;помощью которой они консультируют клиентов, продают услуги и&nbsp;сервисы Сбера, ведут учет продаж, оформляют сделки, анализируют информацию о&nbsp;клиенте и&nbsp;выполняют все остальные функции, которые могут понадобиться для клиента.
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            srcThumb={thumb_sberProducts} 
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


          <Video
            label="true"
            media="video"
            left="left"
            srcThumb={thumb_start} 
            altThumb="start"
            src={require('../../public/works/sberspp/start.mp4')}
          >
          <p>
            Типичный сценарий обслуживания
          </p>
          </Video> 


          <Media
            label="true"
            media="video"
            right="right"
            srcThumb={thumb_start} 
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
            srcThumb={thumb_alloperations} 
            altThumb="alloperations"
            src={require('../../public/works/sberspp/alloperations.mp4')}
          >
          <p>
            Все продукты в одном месте
          </p>
          </Media>

          <DescriptionLayout>
            <DescriptionTitle>
              Автоматизация<br /> и системность
            </DescriptionTitle>
            <DescriptionPar>
            Задач и&nbsp;продуктов много, в&nbsp;день может выходить по&nbsp;несколько новый лендингов для разных продуктов. Чтобы поддерживать быстрые темпы создания дизайна и&nbsp;разработки, была создана дизайн система и&nbsp;правила по&nbsp;которым собираются презентации продуктов
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="video"
            src={require('../../public/works/sberspp/building.mp4')}
          />

          <Media
            srcThumb={thumb_ds} 
            altThumb="thumb_ds"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/ds.mp4')}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              Продуктовые решения
            </DescriptionTitle>
            <DescriptionPar>
            По&nbsp;отдельным важным продуктам были созданы сценарии и&nbsp;интерфейсы отличающиеся из&nbsp;системных пользовательских сценариев
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
            <ul className={styles.ulList}>
              <li>Продукт сложный, поэтому про него сложно рассказывать менеджерам</li>
              <li>Много тратиться времени и сил на рассказ</li>
              <li>Менеджеру сложно изначально понять в&nbsp;чем польза от&nbsp;прайма для конкретного клиента</li>
            </ul>
          </Bubble>

          <Media
            srcThumb={thumb_prime} 
            altThumb="prime"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/prime.mp4')}
          />

          <SubHeading>
            Результаты:
          </SubHeading>

          <Media
            label="false"
            media="img"
            src={PrimeResults}
            alt="tasks"
          />

          <SubHeading>
            Вклады
          </SubHeading>

          <Bubble 
          small_H="ЗАДАЧА"
          small_P="Сделать объединяющую страницу по всем вкладам"
          large_H="ПРОБЛЕМЫ"
          > 
            <ul className={styles.ulList}>
              <li>У&nbsp;сотрудниников не&nbsp;было такого инструмента, где&nbsp;бы они могли рассказать про все варианты вкладов и&nbsp;их&nbsp;условия всего</li>
              <li>А&nbsp;клиент не&nbsp;мог оценить весь массив предложений и&nbsp;из&nbsp;него выбрать подходящий</li>
            </ul>
          </Bubble>

          <Media
            srcThumb={thumb_desposits} 
            altThumb="deposits"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/deposits.mp4')}
          />

          <SubHeading>
            Конструктор страховок
          </SubHeading>

          <Bubble 
          small_H="ЗАДАЧА"
          small_P="Сделать конструктор страховок"
          large_H="ПРОБЛЕМЫ"
          > 
            <ul className={styles.ulList}>
              <li>Клиенты приходят в&nbsp;офис не&nbsp;за&nbsp;одной конкретной страховкой, а&nbsp;с&nbsp;потребоностью закрыть несколько сфер жизни: здоровье, финансы, недвижимость</li>
              <li>А&nbsp;менеджерам трудно оформить сразу несколько страховок, рассказать про условия и&nbsp;посчитать стоимость для каждой</li>
            </ul>
          </Bubble>

          <Media
            srcThumb={thumb_zls} 
            altThumb="zls"
            label="false"
            media="video"
            src={require('../../public/works/sberspp/zls.mp4')}
          />

          <Media
            label="false"
            media="img"
            src={ZlsResults}
            alt="ZlsResults"
          />

          <DescriptionLayout>
            <DescriptionTitle>
              Кросспродажи и персональные предложение
            </DescriptionTitle>
            <DescriptionPar>
              Система подбора эволюционировала и&nbsp;становилась умнее со&nbsp;временем. Поэтому появилась внутренняя система персональных предложений:
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={Crosses}
            alt="Crosses"
          />

          <Media
            label="true"
            media="video"
            left="left"
            srcThumb={thumb_crosses} 
            altThumb="crosses"
            src={require('../../public/works/sberspp/crosses.mp4')}
          >
          <p>
            Пример сложносочининнего сценария с кросспродажами
          </p>
          </Media>

          <SubHeading>
            Показатели проделанной работы
          </SubHeading>

          <Media
            label="false"
            media="img"
            src={MainResults}
            alt="MainResults"
          />

          <SubHeading>
            Всего было сделано более 320 страниц
          </SubHeading>
          <Media
            label="false"
            media="img"
            src={content}
            alt="content"
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
