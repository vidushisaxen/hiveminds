import React, { useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ title, src, text, className }) => {
  return (
    <div
      className={`h-full w-[22vw] bg-[#F2F2F2] border border-[#E0E0E0] rounded-[1.2vw] flex flex-col items-start justify-start gap-[4vw] px-[1.2vw] py-[2vw] relative container-lg ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <p className="text-[1.5vw]">{title}</p>
        <div className="w-[3vw] h-[3vw] border border-[#111111] relative p-[1vw] rounded-full">
          <Image
            src="/assets/icons/top-right-arrow.svg"
            fill
            alt="top-right-arrow"
            className="p-[1vw]"
          />
        </div>
      </div>
      <div className="w-full flex justify-start">
        <div className="w-[3.3vw] h-[3.3vw] relative ">
          <Image src={src} fill alt="SEO" className="object-contain" />
        </div>
      </div>

      <p data-para-anim className="text-[1.04vw] text-[#111111] tracking-wide">
        {text}
      </p>
    </div>
  );
};

const Services = () => {
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
    window.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#services",
          start: "top 60%",
          end: "50% top",
        },
      });

      tl.to(".card1", {
        xPercent: 120,
        duration: 1,
        ease: "power3.out",
      })
        .to(".card2", {
          xPercent: 240,
          delay: -1,
          duration: 1,
          ease: "power3.out",
        })
        .to(".card3", {
          xPercent: 330,
          delay: -1,
          duration: 1.4,
          ease: "power3.out",
        });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section id="services">
      <div className="w-screen h-full flex items-center justify-between container-lg py-[5%] relative">
        <div className="w-[35%] h-[30vw] px-[3vw] py-[5vw] flex flex-col items-start justify-center gap-[3vw]  rounded-[1vw] shadow-2xl relative z-[10]">
          <h2 className="heading-2 w-[85%] headinganim">
            Your <span className="blue-text">Goals</span>, Our Offerings
          </h2>
          <p data-para-anim className="content w-[80%]">
            See how our strategic partnerships and collaboration drive
            innovation and accelerate your business growth.
          </p>
          <div className="flex w-full items-center justify-center gap-[1vw]">
            <PrimaryButton text="Our Solutions" href="#" className="fadeup" />
            <PrimaryButton text="Industry" href="#" data-btn-2 className="fadeup" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1vw] w-[62%] h-[30vw] service-card-container">
          <ServiceCard
            title={"SEO"}
            text={
              "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility."
            }
            src={"/assets/images/homepage/seo.png"}
            className={"card1 z-[4] translate-x-[-120%] "}
          />
          <ServiceCard
            title={"Marketplace"}
            text={"We provide effective strategies that are aligned with your long-term business goals."}
            src={"/assets/images/homepage/marketplace.png"}
            className={"card2 z-[3] translate-x-[-240%]"}
          />
          <ServiceCard
            title={"Strategy & Consulting"}
            text={"We provide effective strategies that are aligned with your long-term business goals."}
            src={"/assets/images/homepage/strategy.png"}
            className={"card3 z-[2] translate-x-[-330%]"}
          />
        </div>
        <div
          className="absolute h-[2vw] w-[2.2vw] bottom-[5%] right-[5%]"
          ref={blueHexagonRef}
        >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div
          className="absolute h-[2vw] w-[2.2vw] bottom-[5%] left-[5%]"
          ref={yellowHexagonRef}
        >
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Services;
