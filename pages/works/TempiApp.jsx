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
// duplicate import removed

import { FormattedMessage } from "react-intl";

import Flow from "../../public/works/TempiApp/Flow.png";
import ClickMap from "../../public/works/TempiApp/Clickmap.png";
import OldRegistration from "../../public/works/TempiApp/OldRegistration.png";
import header from "../../public/works/TempiApp/header.png";
import Table from "../../public/works/TempiApp/Table.png";
import Answers from "../../public/works/TempiApp/Answers.png";
import MainScreens from "../../public/works/TempiApp/MainScreens.png";

export default function Project(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Tempi — редизайн флоу резюме | Egor Filipas</title>
          <meta
            name="description"
            content="Редизайн флоу создания резюме в HR-стартапе Tempi с использованием ИИ"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeadMedia media="img" alt="header_img" src={header} />

        {/* Слайд 1. Контекст и продукт */}

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2024-2025</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Role</h3>
              <p>Senior Product Designer</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Scope</h3>
              <p>
                Product Strategy, UI/UX, Analysis, Prototyping, Design system
              </p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle style={{ marginTop: "30px", marginBottom: "200px" }}>
            <h1>
              Редизайн и внедрение ключевых сценариев в сервисе Tempi для
              соискателей
            </h1>
          </MainTitle>

          {/* Слайд 1. Цель */}
          <Statement text="Глобальная задача">
            <Headline>
              Сформировать устойчивую базу постоянных соискателей и
              работодателей
            </Headline>
            <Par>
              Моя задача как Старшего продуктового дизайнера заключалась в том,
              чтобы пересобрать ключевые пользовательские сценарии, убрать
              барьеры входа и повысить основные продуктовые метрики: success
              rate регистрации, конверсию в ключевые действия, удержание и
              возврат пользователей. Финальная цель — сформировать устойчивую
              базу постоянных соискателей и работодателей
            </Par>
          </Statement>

          {/* Слайд 2. Ключевой UX-флоу */}
          <Statement text="">
            <Headline>Основной UX-флоу соискателя</Headline>
            <Par>
              Вход / Регистрация → Поиск работы → Выбор вакансии → Создание
              резюме → Отклик
            </Par>
          </Statement>

          <Media type="img" src={Flow} />

          <MainTitle style={{ marginTop: "300px", marginBottom: "30px" }}>
            <h1>Регистрация и вход</h1>
          </MainTitle>

          {/* Слайд 3. Регистрация */}
          <Statement text="Челлендж">
            <Headline>Перегруженная регистрация </Headline>
            <Par>
              - слишком много обязательных шагов;
              <br />
              - избыточные поля;
              <br />
              - проблемы с версткой и кликабельностью;
              <br />- ошибки на этапе выбора профессии (чипы работали
              непредсказуемо, пользователь не понимал, что выбрано).
            </Par>
          </Statement>
          <Media type="img" src={OldRegistration} />

          <Statement text="">
            <Headline>
              Регистрация вместо первого позитивного опыта становилась точкой
              отказа
            </Headline>
            <Par>
              • пользователи фрустрировали и ошибались,
              <br />
              • часто не понимали, что от них требуется,
              <br />
              • success rate регистрации составлял около 10%,
              <br />
              • вероятность повторного входа после регистрации — ~10%.
              <br />
            </Par>

            <Image
              style={{ width: "100%", height: "auto" }}
              src={ClickMap}
              layout="responsive"
              alt="searches"
            />
          </Statement>

          <Statement text="Решение">
            <Headline>Снижение нагрузки иустранение фрустрации</Headline>
            <Par>
              • упрощён и укорочен флоу регистрации
              <br />
              • убраны неключевые поля и шаги
              <br />
              • Добавлен экран выбора аватара, чтобы пользователь мог
              кастомизировать профиль под себя
              <br />
              • Добавлена возможность выбрать эмоджи или иллюстрацию, если не
              хочется загружать фото
              <br />• Также добавлен экран успеха с анимацией, который завершает
              регистрацию на позитивной ноте и закрепляет ощущение «я справился»
            </Par>
            <Par style={{ paddingTop: "30px" }}>
              Кастмомизация профиля важна, потому что эмоционально окрашенный
              первый опыт напрямую влияет на удержание пользователя
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={Flow}
            altThumb="resumeThumb"
            src={require("../../public/works/TempiApp/Registration.mp4")}
            min="0"
            max="17"
          />

          <Statement text="Решение">
            <Headline>
              Исправлены UX- и UI-ошибки на этапе выбора профессий
            </Headline>
            <Par>
              Логика выбора стала прозрачной и предсказуемой — пользователь
              больше не ошибается и не «теряет» выбранные профессии
            </Par>
          </Statement>
          <Video
            label="false"
            right="right"
            srcThumb={Flow}
            altThumb="resumeThumb"
            src={require("../../public/works/TempiApp/professions.mp4")}
            min="0"
            max="18"
          />

          <Statement text="Результат">
            <div className={styles.stasWrapper}>
              <Stats headline="+14%" desc="Success rate" />
              <Stats
                headline="~30%"
                desc="Вероятность возврата после регистрации"
              />
            </div>
          </Statement>

          {/* Слайд 2. ГЛАВНАЯ СТРАНИЦА — ПОИСК ВАКАНСИЙ */}
          <MainTitle style={{ marginTop: "300px", marginBottom: "30px" }}>
            <h1>Поиск работы и подработки</h1>
          </MainTitle>

          <Statement text="Челлендж">
            <Par>
              Пользователи ищут работу по разным критериям: важна локация
              работы, уровень дохода, конкретная профессия или сфера
              деятельности, тип занятости (полная, частичная), а также
              требования работодателя к кандидату
            </Par>
          </Statement>

          <Statement text="Исследование">
            <Headline>
              Анализ поведения пользователей и их критериев поиска
            </Headline>
            <Par>
              В ходе общения со соискателями без опыта работы и пользователями с
              линейными профессий выяснилось, что при поиске работы пользователи
              ориентируются на несколько ключевых критериев:
            </Par>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={Answers}
              layout="responsive"
              alt="searches"
            />
          </Statement>

          <Statement text="Решение">
            <Headline>Поиск по по пользовательским критериям</Headline>
            <Par>
              • Реализован поиск по профессиям, карта с точками вакансий,
              фильтры по уровню дохода, требованиям и условиям работы
              <br />
              • Добавлена лента видео-вакансии как быстрый и менее когнитивно
              нагружающий формат и более эмоциональное восприятие
              <br />
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={Flow}
            altThumb="resumeThumb"
            src={require("../../public/works/TempiApp/Mainsearch.mp4")}
            min="0"
            max="30"
          />

          <Statement text="">
            <Headline>Переключатель фуллтайм / разовые смены</Headline>
            <Par>
              Две основные аудитории соискателей: те что ищут фуллтайм и те что
              ищут подработку (студенты, школьники и пр.). Поэтому для их
              удобства добавлен переключатель фуллтайм / разовые смены
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={Flow}
            altThumb="resumeThumb"
            src={require("../../public/works/TempiApp/Shifts.mp4")}
            min="0"
            max="16"
          />
          <Image
            style={{ width: "100%", height: "auto" }}
            src={MainScreens}
            layout="responsive"
            alt="searches"
          />

          <Statement text="Результат">
            <div className={styles.stasWrapper}>
              <Stats
                headline="4,5"
                desc="Средняя глубина просмотра за сессию"
              />
              <Stats headline="44%" desc="СR из поиска в карточку вакансии" />
            </div>
          </Statement>

          {/* Слайд 4. СТРАНИЦА ВАКАНСИИ */}
          <MainTitle style={{ marginTop: "300px", marginBottom: "30px" }}>
            <h1>Просмотр вакансии</h1>
          </MainTitle>

          <Statement text="Челлендж">
            <Par>
              Обычно вакансии воспринимаются как скучные, формальные и
              тревожные, особенно для аудитории до 35 лет. Текстовые описания
              вакансий часто перегружены корпоративной лексикой, длинными
              списками требований и формальными формулировками, что создает
              барьер для восприятия и снижает мотивацию к отклику. Пользователи
              чувствуют напряжение и тревогу при поиске работы, ассоциируя
              процесс с формальностью и бюрократией
            </Par>
          </Statement>

          <Statement text="Исследование">
            <Headline>
              Вакансии воспринимаются как корпоративная серость
            </Headline>
            <Par>
              Провели CustDev, который показал, что поиск работы вызывает
              тревогу и ассоциируется с корпоративной серостью. Интервью
              проводили среди соискателей до 35 лет, которые ищут работу на
              линейные профессии на самы популярных серсивах: HH, Avito-Работа,
              Rabota.ru и прочее
            </Par>
          </Statement>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={Table}
            layout="responsive"
            alt="searches"
          />

          <Statement text="Решение">
            <Headline>
              Карточка вакансии теперь более эмоциональнее и интереснее
            </Headline>
            <Par>
              Добавлены видео-вакансии и визуальный контент для снижения
              напряжения и повышения вовлечённости. Улучшена типографика и
              контрастность
            </Par>
            <Par>Вырос CTR в отклик на вакансию</Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={Flow}
            altThumb="resumeThumb"
            src={require("../../public/works/TempiApp/Vacancie.mp4")}
            min="0"
            max="23"
          />

          {/* Слайд 5. ПРОФИЛЬ СОИСКАТЕЛЯ */}

          <MainTitle style={{ marginTop: "300px", marginBottom: "30px" }}>
            <h1>Профиль соискателя</h1>
          </MainTitle>
          <Statement text="Челлендж">
            <Par>
              Профиль должен мотивировать пользователя и показывать возможности
              сервиса
            </Par>
            <Par>
              Ключевые дейтсвия:
              <br />— включить уведомления от работодателей; <br />— подтвердить
              самозанятость; <br />— загрузить аватар; <br />— заполнить резюме.
            </Par>
          </Statement>

          <Statement text="Решение">
            <Headline>5. Профиль соискателя</Headline>
            <Par>
              Профиль спроектирован как action-driven экран с подсказками и
              объяснением ценности каждого действия и пользы от него
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={Flow}
            altThumb="resumeThumb"
            src={require("../../public/works/TempiApp/Profile.mp4")}
            min="0"
            max="10"
          />

          <Statement text="Результат">
            <Stats headline="+5%" desc="СR в дополнительные действия" />
          </Statement>

          {/* <ProjectFooter date="15.06.2025" /> */}
        </section>
      </div>
    </>
  );
}
