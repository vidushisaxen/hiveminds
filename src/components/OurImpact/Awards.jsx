import Image from "next/image";
import React from "react";

const Awards = () => {
  const awardsData = [
    {
      imgSrc: "/assets/images/impact/awards/image.png",
      awardTitle: "The Jury Awards (Flipkart)",
      date: "2022",
    },
    {
      imgSrc: "/assets/images/impact/awards/image.png",
      awardTitle: "Google Premier Awards",
      date: "2023",
    },
    {
      imgSrc: "/assets/images/impact/awards/image.png",
      awardTitle: "Amazon Ads Case League",
      date: "2023",
    },
    {
        imgSrc: "/assets/images/impact/awards/image.png",
        awardTitle: "Youtube awards",
        date: "2023",
      },
      {
        imgSrc: "/assets/images/impact/awards/image.png",
        awardTitle: "Brand Storyz 2023",
        date: "2023",
      },
      {
        imgSrc: "/assets/images/impact/awards/image.png",
        awardTitle: "Emvies",
        date: "2023",
      },
      {
        imgSrc: "/assets/images/impact/awards/image.png",
        awardTitle: "Abby 2024",
        date: "2024",
      },
      {
        imgSrc: "/assets/images/impact/awards/image.png",
        awardTitle: "Google agency excellance awards",
        date: "2024",
      },
      
  ];

  return (
    <section className="w-screen h-full" id="awards">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center gap-[1vw] pt-[7vw] pb-[5vw] container-lg">
        <h2 className="heading-2 headinganim">
          Awards & <span className="blue-text"> Accolades</span>
        </h2>
        <p className="content w-[50%] text-center fadeup">
          Discover our accolades and industry recognition that highlight our
          commitment to excellence.
        </p>
      </div>

      {/* Awards List */}
      <div className="container-lg flex flex-wrap justify-center gap-[3vw]">
        {awardsData.map((award, id) => (
          <div key={id} className="w-[20vw] h-auto flex flex-col fadeup ">
            <div className="w-full h-[11vw] shadow-sm drop-shadow-sm rounded-[1.2vw] overflow-hidden">
              <Image
                src={award.imgSrc}
                alt="award-image"
                width={300}
                height={300}
                className="object-cover w-full h-full "
              />
            </div>
            <p className="mt-4 text-[1.2vw] pl-[0.5vw] font-semibold">{award.awardTitle}</p>
            <p className="text-gray-500 pl-[0.5vw] ">{award.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
