import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "../styles/main.scss";



import HeadAndMeta from "./../components/global/head/HeadAndMeta";
import Navigation from "components/global/navigation/Navigation";
const Cursor = dynamic(() => import("components/global/cursor/Cursor"), {ssr: false,});
import Loading from "components/global/loading/Loading"


function MyApp({ Component, pageProps }: AppProps) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)

    }, [])
    return (
        <>
            <HeadAndMeta
                title="Oxeni"
                description="cutting edge technology to create true technical beauty of the future"
                favIconImagePath="/svg/small_icon.svg"
                baseUrl="https://oxeni.dev/meta_images/og_image.png"
                ogTitle="🔵 Oxeni"
                ogDescription="cutting edge technology to create true technical beauty of the future"
                ogImagePath="/meta_images/og_image.png"
            />

            {!loading ?
                <>
                    <Cursor />
                    <Navigation />
                    <Component {...pageProps} />
                </>
                : <Loading />
            }


            <style jsx global>
                {`
          @font-face {
            font-family: "Inter";
            font-style: normal;
            font-weight: 100 900;
            src: url(/fonts/Inter.ttf) format("ttf");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
        `}
            </style>
        </>
    );
}

export default MyApp;
