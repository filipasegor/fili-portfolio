import "../styles/globals.scss";
import Layout from "./components/Layout";
import React, { useState } from "react";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages.index";

export default function App({ Component, pageProps }) {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
  };

  function getInitialLocal() {
    return LOCALES.RU;
  }

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RU}>
      <Head>
        {/* Global Open Graph / Facebook meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Egor Filipas Portfolio" />
        <meta property="og:image" content="https://filipas.xyz/preview.jpg" />
        <meta property="og:image:secure_url" content="https://filipas.xyz/preview.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Global Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://filipas.xyz/preview.jpg" />
        
        {/* Additional meta for better compatibility */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <Layout currentLocale={currentLocale} handleChange={handleChange}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </IntlProvider>
  );
}
