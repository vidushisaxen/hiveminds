import React from "react";
import LinkButton from "../Button/LinkButton";
import LinkButtonWhite from "../Button/LinkButtonWhite";
import Image from "next/image";

const ServiceCard = ({title,src,text}) => {
  return (
    <div className="h-full w-full bg-[#F2F2F2] border border-[#E0E0E0] rounded-[30px] flex flex-col items-start justify-start gap-[4vw] px-[2vw] py-[2vw] relative">
  <div className="flex items-center justify-between w-full">
    <p className="text-[1.5vw]">{title}</p>
    <div className="w-[3vw] h-[3vw] border border-[#111111] relative p-[1vw] rounded-full">
      <Image
        src="/assets/icons/top-right-arrow.svg"
        fill
        alt="top-right-arrow"
        className="p-[1vw]"
      />
    </div>
  </div>
  <div className="w-full flex justify-start">
    <div className="w-[5vw] h-[5vw] relative">
      <Image src={src} fill alt="SEO" />
    </div>
  </div>
  <div className="absolute top-[60%] w-[80%]">
    <p className="content">{text}</p>
  </div>
</div>

  );
};

const Services = () => {
  return (
    <section id="services">
      <div className="w-screen h-screen flex items-center justify-center gap-[2vw]">
        <div className="w-[30%] h-[65%] px-[3vw] py-[5vw] flex flex-col items-start justify-center gap-[3vw] rounded-[20px] shadow-2xl">
          <h2 className="heading-2 w-[85%]">
            Your <span className="blue-text">Goals</span>, Our Offerings
          </h2>
          <p className="content w-[80%]">
            See how our strategic partnerships and collaboration drive
            innovation and accelerate your business growth.
          </p>
          <div className="flex w-full items-center justify-center gap-[3vw]">
            <LinkButton text={"Our Solutions"} link={"#"} />
            <LinkButtonWhite text={"Industry"} link={"#"} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1vw] w-[60%] h-[65%]">
          <ServiceCard title={"SEO"} text={"We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility."} src={"/assets/images/homepage/seo.png"}/>
          <ServiceCard title={"Marketplace"} text={"We provide effective strategies that are aligned with your long-term business goals."} src={"/assets/images/homepage/marketplace.png"}/>
          <ServiceCard title={"Strategy & Consulting"} text={"We provide effective strategies that are aligned with your long-term business goals."} src={"/assets/images/homepage/strategy.png"}/>
        </div>
      </div>
    </section>
  );
};

export default Services;