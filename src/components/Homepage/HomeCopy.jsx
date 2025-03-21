import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import Link from "next/link";

const HeroCopy = () => {
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const marqueeRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src1: "/assets/images/homepage/hero-bigbasket-img1.png", src2: "/assets/images/homepage/hero-bigbasket-img2.png", link: "/casestudies/bigbasket" },
    { src1: "/assets/images/homepage/hero-dominos-img1.png", src2: "/assets/images/homepage/hero-dominos-img2.png", link: "/casestudies/dominos" },
    { src1: "/assets/images/homepage/hero-flydubai-img1.png", src2: "/assets/images/homepage/hero-flydubai-img2.png", link: "/casestudies/flydubai" },
  ];

  const details = [
    { num1: "2.35x", para1: "Growth in installs", para2: "Expanding Horizons in Non-Metro Cities." },
    { num1: "500K+", para1: "New Orders in 12 Months", para2: "Success Through Influencer Power" },
    { num1: "67%", para1: "Increase in Brand Searches", para2: "New Routes Soar to Success" },
  ];

  const slidesData = [
    { title: "Data-Backed", subtitle: "Growth", description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands", href: "/our-impact" },
    { title: "Optimise, Engage,", subtitle: "Convert", description: "Helping brands stand out with impactful campaigns and strategies", href: "/our-impact" },
    { title: "Clicks That", subtitle: "Convert", description: "Unlocking new orders with innovative strategies tailored to your business goals", href: "/our-impact" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 6000); // Syncs images, details, and text every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      yPercent: -30 * activeIndex, // Moves marquee in sync with activeIndex
      duration: 6,
      ease: "power2.inOut",
    });

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        headRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .to(headRef.current, { opacity: 0, y: -20, duration: 1 }, "+=4")
        .fromTo(
          paraRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=4"
        )
        .to(paraRef.current, { opacity: 0, y: -20, duration: 1 }, "-=2")
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 },
          "-=4"
        )
        .to(buttonRef.current, { opacity: 0, y: -20, duration: 1 }, "-=2");
    });

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section className="flex w-screen h-screen overflow-hidden relative bg-[#F1F1F1]">
      {/* Left Section */}
      <div className="w-[45%] h-screen flex items-center justify-between container-lg pt-[5vw] pl-[5vw] pr-[2vw]">
        <div className="w-full flex flex-col gap-[2vw]">
          <h1 ref={headRef} className="heading-1 leading-[1.1] hero-heading">
            {slidesData[activeIndex].title}{" "}
            <span className="text-primary">{slidesData[activeIndex].subtitle}</span>
          </h1>
          <p ref={paraRef} className="content w-[75%] tracking-wide para">
            {slidesData[activeIndex].description}
          </p>
          <PrimaryButton href={slidesData[activeIndex].href} text="View Case Study" className="button" ref={buttonRef} />
        </div>
      </div>

      {/* Right Section - Marquee */}
      <div className="w-[55vw] h-screen overflow-hidden flex flex-col items-end relative">
        <div ref={marqueeRef} className="relative">
          {images.map((imageSet, index) => (
            <div key={index} className="w-[55vw] flex gap-[0.9vw] gallery-block relative">
              <div className="w-[25vw] h-full my-[4vw] flex flex-col gap-[2vw] rounded-[1vw] overflow-hidden group">
                <Link href={imageSet.link}>
                  <Image
                    src={imageSet.src1}
                    width={490}
                    height={670}
                    className="object-fill w-full h-full rounded-[1vw] group-hover:scale-[1.08] transition-all duration-700 ease-in-out"
                    alt="gallery image"
                  />
                </Link>
              </div>
              <div className="w-[25vw] h-full mt-[-1vw] flex flex-col gap-[0.9vw] rounded-[1vw] overflow-hidden group">
                <Link href={imageSet.link}>
                  <Image
                    src={imageSet.src2}
                    width={490}
                    height={670}
                    className="object-fill w-full h-full rounded-[1vw] group-hover:scale-[1.08] transition-all duration-700 ease-in-out"
                    alt="gallery image"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[51vw] h-[7vw] absolute bottom-0 rounded-tl-[2vw] rounded-tr-[2vw] border left-0 glassmorphism-dark z-[5]">
          <div className="w-full h-full flex justify-between items-center px-[3vw]">
            <div className="flex items-center w-[50%]">
              <h3 className="text-[2.4vw] font-extrabold uppercase leading-[1]">
                {details[activeIndex].num1}
              </h3>
              <p className="content !leading-[1] pl-[0.8vw]">{details[activeIndex].para1}</p>
            </div>
            <span className="h-[4.5vw] w-[1px] bg-black"></span>
            <div className="flex flex-col items-center w-[50%]">
              <p className="content !leading-[1]">{details[activeIndex].para2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCopy;
