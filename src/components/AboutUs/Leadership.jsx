import Image from 'next/image'
import React from 'react'

const Leadership = () => {
    return (
        <>
            <section className='w-screen h-full py-[5vw]'>
                <div className='container-lg h-full flex items-center justify-center flex-col'>
                    <div className='py-[1vw] w-[75%] text-center px-[1vw]'>
                        <p className='content'>We revolutionize digital marketing through innovative strategies, creative insights, and data-driven solutions. We empower brands to transform their online presence, optimize customer journeys, and drive sustainable growth. Our collaborative approach and relentless pursuit of excellence set us apart, ensuring every campaign delivers measurable impact and long-term success together.</p>

                    </div>
                    <div>
                    <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
                        <h2 className="heading-2 headinganim">
                            Our
                            <span className="blue-text"> Leadership</span>
                        </h2>
                        <p className="content w-[70%] text-center fadein">
                            Meet our dynamic leaders—visionaries and industry experts who blend strategic insight with creative passion, steering HiveMinds and our clients toward digital excellence.
                        </p>
                    </div>

                    <div className='flex items-center justify-between w-full h-full py-[2vw]'>
                        <div>
                            <Image src={""} alt=''/>
                        </div>

                    </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Leadership