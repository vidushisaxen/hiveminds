import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-screen h-[60vw] bg-[#F1F1F1]'>
        <div className='w-full h-full flex items-center justify-between gap-[10vw] px-[3vw]'>
            <div className='w-[50%]'>
            <h1 className='heading-1 leading-[1.2] w-[60%]'>
                What We
                <span className='text-primary'> Offer </span>
            </h1>
            <p  className="content w-[75%] tracking-wide para mt-[2vw]">
            SEO is vastly interdisciplinary and it requires skills ranging from coding to linguistics to production. It includes services such as Influencer Marketing and Organic Social Media Management.
          </p>
            </div>
            <div className='w-[50%] flex items-end justify-end'>
            <div className='w-[37.5vw] h-[41.5vw] relative '>
                <Image src="/assets/images/services/hero.png" alt='hero' fill  className='rounded-[30px]'/>

            </div>
            </div>

        </div>

    </section>
  )
}

export default Hero