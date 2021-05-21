
import type { AppProps } from "next/app";
import "../styles/main.scss";
import dynamic from 'next/dynamic';



import HeadAndMeta from "./../components/global/head/HeadAndMeta";
import Navigation from "components/global/navigation/Navigation";
// import Cursor from "components/global/cursor/Cursor";
const Cursor = dynamic(() => import("components/global/cursor/Cursor"), { ssr: false, });


function MyApp({ Component, pageProps }: AppProps) {


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





            <Cursor />

            <Navigation />

            <div className="main_main">
                <Component {...pageProps} />
            </div>




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
