import { useEffect, useState } from "react";
import { Inbox } from "react-feather";

import Button from "components/lib/button/Button";
import { fadeOutFadeIn } from "components/pages/index/hero/animation/Hero.Animation";
import { fixScrollToTop } from "components/utils/animation/global.animation";






const Hero = () => {
  const [videoSource, setVideoSource] = useState<string>("");




  useEffect(() => {
    init();

    if (window.innerWidth > 1080) {
      setVideoSource(
        "https://oxeni.s3.eu-central-1.amazonaws.com/hero_intro_final.mp4"
      );
    } else {
      setVideoSource(
        "https://oxeni.s3.eu-central-1.amazonaws.com/hero_intro_final_mobile.mp4"
      );
    }
  }, []);




  const init = () => {
    document.querySelector<HTMLElement>(".navigation").style.opacity = "0";
    const videoIntro = document.getElementById("videoIntro") as HTMLVideoElement;

    videoIntro.addEventListener("loadeddata", () => {
      fixScrollToTop(~~videoIntro.duration);

      if (window.innerWidth > 1080) {
        return videoIntro.addEventListener("ended", () => {
            fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
        });
      }

      fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
      
    });
  };




  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <div className="introduction">
            <div className="introduction-container">
              <div className="heading">
                <h1 className="f-weight-bl f-size-h1">
                  building the future of web
                </h1>
              </div>

              <div className="line hero_line"></div>

              <div className="paragraph">
                <p className="f-weight-l f-size-p2">
                  our team at <strong>Oxeni</strong> creates a new era of the
                  web, where businesses have web experiences that they could be
                  proud of.
                </p>
              </div>

              <div className="contact_btn">
                <Button
                  className="hero_button"
                  color="black"
                  size="large"
                  width="20rem"
                  iconRight={<Inbox color="#80888E" size={28} />}
                >
                  <a
                    className="f-size-p1 f-weight-r primary-white contactUs"
                    href="mailto: hello@oxeni.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contact us
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="intro_video">
            <video  muted src={videoSource} id="videoIntro" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
