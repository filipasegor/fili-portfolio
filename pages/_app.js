import "../styles/globals.scss";
import Layout from "./components/Layout";
import React, { useState } from "react";

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
      <Layout currentLocale={currentLocale} handleChange={handleChange}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </IntlProvider>
  );
}
