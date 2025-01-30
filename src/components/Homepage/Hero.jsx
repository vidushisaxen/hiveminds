import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const isFirstRender = useRef(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        }
      });

      tl.from(headRef.current, {
        opacity: 0,
        yPercent: 20,
        filter: "blur(8px)",
        duration: 1,
        delay: 0,
      })
        .from(paraRef.current, {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
        }, "-=1")
        .from(buttonRef.current, {
          opacity: 0,
          yPercent: 50,
          duration: 1,
        }, "-=1")
    });
    isFirstRender.current = false;
    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    const swiperSlides = swiperRef.current.querySelectorAll(".swiper-slide")
    let ctx = gsap.context(() => {
      gsap.from(swiperSlides, {
        opacity: 0,
        xPercent: 20,
        stagger: 0.1,
        duration: 0.5,
        delay: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  const slidesData = [
    {
      title: "Delivering Digital",
      subtitle: "Growth",
      description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/growth",
      img: "/assets/images/homepage/big-basket-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Boosting Digital",
      subtitle: "Orders",
      description: "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/orders",
      img: "/assets/images/homepage/dominos-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Enhancing Brands",
      subtitle: "Search",
      description: "Helping brands stand out with impactful campaigns and strategies",
      href: "/search",
      img: "/assets/images/homepage/fly-dubai-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Delivering Digital",
      subtitle: "Growth",
      description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/growth",
      img: "/assets/images/homepage/big-basket-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Boosting Digital",
      subtitle: "Orders",
      description: "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/orders",
      img: "/assets/images/homepage/dominos-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Enhancing Brands",
      subtitle: "Search",
      description: "Helping brands stand out with impactful campaigns and strategies",
      href: "/search",
      img: "/assets/images/homepage/fly-dubai-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    }, {
      title: "Delivering Digital",
      subtitle: "Growth",
      description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/growth",
      img: "/assets/images/homepage/big-basket-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Boosting Digital",
      subtitle: "Orders",
      description: "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/orders",
      img: "/assets/images/homepage/dominos-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
    {
      title: "Enhancing Brands",
      subtitle: "Search",
      description: "Helping brands stand out with impactful campaigns and strategies",
      href: "/search",
      img: "/assets/images/homepage/fly-dubai-1.png",
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",
    },
  ];

  return (
    <section id="hero">
      <div className="w-full h-screen flex items-center justify-between container-lg pt-[5vw] pe-[5vw]">

        <div className="w-[45%] flex flex-col gap-[2vw] flex-wrap">
          <h1 ref={headRef} className="heading-1 leading-[1.2] heading">
            {slidesData[activeIndex].title}{" "}<span className="text-primary">{slidesData[activeIndex].subtitle}</span>
          </h1>
          <p ref={paraRef} className="content w-[75%] tracking-wide para">
            {slidesData[activeIndex].description}
          </p>
          <PrimaryButton href={slidesData[activeIndex].href} text="View Case Study" className="button" ref={buttonRef} />
        </div>

        <div className="w-[45%] h-fit">
          <Swiper
            ref={swiperRef}
            effect={"cards"}
            grabCursor={true}
            speed={700}
            modules={[EffectCards, Autoplay]}
            className="caseStudySwiper w-[36.771vw] h-[34.792vw]"
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            autoplay={{
              delay: 6200,
            }}
            cardsEffect={{
              perSlideRotate: "0",
              perSlideOffset: "10",
              slideShadows: false,
            }}
          >
            {slidesData.map((item, index) => (
              <SwiperSlide key={index}>
                <CaseStudyCard
                  img={item.img}
                  num1={item.num1}
                  para1={item.para1}
                  num2={item.num2}
                  para2={item.para2}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const CaseStudyCard = ({ img, num1, num2, para1, para2  }) => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image src={img} fill alt="big-basket" priority={true} className="object-contain" quality={75} />
      <div className="h-full w-full">
        <div className="swiper-card-numbers">
          <div className=" flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[2vw] leading-[1] montreal mb-[0.3vw]">{num1}</p>
            <p className="text-[1vw] w-[90%] leading-[1.1] tracking-wide">{para1}</p>
          </div>
          <span className="bg-black h-[80%] w-[2px] "></span>
          <div className=" flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[2vw] leading-[1] montreal mb-[0.3vw]">{num2}</p>
            <p className="text-[1vw] w-[90%] leading-[1.1] tracking-wide">{para2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};