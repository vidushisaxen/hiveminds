import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FreeMode } from "swiper/modules";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    img: "/assets/images/schoolofdigital/kishori-maheshwari.png",
    name: "Kishori Maheshwari ",
    year: "1 year ago",
    content: "Very informative and good course...for those who are new to the field it's a great course.",
    stars: 5
  },
  {
    img: "/assets/images/schoolofdigital/balkeez-bi.png",
    name: "Balkeez bi",
    year: "1 year ago",
    content: "One of Bangalore's premier and exceptional institutions for digital marketing is Hiveminds School of Digital. I was able to thoroughly understand all the modules and elements in a supportive environment. Enthusiastic faculty with amazing knowledge, If you wish to begin a career in digital marketing, I would unquestionably recommend this institute based on my own experience.",
    stars: 5

  },
  {
    img: "/assets/images/schoolofdigital/prabin-k.png",
    name: "Prabin K Baby",
    year: "1 year ago",
    content: "Hiveminds is the best Institute you can choose from right now. Well experienced faculty with Industrial knowledge of using various digital marketing tools which results into a very knowledgeable and interactive sessions.",
    stars: 0

  },
  {
    img: "/assets/images/schoolofdigital/kishori-maheshwari.png",
    name: "Kishori Maheshwari ",
    year: "1 year ago",
    content: "Very informative and good course...for those who are new to the field it's a great course.",
    stars: 5
  },
  {
    img: "/assets/images/schoolofdigital/balkeez-bi.png",
    name: "Balkeez bi",
    year: "1 year ago",
    content: "One of Bangalore's premier and exceptional institutions for digital marketing is Hiveminds School of Digital. I was able to thoroughly understand all the modules and elements in a supportive environment. Enthusiastic faculty with amazing knowledge, If you wish to begin a career in digital marketing, I would unquestionably recommend this institute based on my own experience.",
    stars: 5
  },
  {
    img: "/assets/images/schoolofdigital/prabin-k.png",
    name: "Prabin K Baby",
    year: "1 year ago",
    content: "Hiveminds is the best Institute you can choose from right now. Well experienced faculty with Industrial knowledge of using various digital marketing tools which results into a very knowledgeable and interactive sessions.",
    stars: 0
  },

];


const TestimonialCard = ({ img, name, year, content, key, stars }) => {
  return (
    <>
      <div key={key} className="w-[34.2vw] h-[30vw] shadow-sm rounded-[1.2vw]  py-[2vw] px-[1.5vw] bg-white  hover:scale-[1.02] duration-500 ease-in-out transition-all mobile:w-[80vw] mobile:h-[25vw] mobile:rounded-[2.5vw] mobile:px-[3vw] border">
        <div className="flex items-start justify-between gap-[1vw] w-full mobile:gap-[3vw]">
          <div className="w-[8vw] h-[7vw] relative mobile:w-[20vw] mobile:h-[18vw]">
            <Image src={img} fill alt="awards-1" className='rounded-full' />
          </div>
          <div className="w-[80%] flex flex-col mobile:flex-col-reverse mobile:gap-[0.5vw]">
            <p className=" text-[1.8vw] font-medium montreal mobile:text-[3.5vw] ">
              {name}
            </p>
            <p className=" mobile:!text-[3vw]">{year}</p>
            {Number.isInteger(stars) && stars > 0 && (
              <div className="flex items-center py-[1vw]">
                {Array.from({ length: stars }, (_, index) => (
                  <Image
                    key={index}
                    src="/assets/icons/star.svg"
                    height={25}
                    width={25}
                    alt="star"
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='py-[3vw] relative'>
          <span className='absolute top-[10%] left-[5%]'>
            <Image src={"/assets/icons/quote-icon.svg"} width={100} height={100} alt='quote-icon' />
          </span>
          <p className='content relative z-[1]'>{content}</p>
        </div>
      </div>
    </>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  };
  return (
    <section className='py-[5vw] h-full w-screen relative'>
      <div className='w-full h-full '>
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] container-lg">
          <h2 data-heading-anim className="heading-2 headinganim">
            What Our
            <span className="blue-text"> Customer&apos;s Say</span>
          </h2>
          <p data-para-anim className="content w-[65%] text-center fadein">
            We provide effective strategies that are aligned with your long-term business goals.
          </p>
        </div>

        <div className="w-full overflow-hidden h-full flex items-center justify-center py-[3vw] mt-[5%] fadeup">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2.7,
                spaceBetween: 35,
              },
              1536: {
                slidesPerView: 2.7,
                spaceBetween: 40,
              },
            }}
            modules={[FreeMode]}
            freeMode={true}
            className="awards-swiper w-full h-full flex items-center justify-center "
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  img={item.img}
                  name={item.name}
                  year={item.year}
                  content={item.content}
                  stars={item.stars}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={`absolute z-[5] top-[30%] right-[5%] w-[4vw] h-[4vw] overflow-hidden rounded-full next-button hover:bg-white cursor-pointer border border-black mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw]
                ${activeButton === "next" ? " text-black" : "bg-transparent"
            } transition-colors duration-300`}
          onClick={handleNext}
        >
          <div className="w-[4vw] h-[4vw]  relative z-[6] mobile:w-[7.5vw] mobile:h-[7.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] flex justify-center items-center group transition-all duration-500">
            <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw]">
              <svg
                width="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                  fill="#111111"
                  stroke="#111111"
                  className=""
                  strokeWidth="1.79924"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className={`absolute z-[5] w-[4vw] h-[4vw] top-[30%] right-[11%]  border border-black overflow-hidden group  transition-all duration-500 rounded-full prev-button cursor-pointer mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw] mobile:right-[25%]
                ${activeButton === "prev"
              ? " text-black"
              : "bg-transparent "
            } transition-colors duration-300`}
          onClick={handlePrev}
        >
          <div className="w-[4vw] h-[4vw]  mobile:w-[7.5vw] mobile:h-[7.5vw] relative z-[6]  flex justify-center items-center ">
            <span className="w-[1.5vw] h-[1.5vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw]">
            <svg
            className='rotate-180'
                width="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9769 14.2073L14.9771 14.2074C15.0572 14.2866 15.1004 14.3919 15.1004 14.4997C15.1004 14.6073 15.0572 14.7126 14.9771 14.7918L14.9769 14.792L1.64366 27.9741L1.64356 27.9742C1.5595 28.0573 1.44901 28.1004 1.3333 28.1004C1.21755 28.1004 1.10707 28.0573 1.02314 27.9743L1.02303 27.9742C0.858507 27.8115 0.858492 27.5522 1.02295 27.3895C8.19902 20.2949 8.1993 8.70514 1.02303 1.61059C0.858491 1.44792 0.858492 1.18853 1.02299 1.02587C1.19326 0.857514 1.47343 0.85759 1.64352 1.02578L1.64359 1.02585L14.9769 14.2073Z"
                  fill="#111111"
                  stroke="#111111"
                  className=""
                  strokeWidth="1.79924"
                />
              </svg>

            </span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonials