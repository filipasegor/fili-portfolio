import Head from "next/head";
import styles from "../../styles/Project.module.scss";

import HeadMedia from "../components/works/HeadMedia";
import Headline from "../components/main/Headline/Headline";
import Media from "../components/works/Media";
import Video from "../components/works/Video";

import Par from "../components/main/Par/Par";
import TaskDescLayout from "../components/works/TaskDescLayout";
import TaskDesc from "../components/works/TaskDesc";
import MainTitle from "../components/works/MainTitle";
import ProjectFooter from "../components/works/ProjectFooter";
import Suggested from "../components/works/Suggested";
import Statement from "../components/main/Statement/Statement";
import MdProject from "../components/_MdProject";
import SmProject from "../components/_SmProject";
import Stats from "../components/main/Stats/Stats";

import { FormattedMessage } from "react-intl";

import finesApp from "../../public/projects/fines-app.png";
import roadsAppImage from "../../public/projects/roads-app.png";
import insurances from "../../public/insurances.png";
import deposits from "../../public/deposits.png";

// Dashboard assets
import Problem from "../../public/works/dashboard/Problem.png";
import Purpose from "../../public/works/dashboard/Purpose.png";
import Main from "../../public/works/dashboard/Main.png";
import States from "../../public/works/dashboard/States.png";
import Dark from "../../public/works/dashboard/Dark.png";
import dashboard from "../../public/works/dashboard/dashboard.mp4";

export default function Project(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Редизайн дашборда в Штрафы.ру | Egor Filipas</title>
          <meta
            name="description"
            content="Редизайн дашборда в Штрафы.ру для объединения всех сервисов"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Слайд 1. Контекст и бизнес-логика */}
        <div
          style={{
            width: "100%",
            height: "400px",
            background:
              "radial-gradient(72.03% 84.94% at 50% 1.67%, #2F9300 0%, rgba(136, 204, 40, 0.00) 80.57%)",
            margin: "0 auto",
          }}
        />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2025</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Role</h3>
              <p>Product Designer</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Scope</h3>
              <p>UI/UX, Design system, Prototyping</p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle style={{ marginTop: "30px", marginBottom: "200px" }}>
            <h1>
              Штрафы.ру — сервис для оплаты штрафов, налогов, ОСАГО и платных
              дорог. 10+ млн пользователей.
            </h1>
          </MainTitle>

          {/* Слайд 2 — Проблема и цель проекта */}
          <Statement text="Проблема">
            <Headline>Почему нужен редизайн</Headline>
            <Par>
              Пользователи оплачивали только штрафы и не переходили к другим
              продуктам — налогам, ОСАГО и платным дорогам. Из-за этого бизнес
              терял конверсии и вовлечённость.
            </Par>
          </Statement>

          <Media type="img" src={Problem} />

          <Statement text="Цель">
            <Headline>Что мы хотели достичь</Headline>
            <Par>
              Создать единый дашборд, объединяющий все сервисы, увеличить оплату
              дополнительных услуг без потери по основному сценарию — штрафам.
            </Par>
          </Statement>

          <Media type="img" src={Purpose} />

          {/* Слайд 3 — Задачи дизайна */}
          <Statement text="Задачи">
            <Headline>Основные задачи дизайна</Headline>
            <Par>
              — Спроектировать универсальные карточки для всех сервисов: штрафы,
              налоги, дороги, ОСАГО.
              <br />
              — Сделать интерфейс простым и визуально сбалансированным.
              <br />
              — Добавить подсветку ошибок и уведомления.
              <br />— Повысить Retention за счёт прозрачного статуса
              пользователя.
            </Par>
          </Statement>

          {/* Слайд 4 — Экран дашборда */}
          <Statement text="Решение">
            <Headline>Центральный дашборд</Headline>
            <Par>
              Главный экран объединяет все сервисы — штрафы, налоги, дороги,
              ОСАГО. Пользователь видит статусы, ошибки и уведомления сразу. Это
              повышает доверие и экономит время.
            </Par>
          </Statement>

          <Video src={dashboard} />

          {/* Слайд 5 — Виджеты и состояния */}
          <Statement>
            <Headline>Продуманная логика состояний</Headline>
            <Par>
              Каждый сервис имеет свои состояния: загрузка, ошибка, чисто,
              найден долг. Проработаны редкие кейсы — нет данных, некорректный
              документ.
            </Par>
          </Statement>

          <Media type="img" src={Main} />

          {/* Слайд 6 — Новый визуальный язык */}
          <Statement>
            <Headline>Унификация карточек</Headline>
            <Par>
              Все карточки приведены к единой системе: сетка, иконки, тени,
              цветовые статусы. Интерфейс стал цельным и узнаваемым.
            </Par>
          </Statement>

          <Media type="img" src={States} />

          {/* Слайд 7 — Темная тема */}
          <Statement>
            <Headline>Тёмная тема</Headline>
            <Par>
              Карточки и основные кнопки оптимизированы под комфортное
              использование в темноте и для тех, у кого установлена темна тема.
            </Par>
          </Statement>

          <Media type="img" src={Dark} />

          {/* Слайд 9 — Метрики */}
          <Statement text="Результат">
            <Headline>Метрики и достижения</Headline>
            <Par>
              Редизайн дашборда показал значительные улучшения в ключевых
              метриках продукта.
            </Par>
            <Par>
              Пользователи стали чаще оплачивать всё в одном месте. Приложение
              укрепило позицию как единый центр для автомобилистов.
            </Par>
            <div className={styles.stasWrapper}>
              <Stats headline="3% → 9%" desc="Оплата других услуг" />
            </div>
            <Stats headline="17% → 33%" desc="Включение пушей" />
            <Stats headline="+5%" desc="ARPU" />
            <Stats headline="+7%" desc="Retention" />
          </Statement>

          {/* <ProjectFooter date="06.08.2025" /> */}
        </section>

        {/* <Suggested>
          <MdProject
            href="/works/RoadsApp"
            src={roadsAppImage}
            type="arrow"
            media="img">
            <FormattedMessage id="suggestedRoadsApp" />
          </MdProject>
          <SmProject
            href="/works/Deposits"
            src={deposits}
            type="arrow"
            media="img">
            <FormattedMessage id="suggestedDeposits" />
          </SmProject>
        </Suggested> */}
      </div>
    </>
  );
}
