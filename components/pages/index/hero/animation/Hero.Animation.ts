import gsap from "gsap";
import { fixScrollToTop } from 'components/utils/animation/global.animation';



export const fadeOutFadeIn = (fadeInElementClassesArray: string[]) => {
  fadeInElementClassesArray.forEach((className, i) => {
    gsap.to(className, {
      opacity: 1,
      translateY: 0,
      duration: i < 1 ? (i + .5) * .3 : i * .3,
      ease: "Expo.easeOut",
    });
  });
};




export const baseHeroAnimations = () => {
  const videoIntro = document.getElementById("videoIntro") as HTMLVideoElement;
  document.querySelector<HTMLElement>(".navigation").style.opacity = "0";


  videoIntro.addEventListener("loadeddata", () => {
    if (window.innerWidth > 1080) {
      fixScrollToTop(~~videoIntro.duration * 2);
      videoIntro.addEventListener("ended", () => {
        debugger
        fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
      });
    }
    debugger
    fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);

  });
}