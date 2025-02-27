import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const Blogs = () => {
  return (
    <section className="w-screen h-full py-[5%]" id="blogs">
      <div className="w-full container-lg h-fit flex justify-between items-end">
        <div className="flex flex-col gap-[1vw]">
          <h2 className="!text-[5.2vw] font-medium heading-2 montreal headinganim">
            Our Blogs
          </h2>
          <p className="content !text-[1.4vw] !font-medium pl-[0.5vw]">
            Brand Management for the Digital Age!
          </p>
        </div>
        <div className="h-full flex justify-end items-end">
          <PrimaryButton text={"All Blogs"} href={"#"} />
        </div>
      </div>
      <div className="container-lg flex justify-between gap-[2vw] pt-[5%]  w-full h-full">
        <div className="w-[30vw] h-[30vw] rounded-[1.5vw] flex flex-col overflow-hidden border border-black/50">
          <div className="w-full h-[48%] bg-yellow-400"></div>
        </div>
        <div className="w-[30vw] h-[30vw] rounded-[1.5vw] border overflow-hidden border-black/50">
          <div className="w-full h-[48%] bg-amber-200"></div>
        </div>
        <div className="w-[30vw] h-[30vw] rounded-[1.5vw] overflow-hidden border border-black/50">
          <div className="w-full h-[48%] bg-amber-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
