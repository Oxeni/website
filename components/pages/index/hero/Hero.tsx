import { useEffect } from "react";

import Button from "components/lib/button/Button";
import { fadeOutFadeIn } from "components/pages/index/hero/animation/Hero.Animation";



const Hero = () => {
    
    useEffect(() => {
        window.innerWidth > 968 && init();
    }, [])
    
    const init = () => {
        fadeOutFadeIn([".hero_heading",".hero_line",".hero_paragraph",".hero_button"])
    }


  return (
    <>
      <div className="hero">
        <div className="hero_container">
            
          <div className="img"></div>

          <div className="contact_message">
            <div className="heading hero_heading">

              <p className="f-weight-bl f-size-h1" >
                let's make your business the best in the biz
              </p>

            </div>

            <div className="line hero_line"></div>

            <div className="paragraph hero_paragraph">

              <p className="f-weight-l f-size-p1">
                <strong>Oxeni</strong> is a web development micro business. We
                want to start a business and create something unique The face of
                the brand and the site with which you will be able to get more
                customers Attraction.
              </p>

            </div>

            <Button
              className="hero_button"
              color="white"
              size="medium"
              width="18rem">

              <a
                className="f-size-p3 f-weight-r primary-blue contactUs"
                href="mailto: hello@oxeni.dev"
                target="_blank"
                rel="noopener noreferrer">
                Contact us
              </a>

            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
