import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section className="w-screen h-full pb-[5%] mobile:pb-10" id="why-us">
      <div className="cotainer-lg flex flex-col px-[5vw]">
        <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw] mobile:items-start mobile:gap-5 mobile:pb-8">
          <h2 className="heading-2 headinganim mobile:w-3/5">
            Why
            <span className="blue-text"> Hiveminds?</span>
          </h2>
          <p className="content w-[70%] text-center fadein mobile:w-full mobile:text-left">
            HiveMinds thrives on innovation, data, and creativity, fostering a
            culture that champions collaboration and continuous growth. Our
            commitment to excellence makes us a trusted partner for both clients
            and our team.
          </p>
        </div>

        <div className="w-full flex justify-between mobile:block">
          <div className="h-[43vw] w-[40%] rounded-[1.5vw] overflow-hidden fadeup mobile:w-full mobile:rounded-3xl mobile:h-[80vw] mobile:mb-6">
            <Image src={"/assets/images/about/why-us.png"} alt="" className="w-full h-full object-cover" width={720} height={940} />
          </div>
          <div className="w-[55%] flex flex-col mt-[1.5vw] mobile:w-full">
            <div className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5">
              <span className="w-full h-[1px] bg-black"></span>
              <div className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3">
                <Image src={"/assets/images/about/why-us-1.svg"} alt="icons" width={30} height={30} className="mobile:w-10" />
                <p className="text-[1.2vw] mobile:text-[5.1vw]">Innovation</p>
              </div>
            </div>
            <div className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5">
              <span className="w-full h-[1px] bg-black"></span>
              <div className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3">
                <Image src={"/assets/images/about/why-us-2.svg"} alt="icons" width={30} height={30} className="mobile:w-10" />
                <p className="text-[1.2vw] mobile:text-[5.1vw]">Collaboration</p>
              </div>
            </div>
            <div className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5">
              <span className="w-full h-[1px] bg-black"></span>
              <div className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3">
                <Image src={"/assets/images/about/why-us-3.svg"} alt="icons" width={30} height={30} className="mobile:w-10" />
                <p className="text-[1.2vw] mobile:text-[5.1vw]">Skill Growth</p>
              </div>
            </div>
            <div className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5">
              <span className="w-full h-[1px] bg-black"></span>
              <div className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3">
                <Image src={"/assets/images/about/why-us-4.svg"} alt="icons" width={30} height={30} className="mobile:w-10" />
                <p className="text-[1.2vw] mobile:text-[5.1vw]">Data-Driven</p>
              </div>
            </div>
            <div className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5">
              <span className="w-full h-[1px] bg-black"></span>
              <div className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3">
                <Image src={"/assets/images/about/why-us-5.svg"} alt="icons" width={30} height={30} className="mobile:w-10" />
                <p className="text-[1.2vw] mobile:text-[5.1vw]">Recognition</p>
              </div>
            </div>
            <div className="flex flex-col gap-[2vw] mt-[2vw] fadein mobile:gap-5 mobile:mt-5">
              <span className="w-full h-[1px] bg-black"></span>
              <div className="flex gap-[2vw] items-center mobile:gap-6 mobile:px-3">
                <Image src={"/assets/images/about/why-us-6.svg"} alt="icons" width={30} height={30} className="mobile:w-10" />
                <p className="text-[1.2vw] mobile:text-[5.1vw]">Training</p>
              </div>
              <span className="w-full h-[1px] bg-black"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
