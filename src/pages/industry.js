/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import Image from 'next/image';


const industry = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  return (
    <>
      <Layout>
        <Hero title1={"Our"} title2={"Industries"} para={"SEO is vastly interdisciplinary and it requires skills ranging from coding to linguistics to production. It includes services such as Influencer Marketing and Organic Social Media Management."} img={"/assets/images/industry/industry-hero.png"} />
        <main>
          <section className='w-screen h-full py-[5vw]'>
            <div className='container-lg text-center flex items-center justify-center  h-full'>
              <div className='w-[75%] text-center'>
                <p data-para-anim className='content py-[1vw]'>
                  At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology, and data-driven insights to craft campaigns that elevate your brand and drive sustainable growth.
                </p>
                <p data-para-anim className='content py-[1vw]'>
                  At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology.
                </p>
              </div>

            </div>

          </section>
          <section className='w-screeen h-full py-[5vw]'>
            <div className='container-lg w-full h-full'>
              {industries.map((item, index) => (
                <div key={index} className="w-full h-full flex items-start justify-between py-[3vw] border-[1.5px] border-[#EEEEEE] shadow-lg  px-[1.5vw] rounded-[1.5vw] mb-[3vw] fadein">
                  <div className='w-[45%]'>
                    <Image src={item.img} width={790} height={990} alt="service-card" className='rounded-[1.2vw]' />
                  </div>
                  <div className='w-[50%]'>
                    <h2 className='text-[2.8vw] font-medium headinganim'>
                     {item.title1}
                      <span className='text-primary'> {item.title2} </span>
                    </h2>
                   
                    <p className='content tracking-wide para py-[1vw]' dangerouslySetInnerHTML={{ __html: item.para }} />
                      <ul className='list-disc flex flex-wrap gap-x-[2vw] w-[65%] px-[1vw] py-[2vw]'>
                      {item.list.map((item,index)=>(
                         <li key={index}  className="content tracking-wide para w-fit">{item}</li>
                      ))}
                      </ul>
                      
                    </div>
                  </div>
              ))}
            </div>

          </section>
        </main>
      </Layout>
    </>
  )
}

export default industry

const industries = [
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " E-",
    title2: "Commerce",
    para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " Health &",
    title2: "Wellness",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " BFSI -",
    title2: "Fintech",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " FMCG &",
    title2: "Beauty",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " Fashion & ",
    title2: " Lifestyle",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " Electronics &",
    title2: "Consumer Durables",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  }, {
    img: "/assets/images/industry/industry-listing.png",
    title1: " Telecom &",
    title2: " Automobiles",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  },
  {
    img: "/assets/images/industry/industry-listing.png",
    title1: " Travel &",
    title2: " Tourism",
     para: "Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence. <br/><br/> Driven by a shared passion for elevating brands, we HiveMinders understands our clients' unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign.",
    list: [
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor",
      "Lorem Ipsum Dolor"

    ]
  }
]
