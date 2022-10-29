import "@/styles/main.scss";

import HeadAndMeta from "components/global/head/HeadAndMeta";
import Navigation from "components/global/navigation/Navigation";
import Cursor from "components/global/cursor/Cursor";
import { ReactNode } from "react";




const RootLayout = ({ children }: { children: ReactNode; }) => {

    return (
        <html lang="en">
            <HeadAndMeta
                title="Oxeni"
                description="cutting edge technology to create true technical beauty of the future"
                favIconImagePath="/svg/small_icon.svg"
                baseUrl="https://oxeni.dev/meta_images/og_image.png"
                ogTitle="🔵 Oxeni"
                ogDescription="cutting edge technology to create true technical beauty of the future"
                ogImagePath="/meta_images/og_image.png"
            />  
            
            <body>
                {/* <Cursor /> */}
                <Navigation />
                <div className="main_main">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
