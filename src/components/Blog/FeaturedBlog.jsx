import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const FeaturedBlog = () => {
  return (
    <>
      <section className="w-screen h-full py-[5%]" id="featured-blog">
        <div className="container-lg flex flex-col gap-[4vw] items-center mobile:items-start">
          <div className="flex flex-col items-center justify-center gap-[1vw] pb-[3vw] mobile:block mobile:space-y-[4vw]  tablet:items-start tablet:gap-[3vw]">
            <h2 data-title-anim className="heading-2 headinganim">
              Featured <span className="blue-text"> Blog</span>
            </h2>
            <p className="content w-[60%] text-center fadein mobile:text-left mobile:w-full tablet:text-left tablet:w-[80%]">
              At HiveMinds, we tackle your most challenging business problems
              with our specialised digital marketing approach - integrating
              strategic expertise, cutting-edge technology, and data-driven
              insights to craft campaigns that elevate your brand and drive
              sustainable growth.
            </p>
          </div>

          <div className="w-full flex justify-between mobile:block mobile:space-y-[4vw] tablet:flex-col">
            <div className="w-[55%] h-[38vw] rounded-[1.5vw] overflow-hidden relative fadeup mobile:w-full mobile:h-[85vw] mobile:rounded-[4vw] tablet:w-full tablet:h-[60vw]">
              <Image
                src={"/assets/images/blogpage/featured-blog-image.png"}
                className="w-full h-full object-cover "
                alt="featured-blog"
                width={1080}
                height={620}
              />
              <span className="px-[1.5vw] py-[0.7vw] bg-white rounded-full absolute top-[5%] left-[5%] leading-[1] mobile:py-[2.5vw] mobile:px-[5vw] tablet:px-[3vw] tablet:py-[1.5vw]">Digital Marketing</span>
            </div>
            <div className="w-[40%] flex flex-col gap-[3.5vw] mt-[1vw] mobile:w-full mobile:!mt-[7vw] mobile:gap-[7vw] tablet:w-full tablet:mt-[4vw]">
              <div className="flex flex-col gap-[0.7vw] mobile:gap-[5vw]">
                <h2 data-para-anim className="text-[3vw] font-medium leading-[1.1] mobile:text-[8.5vw] tablet:text-[4vw] tablet:leading-[1.4]">
                  How to Setup Google Business Profile for Better Online
                  Presence in 2023
                </h2>
                <p className="fadein">6 June, 2024</p>
              </div>
              <p data-para-anim  className="w-[90%] mobile:w-full mobile:text-[4.5vw] tablet:text-[2.4vw]">
                Discover the lucrative opportunities of a SEO job and learn how
                to excel in this dynamic industry. Explore career opportunities
                and essential skills. Discover the lucrative opportunities of a
                SEO job and learn how to excel in this dynamic industry. Explore
                career opportunities and essential skills.
              </p>
              <PrimaryButton href={"/"} text={"View details"} className="fadein"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedBlog;
