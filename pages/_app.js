import '../styles/globals.scss';
import Layout from "./components/Layout"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
  <>
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  </>
)
}
