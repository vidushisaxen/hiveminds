import Link from "next/link";
import React from "react";
import Map from "../Footer/Map";
import Image from "next/image";

const Locations = () => {
  return (
    <section className="w-screen h-[70vw] py-[5%] pb-[25vw] bg-[#134BD6]" id="locations">
      <div className="container-lg flex flex-col gap-[4vw] items-center justify-center">
        <h2 className="heading-2 headinganim !text-white">
          Our Office Locations
        </h2>
        <div className="flex w-full justify-between">
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center fadein relative">
            <h4 data-para-anim className="text-[2.8vw] montreal font-medium">Bengaluru</h4>
            <span className="bg-[#134BD6] text-white py-[0.1vw] px-[0.9vw] rounded-full absolute top-[25%] text-[1vw] left-[45%]">HQ</span>
            <div className="w-full h-[1px] bg-black my-[4vw]"></div>
            <p data-para-anim  className="text-center text-[1.2vw]">
              No. 11, Seventh Floor, Global Tech Park, O Shaughnessy Rd,
              Langford Town, Langford Gardens, Bengaluru, Karnataka 560025
            </p>
            <Link href={"/"}>
              <p className="text-blue-700 font-medium mt-[3vw] fadein">
                Show On Google Map
              </p>
            </Link>
          </div>
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center fadein">
            <h4 data-para-anim  className="text-[2.8vw] montreal font-medium">Mumbai</h4>
            <div className="w-full h-[1px] bg-black my-[4vw]"></div>
            <p data-para-anim  className="text-center text-[1.2vw]">
              Office no 301 & 302, 3rd Floor, The Eagle&apos;s Flight Building,
              Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047
            </p>
            <Link href={"/"}>
              <p className="text-blue-700 font-medium mt-[3vw] fadein">
                Show On Google Map
              </p>
            </Link>
          </div>
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center fadein">
            <h4 data-para-anim  className="text-[2.8vw] montreal font-medium">Gurugram</h4>
            <div className="w-full h-[1px] bg-black my-[4vw]"></div>
            <div className="flex flex-col justify-between h-[60%] items-center">


            <p data-para-anim  className="text-center text-[1.2vw] w-[85%]">
              Spring House Coworking, 4th Floor, JMD Regent Arcade, Haryana
              122002
            </p>
            <div className="flex justify-center items-center w-fit h-full">

            <Link href={"/"}>
              <p className="text-blue-700 font-medium mt-[3vw] fadein">
                Show On Google Map
              </p>
            </Link>

            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[5vw]">
        <div className="w-[90vw] h-[40vw]  relative rounded-[1.2vw] overflow-hidden mt-[7vw] fadein z-[10]">
            {/* <Map/> */}
             <Image src={"/assets/images/contactpage/contact-map-image.png"} alt="map" fill/>
            
        </div>

      </div>
    </section>
  );
};

export default Locations;
