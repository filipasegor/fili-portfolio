import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import Header from "./components/main/Header/Header";
import MainSection from "./components/main/MainSection/MainSection";
import IndexMedia from "./components/main/IndexMedia/IndexMedia";
import SkillDesc from "./components/main/SkillDesc/SkillDesc";
import Par from "./components/main/Par/Par";
import WorkButton from "./components/main/WorkButton/WorkButton.jsx";
import ProjectsSection from "./components/main/ProjectsSection/ProjectsSection";
import VideoPlayer from "./components/main/VideoPlayer/VideoPlayer";

import thumbDevelop from "../public/thumbDevelop.png";
import { FormattedMessage, useIntl } from "react-intl";

export default function Home() {
  const { locale } = useIntl();
  const isEnglish = (locale || "").toLowerCase().startsWith("en");
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    // Последовательность появления: сверху вниз
    const elements = isEnglish
      ? ["name", "products", "and", "user", "interfaces", "designer"]
      : ["name", "designer", "products", "and", "interfaces"];

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < elements.length) {
        setVisibleElements((prev) => [...prev, elements[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Скорость появления 300ms

    return () => clearInterval(interval);
  }, [isEnglish]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Egor Filipas — Product Designer</title>
        <meta
          name="description"
          content="Портфолио продуктового дизайнера: UX/UI, дизайн-системы, цифровые сервисы"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://filipas.xyz/" />
        <meta property="og:title" content="Egor Filipas — Product Designer" />
        <meta
          property="og:description"
          content="Портфолио продуктового дизайнера: UX/UI, дизайн-системы, цифровые сервисы"
        />
        <meta property="og:image" content="https://filipas.xyz/preview.jpg" />
        <meta
          property="og:image:secure_url"
          content="https://filipas.xyz/preview.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Egor Filipas — Product Designer Portfolio"
        />
        <meta property="og:site_name" content="Egor Filipas Portfolio" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@filipas" />
        <meta name="twitter:creator" content="@filipas" />
        <meta name="twitter:url" content="https://filipas.xyz/" />
        <meta name="twitter:title" content="Egor Filipas — Product Designer" />
        <meta
          name="twitter:description"
          content="Портфолио продуктового дизайнера: UX/UI, дизайн-системы, цифровые сервисы"
        />
        <meta name="twitter:image" content="https://filipas.xyz/preview.jpg" />
        <meta
          name="twitter:image:alt"
          content="Egor Filipas — Product Designer Portfolio"
        />

        {/* Additional meta for better compatibility */}
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://filipas.xyz/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <div className={styles.topSection}>
          <div
            className={`${styles.headlineContainer} ${
              isEnglish ? styles.headlineEN : styles.headlineRU
            }`}>
            <div
              className={`${styles.headlineName} ${
                visibleElements.includes("name")
                  ? styles.animateIn
                  : styles.animateOut
              }`}>
              <FormattedMessage id="headlineName" />
            </div>
            {isEnglish ? (
              <h1 className={styles.headlineBlock}>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("products")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineProducts" />
                </span>
                <span
                  className={`${styles.headlineAnd} ${
                    visibleElements.includes("and")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineAnd" />
                </span>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("user")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineUser" />
                </span>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("interfaces")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineInterfaces" />
                </span>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("designer")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineDesigner" />
                </span>
              </h1>
            ) : (
              <h1 className={styles.headlineBlock}>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("designer")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineDesigner" />
                </span>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("products")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineProducts" />
                </span>
                <span
                  className={`${styles.headlineAnd} ${
                    visibleElements.includes("and")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineAnd" />
                </span>
                <span
                  className={`${styles.headlineLine} ${
                    visibleElements.includes("interfaces")
                      ? styles.animateIn
                      : styles.animateOut
                  }`}>
                  <FormattedMessage id="headlineInterfaces" />
                </span>
              </h1>
            )}
          </div>
          <div className={styles.videoContainer}>
            <VideoPlayer />
          </div>
        </div>
        <div className={styles.parContainer}>
          <div className={styles.parColumn}>
            <Par>
              <FormattedMessage id="p1" />
            </Par>
          </div>
          <div className={styles.parColumn}>
            <Par>
              <FormattedMessage id="p2" />
            </Par>
          </div>
          <div className={styles.parColumn}>
            <Par>
              <FormattedMessage id="p3" />
            </Par>
            <WorkButton />
          </div>
        </div>
      </Header>

      <ProjectsSection />

      {/* <section className={styles.skillsWrapper}>
        <section className={styles.Skill}>
          <SkillDesc side="left">
            <h2 className={styles.SkillTitle}>
              <FormattedMessage id="skill1Headline" />
            </h2>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill1Par1" />
            </p>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill1Par2" />
            </p>
          </SkillDesc>
          <IndexMedia
            altThumb="thumb_ds"
            src={require("../public/videos/sites.mp4")}
          />
        </section>
        <section className={styles.Skill}>
          <IndexMedia
            altThumb="thumb_ds"
            src={require("../public/videos/graf.mp4")}
          />
          <SkillDesc side="right">
            <h2 className={styles.SkillTitle}>
              <FormattedMessage id="skill2Headline" />
            </h2>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill2Par1" />
            </p>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill2Par2" />
            </p>
          </SkillDesc>
        </section>
        <section className={styles.Skill}>
          <SkillDesc side="left">
            <h2 className={styles.SkillTitle}>
              <FormattedMessage id="skill3Headline" />
            </h2>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill3Par1" />
            </p>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill3Par2" />
            </p>
            <p className={styles.SkillDesc}>
              <FormattedMessage id="skill3Par3" />
            </p>
          </SkillDesc>

          <IndexMedia
            srcThumb={thumbDevelop}
            altThumb="thumbCharus"
            src={require("../public/videos/develop.mp4")}
          />
        </section>
      </section> */}
    </div>
  );
}
