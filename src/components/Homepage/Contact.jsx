import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import ContactForm from './Contactform';
gsap.registerPlugin(ScrollTrigger)


const Contact = ({ title1, title2, para }) => {
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      let ctx = gsap.context(() => {
     
        ScrollTrigger.create({
          trigger: "#contact",
          start: "top 90%",
          end: "bottom 20%",
         
        });
      });
      return () => ctx.revert();
    }
  });

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
      <div className="w-screen h-full z-[10] relative container-lg py-[7%] mobile:py-10">
        <div className="w-full h-full flex gap-[10vw] mobile:block mobile:space-y-12 tablet:flex-col">
          <div className="w-[45%] flex flex-col gap-[2vw] mobile:w-full mobile:gap-4 tablet:w-full">
            <h2 className="heading-2 headinganim w-[90%]">
              {title1}
              <span className="blue-text"> {title2}</span>
            </h2>
            <p data-para-anim className="content w-[90%]">
              {para}
            </p>
            <div className="flex mt-[4vw] items-center justify-center gap-[2vw]">
              <div className="h-[17.5vw] w-[16.5vw] relative rounded-[16px] fadein mobile:w-full mobile:h-[80vw] tablet:w-1/2 tablet:h-[50vw]">
                <Image
                  src="/assets/images/homepage/contact-1.png"
                  fill
                  alt="contact"
                  className="rounded-[16px]"
                />
              </div>
              <div className="h-[17.5vw] w-[16.5vw] relative rounded-[16px] fadein mobile:hidden tablet:w-1/2 tablet:h-[50vw]">
                <Image
                  src="/assets/images/homepage/contact-2.png"
                  fill
                  alt="contact"
                  className="rounded-[16px]"
                />
              </div>
            </div>
          </div>

          <div className="w-[50%] h-full mobile:w-full tablet:w-full">
            <ContactForm />
        
          </div>
        </div>
        <div
          className="absolute h-[2vw] mobile:hidden w-[2.2vw] top-[40%] left-[35%] blue-hexagon-animation tablet:hidden"
        >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div
          className="absolute h-[2vw] mobile:hidden w-[2.2vw] top-[25%] left-[22%] yellow-hexagon-animation tablet:hidden"
        >
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
