import gsap from "gsap";



export const fadeOutFadeIn = (fadeInElementClassesArray: string[]) => {
  fadeInElementClassesArray.forEach((className, i) => {
    gsap.to(className, {
      opacity: 1,
      translateY: 0,
      duration:i < 1 ? (i + .5) * .3 : i * .3,
      ease: "Expo.easeOut",
    });
  });
};