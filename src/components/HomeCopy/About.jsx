import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const svgPathRef = useRef(null);

  useEffect(() => {
    // Animate the SVG path drawing on scroll
    const path = svgPathRef.current;
    const totalLength = path.getTotalLength();
    gsap.from(".about-img-block",{
      scale:0.85,
      scrollTrigger:{
        trigger:".about-img-block",
        start:"top 90%",
        scrub:true
      }
    })
    gsap.to(".about-img",{
      yPercent:50,
      ease:"none",
      scrollTrigger:{
        trigger:".about-img",
        start:"top 90%",
        end:"120% -=20%",
        scrub:true
      }
    })
    gsap.fromTo(
      path,
      {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      },
      {
        strokeDashoffset: 0,
        ease: "power2.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: path,
          start: "top 70%", // Start when SVG is in viewport
          end: "bottom 20%", // End near bottom
          scrub: 1, // Smooth animation
        },
      }
    );
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full py-[5%] relative" id="about">
      <div className="flex flex-col items-center gap-[7vw]">
        {/* About Section Text */}
        <div className="flex justify-between container-lg pl-[3vw]">
          <span className="w-[20%] text-[1.3vw] montreal font-medium">• About</span>
          <div className="w-[70%] text-[2.4vw] font-medium ">
            We are HiveMinds, a unit of Madison World, a full-fledged digital
            agency that is 11 years young, and we are buzzing with talented
            experts who are working towards transforming businesses. Being one
            of the early entrants in Bengaluru’s digital marketing scene, our
            strength lies in being a dynamic agency that supports all your
            requirements - be it SEO, Performance & Paid Campaigns, Analytics,
            Social Media, Digital Branding, or Creative and Content services.
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-[90vw] h-[47vw] rounded-[2vw] overflow-hidden about-img-block">
          <Image
            src={"/assets/images/homeCopy/hero-img-2.png"}
            alt="hero-img-2"
            width={1600}
            height={720}
            className="object-cover w-full h-full about-img translate-y-[-25%] scale-[1.1]"
          />
        </div>
      </div>

      {/* SVG Path Animation on Scroll */}
      <div className="absolute top-0 w-screen h-[100vw] z-[-1]">
        <svg
          width="1920"
          height="1074"
          viewBox="0 0 1920 1074"
          fill="none"
          className="object-cover w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={svgPathRef}
            d="M-52 335.071C-52 169.281 358.807 -113.005 878.951 91.5819C1498 335.07 1010.5 1053.04 1925 1053.04"
            stroke="#FFC706"
            strokeWidth="40"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
