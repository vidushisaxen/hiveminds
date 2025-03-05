import Image from "next/image";
import React from "react";

const team = [
  {
    id: 1,
    name: "Sachin Suresh",
    src: "/assets/images/about/leadership-1.png",
    designation: "Co-Founder",
  },
  {
    id: 2,
    name: "Shreya Aggarwal",
    src: "/assets/images/about/leadership-2.png",
    designation: "Co-Founder",
  },
  {
    id: 3,
    name: "Mohit Grover",
    src: "/assets/images/about/leadership-3.png",
    designation: "Co-Founder",
  },
  {
    id: 4,
    name: "Sachin Suresh",
    src: "/assets/images/about/leadership-4.png",
    designation: "Co-Founder",
  },
  {
    id: 5,
    name: "Shreya Aggarwal",
    src: "/assets/images/about/leadership-5.png",
    designation: "Co-Founder",
  },
  {
    id: 6,
    name: "Mohit Grover",
    src: "/assets/images/about/leadership-6.png",
    designation: "Co-Founder",
  },
  {
    id: 7,
    name: "Mohit Grover",
    src: "/assets/images/about/leadership-7.png",
    designation: "Co-Founder",
  },
  {
    id: 8,
    name: "Mohit Grover",
    src: "/assets/images/about/leadership-8.png",
    designation: "Co-Founder",
  },
  {
    id: 9,
    name: "Mohit Grover",
    src: "/assets/images/about/leadership-8.png",
    designation: "Co-Founder",
  },
];
const Leadership = () => {
  return (
    <>
      <section className="w-screen h-full py-[5vw]">
        <div className="container-lg h-full flex items-center justify-center flex-col">
          <div className="py-[1vw] w-[75%] text-center px-[1vw]">
            <p className="content fadein">
              We revolutionize digital marketing through innovative strategies,
              creative insights, and data-driven solutions. We empower brands to
              transform their online presence, optimize customer journeys, and
              drive sustainable growth. Our collaborative approach and
              relentless pursuit of excellence set us apart, ensuring every
              campaign delivers measurable impact and long-term success
              together.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
              <h2 className="heading-2 headinganim">
                Our
                <span className="blue-text"> Leadership</span>
              </h2>
              <p className="content w-[70%] text-center fadein">
                Meet our dynamic leaders—visionaries and industry experts who
                blend strategic insight with creative passion, steering
                HiveMinds and our clients toward digital excellence.
              </p>
            </div>

            <div className="flex justify-between flex-wrap w-full h-full py-[2vw]">
              {team.map((team,id) => (
                <div className="flex flex-col mb-[2vw] gap-[0.5vw] fadeup" key={id}>
                <div className="w-[29.5vw] h-[33vw] rounded-[1.4vw] overflow-hidden bg-black">
                  <Image
                    src={team.src}
                    alt={`${team.name} image`}
                    width={500}
                    height={700}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                <h4 className="text-[1.6vw]">{team.name}</h4>
                <p>{team.designation}</p>

                    </div>
                    </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
