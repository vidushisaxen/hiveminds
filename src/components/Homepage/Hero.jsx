import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import CustomEase from "gsap/dist/CustomEase";
import PrimaryButton from "../Button/PrimaryButton";

const Hero = () => {
  const isFirstRender = useRef(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDetail,setActiveDetail] = useState(0);
  const headRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  const images = [
    { src1: "/assets/images/homepage/hero-bigbasket-img-1.png", src2: "/assets/images/homepage/hero-bigbasket-img-4.png" },
    { src1: "/assets/images/homepage/hero-bigbasket-img-2.png", src2: "/assets/images/homepage/hero-bigbasket-img-3.png" },
    { src1: "/assets/images/homepage/hero-bigbasket-img-1.png", src2: "/assets/images/homepage/hero-bigbasket-img-4.png" },
    { src1: "/assets/images/homepage/hero-bigbasket-img-2.png", src2: "/assets/images/homepage/hero-bigbasket-img-3.png" },
  ];
  const details=[
    {
      num1: "2.35x",
      para1: "Growth in installs",
      num2: "430K + ",
      para2: "New Orders within 1 Years",
    },
    {
      num1: "1.35x",
      para1: "Growth in installs",
      num2: "1.90x",
      para2: "Growth in installs",

    },
    {
      num1: "3.35x",
      para1: "Growth in installs",
      num2: "5.90x",
      para2: "Growth in installs",
    }
  ]
  const slidesData = [
    {
      title: "Delivering Digital",
      subtitle: "Growth",
      description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands",
      href: "/growth",
    },
    {
      title: "Boosting Digital",
      subtitle: "Orders",
      description: "Unlocking new orders with innovative strategies tailored to your business goals",
      href: "/orders",
    },
    {
      title: "Enhancing Brands",
      subtitle: "Search",
      description: "Helping brands stand out with impactful campaigns and strategies",
      href: "/search",
    },
  ];
useEffect(()=>{
  const ctx = gsap.context(()=>{
    gsap.from(".gallery",{
      opacity:0,
      duration:2,
      delay:1
      
    })
    gsap.from(".detail-container",{
      opacity:0,
      yPercent:70,
      duration:1,
      delay:1
    })
    gsap.to(".gallery-image", {
      yPercent: -images.length * 100,
      duration: 12,
      ease: "none",
      repeat: -1,
    });
  })
  return()=>ctx.revert();
},[images.length])
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headRef.current, { opacity: 0, yPercent: 20, filter: "blur(8px)", duration: 1.5 })
        .to(headRef.current, { opacity: 0, yPercent: -20,delay:2.7, filter: "blur(8px)", duration: 1.5 })
        .from(paraRef.current, { yPercent: 100, opacity: 0, duration: 1 }, "-=5.5")
        .to(paraRef.current,{opacity:0,duration:1},"-=1.2")
        .from(buttonRef.current, { opacity: 0, yPercent: 100, duration: 1 }, "-=5.5")
        .to(buttonRef.current,{opacity:0,duration:1,delay:-1.2})
   
  
      isFirstRender.current = false;
    });

    return () => ctx.revert();
  }, [activeIndex]);

  // ✅ Auto Increment Active Index Every 3 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [slidesData.length]);
  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(".content-detail",{ opacity: 0, yPercent: 20, filter: "blur(8px)", duration: 1,})
      gsap.from(".content-para", { yPercent: 100, opacity: 0, duration: 0.8  })
    })
    return()=>ctx.revert();
  },[activeDetail])
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetail((prevIndex) => (prevIndex + 1) % details.length);
    }, 6700); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [details.length]);

  return (
    <section id="hero" className="flex w-screen h-screen overflow-hidden relative bg-[#F1F1F1]">
      {/* Left Section */}
      <div className="w-[50%] h-screen flex items-center justify-between container-lg pt-[5vw] pl-[5vw] pr-[2vw]">
        <div className="w-full flex flex-col gap-[2vw] flex-wrap">
          <h1 ref={headRef} className="heading-1 leading-[1.2] heading">
            {slidesData[activeIndex].title}{" "}
            <span className="text-primary">{slidesData[activeIndex].subtitle}</span>
          </h1>
        

          <p ref={paraRef} className="content w-[75%] tracking-wide para">
            {slidesData[activeIndex].description}
          </p>
          
        

          <PrimaryButton href={slidesData[activeIndex].href} text="View Case Study" className="button" ref={buttonRef} />
       
        </div>
      </div>

      {/* Right Section - Infinite Marquee Gallery */}
      <div className="gallery">
        {[...Array(2)].map((_, colIndex) => (
          <div className={`block-33 display--inline-top ${colIndex % 2 === 0 ? "" : "-mt-[8vw]"}`} key={colIndex}>
            <div className="gutter relative">
              <div className={`gallery-h ${colIndex % 2 === 0 ? "" : "gallery-h--tb"}`}>
                {images.map((img, imgIndex) => (
                  <div className="gallery-image relative" key={imgIndex}>
                    <div className="gallery-image__img relative">
                      <div className="fill-dimensions cover-img overflow-hidden">
                        <Image
                          src={colIndex % 2 === 0 ? img.src1 : img.src2}
                          alt=""
                          width={490}
                          height={670}
                          className="object-fill w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {images.map((img, imgIndex) => (
                  <div className="gallery-image relative" key={`duplicate-${imgIndex}`}>
                    <div className="gallery-image__img relative">
                      <div className="fill-dimensions cover-img overflow-hidden">
                        <Image
                          src={colIndex % 2 === 0 ? img.src1 : img.src2}
                          alt=""
                          width={490}
                          height={670}
                          className="object-fill w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats Box */}
      <div className="absolute bottom-0 right-[4.5%] w-[49.5vw] glassmorphism-dark border border-white rounded-tl-[2vw] rounded-tr-[2vw] h-[8.5vw] detail-container">
        <div className="w-full h-full flex justify-between items-center px-[5vw]">
          <div className="flex flex-col items-center w-[25%]">
            <h3 className="text-[2.4vw] font-extrabold uppercase leading-[1] content-detail">
              {details[activeDetail].num1}
            </h3>
           

            <p className="content !leading-[1] content-para">{details[activeDetail].para1}</p>
            
          </div>

          <span className="h-[4.5vw] w-[1px] bg-black"></span>

          <div className="flex flex-col items-center w-[35%]">
            <h3 className="text-[2.4vw] font-extrabold uppercase leading-[1] content-detail">
              {details[activeDetail].num2}
            </h3>
        

            <p className="content !leading-[1] content-para">{details[activeDetail].para2}</p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
