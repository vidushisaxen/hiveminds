import Image from "next/image";
import React from "react";
import LinkButton from "../Button/LinkButton";

const caseStudiesData = [
  {
    id: 1,
    imgSrc: "/assets/images/impact/casestudy/dominos-cs-banner.png",
    title: "Dominos",
    description:
      "<p><span class='text-primary'> 500K+ </span> New Orders in 12 Months.</p><p>Success Through Influencer Power</p>",
    link: "/casestudies/dominos-case-study",
  },
  {
    id: 2,
    imgSrc: "/assets/images/impact/casestudy/max-life-cs-banner.png",
    title: "Max Life Insurance",
    description:
      "<p><span class='text-primary'> 45% </span>Revenue Surge in 3 Months</p><p>Powering Growth</p>",
    link: "/casestudies/max-life-case-study",
  },
  {
    id: 3,
    imgSrc: "/assets/images/impact/casestudy/bigbasket-cs-banner.png",
    title: "Big Basket",
    description:
      "<p><span class='text-primary'>2.35x </span> Growth in Installs</p> <p>Expanding Horizons in Non-Metro Cities</p>",
    link: "/casestudies/bigbasket-case-study",
  },
  {
    id: 4,
    imgSrc: "/assets/images/impact/casestudy/flipkart-healthplus-cs-banner.png",
    title: "Flipkart Health+",
    description:
      "<p><span class='text-primary'>India’s #1</span> Medical App for 1.5 Years</p><p>Up with the App Installs</p>",
    link: "/casestudies/flipkart-healthplus-case-study",
  },
  {
    id: 5,
    imgSrc: "/assets/images/impact/casestudy/digit-cs-banner.png",
    title: "Digit",
    description:
      "<p><span class='text-primary'> 46M </span> Impressions in 12 Months</p><p>Dominating Organic Search</p>",
    link: "/casestudies/digit-case-study",
  },
  {
    id: 6,
    imgSrc: "/assets/images/impact/casestudy/murfai-cs-banner.png",
    title: "Murf AI",
    description:
      "<p><span class='text-primary'>10x </span> Growth in Traffic</p> <p>Leading in Speech Synthesis Innovation</p>",
    link: "/casestudies/murfai-case-study",
  },
  {
    id: 7,
    imgSrc: "/assets/images/impact/casestudy/saffola-cs-banner.png",
    title: "Saffola Honey",
    description:
      "<p><span class='text-primary'>50% </span> CTR Growth and 50% Higher Conversions</p> <p> Achieving Excellence</p>",
    link: "/casestudies/safolla-honey-case-study",
  },
  {
    id: 8,
    imgSrc: "/assets/images/impact/casestudy/flydubai-cs-banner.png",
    title: "Fly Dubai",
    description:
      "<p><span class='text-primary'>67% </span> Increase in Brand Searches</p> <p>New Routes Soar to Success</p>",
    link: "/casestudies/flydubai-case-study",
  },
  {
    id: 9,
    imgSrc: "/assets/images/impact/casestudy/bajaj-coolers-cs-banner.png",
    title: "Bajaj",
    description:
      "<p><span class='text-primary'>50% </span> YoY Growth in Offtakes</p> <p>Leading Seasonal Success</p>",
    link: "/casestudies/bajaj-aircooler-case-study",
  },
  {
    id: 10,
    imgSrc: "/assets/images/impact/casestudy/parachute-cs-banner.png",
    title: "Parachute Advansed",
    description:
      "<p><span class='text-primary'>60% </span> ACOS Growth</p> <p>Shining with E-Commerce-Specific Packs</p>",
    link: "/casestudies/parachute-advansed-case-study",
  },
  {
    id: 11,
    imgSrc: "/assets/images/impact/casestudy/crompton-cs-banner.png",
    title: "Crompton",
    description:
      "<p><span class='text-primary'>#1</span> in Water Heaters</p> <p>Converting with Category-Leading Benchmarks</p>",
    link: "/casestudies/crompton-case-study",
  },
  {
    id: 12,
    imgSrc: "/assets/images/impact/casestudy/saffola2-cs-banner.png",
    title: "Saffola Honey",
    description:
      "<p>From Zero to 500 Units a Day in <span class='text-primary'> 4 Weeks </span></p> <p>Launching Success in Just 4 Weeks</p>",
    link: "/casestudies/safolla-honey-case-study",
  },
];

const CaseStudyCard = ({ imgSrc, title, description, link, dcppara }) => {
  return (
    <div className="w-[30vw] h-[43vw] pl-[0.5vw] pb-[3vw] fadein">
      <div className="h-[25.5vw] w-full relative">
        <Image
          src={imgSrc}
          fill
          alt={`${title} Case Study`}
          className="rounded-[20px]"
        />
      </div>
      <div className="mt-[1vw] px-[0.5vw] flex flex-col h-[30%] justify-between">
        <div>
        <p className="text-[2vw] font-medium py-[0.5vw]">{title}</p>
        <div
          className="text-[1.05vw] w-[95%]"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        </div>
        <div className="pt-[1vw]">
          <LinkButton btnText="View Detail" btnLink={link} />
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section className="w-screen h-full pb-[7%]">
      <div className="container-lg h-full">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[7vw]">
          <h2 className="heading-2 headinganim">
            Our Case <span className="blue-text">Studies</span>
          </h2>
          <p className="content w-[55%] text-center fadeup">
            At HiveMinds, we tackle your most challenging business problems with
            our specialised digital marketing approach - integrating strategic
            expertise, cutting-edge technology, and data-driven insights to
            craft campaigns that elevate your brand and drive sustainable
            growth.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-[1vw]">
          {caseStudiesData.map((study) => (
            <CaseStudyCard
              key={study.id}
              imgSrc={study.imgSrc}
              title={study.title}
              dcppara={study.dcppara}
              description={study.description}
              link={study.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
