import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlainButton from "../Button/PlainButton";
import { slideIn } from "../gsapAnimations";

const BlogCard = ({ link, para, src, date }) => {
  return (
    <>
      <Link
        href={link}
        className="h-[35vw] w-[26vw] bg-white rounded-[1.5vw] flex flex-col items-start gap-[1vw] px-[1vw] py-[1vw] group hover:shadow-lg hover:drop-shadow-lg transition-all ease-in-out duration-500 "
      >
        <div className="h-[55%] w-full relative overflow-hidden rounded-[1.2vw]">
          <Image
            src={src}
            fill
            alt="blogs-img"
            className="group-hover:scale-[1.1] transition-all ease-in-out duration-500"
          />
        </div>
        <div className="px-[0.5vw] w-[90%] h-[40%] flex flex-col gap-[1vw] mt-[1vw]">
          <p className="text-[1.35vw] font-medium montreal">{para}</p>
          <div className="flex flex-col justify-between h-full w-full pb-[2vw]">
            <p className="text-[1vw] text-black/50">{date}</p>
            <div className="w-fit">
              <p className="content group-hover:text-[#134BD6] transition-all ease-in-out duration-500 after:block after:w-full after:bg-black after:h-[1.2px] after:mt-[-0.4vw] group-hover:after:scale-x-0 group-hover:after:transition-scale after:transition-scale group-hover:after:bg-[#134BD6] after:duration-500 after:ease-in-out group-hover:after:duration-500 group-hover:after:ease-in-out    group-hover:after:origin-center">
                Read More
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

const Blogs = () => {
  slideIn();
  return (
    <>
      <section id="blogs">
        <div className="w-screen h-full flex items-center justify-center  z-[10]  ">
          <div className="w-[92%] h-full rounded-[30px] bg-[#F2F2F2] flex  justify-center px-[2vw] py-[6vw] gap-[2vw]  drop-shadow-2xl shadow-inner overflow-hidden">
            <div className="w-[35%] h-full ">
              <div className="flex flex-col gap-[2vw]">
                <h2 className="heading-2 headinganim">
                  <span className="blue-text"> Passionate </span> About All
                  Things Digital?
                </h2>
                <p data-para-anim className="content w-[80%]">
                  Stay updated with our latest industry insights, company news,
                  and thought leadership.
                </p>
              </div>
              <div className="flex flex-wrap items-center mt-[2vw] gap-[0.7vw]">
                <PlainButton text={"Blogs"} link={"#"} className="fadeup" />
                <PlainButton text={"News"} link={"#"} className="fadeup" />
              </div>
            </div>
            <div className="w-[70%] h-full flex items-center justify-center slideIn">
              <div className="flex items-start justify-center gap-[1vw] h-full w-full">
                <BlogCard
                  src={"/assets/images/homepage/blogs-1.png"}
                  link={"#"}
                  date={"June 6, 2024"}
                  para={
                    "Decoding Attribution Windows: Finding the Perfect Fit for Your Marketing Strategy"
                  }
                />
                <BlogCard
                  src={"/assets/images/homepage/blogs-2.png"}
                  link={"#"}
                  date={"June 6, 2024"}
                  para={"How to use ChatGPT for Keyword Research"}
                />
                <div className="flex items-center justify-center h-[35vw] w-[5vw]">
                  <Link href={"#"}>
                    <p className="content after:block hover:text-[#134BD6] hover:after:bg-[#134BD6] after:w-full after:bg-black after:h-[1px] after:mt-[-0.4vw] after:transition-scale after:duration-500 hover:after:scale-x-0 hover:after:transition-scale hover:after:duration-500 hover:after:origin-center">
                      View All
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
