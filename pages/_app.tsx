import Head from "next/head";
import "../styles/main.scss";
import type { AppProps  } from 'next/app'

import Navigation from "components/global/navigation/navigation";
import Cursor from "components/global/cursor/Cursor";


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
     <Head>
        <title>Oxeni</title>
        <link rel="shortcut icon" href="/svg/small_icon.svg" />
      </Head>
      <Head>
        <meta name="title" content="🔵 Oxeni" />
        <meta name="description" content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oxeni.dev/meta_images/og_image.png"
        />
        <meta property="og:title" content="🔵 Oxeni" />
        <meta property="og:description" content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="og:image" content="/meta_images/og_image.png" />/
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://oxeni.dev/meta_images/og_image.png"
        />
        <meta property="twitter:title" content="🔵 Oxeni" />
        <meta property="twitter:description" content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="twitter:image" content="/meta_images/og_image.png" />
      </Head>

      <Cursor/>
      <Navigation />    
      <Component {...pageProps} />

      <style jsx global> {`
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100 900;
        src: url(/fonts/Inter.ttf) format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
        }
    
      `}</style>
    </>
  );
}

export default MyApp;
