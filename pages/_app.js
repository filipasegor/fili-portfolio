import '../styles/globals.scss';
import Layout from "./components/Layout"
import usePreserveScroll from "./components/usePreserveScroll.tsx"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function App({ Component, pageProps }) {
  usePreserveScroll()
  return (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)
}
