import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./styles.module.scss";
import { FormattedMessage } from "react-intl";

const ProjectsSection = () => {
  const router = useRouter();
  const { locale } = router;
  const isEnglish = locale === "en";

  // Choose projects strictly by locale
  const projects = !isEnglish
    ? [
        {
          title: (
            <FormattedMessage
              id="projects.roads.title"
              defaultMessage="Приложение платных дорог"
            />
          ),
          description: (
            <FormattedMessage
              id="projects.roads.desc"
              defaultMessage="Сервис для оплаты проездов по платным дорогам и расчёта маршрута. Отвечал за дизайн продукта и интерфейсы"
            />
          ),
          metrics: [
            {
              label: (
                <FormattedMessage
                  id="projects.metric.retention"
                  defaultMessage="ARPU"
                />
              ),
              value: "+11%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.mau"
                  defaultMessage="MAU"
                />
              ),
              value: "+25%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.arpu"
                  defaultMessage="Success rate"
                />
              ),
              value: "8%",
            },
          ],
          videoSrc: "/projects/Tollroads.mp4",
          imageAlt: "Приложение платных дорог",
          projectId: "RoadsApp",
        },
        {
          title: (
            <FormattedMessage
              id="projects.tempi.title"
              defaultMessage="Редизайн создания резюме"
            />
          ),
          description: (
            <FormattedMessage
              id="projects.tempi.desc"
              defaultMessage="Tempi — HR-стартап для поиска работы и подработки. Я улучшил UX создания резюме и добавил ИИ для его автоматического заполнения"
            />
          ),
          metrics: [
            {
              label: (
                <FormattedMessage
                  id="projects.metric.successRate"
                  defaultMessage="Success rate"
                />
              ),
              value: "+14%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.timeToTask"
                  defaultMessage="Время до задачи"
                />
              ),
              value: "< 2 min",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.churn"
                  defaultMessage="CHURN"
                />
              ),
              value: "-27%",
            },
          ],
          videoSrc: "/projects/tempiAi.mp4",
          projectId: "Tempi",
        },
        {
          title: (
            <FormattedMessage
              id="projects.dashboard.title"
              defaultMessage="Дэшборд в приложении Штрафы.ру"
            />
          ),
          description: (
            <FormattedMessage
              id="projects.dashboard.desc"
              defaultMessage="Штрафы.ру — один из крупнейших сервисов в России для поиска и оплаты штрафов, налогов и ОСАГО. В проекте я разработал новый дашборд приложения"
            />
          ),
          metrics: [
            {
              label: (
                <FormattedMessage
                  id="projects.metric.crMainAction"
                  defaultMessage="CR(main action)"
                />
              ),
              value: "+6%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.arpu"
                  defaultMessage="ARPU"
                />
              ),
              value: "+5%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.retention"
                  defaultMessage="Retention"
                />
              ),
              value: "+7%",
            },
          ],
          imageSrc: "/projects/fines-app.png",
          imageAlt: "Дэшборд Штрафы.ру",
          projectId: "Dashboard",
        },
      ]
    : [
        {
          title: (
            <FormattedMessage
              id="projects.roads.title"
              defaultMessage="Toll Roads App"
            />
          ),
          description: (
            <FormattedMessage
              id="projects.roads.desc"
              defaultMessage="Service for paying toll road fees and route calculation. I was responsible for product design and interfaces"
            />
          ),
          metrics: [
            {
              label: (
                <FormattedMessage
                  id="projects.metric.retention"
                  defaultMessage="Retention"
                />
              ),
              value: "+5%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.mau"
                  defaultMessage="MAU"
                />
              ),
              value: "+6%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.arpu"
                  defaultMessage="ARPU"
                />
              ),
              value: "+10%",
            },
          ],
          videoSrc: "/projects/Tollroads.mp4",
          imageAlt: "Toll Roads App",
          projectId: "RoadsApp",
        },
        {
          title: (
            <FormattedMessage
              id="projects.tempi.title"
              defaultMessage="Resume Creation Redesign"
            />
          ),
          description: (
            <FormattedMessage
              id="projects.tempi.desc"
              defaultMessage="Tempi — HR startup for job search and part-time work. I improved the resume creation UX and added AI for its automatic filling"
            />
          ),
          metrics: [
            {
              label: (
                <FormattedMessage
                  id="projects.metric.successRate"
                  defaultMessage="Success rate"
                />
              ),
              value: "+14%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.timeToTask"
                  defaultMessage="Time to task"
                />
              ),
              value: "< 2 min",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.churn"
                  defaultMessage="CHURN"
                />
              ),
              value: "-27%",
            },
          ],
          imageSrc: "/projects/resume-redesign.png",
          imageAlt: "Resume Creation Redesign",
          projectId: "Tempi",
        },
        {
          title: (
            <FormattedMessage
              id="projects.dashboard.title"
              defaultMessage="Dashboard in Shtrafy.ru app"
            />
          ),
          description: (
            <FormattedMessage
              id="projects.dashboard.desc"
              defaultMessage="Shtrafy.ru is one of the largest services in Russia for finding and paying fines, taxes and OSAGO. In the project I developed a new application dashboard"
            />
          ),
          metrics: [
            {
              label: (
                <FormattedMessage
                  id="projects.metric.crMainAction"
                  defaultMessage="CR(main action)"
                />
              ),
              value: "+6%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.arpu"
                  defaultMessage="ARPU"
                />
              ),
              value: "+5%",
            },
            {
              label: (
                <FormattedMessage
                  id="projects.metric.retention"
                  defaultMessage="Retention"
                />
              ),
              value: "+7%",
            },
          ],
          imageSrc: "/projects/fines-app.png",
          imageAlt: "Shtrafy.ru Dashboard",
          projectId: "Dashboard",
        },
      ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {isEnglish ? "Latest Projects" : "Последние проекты"}
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={`${locale}-${project.projectId}-${index}`}
              title={project.title}
              description={project.description}
              metrics={project.metrics}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              videoSrc={project.videoSrc}
              projectId={project.projectId}
            />
          ))}
        </div>
        <Link href="/Works" className={styles.viewAllButton}>
          <FormattedMessage
            id="projects.viewAll"
            defaultMessage="Смотреть все работы"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
