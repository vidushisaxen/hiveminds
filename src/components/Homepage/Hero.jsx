import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import Image from "next/image";
import { SplitInLineWord, SplitInLine } from "../splitTextUtils";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CaseStudyCard = ({ src, no, para }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full relative">
        <Image src={src} fill alt="big-basket" className="object-fill" />
        <div className="flex absolute top-[1%] rounded-br-[20px] items-center justify-center w-[16.5vw] h-[4.5vw] py-[1vw] ">
          <div className=" flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[1.8vw] leading-[1]">{no}</p>
            <p className="text-[1vw] font-medium w-[90%] leading-[1]">{para}</p>
          </div>
          <span className="bg-black h-[3vw] w-[2px] "></span>
          <div className=" flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[1.8vw] leading-[1]">{no}</p>
            <p className="text-[1vw] font-medium w-[90%] leading-[1]">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const firstSlideRef = useRef(null);
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: "Delivering Digital",
      subtitle: "Growth",
      description:
        "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
    },
    {
      title: "Boosting Digital",
      subtitle: "Orders",
      description:
        "Unlocking new orders with innovative strategies tailored to your business goals",
    },
    {
      title: "Enhancing Brands",
      subtitle: "Search",
      description:
        "Helping brands stand out with impactful campaigns and strategies",
    },
  ];

  useEffect(() => {
    // Update content smoothly without innerHTML
    const headingText = document.querySelector(".heading");
    const paraText = document.querySelector(".para");

    // Use GSAP to animate opacity instead of innerHTML
    gsap.to(headingText, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(headingText, { opacity: 1, duration: 0.3 });
      },
    });

    gsap.to(paraText, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(paraText, { opacity: 1, duration: 0.3 });
      },
    });

    animateTextContent();
  }, [activeIndex]);

  // Animation for heading, paragraph, and button
  const animateTextContent = () => {
    const headingAnim = document.querySelector(".heading");
    const paraAnimation = document.querySelector(".para");
    const buttonAnimation = document.querySelector(".button");

    let ctx = gsap.context(() => {
      SplitInLineWord(headingAnim);
      const headingWord = headingAnim.querySelectorAll(".word");

      gsap.from(headingWord, {
        opacity: 0,
        yPercent: 20,
        filter: "blur(8px)",
        stagger: 0.05,
        duration: 0.7,
        scrollTrigger: {
          trigger: headingWord,
          start: "top 80%",
        },
      });

      SplitInLine(paraAnimation);
      const paraLine = paraAnimation.querySelectorAll(".line-internal");

      gsap.from(paraLine, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.07,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paraAnimation,
          start: "top 90%",
        },
      });

      gsap.from(buttonAnimation, {
        opacity: 0,
        yPercent: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0,
      });
    });

    return () => ctx.revert();
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(firstSlideRef.current, {
      scale: 0,
      yPercent: 20,
      opacity: 0.5,
      ease: "power3.out",
      duration: 1,
    })
      .from(
        secondSlideRef.current,
        {
          xPercent: 5,
          opacity: 0,
          ease: "power3.out",
          duration: 0.7,
        },
        "-=0.5"
      )
      .from(
        thirdSlideRef.current,
        {
          xPercent: 5,
          opacity: 0,
          ease: "power3.out",
          duration: 0.7,
        },
        "-=0.5"
      );
  }, []);

  return (
    <section id="hero">
      <div className="w-full h-screen flex items-center justify-between container-lg pt-[5vw] pe-[5vw]">
        <div className="w-[45%] flex flex-col gap-[2vw] flex-wrap">
          <h1 className="heading-1 leading-[1.2] flex gap-[0.5vw] heading">
            <span>
              {slidesData[activeIndex].title}
              <span className="blue-text ml-[0.8vw]">
                {slidesData[activeIndex].subtitle}
              </span>
            </span>
          </h1>
          <p className="content w-[75%] tracking-wide para">
            {slidesData[activeIndex].description}
          </p>
          <PrimaryButton href="#" text="View Case Study" className="button" />
        </div>

        <div className="w-[42%] h-[35vw]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            spaceBetween={30}
            loop={true}
            modules={[EffectCards]}
            className="caseStudySwiper w-full h-full"
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            cardsEffect={{
              perSlideRotate: "0",
              perSlideOffset: "12",
            }}
          >
            <SwiperSlide ref={firstSlideRef}>
              <CaseStudyCard
                src="/assets/images/homepage/big-basket.png"
                no="2.35x"
                para="Growth In Installs"
              />
            </SwiperSlide>
            <SwiperSlide ref={secondSlideRef}>
              <CaseStudyCard
                src="/assets/images/homepage/dominos.png"
                no="430k+"
                para="New Orders Within 1 Year"
              />
            </SwiperSlide>
            <SwiperSlide ref={thirdSlideRef}>
              <CaseStudyCard
                src="/assets/images/homepage/fly-dubai.png"
                no="67%"
                para="Growth in Brand Searches"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
