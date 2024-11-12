import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LinkButton from '../Button/LinkButton'
import LinkButtonWhite from '../Button/LinkButtonWhite'

const Story = () => {
  return (
   <>
   <section id='story'>
    <div className='w-screen h-[130vh] py-[5vw] mt-[15vw] relative'>
        <div className='w-[90%] h-[60%] bg-black rounded-[20px] absolute top-[-15%] left-[5%]'>
            play
        </div>
        <div className='w-[99vw] h-full py-[4vw] mt-[5vw] bg-[#134BD6] rounded-[20px] flex items-end justify-center gap-[7vw]'>
            <div className='w-[36%] flex items-start justify-center flex-col  gap-[4vw]'>
                <p className='text-[2.8vw] montreal text-[#FFFFFF]'>
                Fuelling your growth ambitions, with confidence.
                </p>
                <p className='content-white'>At HiveMinds, we tackle your most challenging business problems with our specialized digital marketing approach - integrating strategic expertise, cutting-edge technology, and data-driven insights to craft campaigns that elevate your brand and drive sustainable growth.</p>
                <Link href={"#"}>
                <div className='flex items-center justify-center gap-[1vw]'>
                    <p className='content-white border-b'>How We Do It</p>
                    <div className='h-[1vw] w-[1vw] relative'>
                        <Image
                        src="/assets/icons/right-arrow-white.svg"
                        fill
                        alt='right-arrow'
                        />

                    </div>
                </div>

                </Link>

            </div>
            <div className='w-[36%] flex items-center justify-start flex-col  gap-[3vw]'>
            <p className='text-[2.8vw] montreal text-[#FFFFFF]'>
                Driven by Talent, Powered by Teamwork
                </p>
                <p className='content-white'>Driven by a shared passion for elevating brands, we HiveMinders understands our clients&apos; unique goals and aspirations. We leverage our expertise to craft compelling brand experiences, ensuring that every campaign is executed with precision, creativity, and an unwavering commitment to excellence</p>
                <div className='w-full flex items-center justify-center gap-[2vw]'>
                    <LinkButtonWhite text={"Explore The Hiveminds Way "} link={"#"}/>
                    <LinkButton text={"Our Leadership Team"} link={"#"}/>
                </div>

            </div>
            

        </div>

    </div>

   </section>
   </>
  )
}

export default Story