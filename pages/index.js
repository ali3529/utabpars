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
import Script from 'next/script'
import HeadU from '../components/HeadU'

export default function Home() {
  var Scroll = require('react-scroll');
  var Element = Scroll.Element;
  var scroller = Scroll.scroller;
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
     
     <HeadU/>

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
