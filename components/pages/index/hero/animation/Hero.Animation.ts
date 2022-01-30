import gsap from "gsap";
import { fixScrollToTop } from 'components/utils/animation/global.animation';



export const fadeOutFadeIn = (fadeInElementClassesArray: string[]) => {
    fadeInElementClassesArray.forEach((className, _) => {

        gsap.fromTo(className, {
            opacity: 0,
            translateY: '10%',
        }, {
            opacity: 1,
            translateY: 0,
            delay:7,
            duration: .5,
            ease: "Expo.easeOut",
        });
    });
};




export const baseHeroAnimations = () => {
    document.querySelector<HTMLElement>(".navigation").style.opacity = "0";

    //   if (window.innerWidth > 1080) {
    //     fixScrollToTop(~~videoIntro.duration * 2);
    //     return videoIntro.addEventListener("ended", () => {
    //       fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
    //     });
    //   }

    fixScrollToTop(4)
    fadeOutFadeIn([".heading", ".hero_line", ".paragraph", ".hero_button"]);
}