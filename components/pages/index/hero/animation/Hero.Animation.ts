import gsap from "gsap";
import { fixScrollToTop } from 'components/utils/animation/global.animation';



export const fadeOutFadeIn = (el:string) => {
    const hero_anim = document.querySelectorAll(el)

        gsap.fromTo(hero_anim, {
            opacity: 0,
            translateY: '20%',
        }, {
            opacity: 1,
            translateY: 0,
            stagger:0.2,
            delay:6.5,
            duration: .3,
            ease: "Expo.easeOut",
        });
};




export const baseHeroAnimations = () => {
    document.querySelector<HTMLElement>(".navigation").style.opacity = "0";

    fixScrollToTop(4)
    fadeOutFadeIn(".hero_anim");
}