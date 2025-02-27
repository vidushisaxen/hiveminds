import gsap from "gsap";
import React, { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    gsap.to(".dotted-path", {
      strokeDashoffset: 100, // Moves the dashes to the left
      duration: 1, // Adjust speed of movement
      ease: "linear",
      repeat: -1, // Infinite loop
    });
    gsap.to(".marquee-container",{
      xPercent:-51,
      duration:30,
      repeat:-1,
      ease:"none"
    })
  }, []);

  return (
    <section className="w-screen h-fit relative z-[2] overflow-hidden ">
      <div className="w-full h-fit flex flex-col items-center gap-[0.8vw] pt-[7%] pb-[8%]">
        <h2 className="heading-2 !text-white headinganim">Our Clients</h2>
        <p className="content !text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="w-fit h-fit flex justify-center items-center flex-nowrap gap-[5vw] marquee-container">
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-blue-300"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-yellow-500"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-red-600"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-green-600"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-cyan-600"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-blue-300"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-yellow-500"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-blue-300"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-yellow-500"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-red-600"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-green-600"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-cyan-600"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-blue-300"></div>
        <div className="w-[10vw] h-[10vw] rounded-[1vw] bg-yellow-500"></div>

      </div>
      <div className="absolute top-[80%] z-[-1] left-0">
        <svg
          width="1920"
          height="54"
          viewBox="0 0 1920 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
           className="dotted-path"
            d="M-41 43.9072C17.5 24.0485 208.2 -9.71137 503 14.1191C871.5 43.9072 847 66.2869 1270 43.9072C1693 21.5276 1847.5 33.5663 1941 1"
            stroke="white"
            stroke-width="2"
            stroke-dasharray="10 10"
          />
        </svg>
      </div>
    </section>
  );
};

export default Clients;
