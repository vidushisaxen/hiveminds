/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import React from "react";
import {
  fadeIn,
  fadeUp,
  headingBlur,
  paraAnim,
} from "@/components/gsapAnimations";
import Hero from "@/components/Hero";
import Image from "next/image";

const ips = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  return (
    <>
      <Layout>
        <Hero
          title1={"Our"}
          title2={"IPs"}
          para={
            "SEO is vastly interdisciplinary and it requires skills ranging from coding to linguistics to production. It includes services such as Influencer Marketing and Organic Social Media Management."
          }
          img={"/assets/images/industry/industry-hero.png"}
        />
        <main>
          <section className="w-screen h-full py-[5vw]">
            <div className="container-lg text-center flex items-center justify-center  h-full">
              <div className="w-[75%] text-center">
                <p data-para-anim className="content py-[1vw]">
                  At HiveMinds, we tackle your most challenging business
                  problems with our specialised digital marketing approach -
                  integrating strategic expertise, cutting-edge technology, and
                  data-driven insights to craft campaigns that elevate your
                  brand and drive sustainable growth.
                </p>
                <p data-para-anim className="content py-[1vw]">
                  At HiveMinds, we tackle your most challenging business
                  problems with our specialised digital marketing approach -
                  integrating strategic expertise, cutting-edge technology.
                </p>
              </div>
            </div>
          </section>
          <section className="w-screen h-full py-[2vw] pb-[10vw]">
            <div className="container-lg w-full h-full flex flex-wrap justify-between ">
              {ip.map((item, index) => (
                <div
                  key={index}
                  className={`w-[48%] h-full flex-col flex items-start justify-between  px-[1.5vw] fadeup 
        ${index % 2 !== 0 ? "mt-[8vw]" : ""}`}
                >
                  <div className="h-[40vw] pb-[2vw]">
                    <Image
                      src={item.img}
                      width={790}
                      height={1090}
                      alt="service-card"
                      className="rounded-[1.2vw] fadein w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-[2.8vw] font-medium headinganim">
                      {item.title}
                    </h2>
                    <p
                      className="content tracking-wide para py-[1vw] fadeup"
                      dangerouslySetInnerHTML={{ __html: item.para }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ips;

const ip = [
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " Brand Fingerprint",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " LeadX",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " HivePulse",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " BidSmart",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " FeedX ",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " OptiMMMix",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " Mind",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title: " DataMinds",
    para: "With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration. <br/><br/> With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months, expanding the brand's footprint on digital and enabling a new market penetration.",
  },
];
