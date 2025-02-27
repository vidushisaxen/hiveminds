import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-screen h-full overflow-hidden bg-[#F1F1F1] pt-[10%] pb-[4%]"
      id="contact-hero"
    >
      <div className="w-full h-full container-lg flex  justify-between">
        <div className="w-[40%] flex flex-col gap-[1vw] pt-[7vw]">
          <h1 className="heading-1 leading-[1.2] headinganim">
            Contact
            <span className="text-primary">{" "}Us</span>
          </h1>
          <p data-para-anim  className="content w-[85%] tracking-wide para">
          At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach integrating strategic expertise.
          </p>

        </div>
        <div className="w-[40%] h-[80%] rounded-[1.2vw] overflow-hidden fadein">
        <Image
         src={"/assets/images/contactpage/contact-hero.png"}
         width={400}
         height={700}
         alt="contact-hero-img"
         className="w-full h-full object-cover"
        />

        </div>
      </div>
    </section>
  );
};

export default Hero;
