import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SubServices = ({ heading, para, subservices }) => {
    useEffect(() => {
        if (globalThis.innerWidth > 1024) {
          let ctx = gsap.context(() => {
            const body = document.body;
            const changeBodyColor = (color) => {
              gsap.to(body, { backgroundColor: color, duration: 1, ease: "power2.out" });
            };
            
            ScrollTrigger.create({
              trigger: "#subservices",
              start: "top 60%",
              end: "bottom 20%",
      
              onEnter: () => changeBodyColor("#134bd6"),
              onLeaveBack: () => changeBodyColor("#fafafa"),
            });
          });
          return () => ctx.revert();
        }
      }, []);
    return (
        <section className='w-screen h-full py-[5vw] px-[3vw] ' id='subservices'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h2 className='heading-2 !text-white headinganim'>
                    {heading}
                </h2>
                <p data-para-anim className='content !text-white w-[45%] py-[1vw] '>{para}</p>
                <div className='flex flex-wrap items-center justify-center text-left gap-[2vw] py-[3vw]'>
                    {subservices.map((item, index) => (
                        <div key={index} className='bg-white rounded-[20px] p-[2vw] w-[30vw] min-h-[13.5vw] text-center fadeup'>
                            <h4 className='text-[1.55vw] font-medium'>
                                {item.title}
                            </h4>
                            <p className='content mt-[1vw]'>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubServices
