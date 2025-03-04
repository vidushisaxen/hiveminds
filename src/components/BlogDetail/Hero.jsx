import Image from "next/image";
import React from "react";

const Hero = ({title1,title2,para,img, category}) => {
  return (
    <section
      className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%]"
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex  justify-between">
        <div className="w-[45%] flex flex-col gap-[1vw] pt-[7vw]">
          <h1 className="heading-2 leading-[1.2] headinganim w-full ">
            {title1}
            <span className="text-primary">{" "}{title2}</span>
          </h1>
          <ul className="list-disc py-[1vw] px-[1vw]">
            <li data-para-anim className="content">{category}</li>   
        </ul>
          <p data-para-anim  className="content w-[88%] tracking-wide para">
         {para}
          </p>
        </div>
        <div className="w-[40%] h-[100%] rounded-[1.2vw] overflow-hidden fadein">
        <Image
         src={img}
         width={400}
         height={700}
         alt="hero-img"
         className="w-full h-full object-cover"
        />

        </div>
      </div>
    </section>
  );
};

export default Hero;
