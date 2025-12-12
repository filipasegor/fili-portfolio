import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/About.module.css";
import indexMediaStyles from "../pages/components/main/IndexMedia/styles.module.scss";

import { SkillDesc, IndexMedia } from "../componentsIndex/index";

import thumbDevelop from "../public/thumbDevelop.png";
import analysisImage from "../public/analysis.png";
import { FormattedMessage } from "react-intl";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Egor Filipas</title>
        <meta name="description" content="About Egor Filipas - Designer" />
        <meta property="og:title" content="About - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:image"
          content="https://filipas-portfolio.vercel.app/public/Opengraph.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <section className={styles.headerSection}>
        <h1 className={styles.aboutTitle}>
          <FormattedMessage id="aboutTitle" />
        </h1>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              <FormattedMessage id="email" />
            </span>
            <Link
              href="mailto:egorfilipas@gmail.com"
              className={styles.contactValue}>
              <FormattedMessage id="emailValue" />
            </Link>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              <FormattedMessage id="telegram" />
            </span>
            <Link
              href="https://teleg.run/filipas"
              className={styles.contactValue}>
              <FormattedMessage id="telegramValue" />
            </Link>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              <FormattedMessage id="linkedin" />
            </span>
            <Link
              href="https://www.linkedin.com/feed/"
              className={styles.contactValue}>
              <FormattedMessage id="linkedinValue" />
            </Link>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              <FormattedMessage id="instagram" />
            </span>
            <Link
              href="https://instagram.com/filipasssss?igshid=YmMyMTA2M2Y="
              className={styles.contactValue}>
              <FormattedMessage id="instagramValue" />
            </Link>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactLabel}>
              <FormattedMessage id="currentlyWorking" />
            </span>
            <span className={styles.contactValue}>
              <FormattedMessage id="currentlyWorkingValue" />
            </span>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className={styles.competenciesSection}>
        <h2 className={styles.competenciesTitle}>
          <FormattedMessage id="competencies" />
        </h2>

        <div className={styles.competenciesContent}>
          {/* Competency 4 */}
          <section className={styles.competency}>
            <div className={styles.competencyContent}>
              <div className={styles.competencyText}>
                <h3 className={styles.competencyTitle}>
                  <FormattedMessage id="skill4Headline" />
                </h3>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill4Par1" />
                </p>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill4Par2" />
                </p>
              </div>
              <div className={styles.competencyMedia}>
                <div className={indexMediaStyles.mediaWrapper}>
                  <div className={indexMediaStyles.videoWrapper}>
                    <Image
                      src={analysisImage}
                      alt="Analysis"
                      layout="responsive"
                      objectFit="contain"
                      className={indexMediaStyles.video}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Competency 1 */}
          <section className={styles.competency}>
            <div className={styles.competencyContent}>
              <div className={styles.competencyText}>
                <h3 className={styles.competencyTitle}>
                  <FormattedMessage id="productDesign" />
                </h3>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill1Par1" />
                </p>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill1Par2" />
                </p>
              </div>
              <div className={styles.competencyMedia}>
                <IndexMedia
                  altThumb="thumb_ds"
                  src={require("../public/videos/sites.mp4")}
                />
              </div>
            </div>
          </section>

          {/* Competency 3 */}
          <section className={styles.competency}>
            <div className={styles.competencyContent}>
              <div className={styles.competencyText}>
                <h3 className={styles.competencyTitle}>
                  <FormattedMessage id="systematizationDesign" />
                </h3>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill3Par1" />
                </p>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill3Par2" />
                </p>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill3Par3" />
                </p>
              </div>
              <div className={styles.competencyMedia}>
                <IndexMedia
                  srcThumb={thumbDevelop}
                  altThumb="thumbCharus"
                  src={require("../public/videos/develop.mp4")}
                />
              </div>
            </div>
          </section>

          {/* Competency 2 */}
          <section className={styles.competency}>
            <div className={styles.competencyContent}>
              <div className={styles.competencyText}>
                <h3 className={styles.competencyTitle}>
                  <FormattedMessage id="communicationDesign" />
                </h3>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill2Par1" />
                </p>
                <p className={styles.competencyDesc}>
                  <FormattedMessage id="skill2Par2" />
                </p>
              </div>
              <div className={styles.competencyMedia}>
                <IndexMedia
                  altThumb="thumb_ds"
                  src={require("../public/videos/graf.mp4")}
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section className={styles.techSkillsSection}>
        <h2 className={styles.techSkillsTitle}>
          <FormattedMessage id="techSkills" />
        </h2>
        <div className={styles.techSkillsGrid}>
          <div className={styles.techSkill}>UI/UX Design</div>
          <div className={styles.techSkill}>Product Design</div>
          <div className={styles.techSkill}>Product Strategy</div>
          <div className={styles.techSkill}>Figma</div>
          <div className={styles.techSkill}>Illustrator</div>
          <div className={styles.techSkill}>UI/UX Research</div>
          <div className={styles.techSkill}>Principle</div>
          <div className={styles.techSkill}>HTML</div>
          <div className={styles.techSkill}>CSS</div>
          <div className={styles.techSkill}>JS</div>
          <div className={styles.techSkill}>ReactJS</div>
          <div className={styles.techSkill}>NextJS</div>
          <div className={styles.techSkill}>Design Systems</div>
        </div>
      </section>
    </div>
  );
}
