import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-screen h-[60vw] bg-[#F1F1F1]'>
        <div className='container-lg h-full flex items-center justify-between gap-[10vw] '>
            <div className='w-[50%]'>
            <h1 className='heading-1 leading-[1.2] w-[60%]'>
                What We
                <span className='text-primary'> Offer </span>
            </h1>
            <p  className="content w-[75%] tracking-wide para mt-[2vw]">
            Fueling digital evolution with insight and innovation, we turn complexity into clarity—empowering brands to lead and excel in today&apos;s competitive landscape.
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