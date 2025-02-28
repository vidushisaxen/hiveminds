import Image from 'next/image'
import React from 'react'

const Hero = ({ title1, title2, img }) => {
    return (
        <section className='w-screen h-full bg-[#F1F1F1] pt-[10%] pb-[4%]'>
            <div className='w-full h-full flex  justify-between gap-[10vw] px-[3vw]'>
                <div className='w-[50%] pt-[7vw]'>
                    <h1 className='heading-1 leading-[1.2] headinganim'>
                        {title1}
                        <span className='text-primary'> {title2} </span>
                    </h1>
                </div>
                <div className='w-[40%] flex justify-center'>
                    <div className='h-[35vw] '>
                        <Image src={img} alt='hero' width={800} height={1700} className='rounded-[1.5vw] h-full object-cover fadein' />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero