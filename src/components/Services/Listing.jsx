import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const services=[
    {
        src:"/assets/images/services/performance-marketing.png",
        title1:"Performance",
        title2:"Marketing",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },
    {
        src:"/assets/images/services/retail-marketing.png",
        title1:"Retail",
        title2:"Marketing",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences.",
        link:"/"
    },{
        src:"/assets/images/services/seo.png",
        title1:"Search Engine",
        title2:"Optimization",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/creative-and-content.png",
        title1:"Creative &",
        title2:"Content Management",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/online-reputation.png",
        title1:"Online Reputation",
        title2:"Management",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/consumer-insights.png",
        title1:"Consumer",
        title2:"Insights",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/influencer-marketing.png",
        title1:"Influencer",
        title2:"Marketing",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/affiliate-marketing.png",
        title1:"Affliate",
        title2:"Marketing",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/programatic-advertising.png",
        title1:"Programatic ",
        title2:"Advertising",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    },{
        src:"/assets/images/services/data-analytics.png",
        title1:"Data &",
        title2:"Analytics",
        para1:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. ",
        para2:"Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence",
        link:"/"
    }
]

const ServiceCard = ({ src, title1, title2, para1, para2, link, index }) => {
    return (
        <div className={`w-full h-full flex items-center justify-center gap-[13vw] py-[5vw] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className='w-[40%]'>
                <div className='w-[44vw] h-[29vw] relative'>
                    <Image src={src} fill alt="service-card" className='rounded-[20px]' />
                </div>
            </div>
            <div className='w-[70%]'>
                <h2 className='text-[2.8vw] font-medium'>
                    {title1}
                    <span className='text-primary'> {title2} </span>
                </h2>
                <p className="content tracking-wide para py-[1vw]">{para1}</p>
                <p className="content tracking-wide para py-[1vw]">{para2}</p>
                <div className='mt-[1vw]'>
                    <PrimaryButton
                        href={link}
                        text="View Details"
                        className="button"
                    />
                </div>
            </div>
        </div>
    );
};

const Listing = () => {
  return (
   <>
   <section className='h-full w-screen bg-white py-[5vw] px-[3vw] relative'>
    <div className='w-full h-full '>
        <div className='w-full flex  flex-col items-center justify-center text-center '>
            <p className="content w-[75%] tracking-wide para py-[1vw]">At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology, and data-driven insights to craft campaigns that elevate your brand and drive sustainable growth.
                </p>
                <p className="content w-[75%] tracking-wide para py-[1vw]">

At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology.</p>
        </div>
        <div className='py-[4vw]'>
        {services.map((item,index)=>{
            return(
                <ServiceCard key={index} index={index} src={item.src} title1={item.title1} title2={item.title2} para1={item.para1} para2={item.para2} link={item.link} />
            )
        })}
        </div>

    </div>
     <div className="absolute h-[2vw] w-[2.2vw] top-[4%] right-[15%] blue-hexagon-animation">
                        <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
                    </div>
                    <div className="absolute h-[2vw] w-[2.2vw] top-[2%] left-[12%] yellow-hexagon-animation" >
                        <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
                    </div>
   </section>
   </>
  )
}

export default Listing