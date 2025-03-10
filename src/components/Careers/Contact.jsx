import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Contactform from '../Homepage/Contactform';
import LinkButton from '../Button/LinkButton';
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const blueHexagonRef = useRef(null);
  const yellowHexagonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    if (blueHexagonRef.current && yellowHexagonRef.current) {
      const offsetX = mouseX * 0.05; 
      const offsetY = mouseY * 0.05;

      gsap.to(blueHexagonRef.current, {
        x: offsetX,
        y: offsetY,
        ease: "power2.out",
      });

      gsap.to(yellowHexagonRef.current, {
        x: offsetX * 1.2, 
        y: offsetY * 1.2,
        ease: "power2.out",
      });
    }
  };
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="contact">
      <div className="w-screen h-full z-[10] relative container-lg py-[7%]">
        <div className="w-full h-full flex gap-[10vw]">
          <div className="w-[45%] flex flex-col gap-[2vw]">
            <h2 className="heading-2 headinganim">
              Apply <span className="blue-text">Now</span>
            </h2>
            <p data-para-anim className="content w-[70%]">
            Leave us your details and a member of our team will get back to you as soon as possible.
            </p>
            <div className='pt-[4vw] flex flex-col gap-[2vw] w-[50%]'>
           <p data-para-anim className='text-[1.5vw] font-medium'>Don&apos;t see any <span className='text-primary'>job opening</span> that might fit you?</p>
           <LinkButton btnLink={"/"} btnText={"Send Resume"}/>
           </div>
          </div>

          <div className="w-[50%] h-full">
            <Contactform />
          </div>
        </div>

        <div
          className="absolute h-[2vw] w-[2.2vw] top-[25%] left-[25%] blue-hexagon-animation"
         
        >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div
          className="absolute h-[2vw] w-[2.2vw] top-[5%] left-[15%] yellow-hexagon-animation"
   
        >
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
