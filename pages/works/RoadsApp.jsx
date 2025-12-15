import Head from "next/head";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";

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

import roadsAppImage from "../../public/projects/roads-app.png";
import header from "../../public/works/toll_roads/header.png";
import onboarding from "../../public/works/toll_roads/Onboarding.png";
import calc from "../../public/works/toll_roads/Calc.png";
import calcScnd from "../../public/works/toll_roads/CalcScnd.png";
import dark from "../../public/works/toll_roads/Dark.png";
import searches from "../../public/works/toll_roads/searches.png";
import CJM from "../../public/works/toll_roads/CJM.png";
import insurances from "../../public/insurances.png";
import deposits from "../../public/deposits.png";
import { cacheLife } from "next/dist/server/use-cache/cache-life";

export default function Project(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Платные дороги в Штрафы.ру | Egor Filipas</title>
          <meta
            name="description"
            content="Добавление нового сервиса проверки и оплаты платных дорог в экосистему Штрафы.ру"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Слайд 1. Контекст и бизнес-логика */}
        <HeadMedia media="img" alt="header_img" src={header} />

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2025</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Role</h3>
              <p>Senior Product Designer</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Scope</h3>
              <p>Product Strategy, UI/UX, Prototyping, Design system</p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle style={{ marginTop: "30px", marginBottom: "200px" }}>
            <h1>
              Штрафы.ру — сервис для оплаты штрафов, налогов, ОСАГО и платных
              дорог. 10+ млн пользователей.
            </h1>
          </MainTitle>

          <Statement text="Задача">
            <Headline>
              Добавление нового сервиса проверки и оплаты платных дорог
            </Headline>
            <Par>
              Пользователи часто не знают, что за неоплату проезда по трассам
              (М-4, М-11, ЦКАД и др.) назначается штраф до 5000 ₽. Быстрой
              официальной проверки и оплаты в одном месте не хватало.
              Расчитывать стоимость будущих поездок тоже было неудобно.
            </Par>
            <Par>
              Для решения этой проблемы я внедрил в экосистему сервиса Штрафы.ру
              новый востребованный сценарий — проверку и оплату неоплаченных
              проездов по платным трассам, а также расчёт стоимости будущих
              поездок.
            </Par>
          </Statement>

          <Statement text="Исследование">
            <Headline>Анализ пользовательских запросов</Headline>
            <Par>
              Cобрал и проанализировал поисковые фразы из Google, Яндекса, App
              Store и Google Play. Это помогло понять высокий интерес к теме, но
              отсутствие понятного, официального сервиса проверки и оплаты в
              одном месте.
            </Par>
            <Par style={{ paddingTop: "30px" }}>Наиболее частые запросы:</Par>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={searches}
              layout="responsive"
              alt="searches"
            />
          </Statement>

          <Statement text=" ">
            <Headline>Карта пути пользователя</Headline>
            <Par>
              Построил CJM на основе интервью и наблюдений за пользователями,
              попавшими в ситуацию с неоплаченным проездом. Ключевые этапы пути:
            </Par>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={CJM}
              layout="responsive"
              alt="CJM"
            />
          </Statement>

          <Statement text=" ">
            <Headline>Вывод</Headline>
            <Par>
              Пользователям нужен единый, официальный и простой способ быстро
              проверить неоплаченные проезды и оплатить их. Также нужен сервис,
              который поможет рассчитать стоимость будущих поездок.
            </Par>
          </Statement>

          {/* Слайд 2. Онбординг и стартовый экран */}
          <Statement text="Решение">
            <Headline>Онбординг и стартовый экран</Headline>
            <Par>
              Цель: быстро объяснить, про что сервис, и сократить путь до
              результата. Первый экран с вводом госномера, затем СТС и email для
              квитанций/уведомлений.
            </Par>
          </Statement>

          <Media label="false" media="img" src={onboarding} />

          {/* Слайд 3. Дэшборд = единый центр начислений */}
          <Statement text="Решение">
            <Headline>Дэшборд</Headline>
            <Par>
              Для прошедших онбординг — сплеш-анимация и сразу показывем дэшборд
              с результатами проверки: штрафы, налоги, ОСАГО, платные дороги.
              Усиливает ценность сервиса «всё в одном месте».
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={onboarding}
            altThumb="thumbProceed"
            src={require("../../public/works/toll_roads/dashboard.mp4")}
            min="0"
            max="11"
          />

          {/* Слайд 4. Раздел «Платные дороги» */}
          <Statement text="Решение">
            <Headline>Раздел «Платные дороги»</Headline>
            <Par>
              Показываем наглядно пользователю все неоплаченные проезды. В
              каточке проезда: маршрут, дата, сумма, срок оплаты, статус. Если
              долгов нет — позитивный экран + CTA «Рассчитать проезд».
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={onboarding}
            altThumb="thumbProceed"
            src={require("../../public/works/toll_roads/RoadCard.mp4")}
            min="0"
            max="22"
          />

          {/* Слайд 5. Калькулятор проездов */}
          <Statement text="Решение">
            <Headline>Калькулятор проездов</Headline>
            <Par>
              Выбор трассы (например, М-12 «Восток») и точек «откуда–куда».
              Показываем стоимость, время в пути, расстояние, скидку с
              транспондером
            </Par>
          </Statement>

          <Media label="false" media="img" src={calc} />

          {/* Слайд 6. Калькулятор: сценарии «есть долги / нет долгов» */}
          <Statement text="Решение">
            <Headline>Калькулятор, если «есть долги / нет долгов»</Headline>
            <Par>
              Если долги есть — сверху сумма и CTA на оплату (не теряем фокус).
              Если долгов нет — предложение проверить их по госномеру.
            </Par>
          </Statement>

          <Media label="false" media="img" src={calcScnd} />

          {/* Слайд 8. Тёмная тема */}
          <Statement>
            <Headline>Тёмная тема</Headline>
            <Par>
              Не просто инверсия цветов — пересобранные контрасты. Тёмная карта,
              сохранение цветового кода трасс, акцент на читаемости и цифрах.
              Удобно ночью/в дороге.
            </Par>
          </Statement>

          <Media label="false" media="img" src={dark} />

          {/* Слайд 9. UX-подход и метрики */}

          <Statement text="Результат">
            <Headline>Рост ARPU за счёт оплаты проездов</Headline>
            <Par>
              В рамках нескольких недель A/B теста часть пользователей видела
              новый раздел «Платные дороги», другая — нет. Измеряли долю
              пользователей, совершивших оплату, средний чек, ARPU на
              пользователя, пришедшего в новый сценарий. Также измеряли success
              rate в ключевые действия: например, успешную оплату.
            </Par>
            {/* <Par>
              Также, измеряли как 
            </Par> */}
            <div className={styles.stasWrapper}>
              <Stats
                headline="+11%"
                desc="ARPU на пользователя в новом сценарии"
              />
              <Stats headline="≈8%" desc="Success rate" />
            </div>
            <Stats
              headline="+15%"
              desc="Рост MAU за счёт новых пользователей"
            />
            {/* <Stats
              headline="Поднялся рейтинг"
              desc="В Google Play и App Store"
            /> */}
          </Statement>

          {/* <DescriptionLayout>
            <DescriptionTitle>UX-подход и метрики</DescriptionTitle>
            <DescriptionPar>
              <p>
                UX: минимум шагов (2 поля вместо 4+), наследование паттернов
                штрафов/налогов, позитивные состояния, пуш-уведомления.
              </p>
              <p>
                Метрики (таргеты/ожидания):
                <br />
                — рост CR в оплату проездов за счёт единого экрана долгов;
                <br />
                — рост D1 retention за счёт уведомлений и калькулятора;
                <br />
                — рост ARPU за счёт комиссий с оплат/пополнений транспондера;
                <br />— улучшение NPS благодаря «всё в одном».
              </p>
            </DescriptionPar>
          </DescriptionLayout>

          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            UX-подход и метрики
          </div> */}

          {/* <ProjectFooter date="15.12.2023" /> */}
        </section>

        {/* <Suggested>
          <MdProject
            href="/works/Insurances"
            src={insurances}
            type="arrow"
            media="img">
            <FormattedMessage id="suggestedInsurances" />
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
