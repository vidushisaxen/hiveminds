import Image from 'next/image'
import React from 'react'
import LinkButton from '../Button/LinkButton'

const CaseStudyCard = () =>{
    return(
        <>
        <div className='w-[30vw] h-full px-[0.5vw] pb-[3vw]'>
            <div className='h-[25.5vw] w-full relative'>
                <Image src="/assets/images/impact/dominos-banner.png" fill alt='CaseStudy-Image' className='rounded-[20px]'/>
            </div>
            <div className='mt-[1vw] px-[1vw]'>
            <p className='text-[2vw] font-medium py-[0.5vw]'>Dominos</p>
            <p className='text-[1.05vw] w-[95%]'>With the objective of Increasing Domino’s App installs in the Tier-2 markets, we archive a 38% Growth in App Install Base at an Incremental ROI of 4.3 in just 8 months,</p>
            <div className='pt-[1vw]'>
            <LinkButton btnText={"View Detail"} btnLink={"/"}/>
            </div>
            </div>
        </div>
        </>
    )
}

const CaseStudies = () => {
  return (
   <section className='w-screen h-full'>
    <div className='container-lg h-full'>
    <div className="flex flex-col items-center justify-center gap-[1vw] py-[7vw]">
          <h2 className="heading-2 headinganim">
          Our Case
            <span className="blue-text"> Studies</span>
          </h2>
          <p className="content w-[55%] text-center fadeup">
          At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology, and data-driven insights to craft campaigns that elevate your brand and drive sustainable growth.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-[1vw]'>
            <CaseStudyCard/>
            <CaseStudyCard/>
            <CaseStudyCard/>
            <CaseStudyCard/>
            <CaseStudyCard/>
            <CaseStudyCard/>
            <CaseStudyCard/>


        </div>

    </div>

   </section>
  )
}

export default CaseStudies