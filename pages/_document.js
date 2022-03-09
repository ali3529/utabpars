import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fa">
      <Head >
      <meta charset="utf-8"/>

      </Head>
      <body className='bg-primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}