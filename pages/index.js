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
        <title>Egor Filipas</title>
        <meta name="description" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content="https://filipas-portfolio.vercel.app/public/Opengraph.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
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
