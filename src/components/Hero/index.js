import Image from "next/image";
import React from "react";

const Hero = ({ title1, title2, para, img }) => {
  return (
    <section
      className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:pb-8 mobile:bg-white1 mobile:pt-24 "
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex justify-between mobile:flex-col mobile:gap-10">
        <div className="w-[50%] flex flex-col gap-[1vw] pt-[7vw] mobile:w-full mobile:gap-4 mobile:pt-0">
          <h1 className="heading-1 leading-[1.2] fadeup">
            {title1}
            <span className="text-primary">{" "}{title2}</span>
          </h1>
          <p data-para-anim className="content w-[70%] tracking-wide para mobile:w-full">
            {para}
          </p>
        </div>
        <div className="w-[40%] h-[80%] rounded-[1.2vw] mobile:rounded-[1.2rem] overflow-hidden fadein mobile:w-full mobile:h-[90vw]">
          <Image
            src={img}
            placeholder="blur"
            alt="hero-img"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
