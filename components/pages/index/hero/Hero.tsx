import { useEffect, useState } from "react";
import { Inbox } from "react-feather";


//! ─── OWN ────────────────────────────────────────────────────────────────────────
//? components 
import Button from "components/lib/button/Button";
import { baseHeroAnimations } from "components/pages/index/hero/animation/Hero.Animation";
import { resizeAction } from "components/utils/resize.util";

//? utils
import { setCurrentVideoSizeVideo, setVideoAcordingToScreen } from './hero.utils';

//? content
import { videosAndSizes } from "./hero.content";
import { disableFixScrollTop } from "components/utils/animation/global.animation";









const Hero = () => {
  const [videoSource,] = useState<string>("https://oxeni.s3.eu-central-1.amazonaws.com/hero_videos/hero_intro_final.mp4");


  useEffect(() => {
    init();
  }, []);


  const init = async () => {
    let heroVideo = document.querySelector('.hero .intro_video video') as HTMLVideoElement
    baseHeroAnimations(heroVideo)
    setVideoAcordingToScreen(heroVideo, 1200, videosAndSizes[videosAndSizes.length - 1].videoUrl)


    resizeAction(async () => {
      await setCurrentVideoSizeVideo(heroVideo, window.innerWidth, videosAndSizes)
      disableFixScrollTop()
    })
  };




  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <div className="introduction">
            <div className="introduction-container">
              <div className="heading">
                <h1 className="f-weight-bl f-size-h1">
                     Building a better web
                </h1>
              </div>

              <div className="line hero_line"></div>

              <div className="paragraph">
                <p className="f-weight-l f-size-p2">
                  We at <strong>Oxeni</strong> are dedicated to bringing a new
                  era of design to the web. We want our customers to have web
                  experiences they can be proud of.
                </p>
              </div>

              <div className="contact_btn">
                <a href="mailto: hello@oxeni.dev" rel="noopener noreferrer">
                  <Button
                    className="hero_button"
                    color="black"
                    size="large"
                    width="20rem"
                    iconRight={<Inbox color="#80888E" size={28} />}

                  >
                    <p
                      className="f-size-p1 f-weight-r primary-white contactUs"
                    >
                      contact us
                    </p>
                  </Button>
                </a>

              </div>
            </div>
          </div>

          <div className="intro_video">
            <video muted src={videoSource} id="videoIntro" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
