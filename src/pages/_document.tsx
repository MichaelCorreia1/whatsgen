import { Html, Head, Main, NextScript } from 'next/document'
import AdBanner from '../components/AdBanner'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3061584926754950"
          crossOrigin="anonymous"
        ></script>
        <AdBanner />
        <script>(adsbygoogle = window.adsbygoogle || []).push({ });</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
