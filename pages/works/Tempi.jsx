import Head from "next/head";
import styles from "../../styles/Project.module.scss";
import Image from "next/image";

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

import resumeRedesign from "../../public/projects/resume-redesign.png";
import roadsAppImage from "../../public/projects/roads-app.png";
import insurances from "../../public/insurances.png";
import deposits from "../../public/deposits.png";
import ux from "../../public/works/tempiAi/ux.png";
import answers from "../../public/works/tempiAi/Answers.png";
import ui from "../../public/works/tempiAi/ui.png";
import resumeThumb from "../../public/works/tempiAi/resumeThumb.png";

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

        <div
          style={{
            width: "100%",
            height: "400px",
            background:
              "radial-gradient(72.03% 84.94% at 50% 1.67%, #480593 0%, rgba(136, 204, 40, 0.00) 80.57%)",
            margin: "0 auto",
          }}
        />

        {/* Слайд 1. Контекст и продукт */}

        <section className={styles.content}>
          <TaskDescLayout>
            <TaskDesc>
              <h3>Year</h3>
              <p>2025</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Role</h3>
              <p>Lead Product Designer</p>
            </TaskDesc>
            <TaskDesc>
              <h3>Scope</h3>
              <p>UI/UX, Prototyping,Analysis, Design system</p>
            </TaskDesc>
          </TaskDescLayout>

          <MainTitle style={{ marginTop: "30px", marginBottom: "200px" }}>
            <h1>
              Tempi — HR-стартап для поиска работы и подработки. Продукт
              помогает быстро найти вакансии и откликнуться, а работодателям —
              получать релевантные отклики.
            </h1>
          </MainTitle>

          {/* Слайд 2. Как было / Цель */}
          <Statement text="Как было">
            <Headline>Проблема с созданием резюме</Headline>
            <Par>
              Пользователи регистрировались, но часто не создавали резюме:
              длинная форма, много ручного ввода, «ощущение анкеты».
              Работодатели получали отклики без резюме, падала эффективность,
              снижался возврат и вовлечённость. Конверсия в заполненные резюме —
              около 3%.
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={resumeThumb}
            altThumb="resumeThumb"
            src={require("../../public/works/tempiAi/old.mp4")}
            min="0"
            max="12"
          />

          <Statement text="Исследование">
            <Headline>Анализ поведения и UX-метрик</Headline>
            <Par>
              Из данных аналитики и вебвизора было видно, что: <br />
              — более 60% пользователей покидали форму после некоторых попыток
              ввода данных о себе , <br /> — среднее время на заполнение
              превышало 3-4 минуты, <br />— доля завершений (CR) в созданное
              резюме — около 3%.
            </Par>
          </Statement>

          <Statement text="">
            <Headline>Глубинные интервью и UX-тестирование</Headline>
            <Par>
              Провел несколько сессий с пользователями, которые
              регистрировались, но не создавали резюме. Выявили основные
              причины, почему они не заполняли резюме:
            </Par>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={answers}
              layout="responsive"
              alt="answers"
            />
          </Statement>

          {/* <Statement text="">
            <Headline>Сравнение с лучшими практиками</Headline>
            <Par>
              Изучили паттерны других HR-сервисов(HeadHunter, Profi ru, Ozon
              Job). Отметили, что они акцентируются на кратком пути и не
              заставляют пользователя вводить много данных о себе.
            </Par>
          </Statement> */}

          {/* 
          <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            Как было
          </div> */}

          <Statement text="Цель">
            <Headline>Что мы хотели достичь</Headline>
            <Par>
              Сократить путь до результата и увеличить долю заполненных резюме,
              не теряя качество данных. Сделать создание резюме быстрым,
              понятным и мотивирующим к докрутке.
            </Par>
          </Statement>

          {/* <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            Цель проекта
          </div> */}

          {/* Слайд 3. Решение */}
          <Statement text="Решение">
            <Headline>Магия с нейросетью</Headline>
            <Par>
              Добавил кнопку «Создать резюме с нейросетью». ИИ генерирует
              базовое резюме по профессии и опыту. После чего пользователь может
              редактировать и улучшать результат. Добавили рейтинг качества
              резюме и позитивные состояния (успех/подсказки), разбили флоу на
              короткие шаги с возможностью пропустить.
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={resumeThumb}
            altThumb="resumeThumb"
            src={require("../../public/works/tempiAi/ai.mp4")}
            min="0"
            max="17"
          />

          {/* <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            Решение
          </div> */}

          {/* Слайд 4. Флоу продукта */}
          <Statement>
            <Headline>Флоу продукта</Headline>
            <Par>
              1) Отклик на вакансию → экран «Выбор резюме для отклика».
              <br />
              2) Создание резюме: заполнить вручную или создать с нейросетью.
              <br />
              3) Быстрое заполнение профессии, опыта, навыков
              <br />
              5) Оценка качества, доработка, рекомендации «что добавить».
              <br />
              6) Сохранение → экран успеха → резюме прикладывается к откликам.
            </Par>
          </Statement>

          <Video
            label="false"
            right="right"
            srcThumb={resumeThumb}
            altThumb="resumeThumb"
            src={require("../../public/works/tempiAi/flow.mp4")}
            min="0"
            max="47"
          />

          {/* <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            Флоу продукта
          </div> */}

          {/* Слайд 5. UX-решения */}
          <Statement>
            <Headline>UX-решения</Headline>
            <Par>
              — Пошаговая структура: фокус на один экран, чтобы не отвлекать
              пользователя, когда он заполняет навыки или опыт работы.
              <br />
              — Пропуск шагов: не блокируем движение вперёд.
              <br />
              — Лоадер генерации: удержание внимания и «магия».
              <br />— Позитивная обратная связь и оценка резюме: геймификация,
              мотивация улучшить своё резюме.
            </Par>
          </Statement>

          <Media type="img" src={ux} />

          {/* <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            UX-решения
          </div> */}

          {/* Слайд 6. Визуальные улучшения */}
          <Statement>
            <Headline>Визуальные улучшения</Headline>
            <Par>
              Чище типографика, контрастные CTA, меньше «визуального шума».
              Состояния успеха — яркая анимация, с доброжелательной
              тональностью. Экран «Выбор резюме для отклика» — с мини-карточками
              и краткими статами (доход, опыт), чтобы сразу понять, какое резюме
              отправлять.
            </Par>
          </Statement>

          <Media type="img" src={ui} />
          {/* <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            Визуальные улучшения
          </div> */}

          {/* Слайд 7. Польза для пользователя и бизнеса
          <Statement>
            <Headline>Польза для пользователя и бизнеса</Headline>
            <Par>
              <strong>Пользователь:</strong> готовое резюме за 1 клик, можно
              редактировать без стресса, видит прогресс и оценку качества;
              быстрее доходит до откликов.
              <br />
              <strong>Бизнес:</strong> больше валидных откликов, рост
              вовлечённости и удержания, снижение процента «пустых» регистраций,
              современное восприятие продукта.
            </Par>
          </Statement>

          <div
            style={{
              width: "100%",
              height: "320px",
              backgroundColor: "#e0e0e0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "16px",
              margin: "40px 0",
            }}>
            Польза для пользователя и бизнеса
          </div> */}

          {/* Слайд 8. Метрики */}
          <Statement text="Результат">
            <Headline>Метрики и достижения</Headline>
            <Par>
              Для оценки результатов мы ориентировались прежде всего на
              UX-метрики: процент заполненных резюме, время до первого
              результата, возвращаемость. Использовали A/B-тесты и глубинные
              интервью для проверки новых решений и выявления реальных проблем
              пользователей
            </Par>
            <div className={styles.stasWrapper}>
              <Stats headline="3% → 17%" desc="CR в заполненное резюме" />
            </div>
            <Stats
              headline="< 1,5 минуты"
              desc="Среднее время до успешного результата"
            />
            <Stats headline="-27%" desc="Churn" />
            <Stats headline="+15%" desc="Retention" />
          </Statement>

          {/* Финальное резюме */}
          <Statement>
            <Headline>Итоги проекта</Headline>
            <Par>
              Редизайн превратил создание резюме из длинной анкеты в быстрый и
              мотивирующий флоу. Пользователи быстрее получают результат и чаще
              возвращаются, бизнес видит рост качества откликов и ключевых
              метрик.
            </Par>
          </Statement>

          {/* <ProjectFooter date="15.06.2025" /> */}
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
