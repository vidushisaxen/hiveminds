import Image from 'next/image'
import React from 'react'

const Benefit = () => {
  return (
  <section className='h-full w-screen py-[5vw]'>
    <div className='w-full h-full container-lg'>
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
            <h2 data-heading-anim className="heading-2 headinganim">
               Who Can
                <span className="blue-text"> Benefit</span>
            </h2>
            <p data-para-anim className="content w-[65%] text-center fadein">
            We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality. We provide effective strategies that are aligned with your long-term business goals.
            </p>
        </div>

        <div className='flex items-center justify-between h-full '>
            <div className='flex flex-col items-center justify-center gap-[1.5vw] w-[30%] h-[20vw]'>
                <Image src="/assets/icons/students.svg" height={100} width={100} alt='students' className='fadein'/>
                <p data-para-anim className='text-[1.5vw] font-medium'>Students</p>
            </div>
            <span className='h-[20vw] w-[1px] bg-black '/>
            <div className='flex flex-col items-center justify-center gap-[1.5vw] w-[30%] h-[20vw]'>
                <Image src="/assets/icons/entry-level.svg" height={100} width={100} alt='students' className='fadein'/>
                <p data-para-anim className='text-[1.5vw] font-medium w-[50%] text-center'>Entry & Mid Level Professionals</p>
            </div> 
            <span className='h-[20vw] w-[1px] bg-black '/>

            <div className='flex flex-col items-center justify-center gap-[1.5vw] w-[30%] h-[20vw]'>
                <Image src="/assets/icons/mid-level.svg" height={100} width={100} alt='students' className='fadein'/>
                <p data-para-anim className='text-[1.5vw] font-medium w-[50%] text-center'>Mid to Senior Level Professionals</p>
            </div>

        </div>
        </div>
  </section>
  )
}

export default Benefit