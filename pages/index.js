import Head from 'next/head'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ServiceInfo from '../components/ServiceInfo'
import Slider from '../components/Slider'
import Suggest from '../components/Suggest'
import Template from '../components/Template'
import Why from '../components/Why'
import dynamic from 'next/dynamic'

import loadable from '@loadable/component'
import LeaderShip from '../components/LeaderShip'
import Advice from '../components/advice'
import { useState, useEffect } from 'react'

export default function Home() {

  // const DynamicComponentWithNoSSR = dynamic(
  //   () => import('../components/Slider'),
  //   { ssr: false }
  // )
  // const Why = loadable(() => import('../components/Why'))
  // const Suggest = loadable(() => import('../components/Suggest'))
  // const Template = loadable(() => import('../components/Template'))
  // const Slider = loadable(() => import('../components/Slider'))
  // const ServiceInfo = loadable(() => import('../components/ServiceInfo'))
  // const Header = loadable(() => import('../components/Header'))
  // const Blog = loadable(() => import('../components/Blog'))

  useEffect(() => {
    !function () {
      var i = "5gCcDG", a = window, d = document;
      function g() {
        var g = d.createElement("script"), s = "https://www.goftino.com/widget/" + i, l = localStorage.getItem("goftino_" + i);
        g.async = !0, g.src = l ? s + "?o=" + l : s;
        d.getElementsByTagName("head")[0].appendChild(g);
      } "complete" === d.readyState ? g() : a.attachEvent ? a.attachEvent("onload", g) : a.addEventListener("load", g, !1);
    }();
  })

  return (

    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="یوتاب پارس" />
        <meta name="description" content="شرکت یوتاب پارس، طراحی وب سایت، دیجیتال مارکتینگ در شیراز" />
        <meta property="og:site_name" content="" />
        <meta property="og:site" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="article" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="assets/img/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <title>یوتاب پارس</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215149050-1"></script>


      </Head>

      {/* <button className='rounded-full bg-redprimary p-4 px-9'>advize</button> */}

      <div className='container xl:px-[120px] font-[sans]  '>
        {/* <div className='bg-ddd bg-no-repeat'> */}

    

        <Header />
        <Slider />
  
        <ServiceInfo />
        <Why />

        <Suggest />
        <Template />
        <LeaderShip />
        <Blog />
      </div>

      <Footer />


    </>
  )
}
export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now()
    }
  }
}
// export const getServerSideProps = () => {
//   return {
//     props: {
//       buildTimestamp: Date.now()
//     }
//   }
// }
