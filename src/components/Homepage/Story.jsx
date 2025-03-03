import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ReelButton from "../Button/ReelButton";
import { useLenis } from "lenis/react";
import { initMagneticButton } from "../splitTextUtils";
import dynamic from "next/dynamic";
import LinkButton from "../Button/LinkButton";
gsap.registerPlugin(ScrollTrigger);

const VideoModal = dynamic(() => import("@/components/VideoPlayer"));
const Story = ({isOpen,setIsOpen}) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lenis = useLenis();

  const handleOpen = () => {
    setIsModalOpen(true);
    setIsOpen(true)
    lenis.stop();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    lenis.start();
    setIsOpen(false);
  };
  useEffect(() => {
    initMagneticButton();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = videoRef.current;
            if (video && !videoLoaded) {
              // Set video source dynamically when it enters the viewport
              video.src = "/assets/videos/story-reel.mp4";
              video.load(); // Ensure the video is loaded
              video.play(); // Play the video when it's visible
              setVideoLoaded(true); // Set video as loaded
            }
            observer.unobserve(entry.target); // Stop observing once the video has loaded
          }
        });
      },
      { threshold: 0.5 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [videoLoaded]);

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
        <div className="w-screen h-full py-[5vw] relative">
          <div
            data-magnetic-target
            data-magnetic-strength="200"
            className="w-[90vw] h-[60%] bg-black rounded-[1.5vw] overflow-hidden absolute video top-[-15%] left-[50%] translate-x-[-50%]"
          >
            <div className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 mobile:static mobile:translate-x-0 tablet:static tablet:translate-x-0">
              <ReelButton
                onClick={handleOpen}
                text="Play Reel"
                className="magnetic-inner z-10"
              />
            </div>
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              poster="/assets/images/homepage/story-reel-poster.png"
              className="object-cover w-full h-full"
            ></video>
          </div>
          <div className="w-screen h-full py-[4vw] px-[5vw] mt-[5vw] pt-[22%] bg-[#134BD6] rounded-[2vw] flex items-start justify-between gap-[7vw]">
            <div className="w-[40%] flex items-start justify-start flex-col  gap-[2vw]">
              <p className="text-[2.8vw] montreal text-[#FFFFFF] leading-[1.2] headinganim">
                Fuelling Your Growth Ambitions, With Confidence.
              </p>
              <p data-para-anim className="content-white">
                At HiveMinds, we tackle your most challenging business problems
                with our specialized digital marketing approach - integrating
                strategic expertise, cutting-edge technology, and data-driven
                insights to craft campaigns that elevate your brand and drive
                sustainable growth.
              </p>
              <LinkButton
                btnLink={"#"}
                btnText={"How We Do It"}
                className={"text-white fadeup"}
              />
            </div>
            <div className="w-[42%] flex items-start justify-start flex-col  gap-[2vw]">
              <p className="text-[2.8vw] montreal text-[#FFFFFF] leading-[1.2] w-[90%] headinganim">
                Driven by Talent, Powered by Teamwork
              </p>
              <p data-para-anim className="content-white">
                Driven by a shared passion for elevating brands, we HiveMinders
                understands our clients&apos; unique goals and aspirations. We
                leverage our expertise to craft compelling brand experiences,
                ensuring that every campaign is executed with precision,
                creativity, and an unwavering commitment to excellence.
              </p>
              <div className="w-full flex items-center justify-start gap-[2vw]">
                <PrimaryButton
                  className="fadeup"
                  text="Explore The Hiveminds Way"
                  href="#"
                  data-btn-white
                />
                <PrimaryButton
                  className="fadeup"
                  text="Our Leadership Team"
                  href="#"
                  data-btn-b-white
                />
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <VideoModal
            poster="/assets/images/homepage/story-reel-poster.png"
            isOpen={isModalOpen}
            onClose={handleClose}
            videoSrc="/assets/videos/story-reel.mp4"
          />
        )}
      </section>
    </>
  );
};

export default Story;
