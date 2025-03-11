import Image from 'next/image'
import React from 'react'

const Hero = ({ title1, title2, img }) => {
    return (
        <section className='w-screen h-full bg-[#F1F1F1] pt-[10%] pb-[4%] mobile:pt-[20%] mobile:bg-[#fafafa] tablet:h-[65vw]'>
            <div className='w-full h-full flex  justify-between gap-[10vw] px-[3vw] mobile:flex-col mobile:px-[4vw] tablet:items-center tablet:px-[6vw]'>
                <div className='w-[50%] pt-[7vw] mobile:w-full'>
                    <h1 className='heading-1 leading-[1.2] headinganim'>
                        {title1}
                        <span className='text-primary'> {title2} </span>
                    </h1>
                </div>
                <div className='w-[40%] flex justify-center mobile:w-full  tablet:w-1/2 tablet:pt-[4vw]'>
                    <div className='h-[35vw] mobile:h-[80vw] tablet:h-[40vw]'>
                        <Image src={img} alt='hero' width={800} height={1700} className='rounded-[1.5vw] h-full object-cover fadein mobile:rounded-[4.5vw]' />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero