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

import head from '../../public/works/neo/head.png'
import logo from '../../public/works/neo/logo.png'
import billboard from '../../public/works/neo/billboard.png'
import book from '../../public/works/neo/book.png'
import books from '../../public/works/neo/books.png'
import calendar from '../../public/works/neo/calendar.png'
import id from '../../public/works/neo/id.png'
import magazine from '../../public/works/neo/magazine.png'
import magazine2 from '../../public/works/neo/magazine2.png'
import pack from '../../public/works/neo/pack.png'
import paper from '../../public/works/neo/paper.png'
import sign from '../../public/works/neo/sign.png'
import sign2 from '../../public/works/neo/sign2.png'
import tshirt from '../../public/works/neo/tshirt.png'
import logos from '../../public/works/neo/logos.png'

import thumbCharus from '../../public/thumbCharus.png'
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
          taskDesc="Разработать логотип и фирменный стиль"
          >
          </TaskDesc>

          <MainTitle>
            <h1>Компания НЭО-Бюро занимается независимой оценкой и экспертизой всех видов имущества. Работает в рамках судебных и досудебных споров или для сделок с имуществом
            </h1>
          </MainTitle>

          <Media
            label="false"
            media="img"
            src={logo}
          />

          <DescriptionLayout>
            <DescriptionTitle>
            Уверернный и четкий знак, чтобы везде смотрелось хорошо
            </DescriptionTitle>
            <DescriptionPar>
            <p>
            Фирменные элементы НЭО-Бюро могут встречаться
            в самых неожиданных местах: в бланке отчестности у судьи, в брошюрах у нотариальной конторы или в буклете списков партнеров риелтора. И часто качество этих носителей и дизайна не самое лучшее
            </p>
            <p>
              Поэтому логотип НЭО-Бюро должен быть заметен и уверено смотреться везде,  даже если секретарша без навыков дизайна решит самостоятельно заверстать буклет со списком партнеров компании. А массивная и немного вытянутая пластика с маленькими просветами между буквами передают инженерно-технический профиль компании
            </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="img"
            src={sign}
          />

          <Media
            label="true"
            media="img"
            right="right"
            src={logos}
          >
          <p>
            Знак смотрится уверенно и четко в любом контексте, даже в сочетании логотипов других компаний, которые при этом сверстаны не очень аккуратно
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={pack}
          />

          <Media
            label="true"
            media="img"
            right="right"
            src={paper}
          >
          <p>
            Новый логотип выдержит плохое качество печати, а также хорошо смотрится, если нужно разместить маленький размер логотипа
          </p>
          </Media>

          <Media
            label="false"
            media="img"
            src={sign2}
          />

          <DescriptionLayout>
            <DescriptionTitle>
              Идея фирменного стиля
            </DescriptionTitle>
            <DescriptionPar>
            <p>
              НЭО-Бюро измеряет ущерб, стоимость или  габариты имущества. Поэтому в основе фирменного стиля лежит шкала разных измерительных приборов, которыми пользуются эксперты
            </p>
            <p>
              Такой фирменный стиль отлично сочетается с новым логотипом
            </p>
            </DescriptionPar>
          </DescriptionLayout>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/main-theme.mp4")}
          />

          <Media
            label="false"
            media="img"
            src={books}
          />

          <Media
            label="false"
            media="img"
            src={tshirt}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/main-value.mp4")}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/stats.mp4")}
          />

          <Media
            label="false"
            media="video"
            src={require("../../public/works/neo/const.mp4")}
          />

          <Media
            label="false"
            media="img"
            src={book}
          />

          <Media
            label="false"
            media="img"
            src={calendar}
          />

          <Media
            label="false"
            media="img"
            src={magazine2}
          />

          <Media
            label="false"
            media="img"
            src={billboard}
          />

          <Media
            label="false"
            media="img"
            src={id}
          />

          <ProjectFooter date="25.08.2019" />
        </section>

        <Suggested>
          <MdProject href="/works/CharusLogo"
          srcThumb={thumbCharus} altThumb="thumbCharus"
          src={require("../../public/videos/charus.mp4")}
          type="arrow"
          media="video">
            <h1>Айдентика<br /> для компании Чарус</h1>
          </MdProject>

          <MdProject href="/works/Mms"
          src={require("../../public/works/mms/head.mp4")}
          type="arrow"
          media="video">
            <h1>
              Айдентика миграционного центра ММС
            </h1>
          </MdProject>

          <MdProject
          href="/works/Som"
          srcThumb={som} altThumb="thumbSom"
          src={require('../../public/videos/som.mp4')}
          type="arrow" media="video">
          <h1>Айдентика<br /> для интеренет издания Сом</h1>
          </MdProject>

        </Suggested>

      </div>
    </>
  )
}
