import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Script from 'next/script'
import Comment from '../components/about/Comment'
import IntroTeam from '../components/about/IntroTeam'
import SocialMedia from '../components/about/SocialMedia'
import AboutItem from '../components/about/AboutItem'
import HeadU from '../components/HeadU'
function AboutUs() {
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
      <div className='container xl:px-[120px] font-[sans]  '>
        {/* <div className='bg-ddd bg-no-repeat'> */}



        <Header />
        {/* slide pic */}
        <div className='flex flex-col items-center mt-12   brightness-75 lg:scale-100 md:scale-90 h-14 md:h-full '>
        <img className='rounded-3xl w-[1116px] h-[464px]'  src='/img/about/Utab.webp'/>
        <img className='w-8 h-8 mt-4'  src='/img/about/arrow.webp'/>

        </div>
        <AboutItem/>
        <Comment/>

        <IntroTeam/>

        {/* <SocialMedia/> */}
      </div>

      <Footer />


    </>
  )
}

export default AboutUs