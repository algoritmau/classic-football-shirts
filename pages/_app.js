/* eslint-disable react/jsx-filename-extension */
import { Router } from "next/router"
import NProgress from "nprogress"
import Layout from "../components/Layout"

import "../components/styles/nprogress.css"
import "../styles/main.sass"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
