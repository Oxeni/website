import gsap from "gsap";



export const fadeOutFadeIn = (fadeInElementClassesArray: string[]) => {

  fadeInElementClassesArray.forEach((className, i) => {
    gsap.from(className, {
      opacity:0,
      translateX: -50,
      delay: i * 0.2,
    });

    gsap.to(className, {
      translateY: 0,
      opacity: 1,
      duration: 0.5,
      delay: i * 0.2,
      ease: "Expo.easeOut",
    });
  });
};