import Link from "next/link";
import React, { useEffect } from "react";
import Map from "../Footer/Map";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Locations = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".location-card",{
        y:100,
        opacity:0,
        stagger:0.2,
        duration:2,
        ease:"power3.out",
        scrollTrigger:{
          trigger:"#locations",
          start:"top 60%"
        }
       })

    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-screen h-[70vw] py-[5%] pb-[25vw] bg-[#134BD6]"
      id="locations"
    >
      <div className="container-lg flex flex-col gap-[4vw] items-center justify-center">
        <h2 className="heading-2 headinganim !text-white">
          Our Office Locations
        </h2>
        <div className="flex w-full justify-between">
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center location-card relative">
            <h4 className="text-[2.8vw] montreal font-medium">Bengaluru</h4>
            <span className="bg-[#134BD6] text-white py-[0.1vw] px-[0.9vw] rounded-full absolute top-[25%] text-[1vw] left-[45%]">
              HQ
            </span>
            <div className="w-full h-[1px] bg-black my-[4vw]"></div>
            <p className="text-center text-[1.2vw]">
              No. 11, Seventh Floor, Global Tech Park, O Shaughnessy Rd,
              Langford Town, Langford Gardens, Bengaluru, Karnataka 560025
            </p>
            <Link href={"/"}>
              <p className="hover:text-blue-700 link-line transition-all duration-300 ease-in-out font-medium mt-[3vw]">
                Show On Google Map
              </p>
            </Link>
          </div>
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center location-card">
            <h4 className="text-[2.8vw] montreal font-medium">Mumbai</h4>
            <div className="w-full h-[1px] bg-black my-[4vw]"></div>
            <p className="text-center text-[1.2vw]">
              Office no 301 & 302, 3rd Floor, The Eagle&apos;s Flight Building,
              Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047
            </p>
            <Link href={"/"}>
              <p className="hover:text-blue-700 link-line transition-all duration-300 ease-in-out  font-medium mt-[3vw]">
                Show On Google Map
              </p>
            </Link>
          </div>
          <div className="w-[29vw] h-[31vw] rounded-[1.2vw] bg-white p-[3vw] flex flex-col items-center location-card">
            <h4 className="text-[2.8vw] montreal font-medium">Gurugram</h4>
            <div className="w-full h-[1px] bg-black my-[4vw]"></div>
            <div className="flex flex-col justify-between h-[60%] items-center">
              <p className="text-center text-[1.2vw] w-[85%]">
                Spring House Coworking, 4th Floor, JMD Regent Arcade, Haryana
                122002
              </p>
              <div className="flex justify-center items-center w-fit h-full">
                <Link href={"/"}>
                  <p className="hover:text-blue-700 link-line transition-all duration-300 ease-in-out  font-medium mt-[3vw]">
                    Show On Google Map
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[5vw]">
        <div className="w-[90vw] h-[40vw]  relative rounded-[1.2vw] overflow-hidden mt-[7vw] z-[10]">
          {/* <Map/> */}
          <Image
            src={"/assets/images/contactpage/contact-map-image.png"}
            alt="map"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
