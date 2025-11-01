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
import SmHeadline from "../components/main/Headline/SmHeadline";
import Point from "../components/works/Point/Point";
import DoubleMedia from "../components/works/DoubleMedia/DoubleMedia";
import Stats from "../components/main/Stats/Stats";

import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import TaskLink from "../components/works/TaskLink";

import primeHead from "../../public/works/prime/primeHead.png";
import oldPrime from "../../public/works/prime/oldPrime.png";
import newPrime from "../../public/works/prime/newPrime.png";
import paper from "../../public/works/prime/paper.png";
import costs from "../../public/works/prime/costs.png";

import thumbCharus from "../../public/thumbCharus.png";
import thumbNhs from "../../public/thumbNhs.png";
import thumbShmot from "../../public/thumbShmot.png";

// import {
//   Statement,
//   Par,
//   Headline,
//   Stats,
//   DoubleMedia,
//   SmHeadline,
//   Point,
//   PointBolded,
// } from "../components/index";

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

        <HeadMedia
          style={{ background: "white", animation: "none" }}
          media="img"
          alt="header_img"
          src={primeHead}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2022</p>
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
              Система подбора продуктов Сбера помогает менеджерам рассказывать
              про подписку СберПрайм клиентам, которые пришли в отделение банка
            </h1>
          </MainTitle>

          <Statement text="проблемы">
            <Headline>Старый лендинг очень долгий и неэффективный </Headline>
            <Par>
              До моего прихода в команду старый лендинг не справлялся с
              задачами, которые перед ним стояли
            </Par>
            <Par>
              Лендинг был слишком длинным и менеджеры по такому сценарию тратяли
              много времени на консультацию: от 10 мин.
            </Par>
            <Par>
              Большой процент отказов и низкий уровень продаж для целевого
              продукта
            </Par>
            <Par>
              Менеджерам сложно консультировать по такой презентации и как
              результат: индекс удовлетворенности менеджеров (CSI) составлял 55%
            </Par>
            <Par>
              Клиенты не понимают разницу от подписки СберПрайм и СберПрайм+
            </Par>
            <Par>Скринкаст старого лендинга:</Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={oldPrime}
            altThumb="oldPrime"
            src={require("../../public/works/prime/oldPrime.mp4")}
            min="0"
            max="41"
          />

          <Statement text="Задача">
            <Headline>Улучшить и пересобрать текущий лендинг </Headline>
            <Par>
              После консультаций с владельцем продукта я выделил несколько
              показателей, которые будут доказывать, что изменения действительно
              принесли свои плоды:
            </Par>
            <Par>1. Рост продаж и сокращение отказов</Par>
            <Par>2. Рост удовлетворенности менеджеров (СSI)</Par>
            <Par>3. Сокращение времени консультаций</Par>
            <Par>
              4. Клиенты не устают к концу консультации и понимают, какие
              преимущетсва входят в подписку
            </Par>
          </Statement>

          <Statement text="Исследования">
            <Headline>Бумажная распечатка лучше, чем лендинг</Headline>
            <Par>
              По результатам интервью выяснилось, что
              <br /> на деле менеджеры пользовались бумажной распечаткой. Она
              была им удобнее, потому что на ней располагалось больше
              информации. Таким образом менеджеры могли фокусировать внимание
              клиента на конкретных сервисах и на конкретной пользе от продукта
            </Par>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={paper}
              layout="responsive"
              alt="paper"
            />
            <Par style={{ paddingTop: "30px" }}>
              Поэтому я решил взять лучшее от бумажной распечатки и разместить
              информацию о продукте со такой же плотностью, чтобы менеджерам
              было привычно пользоваться новым инструментом
            </Par>
          </Statement>

          <Statement text="Решение">
            <Headline>
              Объединить бумажную распечатку с цифровыми возможностями Сбера
            </Headline>
            <Par>
              Самое главное измененние — расположение информации о сервисах,
              входядих в подписку. Теперь все сервисы умещаются на один экран
              планшета. Так, клиент сразу видит всю пользу от подписки
            </Par>
            <Par>
              Помимо обновленного расположения информации о сервисах, входящих в
              подписку, новый лендинг умеет автоматически считать, сколько
              клиент сэкономит, если будет пользоваться СберПраймом.
            </Par>
            <Link
              href="https://www.figma.com/proto/n5kuJRF3zYS9bfVxrQ6j4W/Untitled?page-id=0%3A1&type=design&node-id=107-31295&viewport=1535%2C-22%2C0.23&t=wLyDXpBLyLuprBbt-1&scaling=scale-down&starting-point-node-id=107%3A31295&mode=design"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer">
              Протестировать прототип
            </Link>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={newPrime}
            altThumb="newPrime"
            src={require("../../public/works/prime/newPrime.mp4")}
            min="0"
            max="51"
          />

          <Statement text=" ">
            <Par>
              Под капотом лендинга зашит алгоритм, который считывает какими
              сервисами пользуется клиент и какие у него траты. Исходя из трат,
              алгоритм считает сколько клиент сэкономит с подпиской
            </Par>
          </Statement>
          <Media label="false" media="img" src={costs} />

          <Statement text="Результат">
            <Headline>Основные задачи редизайна были достигнуты</Headline>
          </Statement>

          <div className={styles.doubleMediaWrapper}>
            <DoubleMedia
              src={require("../../public/works/prime/oldPrimeCompare.mp4")}>
              <SmHeadline>Было</SmHeadline>
              <Point type="crosshairIcon">
                Лендинг был слишком длинным, поэтому менеджеры тратили много
                времени на консультацию:{" "}
                <span style={{ fontFamily: "RooftopBold" }}>от 13 минут</span>
              </Point>
              <Point type="crosshairIcon">
                Большой процент отказов и низкий уровень продаж
              </Point>
              <Point type="crosshairIcon">
                Клиент чаще всего устает и теряет концентрацию к концу рассказа
              </Point>
              <Point type="crosshairIcon">
                Менеджерам сложно консультировать по такой презентации и как
                результат{" "}
                <span style={{ fontFamily: "RooftopBold" }}>
                  показатель удовлетворенность менеджеров (CSI): 55%
                </span>
              </Point>
              <Point type="crosshairIcon">
                Клиенты не понимают разницу от подписки Прайм и Прайм+
              </Point>
            </DoubleMedia>
            <DoubleMedia
              src={require("../../public/works/prime/newPrimeCompare.mp4")}>
              <SmHeadline>Стало</SmHeadline>
              <Point type="tickIcon" bold="от 10 минут">
                После редизайна лендинг стал короче, и менеджеры в среднем
                тратят на рассказ о продукте{" "}
                <span style={{ fontFamily: "RooftopBold" }}>6 — 7 минут</span>
              </Point>
              <Point type="tickIcon" bold="от 10 минут">
                Рост конверсии продаж на{" "}
                <span style={{ fontFamily: "RooftopBold" }}>+13%</span>,<br /> а
                отказы сократились на{" "}
                <span style={{ fontFamily: "RooftopBold" }}>-24%</span>
              </Point>
              <Point type="tickIcon" bold="от 10 минут">
                Клиент остается в фокусе на протяжении всей презентации
              </Point>
              <Point type="tickIcon" bold="от 10 минут">
                Новый лендинг входит в топ 3 самых любимых продуктов у
                менеджеров,{" "}
                <span style={{ fontFamily: "RooftopBold" }}>
                  показатель удовлетворенность менеджеров (CSI): 83%{" "}
                </span>
              </Point>
              <Point type="tickIcon" bold="от 10 минут">
                Клиенты понимают чем отличаются подписки Прайм и Прайм+
              </Point>
            </DoubleMedia>
          </div>

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
