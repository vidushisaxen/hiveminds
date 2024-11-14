import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { FreeMode, Navigation } from "swiper/modules";
import { slideIn } from "../gsapAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AwardCard = ({ img, title, year, category }) => {
  return (
    <>
      <div className="w-[34.2vw] h-[11.5vw] border-[0.5px] border-white/20 rounded-[20px] flex items-center  px-[1vw]  bg-white/10 awards-card">
        <div className="flex items-center justify-between gap-[1vw] w-full">
          <div className="w-[10vw] h-[8.3vw] relative">
            <Image src={img} fill alt="awards-1" />
          </div>
          <div>
            <p className="text-white text-[1.25vw] font-medium montreal ">
              {title}
            </p>
            <p className="content-white">{year}</p>
            <p className="content-white">{category}</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Awards = () => {
  
  const swiperRef = useRef(null); // Create a ref for Swiper

  // State to track which button was clicked
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
      setActiveButton("next"); // Set next button as active
      // Reset after 300ms
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
      setActiveButton("prev"); // Set previous button as active
      // Reset after 300ms
    }
  };
  return (
    <section id="awards ">
      <div className="h-full w-[99vw] py-[5%] rounded-[30px] bg-[#134BD6] flex flex-col items-start justify-center px-[3vw] overflow-hidden relative">
        <div className="w-[35%] flex flex-col gap-[2vw]">
          <h2 className="heading-2 font-medium montreal !text-white">
            Our Accolades Speak For Themselves
          </h2>
          <p className="content-white w-[80%]">
            Discover our accolades and industry recognition that highlight our
            commitment to excellence.
          </p>
        </div>
        <div className="w-[100vw] h-full flex items-center justify-center ml-[-3vw] px-[3vw] mt-[5%]  ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            slidesPerView={2.7}
            modules={ FreeMode}
            freeMode={true}
            className="awards-swiper w-full h-full flex items-center justify-center"
          >
            <SwiperSlide>
              <AwardCard
                img={"/assets/images/homepage/awards-1.png"}
                title={
                  "Ranked among Financial Times High Growth Companies Asia Pacific"
                }
                year={"2024"}
                category={"Digital Marketing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img={"/assets/images/homepage/awards-2.png"}
                title={
                  "Ranked among Financial Times High Growth Companies Asia Pacific"
                }
                year={"2024"}
                category={"Digital Marketing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img={"/assets/images/homepage/awards-3.png"}
                title={
                  "Ranked among Financial Times High Growth Companies Asia Pacific"
                }
                year={"2024"}
                category={"Digital Marketing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img={"/assets/images/homepage/awards-1.png"}
                title={
                  "Ranked among Financial Times High Growth Companies Asia Pacific"
                }
                year={"2024"}
                category={"Digital Marketing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img={"/assets/images/homepage/awards-2.png"}
                title={
                  "Ranked among Financial Times High Growth Companies Asia Pacific"
                }
                year={"2024"}
                category={"Digital Marketing"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img={"/assets/images/homepage/awards-3.png"}
                title={
                  "Ranked among Financial Times High Growth Companies Asia Pacific"
                }
                year={"2024"}
                category={"Digital Marketing"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
          <div
            className={`absolute z-[5] top-[15%] right-[5%] overflow-hidden p-[1vw] rounded-full next-button cursor-pointer border border-white
                ${
                  activeButton === "next" ? " text-white" : "bg-transparent"
                } transition-colors duration-300`} // Added background color transition
            onClick={handleNext} // Trigger next slide
          >
            <div className="w-[2vw] h-[2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/icons/awards-swiper-button.svg"
                alt="arrow-right"
                className={`object-contain group-hover:invert transition-all duration-300 `}
                fill
              />
            </div>
          </div>
          <div
            className={`absolute z-[5] top-[15%] right-[11%]  border border-white overflow-hidden  p-[1vw] rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#134BD6]"
                } transition-colors duration-300`} // Added background color transition
            onClick={handlePrev} // Trigger previous slide
          >
            <div className="w-[2vw] h-[2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
              <Image
                src="/assets/icons/awards-swiper-button.svg"
                alt="arrow-left"
                className={`object-contain group-hover:invert rotate-180 transition-all duration-300 `}
                fill
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Awards;
