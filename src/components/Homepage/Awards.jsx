import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FreeMode } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AwardCard = ({ img, title, year, category }) => {
  return (
    <>
      <div className="w-[34.2vw] h-[11.5vw] border-[0.5px] border-white/20 rounded-[1.2vw] flex items-center  px-[1.5vw]  bg-white/10 awards-card cursor-pointer hover:scale-[1.02] duration-500 ease-in-out transition-all">
        <div className="flex items-center justify-between gap-[1vw] w-full">
          <div className="w-[10vw] h-[8.3vw] relative">
            <Image src={img} fill alt="awards-1" />
          </div>
          <div className="w-[80%]">
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
      <div className="h-full w-[100vw] py-[5%] rounded-[30px] flex flex-col items-start justify-center px-[3vw] overflow-hidden relative">
        <div className="w-[35%] flex flex-col gap-[2vw]">
          <h2 className="heading-2 font-medium montreal !text-white headinganim">
            Our Accolades Speak For Themselves
          </h2>
          <p data-para-anim className="content-white w-[80%]">
            Discover our accolades and industry recognition that highlight our
            commitment to excellence.
          </p>
        </div>
        <div className="w-[100vw] h-full flex items-center justify-center ml-[-3vw] px-[3vw] mt-[5%] fadeup  ">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={30}
            slidesPerView={2.7}
            modules={[FreeMode]}
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
          className={`absolute z-[5] top-[15%] right-[5%] w-[4vw] h-[4vw] overflow-hidden rounded-full next-button cursor-pointer border border-white
                ${
                  activeButton === "next" ? " text-white" : "bg-transparent"
                } transition-colors duration-300`} // Added background color transition
          onClick={handleNext} // Trigger next slide
        >
          <div className="w-[4vw] h-[4vw]  relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] flex justify-center items-center group hover:bg-white transition-all duration-500">
            <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center">
              <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                fill="white"
                stroke="white"
                className="group-hover:fill-[#134bd6] group-hover:stroke-[#134bd6] transition-all duration-500"
                strokeWidth="1.79924"
              />
            </svg>
              </span>
          </div>
        </div>
        <div
          className={`absolute z-[5] w-[4vw] h-[4vw] top-[15%] right-[11%]  border border-white overflow-hidden group hover:bg-white transition-all duration-500 rounded-full prev-button cursor-pointer 
                ${
                  activeButton === "prev"
                    ? " text-white"
                    : "bg-transparent text-[#134BD6]"
                } transition-colors duration-300`} // Added background color transition
          onClick={handlePrev} // Trigger previous slide
        >
          <div className="w-[4vw] h-[4vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] flex justify-center items-center ">
            <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center ">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                fill="white"
                stroke="white"
                className="group-hover:fill-[#134bd6] group-hover:stroke-[#134bd6] transition-all duration-500"
                strokeWidth="1.79924"
              />
            </svg>

            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
