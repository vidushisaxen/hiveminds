import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import styles from "../Button/styles.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All",
  "Healthcare",
  "Automobiles",
  "Wearables",
  "NBFC",
  "BFSI",
  "CDIT",
];

const caseStudies = [
  { img: "/assets/images/homepage/big-basket-casestudy.png", title: "2.35x", des: "Growth in installs", category: "", para:"Expanding the user base",link:"/casestudies/bigbasket-case-study" },
  { img: "/assets/images/homepage/dominos-casestudy.png", title: "500K+", des: "New orders within 12 months", category: "", para:"Growing the 30-min connection" ,link:"/casestudies/dominos-case-study"},
  { img: "/assets/images/homepage/flydubai-casestudy.png", title: "67%", des: "Increase in brand searches", category: "",para:"New Routes Soar to Success",link:"/casestudies/flydubai-case-study" },
  { img: "/assets/images/homepage/flipkart-healthplus-casestudy.png", title: "#1", des: "India’s Medical App for 1.5 Years", category: "Healthcare", para:"Up with the App Installs",link:"/casestudies/flipkart-healthplus-case-study" },
  { img: "/assets/images/homepage/max-life-casestudy.png", title: "45%", des: "Revenue Surge in 3 Months.", category: "BFSI", para:"Powering Growth",link:"/casestudies/max-life-case-study" },
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const swiperRef = useRef(null);

  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      let ctx = gsap.context(() => {
        const body = document.body;
        const changeBodyColor = (color) => {
          gsap.to(body, { backgroundColor: color, duration: 1, ease: "power2.out" });
        };
        
        gsap.from(".casestudy-block", {
          scale: 1.11,
          yPercent: -5,
          duration: 1,
          scrollTrigger: {
            trigger: ".casestudy-block",
            start: "top 80%",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: "#caseStudies",
          start: "70% 60%",
          end: "bottom 20%",
          onEnter: () => changeBodyColor("#134bd6"),
          onLeaveBack: () => changeBodyColor("#fafafa"),
        });
      });
      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".swiper-scrollbar",{
        opacity:0,
        delay:0.8,
        duration:1,
        ease:"power3.out"
      })
      gsap.from(".swiper-wrapper", {
        opacity: 0,
        xPercent: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".slideInCaseCarousel",
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);


  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((caseStudy) => caseStudy.category === activeCategory);

  return (
    <>
      <section id="caseStudies" className="pt-[10%]">
        <div className="w-screen h-[45vw] flex items-center justify-center z-[10]">
          <div className="w-[90vw] h-full rounded-[2vw] bg-white flex items-center justify-center casestudy-block pl-[3vw] pt-[3vw] pr-[1.5vw] shadow-2xl drop-shadow-2xl overflow-hidden">
            <div className="w-[40%] h-full flex flex-col gap-[2vw]">
              <h2 className="heading-2 headinganim">
                Growth Isn&apos;t Just a Buzzword - It&apos;s About Real <span className="blue-text">Impact</span>
              </h2>
              <p data-para-anim className="content w-[80%]">
                Explore the challenges we&apos;ve overcome and the strategies we&apos;ve implemented to deliver exceptional results across various industries.
              </p>

              <div className="flex flex-wrap items-center mt-[2vw] gap-[1vw] w-[90%]">
                {categories.map((category) => (
                  <button
                    key={category}
                    data-text={category}
                    className={`${styles.buttonPlain} cursor-pointer relative overflow-hidden border-[#134BD6] border-[1.5px] rounded-[40px] text-[0.97vw] font-light h-fit flex items-center justify-center text-center px-[1.5vw] py-[0.5vw] transition-all duration-300 ${
                      activeCategory === category ? " text-white bg-[#134BD6]" : ""
                    } `}
                    onClick={() => setActiveCategory(category)}
                  >
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Swiper Component with Always Visible Blue Scrollbar */}
            <div className="w-[60%] flex items-center slideInCaseCarousel">
              <Swiper
                ref={swiperRef}
                modules={[FreeMode, Scrollbar]}
                freeMode={true}
                spaceBetween={20}
                speed={1000}
                slidesPerView={2}
                scrollbar={{ draggable: true, hide: false, el: ".swiper-scrollbar" }}
                className="w-full h-full rounded-[1vw] overflow-hidden"
              >
                {filteredCaseStudies.map((study, index) => (
                  <SwiperSlide key={index}>
                    <Link href={study.link}>
                    <div className="relative w-[25vw] h-[30.5vw]">
                      <Image src={study.img} fill alt="casestudy" className="object-contain" />
                      <div className="absolute top-0 right-0 w-[11.7vw] h-[4vw] flex items-center justify-center rounded-br-[20px]">
                        <div className="flex flex-col justify-center  w-[70%]">
                          <p className="font-medium text-[2vw] leading-[1]">{study.title}</p>
                          <p className="text-[0.9vw] font-medium w-full text-start leading-[1] ml-[0.1vw]">
                            {study.des}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-5 w-full flex items-center justify-center">
                        <p className="text-white text-[1.34vw] text-start leading-[1]">{study.para}</p>
                      </div>
                    </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Scrollbar */}
              <div className="swiper-scrollbar "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
