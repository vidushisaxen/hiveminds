import React, { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Contactform from '../Homepage/Contactform';
gsap.registerPlugin(ScrollTrigger)


const Contact = ({title1,title2, para}) => {
  // useEffect(() => {
  //   if (globalThis.innerWidth > 1024) {
  //     let ctx = gsap.context(() => {
  //       const body = document.body;
  //       const changeBodyColor = (color) => {
  //         gsap.to(body, {
  //           backgroundColor: color,
  //           duration: 1, // Duration for smooth transition
  //           ease: "power2.out",
  //         });
  //       };
  //       // ScrollTrigger for changing body background color
  //       ScrollTrigger.create({
  //         trigger: "#contact",
  //         start: "top 90%",
  //         end: "bottom 20%",
  //         onEnter: () => changeBodyColor("#fafafa"),
  //         onLeaveBack: () => changeBodyColor("#134bd6"),
  //       });
  //     });
  //     return () => ctx.revert();
  //   }
  // });
  // const blueHexagonRef = useRef(null);
  // const yellowHexagonRef = useRef(null);

  // // Function to handle mouse move
  // const handleMouseMove = (e) => {
  //   const { clientX: mouseX, clientY: mouseY } = e;
    
  //   // Apply movement to the blue and yellow hexagons based on mouse position
  //   if (blueHexagonRef.current && yellowHexagonRef.current) {
  //     const offsetX = mouseX * 0.05; // Adjust the movement sensitivity (change 0.05 for stronger/weaker movement)
  //     const offsetY = mouseY * 0.05;

  //     gsap.to(blueHexagonRef.current, {
  //       x: offsetX,
  //       y: offsetY,
  //       ease: "power2.out",
  //     });

  //     gsap.to(yellowHexagonRef.current, {
  //       x: offsetX * 1.2, // Make yellow hexagon move slightly differently from blue hexagon
  //       y: offsetY * 1.2,
  //       ease: "power2.out",
  //     });
  //   }
  // };

  // // Add event listeners on mount and clean up on unmount
  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <section id="contact">
      <div className="w-screen h-full z-[10] relative container-lg py-[7%]">
        <div className="w-full h-full flex gap-[10vw]">
          <div className="w-[45%] flex flex-col gap-[2vw]">
            <h2 className="heading-2 headinganim w-[80%]">
           {title1} 
            <span className="blue-text"> {title2}</span>
            </h2>
            <p data-para-anim className="content w-[90%]">
           {para}
            </p>
            <div className="flex mt-[4vw] items-center justify-center gap-[2vw]">
              <div className="h-[17.5vw] w-[16.5vw] relative rounded-[16px] fadein">
                <Image
                  src="/assets/images/homepage/contact-1.png"
                  fill
                  alt="contact"
                  className="rounded-[16px]"
                />
              </div>
              <div className="h-[17.5vw] w-[16.5vw] relative rounded-[16px] fadein">
                <Image
                  src="/assets/images/homepage/contact-2.png"
                  fill
                  alt="contact"
                  className="rounded-[16px]"
                />
              </div>
            </div>
          </div>

          <div className="w-[50%] h-full">
            <Contactform />
          </div>
        </div>

        <div
          className="absolute h-[2vw] w-[2.2vw] top-[40%] left-[35%] blue-hexagon-animation"
         
        >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div
          className="absolute h-[2vw] w-[2.2vw] top-[20%] left-[18%] yellow-hexagon-animation"
   
        >
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
