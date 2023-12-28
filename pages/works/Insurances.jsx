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

import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import TaskLink from "../components/works/TaskLink";

import headerImg from "../../public/works/insurances/headerImg.png";
import research from "../../public/works/insurances/research.png";
import insurancesOld from "../../public/works/insurances/insurancesOld.png";
import banners from "../../public/works/insurances/banners.png";
import insurances from "../../public/works/insurances/insurances.png";
import labels from "../../public/works/insurances/labels.png";
import map from "../../public/works/insurances/map.png";

import thumbCharus from "../../public/thumbCharus.png";
import thumbNhs from "../../public/thumbNhs.png";
import thumbShmot from "../../public/thumbShmot.png";

import { Statement, Par, Headline, Stats } from "../components/index";

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
              <h3>Год</h3>
              <p>2022-2023</p>
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
              подходящую страховую программу клиентам, которые пришли в
              отделение банка
            </h1>
          </MainTitle>

          <Statement text="проблемы">
            <Headline>Текущий сценарий неудобен и очень долгий</Headline>
            <Par>
              Раньше у каждой страховой программы была своя отдельная страница.
              Менеджер открывал страницу страховки, чтобы рассказать про нее
              клиенту, продемонстрировать условия и посчитать выгоду в
              калькуляторе.
            </Par>
            <Par>
              Но проблема в том, что клиенты приходят с потребностью защитить
              несколько своих сфер жизни, поэтому им необходимо открыть
              несколько разных страховых программ.
            </Par>
            <Par>
              Также при оформлении нескольких страховок, клиент получает скидку
              и доп. привилегии, но интерфейс этого никак не демонстрировал.
            </Par>
            <Par>
              Поэтому менеджеры не могли предложить защиту всех сфер жизни и
              рассказать о выгоде такого решения под ключ.
            </Par>
          </Statement>

          <Media label="false" media="img" src={insurancesOld} />

          <Statement text="Исследования">
            <Headline>
              Клиенты не мыслят страховыми программами, они приходят, чтобы
              защитить сферы своей жизни
            </Headline>
            <Par>
              По результатам опросов и качественных интервью я выявил, что
              клиентам важно застраховать те сферы жизни, которые им кажутся
              наиболее важными и уязвимыми. Клиенты редко когда приходят за
              конкретной страховой программой
            </Par>
            <Par>
              В конце исследования, я выяснил какие сферы жизни больше всего
              нуждаются в защите с точки зрения клиента
            </Par>
            <Image src={research}></Image>
            <Headline style={{ marginTop: "80px" }}>
              Разным клиентам нужны страховые программы на разное время
            </Headline>
            <Par>
              По результатам интервью, выяснилось, что есть клиенты, которым
              нужна страховка на месяц, а кому-то на год или 3 месяца.
            </Par>
            <Par>
              Но в старом сценарии была возможнось приобрести защиту только на
              месяц, однако не всем клиентам подходит такой временной
              промежуток.
            </Par>
          </Statement>

          <Statement text="Решение">
            <Headline>Сделать конструктор страховок</Headline>
            <Par>
              Чтобы облегчить работу менеджерам, а для клиентов сделать
              консультацию информативнее и полезнее, я предложил объединить все
              страховки на одну страницу.
            </Par>
            <Par>
              Таким образом менеджер предлагает страховое решение сразу для
              несколько сфер жизни, а те что, клиенту не важны от может убрать.
              И также клиент видит какую скидку он получает, оформляя сразу
              несколько страховок.
            </Par>
            <Link href="https://www.figma.com/proto/9d8VrzafQtCAAXBixTIi0v/work?page-id=301%3A6902&type=design&node-id=315-119526&viewport=-1249%2C2586%2C0.15&t=HvNirKFqUKEp2gPC-1&scaling=scale-down&starting-point-node-id=315%3A119526">
              <a className={styles.link}>Протестировать прототип</a>
            </Link>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={insurances}
            altThumb="thumbProceed"
            src={require("../../public/works/insurances/insurancesNew.mp4")}
            min="0"
            max="48"
          />

          <Statement text=" ">
            <Headline>Конструктор подстраивается под клиента</Headline>
            <Par>
              Под капотом конструктора зашит алгоритм, который считывает данные
              клиента: среднемесячные траты, покупки, истекающие программы,
              наличие детей и другое.
            </Par>
            <Par>
              Так, алгоритм подсказывает менеджеру, какую и каким образом лучше
              всего предложить защиту клиенту.
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={banners}
            altThumb="thumbProceed"
            src={require("../../public/works/insurances/banners.mp4")}
            min="0"
            max="12"
          />

          <Statement text=" ">
            <Par>
              Конструктор подсвечивает клиенту, если у него действующий или
              истекающий полис, а также тот, который уже истёк
            </Par>
            <Par>
              Это помогает менеджеру простроить правильно диалог с клиентом
            </Par>
          </Statement>

          <Media label="false" media="img" src={labels} />

          <Statement text=" ">
            <Headline>Выбор временного промежутка</Headline>
            <Par>
              По результатам исследования выяснилось, что клиентам необходим
              выбор на какой временной промежуток им нужна страховка.
            </Par>
            <Par>
              Поэтому я добавил возможность клиентам выбрать с какой
              периодичностью будет производиться оплата. Это сделало продукт еще
              более адаптивным к нуждам клиентов.
            </Par>
          </Statement>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/insurances/pays.mp4")}
          />

          <Statement text=" ">
            <Headline>Карта выплат</Headline>
            <Par>
              Также в интерфейс была добавлена наглядная карта выплат, которая
              помогает менеджеру рассказать сколько и при каких ситуациях
              получит клиент, если оформит защиту здоровья.
            </Par>
            <Par>
              В последствии эта фича очень полюбилась менеджерам из-за своей
              наглядности.
            </Par>
          </Statement>
          <Media label="false" media="img" src={map} />

          <Statement text="Результаты">
            <Headline>Менеджерам понравился новый подход</Headline>
            <Par>
              По результатам опросов большинство менеджеров хвалят новый
              сценарий подбора вкладов
            </Par>
            <Par>
              Также результаты продаж, процентов отказа и прочие показатели
              доказывают, что решение было верным
            </Par>
            <div className={styles.stasWrapper}>
              <Stats
                headline="89%"
                desc="Показатель удовлетворенности менеджеров (CSI)"
              />
              <Stats
                headline="+12.7%"
                desc="Выросло количество окрытых страховых продуктов в по результатам за осень 2022 г."
              />
            </div>
            <Stats headline="-15%" desc="Уменьшился процент по отказам" />
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
