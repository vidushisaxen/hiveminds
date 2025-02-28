import Image from 'next/image'
import React from 'react'

const Hero = ({title1, title2, para}) => {
  return (
    <section className='w-screen h-[60vw] bg-[#F1F1F1]'>
        <div className='w-full h-full flex items-center justify-between gap-[10vw] px-[3vw]'>
            <div className='w-[50%]'>
            <h1 className='heading-1 leading-[1.2]'>
            {title1} <br/>
                <span className='text-primary'>{title2} </span>
            </h1>
            <p  className="content w-[75%] tracking-wide para mt-[2vw]">
           {para}
          </p>
            </div>
            <div className='w-[50%] flex items-end justify-end'>
            <div className='w-[37.5vw] h-[41.5vw] relative '>
                <Image src="/assets/images/services/search-engine-optimization.png" alt='hero' fill  className='rounded-[30px]'/>

            </div>
            </div>

        </div>

    </section>
  )
}

export default Hero