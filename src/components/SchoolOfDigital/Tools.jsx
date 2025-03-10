import React from 'react'
import { Marquee } from '../ui/marquee'

const tools1=[
    "/assets/images/schoolofdigital/tools/facebook-ads.png",
    "/assets/images/schoolofdigital/tools/similar-web.png",
    "/assets/images/schoolofdigital/tools/bing-ads.png",
    "/assets/images/schoolofdigital/tools/twitter-ads.png",
    "/assets/images/schoolofdigital/tools/hubspot.png",
    "/assets/images/schoolofdigital/tools/facebook-ads.png",
    "/assets/images/schoolofdigital/tools/similar-web.png",
    "/assets/images/schoolofdigital/tools/bing-ads.png",
    "/assets/images/schoolofdigital/tools/twitter-ads.png",
    "/assets/images/schoolofdigital/tools/hubspot.png",
];
const tools2=[
    "/assets/images/schoolofdigital/tools/linkedin-ads.png",
    "/assets/images/schoolofdigital/tools/google-tag-manager.png",
    "/assets/images/schoolofdigital/tools/buffer.png",
    "/assets/images/schoolofdigital/tools/semrush.png",
    "/assets/images/schoolofdigital/tools/se-ranking.png",
    "/assets/images/schoolofdigital/tools/linkedin-ads.png",
    "/assets/images/schoolofdigital/tools/google-tag-manager.png",
    "/assets/images/schoolofdigital/tools/buffer.png",
    "/assets/images/schoolofdigital/tools/semrush.png",
    "/assets/images/schoolofdigital/tools/se-ranking.png",
];
const tools3=[
    "/assets/images/schoolofdigital/tools/hootsuite.png",
    "/assets/images/schoolofdigital/tools/facebook-ads-insights.png",
    "/assets/images/schoolofdigital/tools/google-ad-manager.png",
    "/assets/images/schoolofdigital/tools/google-ads.png",
    "/assets/images/schoolofdigital/tools/google-ads2.png",
    "/assets/images/schoolofdigital/tools/hootsuite.png",
    "/assets/images/schoolofdigital/tools/facebook-ads-insights.png",
    "/assets/images/schoolofdigital/tools/google-ad-manager.png",
    "/assets/images/schoolofdigital/tools/google-ads.png",
    "/assets/images/schoolofdigital/tools/google-ads2.png",
];

const Tools = () => {
  return (
   <section>
     <div className='w-full h-full mobile:py-[10%]'>
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]  container-lg mobile:items-start mobile:gap-[4vw]">
            <h2 data-heading-anim className="heading-2 headinganim">
            Tools you will Learn from
                <span className="blue-text"> Our Course</span>
            </h2>
            <p data-para-anim className="content w-[65%] text-center fadein mobile:w-full mobile:text-left">
            We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality. We provide effective strategies that are aligned with your long-term business goals.
            </p>
        </div>
        <div className='py-[5vw] flex flex-col gap-[3vw] mobile:gap-0'>
              <Marquee pauseOnHover="true" speed={40}>
                        {tools1.map((logoSrc, index) => (
                          <div
                            key={index}
                            className="relative h-full w-[20vw] flex items-center justify-start group fadeup mobile:w-[40vw]"
                          >
                            <img
                              src={logoSrc}
                              alt={`Logo ${index}`}
                              loading="lazy"
                              className="h-[7vw] w-full saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain mobile:h-[20vw]"
                            />
                          </div>
                        ))}
                      </Marquee>

                      <Marquee pauseOnHover="true" speed={40} direction='right'>
                        {tools2.map((logoSrc, index) => (
                          <div
                            key={index}
                            className="relative h-full w-[20vw] flex items-center justify-start group fadeup mobile:w-[40vw] mobile:hidden"
                          >
                            <img
                              src={logoSrc}
                              alt={`Logo ${index}`}
                              loading="lazy"
                              className="h-[7vw] w-full saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain mobile:h-[20vw]"
                            />
                          </div>
                        ))}
                      </Marquee>

                      <Marquee pauseOnHover="true" speed={40}>
                        {tools3.map((logoSrc, index) => (
                          <div
                            key={index}
                            className="relative h-full w-[20vw] flex items-center justify-start group fadeup mobile:w-[40vw] mobile:hidden"
                          >
                            <img
                              src={logoSrc}
                              alt={`Logo ${index}`}
                              loading="lazy"
                              className="h-[7vw] w-full saturate-0  transition-all duration-300 ease group-hover:saturate-100 object-contain mobile:h-[20vw]"
                            />
                          </div>
                        ))}
                      </Marquee>

        </div>
        </div>
   </section>
  )
}

export default Tools