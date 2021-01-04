import '../styles/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="4dao" />
        <meta name="description" content="cutting edge technology to create a truly decentralized and resilient internet of the future" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oxeni.dev/meta_images/og_image.png" />
        <meta property="og:title" content="4dao" />
        <meta property="og:description" content="cutting edge technology to create a truly decentralized and resilient internet of the future" />
        <meta property="og:image" content="/meta_images/og_image.png" />/

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://oxeni.dev/meta_images/og_image.png" />
        <meta property="twitter:title" content="4dao" />
        <meta property="twitter:description" content="cutting edge technology to create a truly decentralized and resilient internet of the future" />
        <meta property="twitter:image" content="/meta_images/og_image.png" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
