import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Header from './components/Header'

import MainSection from './components/MainSection'
import Media from './components/works/Media'
import IndexMedia from './components/works/IndexMedia'
import SkillDesc from './components/SkillDesc'
import SkillImage from './components/SkillImage'
import Par from './components/Par.jsx'
import Eyes from './components/Eyes.jsx'
import thumbDevelop from '../public/thumbDevelop.png'
import { FormattedMessage } from "react-intl";


export default function Home() {

  return (

          <div className={styles.container}>
          <Head>
            <title>Egor Filipas</title>
            <meta name="description" />
            <meta property="og:title" content="Portfolio"/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="" />
            <meta property="og:image" content="https://filipas-portfolio.vercel.app/public/Opengraph.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header>
        
          <div className={styles.headlineContainer}>
            <h1 className={styles.headline}>
              <FormattedMessage id="name" />
              <FormattedMessage id="designer" />
            </h1>
          </div>
          <div className={styles.parContainer}>
            <Par>
              <FormattedMessage id="p1" />
            </Par>
            <Par>
              <FormattedMessage id="p2" />
            </Par>
            <Par>
              <FormattedMessage id="p3" />
            </Par>
          </div>
          <div className={styles.buttonContainer}>
          </div>
          </Header>


          <MainSection />
          <section className={styles.skillsWrapper}>
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
                src={require('../public/videos/sites.mp4')}
              />
            </section>
            <section className={styles.Skill}>
              <IndexMedia
                altThumb="thumb_ds"
                src={require('../public/videos/graf.mp4')}
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
                srcThumb={thumbDevelop} altThumb="thumbCharus"
                src={require('../public/videos/develop.mp4')}
              />
            </section>
          </section>
        </div>
  )
}
