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
// import Statement from "../components/main/Statement/Statement";
// import Par from "../components/main/Par/Par";
// import Headline from "../components/main/Headline/Headline";
// import Stats from "../components/main/Stats/Stats";

import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import TaskLink from "../components/works/TaskLink";

import headerImg from "../../public/works/selection_system/headerImg.png";
import thumbStart from "../../public/works/selection_system/thumb_start.png";
import thumbCrosses from "../../public/works/selection_system/thumb_crosses.png";
import pages from "../../public/works/selection_system/pages.png";
import ds from "../../public/works/selection_system/thumb_ds.png";
import Crosses from "../../public/works/selection_system/Crosses.png";
import thumbDocumentation from "../../public/works/selection_system/thumb_documentation.png";
import thumbAlloperations from "../../public/works/selection_system/thumb_alloperations.png";

import thumbCharus from "../../public/thumbCharus.png";
import thumbNhs from "../../public/thumbNhs.png";
import thumbShmot from "../../public/thumbShmot.png";

import { Statement, Par, Headline, Stats } from "../../componentsIndex/index";

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
              продукт клиентам, которые приходят в офис. Например: открыть
              вклад, кредит или юрсчет, выпустить карту, посчитать ипотеку и так
              далее.
            </h1>
          </MainTitle>

          <Statement text="Задача">
            <Headline>
              Объединить все действия менеджера в одну систему
            </Headline>
            <Par>
              СБОЛ.Про — это цифровая система для сотрудников, с помощью которой
              они консультируют клиентов, продают услуги и сервисы Сбера, ведут
              учет продаж, оформляют сделки, анализируют информацию о клиенте и
              выполняют все остальные функции, чтобы проконсультировать клиента,
              пришедшего в отделение Сбера.
            </Par>
            <Par>Типичный сценарий обслуживания:</Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={thumbStart}
            altThumb="thumbStart"
            src={require("../../public/works/selection_system/start.mp4")}
            min="0"
            max="26"
          />

          <Statement text="Проблемы">
            <Headline>Большое разнообразие продуктовых сценариев</Headline>
            <Par>
              В систему подбора продутов входит более 214 разных продуктов. У
              каждого продукта уникальный пользовательский сценарий. Например,
              для оформления осаго достаточно одного простого лендинга, а для
              сценария открытия счета для юрлиц нужна воронка вопросов, большой
              лендинг с калькулятором и алгоритмом расчета стоимости под капотом
            </Par>
            <Par>
              Все это разообразие бизнес-задач система подбора продуктов должна
              уметь поддерживать
            </Par>
          </Statement>

          <Media label="false" media="img" src={pages} />

          <Statement text="Решение">
            <Headline>Дизайн система</Headline>
            <Par>
              Чтобы поддерживать все возможные бизнес-задачи, я создал
              дизайн-систему и правила по которым собираются продуктовые
              сценарии.
            </Par>
          </Statement>

          <Media
            label="false"
            media="video"
            src={require("../../public/works/selection_system/building.mp4")}
          />

          <Video
            label="false"
            right="right"
            srcThumb={ds}
            altThumb="ds"
            src={require("../../public/works/selection_system/ds.mp4")}
            min="0"
            max="20"
          />

          <Statement text=" ">
            <Headline>Документация и автоматизация</Headline>
            <Par>
              Кроме того, я написал документацию, в которой прописаны правила
              сборки, структура презентацийи и требования к редактуре. Любой
              дизайнер из другой команды может воспользоваться нашей библиотекой
              и самостоятельно собрать лендинг по правилам нашей дизайн-системы
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={thumbDocumentation}
            altThumb="thumbDocumentation"
            src={require("../../public/works/selection_system/documentation.mp4")}
            min="0"
            max="24"
          />

          <Statement text="Дополнительно">
            <Headline>Кросспродажи и персональные предложение</Headline>
            <Par>
              Система подбора продукта со временем эволюционировала и стала
              умнее. Поэтому появилась внутренняя система персональных
              предложений. Я создал единый вид и правила, как будут работать и
              отображаться персональные клиентские предложения
            </Par>
          </Statement>

          <Media label="false" media="img" src={Crosses} />

          <Statement text=" ">
            <Par>Пример сложносочининнего сценария с кросспродажами</Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={thumbCrosses}
            altThumb="thumbCrosses"
            src={require("../../public/works/selection_system/crosses.mp4")}
            min="0"
            max="40"
          />

          <Statement text="Результаты">
            <Par>
              Система подбора продуктов хранит и обновляет условия и тарифы по
              всем продуктам. Она умеет поддреживать все возможные бизнес-задачи
              и сложные продуктовые сценарии.
            </Par>
            <Par>Также есть другие аналитические показатели:</Par>
            <div className={styles.stasWrapper}>
              <Stats
                headline="79%"
                desc="Доля успешных продаж, сделанных с помощью системы подбора продукта"
              />
              <Stats
                headline=">245"
                desc="Хранится уникальных продуктовых сценариев в системе"
              />
            </div>
            <Stats
              headline="В 3 раза"
              desc="Больше заключенных сделок с помощью презентаций системы подбора продуктов"
            />
          </Statement>

          <ProjectFooter date="29.12.2023" />
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
