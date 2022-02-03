import gsap from "gsap";




export const counter = (duration:number) =>  {
  const tl = gsap.timeline()
  let time = { start: 0 }

  tl.to(time, {
    duration: duration,
    start: 100,
    roundProps: "start",

    onUpdate: () => {
      document.getElementById("counter")!.innerHTML = `${time.start}`;
    },
  })


    .to('.loading-screen',{
      delay: .5,
      ease: "Expo.easeOut",
      duration: 1.2,
      clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)',
    //   onComplete: () => {
    //     functionOnComplete()
    //   }
    })
};
