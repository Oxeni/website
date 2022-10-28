import gsap from "gsap";
import { fixScrollToTop } from 'components/utils/animation/global.animation';



export const fadeOutFadeIn = (el: string) => {
    const hero_anim = document.querySelectorAll(el);

    gsap.to(hero_anim, {
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
        delay: 3,
        duration: .5,
        ease: "power4.out",
    });
};




export const baseHeroAnimations = () => {
    // document.querySelector<HTMLElement>(".navigation")!.style.opacity = "0";

    fixScrollToTop(4);
    fadeOutFadeIn(".hero_anim");
};