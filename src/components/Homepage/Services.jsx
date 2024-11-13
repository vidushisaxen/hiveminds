import React from "react";
import LinkButton from "../Button/LinkButton";
import LinkButtonWhite from "../Button/LinkButtonWhite";
import Image from "next/image";

const ServiceCard = ({title,src,text}) => {
  return (
    <div className="h-full w-[22vw] bg-[#F2F2F2] border border-[#E0E0E0] rounded-[1.5vw] flex flex-col items-start justify-start gap-[4vw] px-[1.2vw] py-[2vw] relative container-lg">
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
    <div className="w-[3.3vw] h-[3.3vw] relative ">
      <Image src={src} fill alt="SEO" className="object-contain" />
    </div>
  </div>
  
    <p className="text-[1.04vw] text-[#111111] tracking-wide">{text}</p>
  
</div>

  );
};

const Services = () => {
  return (
    <section id="services">
      <div className="w-screen h-full flex items-center justify-between container-lg py-[5%] relative">
        <div className="w-[35%] h-[30vw] px-[3vw] py-[5vw] flex flex-col items-start justify-center gap-[3vw] rounded-[20px] shadow-2xl">
          <h2 className="heading-2 w-[85%]">
            Your <span className="blue-text">Goals</span>, Our Offerings
          </h2>
          <p className="content w-[80%]">
            See how our strategic partnerships and collaboration drive
            innovation and accelerate your business growth.
          </p>
          <div className="flex w-full items-center justify-center gap-[1vw]">
            <LinkButton text={"Our Solutions"} link={"#"} />
            <LinkButtonWhite text={"Industry"} link={"#"} />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1vw] w-[62%] h-[30vw]">
          <ServiceCard title={"SEO"} text={"We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility."} src={"/assets/images/homepage/seo.png"}/>
          <ServiceCard title={"Marketplace"} text={"We provide effective strategies that are aligned with your long-term business goals."} src={"/assets/images/homepage/marketplace.png"}/>
          <ServiceCard title={"Strategy & Consulting"} text={"We provide effective strategies that are aligned with your long-term business goals."} src={"/assets/images/homepage/strategy.png"}/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] bottom-[10%] right-[5%]">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] bottom-[10%] left-[5%]">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>
      </div>
    </section>
  );
};

export default Services;
