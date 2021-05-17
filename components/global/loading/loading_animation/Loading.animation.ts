import gsap from "gsap";




export const counter = ():boolean => {
  const tl = gsap.timeline()

  let time = { start: 10 }
  let finished;

  ( async ()  => {
    await tl.to(time, {
        duration: 3.5,
        start: 100,
        roundProps: "start",
    
        onUpdate: () => {
          document.getElementById("counter")!.innerHTML = `${time.start}`;
        },
      })
    
    
        .fromTo('.loading-screen', {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }, {
          delay: .5,
          ease: "Expo.easeOut",
          duration: 1.2,
          clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)',
          onComplete:() => {
            finished = true
          }
        })
        
  })()
    
    return finished
    
};
