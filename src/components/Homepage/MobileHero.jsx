import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PrimaryButton from "../Button/PrimaryButton";
import Link from "next/link";
const MobileHero = () => {
  const isFirstRender = useRef(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDetail, setActiveDetail] = useState(0);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  const images = [
    {
      src1: "/assets/images/homepage/hero-bigbasket-img1.png",
      src2: "/assets/images/homepage/hero-bigbasket-img2.png",
      link: "/casestudies/bigbasket",
    },
    {
      src1: "/assets/images/homepage/hero-dominos-img1.png",
      src2: "/assets/images/homepage/hero-dominos-img2.png",
      link: "/casestudies/dominos",
    },
    {
      src1: "/assets/images/homepage/hero-flydubai-img1.png",
      src2: "/assets/images/homepage/hero-flydubai-img2.png",
      link: "/casestudies/flydubai",
    },
  ];
  const details = [
    {
      num1: "2.35x",
      para1: "Growth in installs",
      // num2: "430K + ",
      para2: "Expanding Horizons in Non-Metro Cities.",
    },
    {
      num1: " 500K+",
      para1: "New Orders in 12 Months",
      // num2: "1.90x",
      para2: "Success Through Influencer Power",
    },
    {
      num1: "67%",
      para1: "Increase in Brand Searches",
      // num2: "5.90x",
      para2: "New Routes Soar to Success",
    },
  ];
  const slidesData = [
    {
      title: "Data-Backed",
      subtitle: "Growth",
      description:
        "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/growth",
    },
    {
      title: "Optimise, Engage,",
      subtitle: "Convert",
      description:
        "Helping brands stand out with impactful campaigns and strategies",
      href: "/orders",
    },
    {
      title: "Clicks That",
      subtitle: "Convert",
      description:
        "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/search",
    },
  ];
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headRef.current, {
        opacity: 0,
        yPercent: 20,
        filter: "blur(8px)",
        duration: 1.5,
      })
        .to(headRef.current, {
          opacity: 0,
          delay: 2.9,
          filter: "blur(8px)",
          duration: 1.5,
        })
        .from(
          paraRef.current,
          { yPercent: 100, opacity: 0, duration: 1 },
          "-=5.5"
        )
        .to(paraRef.current, { opacity: 0, duration: 1 }, "-=1.4")
        .from(
          buttonRef.current,
          { opacity: 0, yPercent: 100, duration: 1 },
          "-=5.5"
        )
        .to(buttonRef.current, { opacity: 0, duration: 1, delay: -1.2 });
    });

    return () => ctx.revert();
  }, [activeIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".Marquee-container", {
      xPercent: -52,
      duration: images.length * 4,
      ease: "none",
      repeat: -1,
    });
  }, [images.length]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".content-detail , .content-para", {
        yPercent: 20,
        opacity: 0,
        duration: 1,
      }).to(".content-detail , .content-para", {
        delay: 4,
        yPercent: -20,
        opacity: 0,
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, [activeDetail]);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetail((prevIndex) => (prevIndex + 1) % details.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [details.length]);

  return (
    <section
      className="w-screen h-full pt-[30%] pb-[15%] overflow-hidden"
      id="hero"
    >
      <div className="container-lg flex flex-col gap-[5vw]">
        <div className="w-full h-[100vw] rounded-[5vw] overflow-hidden border relative">
            
          <div className="w-fit h-full flex flex-nowrap Marquee-container relative">
        
            {images.map((image, index) => (
              <>
                <div key={index} className="w-[90vw] h-[100vw] relative">
                  <Image
                    src={image.src1}
                    fill
                    className="object-cover h-full w-full"
                  />

                </div>
                <div key={index} className="w-[90vw] h-[100vw] relative">
                  <Image
                    src={image.src2}
                    fill
                    className="object-cover h-full w-full"
                  />

                  
                </div>
              </>
            ))}
            {images.map((image, index) => (
              <>
                  
                <div key={index} className="w-[90vw] h-[100vw] relative">
                  <Image
                    src={image.src1}
                    fill
                    className="object-cover h-full w-full"
                  />

                </div>
                <div key={index} className="w-[90vw] h-[100vw] relative">
                  <Image
                    src={image.src2}
                    fill
                    className="object-cover h-full w-full"
                  />

                  <div className="w-full h-[22vw] glassmorphism-dark absolute bottom-0 left-0 z-[1] flex">
                    <div className="w-full h-full flex justify-between items-center px-[3vw]">
                      <div className="flex items-center w-[50%]">
                        <h3 className="text-[2.4vw] font-extrabold uppercase leading-[1] content-detail">
                          {details[activeDetail].num1}
                        </h3>

                        <p className="content !leading-[1] content-para pl-[0.8vw]">
                          {details[activeDetail].para1}
                        </p>
                      </div>

                      <span className="h-[4.5vw] w-[1px] bg-black"></span>

                      <div className="flex flex-col items-center w-[50%]">
                        {/* <h3 className="text-[2.4vw] font-extrabold uppercase leading-[1] content-detail">
                {details[activeDetail].num2}
              </h3> */}

                        <p className="content !leading-[1] content-para">
                          {details[activeDetail].para2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="w-full h-[22vw] glassmorphism-dark absolute bottom-0 left-0 z-[1] flex">
          <div className="w-full h-full flex justify-between items-center px-[3vw] gap-[3vw]">
            <div className="flex gap-[3vw] w-[55%] ">
              <h3 className="text-[4.5vw] font-extrabold uppercase leading-[1] content-detail">
                {details[activeDetail].num1}
              </h3>

              <p className="content !leading-[1] content-para pl-[0.8vw]">
                {details[activeDetail].para1}
              </p>
            </div>

            <span className="h-[15.5vw] w-[1px] bg-black"></span>

            <div className="flex flex-col items-end w-[47%]">
              

              <p className="content !leading-[1] content-para">
                {details[activeDetail].para2}
              </p>
            </div>
          </div>
                  </div>
        </div>
        <div className="w-full h-full flex items-center justify-between container-lg pt-[5vw] pr-[2vw]">
          <div className="w-full flex flex-col gap-[5vw] flex-wrap">
            <h1
              ref={headRef}
              className="heading-1 !text-[11vw] leading-[1.2] heading"
            >
              {slidesData[activeIndex].title}{" "}
              <span className="text-primary">
                {slidesData[activeIndex].subtitle}
              </span>
            </h1>

            <p ref={paraRef} className="content w-full tracking-wide para">
              {slidesData[activeIndex].description}
            </p>

            <PrimaryButton
              href={slidesData[activeIndex].href}
              text="View Case Study"
              className="button"
              ref={buttonRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
