import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap, { random } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: "/assets/images/homepage/part-1.png",
    title: "Demand Generation",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
  {
    img: "/assets/images/homepage/part-2.png",
    title: "Grow D2C Revenue",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
  {
    img: "/assets/images/homepage/part-3.png",
    title: "Drive Organic Revenue",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
  {
    img: "/assets/images/homepage/part-4.png",
    title: "Accelerate Ecommerce Growth",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
  {
    img: "/assets/images/homepage/part-5.png",
    title: "Maximise Retention",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
  {
    img: "/assets/images/homepage/part-6.png",
    title: "App Marketing Solutions",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
  {
    img: "/assets/images/homepage/part-1.png",
    title: "Digital Brand Building",
    para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
  },
];
const ServiceCard = ({ service, isActive, onMouseEnter }) => {
  const cardRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
    if (isActive) {
      tl.to(cardRef.current, { width: "45%", duration: 0.3 , delay:0.2})
        .to(
          headingRef.current,
          {top:"55%",left:"8%", opacity: 1, rotation: 0, duration: 0.3, delay:0.2 },
          0
        )
        .to(contentRef.current, { top:"60%",opacity: 1, y: 0, duration: 0.5, delay: 0.5 }, 0)
        .to(linkRef.current, { opacity: 1, scale: 1, duration: 0.5, delay: 0.3 }, 0);
    } else {
      tl.to(cardRef.current, { width: "18%", duration: 0.5 })
        .to(
          headingRef.current,
          {top:"20%",opacity: 1, rotation: -90, duration: 0.5 },
          0
        )
        .to(contentRef.current, { opacity: 0, y: 10, duration: 0.3 }, 0)
        .to(linkRef.current, { opacity: 0, scale: 0.8, duration: 0.3 }, 0);
    }
  }, [isActive]);
  
  return (
    <div
      ref={cardRef}
      className="relative h-full transition-all overflow-hidden rounded-[1.2vw] service-card w-[18%]"
      onMouseEnter={onMouseEnter}
    >
      <Image
        src="/assets/images/homepage/part-1.png"
        alt={service.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-white z-10">
        <h3
          ref={headingRef}
          className="text-white text-[1.5vw] absolute w-[45vw]"
        >
          {service.title}
        </h3>

        <p ref={contentRef} className="content absolute !text-white opacity-0 text-left p-[2vw]">
          {service.para}
        </p>

        {isActive && (
          <Link href="#">
            <div
              ref={linkRef}
              className="absolute top-4 right-4 bg-transparent border border-white text-white p-4 rounded-full flex items-center justify-center opacity-0 scale-0"
            >
              <Image
                src="/assets/icons/top-right-arrow-white.svg"
                height={15}
                width={15}
                alt="top-right-arrow"
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  // const blueHexagonRef = useRef(null);
  // const yellowHexagonRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleMouseMove = (e) => {
  //   const { clientX: mouseX, clientY: mouseY } = e;

  //   if (blueHexagonRef.current && yellowHexagonRef.current) {
  //     const offsetX = mouseX * 0.05 +Math.random()*10;
  //     const offsetY = mouseY * 0.05-Math.random()*10;

  //     gsap.to(blueHexagonRef.current, {
  //       x: offsetX,
  //       y: offsetY,
  //       ease: "power2.out",
  //     });

  //     gsap.to(yellowHexagonRef.current, {
  //       x: offsetX * 1.2,
  //       y: offsetY * 1.2,
  //       ease: "power2.out",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  useEffect(() => {
    gsap.to(".blue-hexagon-animation", {
      y: "30px", // Move up & down
      duration: 2,
      repeat: -1, // Infinite loop
      yoyo: true, // Smooth back-and-forth motion
      ease: "sine.inOut", // Smooth ease
    });

    gsap.to(".yellow-hexagon-animation", {
      y: "-30px", // Move opposite direction
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section id="services">
      <div className="w-screen h-full flex flex-col items-center justify-center container-lg pb-[5%] relative">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
          <h2 className="heading-2 headinganim">
            Your <span className="blue-text"> Goals </span>, Our Offerings
          </h2>
          <p className="content w-[70%] text-center fadeup">
            See how our strategic partnerships and collaboration drive innovation and accelerate your business growth
          </p>
        </div>
        {/* <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-[60vh] flex overflow-hidden gap-[1.5vw]">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div> */}
         <div className="w-full h-full tablet:overflow-x-auto overflow-hidden mobile:mt-[10%] tablet:w-[100vw] tablet:ml-[-5vw] custom-scroll">
                        <div className="flex relative gap-[1.5%] overflow-hidden aspect-[2.5] fadeup tablet:flex tablet:w-[400vw] tablet:ml-[5%] tablet:aspect-auto tablet:overflow-visible tablet:mb-[5vw] tablet:gap-[3vw] mobile:gap-[1.5%]">
                            {services.map((service, index) => (
                                <div key={index} className="stripe group tablet:w-full tablet:h-[50vh] tablet:p-[4vw]">
                                    <Image fill alt={service.title} src={service.img} loading="lazy" quality={90} />
                                   <div>
                                    {/* <p className="content !text-white z-10">{service.title}</p> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[30%] right-[5%] blue-hexagon-animation" >
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[15%] left-[-3%] yellow-hexagon-animation">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
        </div>
      </div>
    </section>
  );
};

export default Services;
