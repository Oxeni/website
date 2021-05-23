import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




export const GlobalScrollElemAnim = (elementsToAnimation: string) => {
  gsap.registerPlugin(ScrollTrigger);

  const el = document.querySelectorAll(elementsToAnimation);


  el.forEach((elem, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        toggleActions: "play none none none",
        start: "center bottom",
      },

    })


    tl.to(elem, {
      ease: "Expo.easeOut",
      opacity: 1,
      display:"block",
      transform: "translateY(0) skewY(0)",
      duration: i * .5
    })
  })
};




export const fixScrollToTop = (time: number) => {
  const tl = gsap.timeline();

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo(0, 0);

  tl.from("body", {
    overflowY: "hidden",
    duration: time,
  });

  tl.to("body", {
    overflowY: "initial",
  });
};


export const disableFixScrollTop = () => {
  document.body.style.overflowY = 'initial'
};


