import Image from "next/image";
import React from "react";
import LinkButton from "../Button/LinkButton";

const caseStudiesData = [
  {
    id: 1,
    imgSrc: "/assets/images/impact/dominos-banner.png",
    title: "Dominos",
    description:
      "<p><span class='text-primary'> 500K+ </span> New Orders in 12 Months.</p><p>Success Through Influencer Power</p>",
    link: "/",
  },
  {
    id: 2,
    imgSrc: "/assets/images/impact/casestudy/nivea-cs.png",
    title: "Nivea",
    description:
      "<p>Maintained top 3 as competitors dropped <span class='text-primary'>34% & 42%</span></p><p>Outshining the Competition,</p>",
    link: "/",
  },
  {
    id: 3,
    imgSrc: "/assets/images/impact/casestudy/crompton-cs.png",
    title: "Crompton",
    description:
      "<p><span class='text-primary'>32%</span> Sales Growth</p> <p><span class='text-primary'> #1</span> in Water Heaters</p>",
    link: "/",
  },
  {
    id: 4,
    imgSrc: "/assets/images/impact/casestudy/protienx-cs.png",
    title: "Protinex",
    description:
      "<p><span class='text-primary'>2x</span> Growth in Share of Voice in 6 Months</p><p>Doubling the Impact with Strategic Campaigns</p>",
    link: "/",
  },
  {
    id: 5,
    imgSrc: "/assets/images/impact/casestudy/sugarfree-cs.png",
    title: "Sugar Free",
    description:
      "<p><span class='text-primary'>35%</span> Increase in Conversion Rates</p><p>Boosting Organic Relevance</p>",
    link: "/",
  },
  {
    id: 6,
    imgSrc: "/assets/images/impact/casestudy/jockey-cs.png",
    title: "Jockey",
    description:
      "<p><span class='text-primary'>4x </span> Brand Growth</p> <p>Leading Through Innovation</p>",
    link: "/",
  },
  {
    id: 7,
    imgSrc: "/assets/images/impact/casestudy/bajaj-cs.png",
    title: "Bajaj",
    description:
      "<p><span class='text-primary'>50% </span>  YoY Growth in Offtakes</p> <p>Leading Seasonal Success</p>",
    link: "/",
  },
  {
    id: 8,
    imgSrc: "/assets/images/impact/casestudy/fly-dubai-cs.png",
    title: "Fly Dubai",
    description:
      "<p><span class='text-primary'>67% </span> Increase in Brand Searches</p> <p>New Routes Soar to Success</p>",
    link: "/",
  },
  {
    id: 9,
    imgSrc: "/assets/images/impact/casestudy/sugar-cs.png",
    title: "Sugar.Fit",
    description:
      "<p><span class='text-primary'>1 Lakh+ </span>  Downloads in a Year</p> <p>Reversing Diabetes and Transforming Lives</p>",
    link: "/",
  },
  {
    id: 10,
    imgSrc: "/assets/images/impact/casestudy/titan-cs.png",
    title: "Titan",
    description:
      "<p><span class='text-primary'>6.5x </span> Revenue Growth in a Year</p> <p>Reimagining the Clock Market</p>",
    link: "/",
  },
  {
    id: 11,
    imgSrc: "/assets/images/impact/casestudy/morphy-cs.png",
    title: "Morphy Richards",
    description:
      "<p><span class='text-primary'>10x</span> Growth in Just 2 Months</p> <p>Redefining Personal Grooming</p>",
    link: "/",
  },
  {
    id: 12,
    imgSrc: "/assets/images/impact/casestudy/skillmatics.png",
    title: "Skillmatics",
    description:
      "<p><span class='text-primary'>2x</span>  Sales Growth in the US & India in 2 Months</p> <p>Global Success Across Markets</p>",
    link: "/",
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
