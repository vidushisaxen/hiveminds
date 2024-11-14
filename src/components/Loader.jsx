import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Loader() {
  const load = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Calculate the circumference of the circle
      const radius = 45; // Same radius as the circle
      const circumference = 2 * Math.PI * radius;

      // Set the initial stroke-dasharray and stroke-dashoffset
      circleRef.current.style.strokeDasharray = circumference;
      circleRef.current.style.strokeDashoffset = circumference;

      if (globalThis.innerWidth < 541) {
        gsap.from(".loader-anim", {
          yPercent: 150,
          opacity: 0,
          duration: 2,
          delay: 0.1,
          ease: "power4.out"
        });

        tl.to(load.current, {
          innerHTML: "100",
          duration: 3,
          onUpdate: () => {
            const percentage = parseInt(load.current.innerHTML);
            const formattedCounter = String(percentage).padStart(2, "0");
            load.current.innerHTML = formattedCounter;
          },
        });

        tl.to(circleRef.current, {
          strokeDashoffset: 0, // Animate the stroke to fill the circle
          duration: 3,
          ease: "power2.inOut",
        });

        tl.to(".loader-container", {
          yPercent: -100,
          duration: 1,
          ease: "power4.out"
        });
      } else {
        gsap.from(".load-container", {
          yPercent: 100,
          duration: 3
        });

        gsap.from(".loader-anim", {
          yPercent: 100,
          opacity: 0,
          ease: "power4.out"
        });

        tl.to(load.current, {
          innerHTML: "100",
          duration: 3,
          onUpdate: () => {
            const percentage = parseInt(load.current.innerHTML);
            const formattedCounter = String(percentage).padStart(2, "0");
            load.current.innerHTML = formattedCounter;
          },
        })
        .to(circleRef.current, {
          strokeDashoffset: 0, // Animate the stroke to fill the circle
          duration: 3,
          delay:-3,
          ease: "power2.inOut",
        })
        .to(".loader-content", {
          opacity: 0,
          filter: "blur(50px)",
          duration: 2
        })
        .to(".loader-left", {
          xPercent: -100,
          duration: 1.2,
          delay: -2,
          ease: "power4.inOut"
        })
        .to(".loader-right", {
          xPercent: 100,
          duration: 1.2,
          delay: -2,
          ease: "power4.inOut"
        })
        .to(".loader-container",{
            display:"none",
            delay:-1
        })
      }
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <>
      <section className="fixed top-0 left-0 w-screen h-screen loader-container z-[999]">
        <div className="w-[50vw] h-screen bg-[#134BD6] absolute top-0 left-0 loader-left"></div>
        <div className="w-[50vw] h-screen bg-[#134BD6] absolute top-0 right-0 loader-right"></div>

        <div className="w-full h-full flex justify-center items-center montreal font-medium text-[3.5vw] loader-content text-white">
          <div className="w-[12vw] h-[12vw] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <svg className="absolute" width="100%" height="100%" viewBox="0 0 100 100">
              <circle
                ref={circleRef}
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="1"
                fill="none"
                className="loader-progress-ring"
                style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
              />
            </svg>

          </div>
          

          <h3 ref={load} className="relative z-[999]">0</h3>
          <span className="relative z-[999]">%</span>
        </div>
      </section>
    </>
  );
}

export default Loader;
