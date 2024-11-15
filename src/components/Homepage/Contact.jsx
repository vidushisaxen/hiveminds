import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Contactform from './Contactform';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Contact = () => {
  const blueHexagonRef = useRef(null);
  const yellowHexagonRef = useRef(null);

  // Function to handle mouse move
  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    
    // Apply movement to the blue and yellow hexagons based on mouse position
    if (blueHexagonRef.current && yellowHexagonRef.current) {
      const offsetX = mouseX * 0.05; // Adjust the movement sensitivity (change 0.05 for stronger/weaker movement)
      const offsetY = mouseY * 0.05;

      gsap.to(blueHexagonRef.current, {
        x: offsetX,
        y: offsetY,
        ease: "power2.out",
      });

      gsap.to(yellowHexagonRef.current, {
        x: offsetX * 1.2, // Make yellow hexagon move slightly differently from blue hexagon
        y: offsetY * 1.2,
        ease: "power2.out",
      });
    }
  };

  // Add event listeners on mount and clean up on unmount
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
              Looking to Drive <span className="blue-text">Growth?</span>
            </h2>
            <p data-para-anim className="content w-[90%]">
              We&apos;re passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us.
            </p>
            <div className="flex mt-[4vw] items-center justify-center gap-[2vw]">
              <div className="h-[17.5vw] w-[16.5vw] relative rounded-[16px]">
                <Image
                  src="/assets/images/homepage/contact-1.png"
                  fill
                  alt="contact"
                  className="rounded-[16px]"
                />
              </div>
              <div className="h-[17.5vw] w-[16.5vw] relative rounded-[16px]">
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
          className="absolute h-[2vw] w-[2.2vw] top-[33%] left-[33%]"
          ref={blueHexagonRef}
        >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div
          className="absolute h-[2vw] w-[2.2vw] top-[17%] left-[20%]"
          ref={yellowHexagonRef}
        >
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
