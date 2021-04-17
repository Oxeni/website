import gsap from "gsap";
const tl = gsap.timeline()


export const fadeOutFadeIn = (fadeInElementClassesArray: string[]) => {


  fadeInElementClassesArray.forEach((className, i) => {
    tl.fromTo(className, {
      opacity: 0,
      translateY: 100,
      skewY: 10,
    }, {
      opacity: 1,
      translateY: 0,
      skewY: 0,
      duration: 1 / (i + 1),
      ease: "Expo.easeOut",
    });
  });
};