import '../styles/globals.scss';
import Layout from "./components/Layout"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function App({ Component, pageProps }) {
  return (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)
}
