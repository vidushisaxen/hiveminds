import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import PlainButton from "../Button/PlainButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ img, title, des }) => {
 

  return (
    <>
      <div className="relative w-[25vw] h-[30.5vw]">
        <Image
          src={img}
          fill
          alt="bigbasket-casestudy"
          className="object-contain"
        />
        <div className="flex absolute top-0 rounded-br-[20px] right-0 items-center justify-center w-[11.7vw] h-[4.5vw] py-[1vw] ">
          <div className=" flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[1.5vw] leading-[1]">{title}</p>
            <p className="text-[0.7vw] font-medium w-[95%] leading-[1]">
              {des}
            </p>
          </div>
          <span className="bg-black h-[3vw] w-[2px] "></span>
          <div className=" flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[1.5vw] leading-[1]">{title}</p>
            <p className="text-[0.7vw] font-medium w-[95%] leading-[1]">
              {des}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const CaseStudies = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      let ctx = gsap.context(() => {
        const body = document.body;
        const changeBodyColor = (color) => {
          gsap.to(body, {
            backgroundColor: color,
            duration: 1, // Duration for smooth transition
            ease: "power2.out",
          });
        };
        // ScrollTrigger for changing body background color
        ScrollTrigger.create({
          trigger: "#caseStudies",
          start: "70% 60%",
          end: "bottom 20%",
         

          onEnter: () => changeBodyColor("#134bd6"),
          onLeaveBack: () => changeBodyColor("#fafafa"),
        });
      });
      return () => ctx.revert();
    }
  });
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#caseStudies",
          scrub: true,
          start: "top 90%",
          end: "bottom 60%",
        },
      });
      tl.from(".casestudy-block", {
        scale: 1.2,
        yPercent: -5,
      });
      gsap.from(".slideInCaseCarousel", {
        opacity: 0,
        xPercent: 100,
        duration: 1,

        scrollTrigger: {
          trigger: ".slideInCaseCarousel",
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  });
  // slideIn()
  return (
    <>
      <section id="caseStudies" className="pt-[15%]">
        <div className="w-screen h-[45vw] flex items-center justify-center  z-[10] ">
          <div className="w-[90vw] h-full rounded-[2vw] bg-white flex items-center justify-center casestudy-block px-[3vw] pt-[3vw] shadow-2xl drop-shadow-2xl overflow-hidden">
            <div className="w-[40%] h-full flex flex-col gap-[2vw] ">
              <h2 className="heading-2 headinganim">
                Growth Isn&apos;t Just a Buzzword - It&apos;s About Real{" "}
                <span className="blue-text">Impact</span>
              </h2>
              <p data-para-anim className="content w-[80%]">
                Explore the challenges we&apos;ve overcome and the strategies
                we&apos;ve implemented to deliver exceptional results across
                various industries.
              </p>

              <div className="flex flex-wrap items-center mt-[2vw] gap-[1vw] w-[90%]">
                <PlainButton text={"All"} link={"#"} className="fadeup" />
                <PlainButton
                  text={"Healthcare"}
                  link={"#"}
                  className="fadeup"
                />
                <PlainButton
                  text={"Automobiles"}
                  link={"#"}
                  className="fadeup"
                />
                <PlainButton text={"Wearables"} link={"#"} className="fadeup" />
                <PlainButton text={"NBFC"} link={"#"} className="fadeup" />
                <PlainButton text={"BFSI"} link={"#"} className="fadeup" />
                <PlainButton text={"CDIT"} link={"#"} className="fadeup" />
              </div>
            </div>
            <div className="w-[60%] h-[90%] flex items-center justify-center slideInCaseCarousel">
              <Swiper
                scrollbar={{
                  hide: false,
                  draggable: true,
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                //   }}
                freeMode={true}
                slidesPerView={2}
                spaceBetween={20}
                modules={[Scrollbar, Autoplay, FreeMode]}
                className="casestudy-swiper w-full h-[90%]"
              >
                <SwiperSlide>
                  <Card
                    img={"/assets/images/homepage/bigbasket-casestudy.png"}
                    title={"2.35x"}
                    des={"Growth in installs"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    img={"/assets/images/homepage/dominos-casestudy.png"}
                    title={"430k+"}
                    des={"New orders within 1 year"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    img={"/assets/images/homepage/flydubai-casestudy.png"}
                    title={"67%"}
                    des={"Growth in brand searches"}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
