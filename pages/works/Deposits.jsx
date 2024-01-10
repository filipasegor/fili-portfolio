import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Project.module.scss";

import HeadMedia from "../components/works/HeadMedia";
import Media from "../components/works/Media";
import MainTitle from "../components/works/MainTitle";
import DescriptionLayout from "../components/works/DescriptionLayout";
import TextLayout from "../components/works/TextLayout";
import DescriptionPar from "../components/works/DescriptionPar";
import DescriptionTitle from "../components/works/DescriptionTitle";
import MdProject from "../components/_MdProject";
import LgProject from "../components/_LgProject";
import Suggested from "../components/works/Suggested";
import ProjectFooter from "../components/works/ProjectFooter";
import SubHeading from "../components/works/SubHeading";
import Video from "../components/works/Video";

import Statement from "../components/main/Statement/Statement";
import Par from "../components/main/Par/Par";
import Headline from "../components/main/Headline/Headline";
import Stats from "../components/main/Stats/Stats";

import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import TaskLink from "../components/works/TaskLink";

import headerImg from "../../public/works/deposits/header_img.png";
import olddeposits from "../../public/works/deposits/olddeposits.png";
import research from "../../public/works/deposits/research.png";

import thumbCharus from "../../public/thumbCharus.png";
import thumbNhs from "../../public/thumbNhs.png";
import thumbShmot from "../../public/thumbShmot.png";

// import { Statement, Par, Headline, Stats } from "../components/index";

import { FormattedMessage } from "react-intl";

export default function Project(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Egor Filipas</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeadMedia media="img" alt="header_img" src={headerImg} />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2023</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Role</h3>
              <p>Lead Product Designer</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Scope</h3>
              <p>Product Strategy, UI/UX/IxD, Prototyping, Design system</p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle style={{ marginTop: "30px", marginBottom: "200px" }}>
            <h1>
              Система подбора продуктов Сбера помогает менеджерам подобрать
              подходящий вклад клиентам, которые пришли в отделение банка
            </h1>
          </MainTitle>

          <Statement text="проблемы">
            <Headline>Текущий сценарий неудобен и очень долгий</Headline>
            <Par>
              Раньше у каждого вклада была своя отдельная страница. Менеджер
              открывал страницу вклада, чтобы рассказать про него клиенту,
              продемонстрировать условия и посчитать выгоду в калькуляторе
            </Par>
            <Par>
              А если клиента не устраивали условия, то менеджеру приходилось
              искать другой вклад и открывать новую страницу. И так как вкладов
              в Сбере много, то этот процесс занимал очень много времени, клиент
              уставал и ему становилось уже неинтересно
            </Par>
          </Statement>

          <Media label="false" media="img" src={olddeposits} />

          <Statement text="Исследования">
            <Headline>
              Клиенты отказываются от вкладов, которые им предлагают
            </Headline>
            <Par>
              По результатам исселодвания наиболее распространенные ответы
              менеджеров доказали, что текущий сценарий подбора вклада плохо
              выполняет свои задачи и неудобен:
            </Par>
            <Par>1. Большой процент по отказам</Par>
            <Par>
              2. После получения отказа менеджеры начинают нервничать и судрожно
              подыскивать другой вклад с другими условиями
            </Par>
            <Par>
              3. Рядовые менеджеры часто точно не знают у какого вклада наиболее
              выгодные условия и выбирают наугад, либо просто самый популярный
            </Par>
            <Par>
              И как результат — большой процент отказов во время консультации
            </Par>
          </Statement>

          <Statement text="Исследования">
            <Headline>Что говорят клиенты:</Headline>
            <Par>70% клиентов отказывают потому что:</Par>
            <Image src={research}></Image>
          </Statement>

          <Statement text="Решение">
            <Headline>Сделать единую страницу вкладов</Headline>
            <Par>
              Чтобы облегчить работу менеджерам, а для клиентов сделать
              консультацию информативнее и короче, я предложил объединить все
              вклады в одну страницу. Раньше же у каждого вклада была отдельная
              страница.
            </Par>
            <Par>
              Клиент вводит сумму взноса, срок, а система сразу подбирает ему
              самые выгодные и подходящие вклады. Такой подход исключает
              возможность, что менеджер предложит нерелевантный вклад, потому
              что все делает технология.
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={research}
            altThumb="thumbProceed"
            src={require("../../public/works/deposits/deposits.mp4")}
            min="0"
            max="38"
          />

          <Statement text=" ">
            <Headline>Почему именно такое решение</Headline>
            <Par>
              На этапе исследования менеджеры отвечали по-разному на вопросы
              «Какой именно вклад вы предлагаете клиенту? И почему?». Это навело
              меня на гипотезу, что на самом деле большинство менеджеров точно
              не знают, какой вклад предложить, потому что не обладают
              достаточными финансовыми заниями и часто не осведомлены
              актуальными условиями вклада. И потому предлагают вклады клиентам
              не те, которые подходили бы по их запросам, а по своему
              усмотрению. Отсюда основной задачей было переложить этап выбора
              вклада с человека на технологию и тем самым исключить человеческий
              фактор.
            </Par>
            <Par>
              Поэтому я и предложил такое решение, которое подбирает вклад
              автоматически на основе желайний клиента и финансовых показателей
              вклада. Таким образом новый продукт помогает менеджерам точнее и
              быстрее подобрать релевантый вклад, а клиенты получают нужный
              продукт.
            </Par>
          </Statement>

          <Statement text="Результат">
            <Headline>Менеджерам понравился новый подход</Headline>
            <Par>
              По результатам опросов большинство менеджеров хвалят новый
              сценарий подбора вкладов
            </Par>
            <Par>
              Также, результаты продаж, проценты отказов и прочие показатели
              доказывают, что решение было верным
            </Par>
            <div className={styles.stasWrapper}>
              <Stats
                headline="92%"
                desc="Показатель удовлетворенности менеджеров (CSI)"
              />
              <Stats
                headline="+9.1%"
                desc="Выросло количество окрытых вкладов по результатам за апрель-август 2022 г."
              />
            </div>
            <Stats
              headline="≈ 7-9 мин."
              desc="В среднем менеджеры тратят на рассказ о продукте. Раньше у менеджеров уходило 15-19 минут. Обычно на 7 минуте клиенты устают"
            />
            <Stats headline="-20%" desc="Уменьшился процент по отказам" />
          </Statement>

          <ProjectFooter date="15.03.2023" />
        </section>

        <Suggested>
          <MdProject
            href="/works/CharusLogo"
            srcThumb={thumbCharus}
            altThumb="thumbCharus"
            src={require("../../public/videos/charus.mp4")}
            type="arrow"
            media="video">
            <h1>
              <FormattedMessage id="worksCharusLogo" />
            </h1>
          </MdProject>

          <LgProject
            href="https://www.artlebedev.ru/narayone/"
            srcThumb={thumbShmot}
            altThumb="thumbShmot"
            src={require("../../public/videos/narayone.mp4")}
            type="logo"
            media="video">
            <h1>
              <FormattedMessage id="worksNarayone" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </LgProject>

          <MdProject
            href="https://www.artlebedev.ru/nighthawk-solutions/site/"
            srcThumb={thumbNhs}
            altThumb="thumbNhs"
            src={require("../../public/videos/nhs.mp4")}
            type="logo"
            media="video">
            <h1>
              <FormattedMessage id="worksNhs" />
            </h1>
            <p>
              <FormattedMessage id="projectWith" />
            </p>
          </MdProject>
        </Suggested>
      </div>
    </>
  );
}
