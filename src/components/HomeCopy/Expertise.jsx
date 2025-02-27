import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../Button/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

const expertiseList = [
  {
    id: "01",
    title: "Search Engine Optimization",
    description:
      "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality targeted traffic and increase brand visibility.",
    image: "/assets/images/homeCopy/expertise-1.png",
  },
  {
    id: "02",
    title: "Marketplace",
    description:
      "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality targeted traffic and increase brand visibility.",
    image: "/assets/images/homeCopy/expertise-2.png",
  },
  {
    id: "03",
    title: "Strategy & Consulting",
    description:
      "We create compelling content and manage your social media presence to enhance engagement and brand awareness.",
    image: "/assets/images/homeCopy/expertise-2.png",
  },
  {
    id: "04",
    title: "Creative & Content",
    description:
      "Our data-driven performance marketing strategies ensure maximum ROI and customer acquisition.",
    image: "/assets/images/homeCopy/expertise-1.png",
  },
  {
    id: "05",
    title: "Analytics",
    description:
      "From visuals to copywriting, we craft engaging creative assets that resonate with your audience.",
    image: "/assets/images/homeCopy/expertise-1.png",
  },
  {
    id: "06",
    title: "Social Media",
    description:
      "We leverage data analytics to drive informed decision-making and optimize marketing strategies.",
    image: "/assets/images/homeCopy/expertise-2.png",
  },
  {
    id: "07",
    title: "Digital Branding",
    description:
      "We help build strong digital brand identities that leave a lasting impression on your audience.",
    image: "/assets/images/homeCopy/expertise-2.png",
  },
  {
    id: "08",
    title: "Pay-Per-Click",
    description:
      "Our experts provide growth-focused consultation to help businesses scale efficiently in the digital world.",
    image: "/assets/images/homeCopy/expertise-1.png",
  },
];

const Expertise = () => {
  const svgPathRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const path = svgPathRef.current;
    gsap.to("#expertise",{
      yPercent:20,
      ease:"none",
      scrollTrigger:{
        trigger:"#expertise",
        start:"70% 80%",
        scrub:true
      }
    })
    
    gsap.fromTo(
      path,
      { strokeDasharray: path.getTotalLength(), strokeDashoffset: path.getTotalLength() },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "bottom 70%",
          scrub: 1,
         
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-screen h-full py-[5%] relative" id="expertise">
      <div className="w-full container-lg h-fit flex justify-between items-end">
        <div className="flex flex-col gap-[1vw]">
          <h2 className="!text-[5.2vw] font-medium heading-2 montreal headinganim">
            Our Expertise
          </h2>
          <p className="content !text-[1.4vw] !font-medium pl-[0.5vw]">
            Brand Management for the Digital Age!
          </p>
        </div>
        <div className="h-full flex justify-end items-end">
          <PrimaryButton text={"All Services"} href={"#"} />
        </div>
      </div>

      {/* Expertise List */}
      <div className="container-lg h-full mt-[10vw]">
        <div className="w-full h-full flex flex-wrap gap-x-[5vw] gap-y-[3vw] justify-between">
          {expertiseList.map((expertise, index) => (
            <div
              key={index}
              data-cursor-background-image={expertise.image}
              data-cursor-size="200px"
              data-cursor-color="#000000"
              className="flex flex-col gap-[1vw] expertise-item w-[45%] group"
            >
              <p className="text-[1.5vw] montreal">{expertise.id}.</p>
              <h3 className="montreal text-[3vw] text-[#111111] font-medium">
                {expertise.title}
              </h3>
              <p className="text-[1.3vw] w-[70%]">{expertise.description}</p>
              <div className="w-full h-[1px] bg-black/40 mt-[3vw] group-hover:bg-black transition-colors duration-500 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Path Animation */}
      <div className="w-[100vw] h-[100vw] absolute top-[25%] z-[-1]">
        <svg
          width="1920"
          height="1563"
          viewBox="0 0 1920 1563"
          fill="none"
          className="object-cover w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={svgPathRef}
            d="M1972.5 159.826C1702.5 469.493 1034.1 995.926 520.5 624.326C-121.5 159.826 475 -56.5841 620.5 44.3725C800.708 169.411 811 518.826 466 788.326C121 1057.83 -39.5 1303.32 -39.5 1542.82"
            stroke="#FFC706"
            strokeWidth="40"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Expertise;
