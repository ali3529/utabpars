import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
function HeadU() {
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
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215149050-1"></script> */}


      </Head>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=UA-215149050-1'></Script>
    </>
  )
}

export default HeadU