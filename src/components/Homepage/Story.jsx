import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { headingBlur } from "../gsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const Story = () => {

  
    
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#story",
          scrub: true,
          start: "top 90%",
          end: "bottom 60%",
        },
      });
      tl.from(".video", {
        width: "100vw",
      });
    });
    return () => ctx.revert();
  });
  return (
    <>
      <section id="story" className="pt-[15vw]">
        <div className="w-screen h-full py-[5vw]  relative">
          <div className="w-[90vw] h-[60%] bg-black rounded-[1.5vw] overflow-hidden absolute video top-[-15%] left-[50%] translate-x-[-50%]">
              <video 

              muted
              autoPlay
              loop
              src="/assets/videos/story-reel.mp4"
              className="object-cover w-full h-full"
              >
              </video>
            <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-[2vw] border border-white w-[9vw] h-[9vw] rounded-full flex justify-center items-center">
              <span>play</span>

            </span>
          </div>
          <div className="w-screen h-full py-[4vw] px-[5vw] mt-[5vw] pt-[22%] bg-[#134BD6] rounded-[2vw] flex items-start justify-between gap-[7vw]">
            <div className="w-[40%] flex items-start justify-start flex-col  gap-[2vw]">
              <p className="text-[2.8vw] montreal text-[#FFFFFF] leading-[1.2] headinganim">
                Fuelling Your Growth Ambitions, With Confidence.
              </p>
              <p className="content-white">
                At HiveMinds, we tackle your most challenging business problems
                with our specialized digital marketing approach - integrating
                strategic expertise, cutting-edge technology, and data-driven
                insights to craft campaigns that elevate your brand and drive
                sustainable growth.
              </p>
              <Link href={"#"}>
                <div className="flex items-center justify-center gap-[1vw]">
                  <p className="content-white border-b">How We Do It</p>
                  <div className="h-[1vw] w-[1vw] relative">
                    <Image
                      src="/assets/icons/right-arrow-white.svg"
                      fill
                      alt="right-arrow"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[42%] flex items-start justify-start flex-col  gap-[2vw]">
              <p className="text-[2.8vw] montreal text-[#FFFFFF] leading-[1.2] w-[90%] headinganim">
                Driven by Talent, Powered by Teamwork
              </p>
              <p className="content-white">
                Driven by a shared passion for elevating brands, we HiveMinders
                understands our clients&apos; unique goals and aspirations. We
                leverage our expertise to craft compelling brand experiences,
                ensuring that every campaign is executed with precision,
                creativity, and an unwavering commitment to excellence
              </p>
              <div className="w-full flex items-center justify-start gap-[2vw]">
                <PrimaryButton
                  text="Explore The Hiveminds Way"
                  href="#"
                  data-btn-white
                />
                <PrimaryButton
                  text="Our Leadership Team"
                  href="#"
                  data-btn-b-white
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
