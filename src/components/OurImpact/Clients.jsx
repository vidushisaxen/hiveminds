import { Marquee } from "@/components/ui/marquee"
import { useEffect } from "react";
import gsap from "gsap";
const clients1 = [
  "/assets/images/impact/clients/bigbasket.png",
  "/assets/images/impact/clients/dominos.png",
  "/assets/images/impact/clients/fly-dubai.png",
  "/assets/images/impact/clients/portea.png",
  "/assets/images/impact/clients/cleartrip.png",
  "/assets/images/impact/clients/bigbasket.png",
  "/assets/images/impact/clients/dominos.png",
  "/assets/images/impact/clients/fly-dubai.png",
  "/assets/images/impact/clients/portea.png",
  "/assets/images/impact/clients/cleartrip.png", 
];

const clients2 = [
  "/assets/images/impact/clients/airtel.png",
  "/assets/images/impact/clients/crompton.png",
  "/assets/images/impact/clients/godrej.png",
  "/assets/images/impact/clients/cleartrip.png",
  "/assets/images/impact/clients/jockey.png",
  "/assets/images/impact/clients/airtel.png",
  "/assets/images/impact/clients/crompton.png",
  "/assets/images/impact/clients/godrej.png",
  "/assets/images/impact/clients/cleartrip.png",
  "/assets/images/impact/clients/jockey.png",
];
const clients3 = [
    "/assets/images/impact/clients/bajaj.png",
  "/assets/images/impact/clients/abbott.png",
  "/assets/images/impact/clients/boAt.png",
  "/assets/images/impact/clients/discovery.png",
  "/assets/images/impact/clients/instapay.png",
  "/assets/images/impact/clients/bajaj.png",
  "/assets/images/impact/clients/abbott.png",
  "/assets/images/impact/clients/boAt.png",
  "/assets/images/impact/clients/discovery.png",
  "/assets/images/impact/clients/instapay.png",
  ];
  const clients4 = [
    "/assets/images/impact/clients/tanishq.png",
  "/assets/images/impact/clients/itc.png",
  "/assets/images/impact/clients/licious.png",
  "/assets/images/impact/clients/pidilite.png",
  "/assets/images/impact/clients/sugar.png",
  "/assets/images/impact/clients/tanishq.png",
  "/assets/images/impact/clients/itc.png",
  "/assets/images/impact/clients/licious.png",
  "/assets/images/impact/clients/pidilite.png",
  "/assets/images/impact/clients/sugar.png",
  ];

const platform1 = [
    "/assets/images/impact/media/fb.png",
    "/assets/images/impact/media/times-network.png",
    "/assets/images/impact/media/sony-liv.png",
    "/assets/images/impact/media/amazon.png",
    "/assets/images/impact/media/quora.png",
    "/assets/images/impact/media/fb.png",
    "/assets/images/impact/media/times-network.png",
    "/assets/images/impact/media/sony-liv.png",
    "/assets/images/impact/media/amazon.png",
    "/assets/images/impact/media/quora.png",
];
const platform2 = [
    "/assets/images/impact/media/flipkart.png",
    "/assets/images/impact/media/network-18.png",
    "/assets/images/impact/media/ndtv.png",
    "/assets/images/impact/media/gaana.png",
    "/assets/images/impact/media/spotify.png",
    "/assets/images/impact/media/flipkart.png",
    "/assets/images/impact/media/network-18.png",
    "/assets/images/impact/media/ndtv.png",
    "/assets/images/impact/media/gaana.png",
    "/assets/images/impact/media/spotify.png",
];
const platform3 = [
    "/assets/images/impact/media/your-story.png",
    "/assets/images/impact/media/et.png",
    "/assets/images/impact/media/the-hindu.png",
    "/assets/images/impact/media/hotstar.png",
    "/assets/images/impact/media/double-click.png",
    "/assets/images/impact/media/your-story.png",
    "/assets/images/impact/media/et.png",
    "/assets/images/impact/media/the-hindu.png",
    "/assets/images/impact/media/hotstar.png",
    "/assets/images/impact/media/double-click.png",
];

export function Clients() {

  return (
    <section id="clients">
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
          <h2 className="heading-2 headinganim">
            Our
            <span className="blue-text"> Clients</span>
          </h2>
          <p className="content w-[70%] text-center fadeup">
          Our diverse & growing portfolio spanning from lean startups to household brands - and everything in between
          </p>
        </div>
<div className="  text-center">
        <p className=" text-[1.24vw] text-[#111111] montreal font-medium">Clients</p>
        
          <Marquee pauseOnHover="true" speed={40} >
            {clients1.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw] w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
        
       
          <Marquee pauseOnHover="true" speed={40} direction="right">
            {clients2.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw]  w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover="true" speed={40} direction="right">
            {clients3.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw]  w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover="true" speed={40} direction="right">
            {clients4.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw]  w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
        
          <div className="flex flex-col items-center justify-center gap-[1vw] py-[7vw]">
          <h2 className="heading-2 headinganim">
          Our  Platform & 
            <span className="blue-text"> Media Partners</span>
          </h2>
          <p className="content w-[50%] text-center fadeup">
          Our diverse & growing portfolio spanning from lean startups to household brands - and everything in between
          </p>
        </div>
        
          <Marquee pauseOnHover="true" speed={40}>
            {platform1.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw]  flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw] w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover="true" speed={40}>
            {platform2.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw]  flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw] w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover="true" speed={40}>
            {platform3.map((logoSrc, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw]  flex items-center justify-start group fadeup"
              >
                <img src={logoSrc} alt={`Logo ${index}`} loading="lazy" className="h-[7vw] w-[8vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

    </section>

  );
}