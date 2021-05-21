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




export const baseHeroAnimations = (videoIntro: HTMLVideoElement) => {
  document.querySelector<HTMLElement>(".navigation").style.opacity = "0";

  if (window.innerWidth > 1080) {
    fixScrollToTop(~~videoIntro.duration * 2);
    return videoIntro.addEventListener("ended", () => {
      fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
    });
  }
  fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
}