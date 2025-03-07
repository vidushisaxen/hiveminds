import React from "react";
import LinkButton from "../Button/LinkButton";
import Contactform from "../Homepage/Contactform";
import Image from "next/image";

const GetinTouch = () => {
  return (
    <section className="w-screen h-[90vw] bg-white relative overflow-hidden mobile:h-full mobile:pb-[15%]">
      <div className="container-lg flex h-full justify-between items-center mobile:flex-col mobile:items-start mobile:mt-[67vw]">
        <div className="flex-col flex gap-[1.5vw] mobile:gap-[4vw]">
          <h1 className="heading-2 leading-[1.2] headinganim">
            Get In
            <span className="text-primary"> Touch</span>
          </h1>
          <p data-para-anim className="content w-[65%] tracking-wide para mobile:w-full">
            Leave us your details and a member of our team will get back to you
            as soon as possible.
          </p>

          <div className="flex flex-col gap-[3vw] mt-[5vw] mobile:gap-[7vw]">
            <p data-para-anim className="text-[1.6vw] mobile:text-[6vw]">
              General
              <span className="text-primary"> Information</span>
            </p>
            <div className="flex flex-col gap-[1vw] mobile:gap-[4vw]">
              <LinkButton
                btnLink={"tel:+91 2667671302"}
                btnText={"+91-8527156227"}
                className="text-[1.2vw] leading-[1] fadein"
              />
              <LinkButton
                btnLink={"mailto:sales@hiveminds.in"}
                btnText={"sales@hiveminds.in"}
                className="text-[1.2vw] leading-[1] fadein"
              />
            </div>
          </div>
        </div>
        <div className="w-[55%] h-fit bg-[#f2f2f2] mt-[15vw] rounded-[1.2vw] p-[2vw] fadein mobile:w-full mobile:rounded-[3.5vw]">
          <Contactform />
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[50%] left-[25%] blue-hexagon-animation mobile:hidden">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[30%] left-[15%] yellow-hexagon-animation mobile:hidden">
          <Image
            src="/assets/icons/yellow-hexagon.svg"
            fill
            alt="yellow-hexagon"
          />
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
