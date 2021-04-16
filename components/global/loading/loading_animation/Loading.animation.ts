import gsap from "gsap";




export const counter = () => {
  let start = { val: 55 },
    end = 100;

  const counter = document.getElementById("counter");
  const loading_screen = document.querySelector<HTMLElement>(".loading-screen");
  const circle = document.querySelectorAll<HTMLElement>(".circle");

  //* atrialebs gare wreebs
  gsap.fromTo(circle,
    { rotate: 0 },
    { rotate: 360, duration: 3, ease: "power1.out" }
  );

  //* tvis animacia
  gsap.to(start, {duration: 3.5,ease: "power4.inOut",val: end, roundProps: "val",

    onUpdate: function () {
      if (!counter) {
        counter!.innerHTML = "100";
        return;
      }
      counter!.innerHTML = start.val.toString();


      //* aq roca 100 miagwevs mere zemot aiweva
      if (start.val === 100) {
        gsap.to(loading_screen, {
          duration: 1.5,
          y: `${-100}%`,
          ease: "slow( 0.4,0.4, false)",
        });
      }
    },
  });
};
