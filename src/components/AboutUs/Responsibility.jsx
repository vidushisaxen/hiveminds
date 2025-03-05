import Image from "next/image";
import React from "react";

const Responsibility = () => {
  return (
    <>
      <section className="w-screen h-full py-[5%]" id="responsibility">
        <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw]">
          <h2 className="heading-2 headinganim">
            Corporate Social <span className="blue-text">Responsibility</span>
          </h2>
          <p className="content w-[70%] text-center fadein">
            We provide effective strategies that are aligned with your long-term
            business goals. We promise to deliver high-quality. We provide
            effective strategies that are aligned with your long-term business
            goals.
          </p>
          <div className="container-lg grid grid-cols-12 w-full h-[37vw] mt-[5vw] fadeup">
            <div className="col-span-3 h-fit">
              <div className="w-full h-full flex flex-col gap-[1.5vw] pr-[1.5vw]">
                <div className="h-[55%] w-full  rounded-[1.2vw] overflow-hidden">
                   <Image src={"/assets/images/about/res-1.png"} alt="responsibilty-images" width={400} height={520} className="object-cover w-full h-full hover:scale-[1.1] transition-all ease-in-out duration-500"/>
                </div>
                <div className="h-[45%] w-full  rounded-[1.2vw] overflow-hidden">
                <Image src={"/assets/images/about/res-2.png"} alt="responsibilty-images" width={400} height={520} className="object-cover w-full h-full hover:scale-[1.1] transition-all ease-in-out duration-500"/>
                </div>
              </div>

            </div>
            <div className="col-start-4 col-span-3 w-[115%] h-full rounded-[1.2vw] overflow-hidden">
            <Image src={"/assets/images/about/res-3.png"} alt="responsibilty-images" width={400} height={520} className="object-cover w-full h-full hover:scale-[1.1] transition-all ease-in-out duration-500"/>
            </div>
            <div className="col-start-7 col-span-3 pl-[5vw] ">
            <div className="w-full h-full flex flex-col gap-[1.5vw] pr-[1.5vw]">
                <div className="h-[38%] w-full  rounded-[1.2vw] overflow-hidden">
                   <Image src={"/assets/images/about/res-4.png"} alt="responsibilty-images" width={400} height={520} className="object-cover w-full h-full hover:scale-[1.1] transition-all ease-in-out duration-500"/>
                </div>
                <div className="h-[60%] w-full  rounded-[1.2vw] overflow-hidden">
                <Image src={"/assets/images/about/res-5.png"} alt="responsibilty-images" width={400} height={520} className="object-cover w-full h-full hover:scale-[1.1] transition-all ease-in-out duration-500"/>
                </div>
              </div>
            </div>
            <div className="col-start-10 col-span-3 bg-yellow-500 rounded-[1.2vw] overflow-hidden">
            <Image src={"/assets/images/about/res-6.png"} alt="responsibilty-images" width={400} height={520} className="object-cover w-full h-full hover:scale-[1.1] transition-all ease-in-out duration-500"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Responsibility;
