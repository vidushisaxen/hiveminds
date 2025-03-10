import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'


const JobCard = ({title,duration,location,link}) => {
    return (
        <>
            <div className='w-[30vw] h-[25vw] shadow-xl drop-shadow-xl rounded-[1.5vw] flex flex-col items-start justify-between p-[2vw] bg-white fadeup mb-[1.5vw] mobile:h-full mobile:w-full mobile:p-[5vw] mobile:py-[7vw] mobile:rounded-[5vw] mobile:gap-[4vw]'>
                <p className='text-[1.8vw] mobile:text-[6vw] mobile:leading-[1.2] h-[30%]'>{title}</p>
                <div className='h-[70%] flex flex-col w-full mobile:gap-[4vw]'>

                <span className='h-[1px] w-full bg-black my-[1vw] mobile:my-[7vw]' />
                <div className='flex flex-col mobile:flex-row mobile:w-[80%] mobile:justify-between gap-[1.5vw]'>

                <div className='flex  gap-[1vw]'>
                    <Image src="/assets/icons/duration.svg" width={20} height={20} alt='duration-icon' />
                    <p className='content'>{duration}</p>
                </div>
                <div className='flex gap-[1vw]'>
                    <Image src="/assets/icons/location.svg" width={20} height={20} alt='duration-icon' />
                    <p className='content'>{location}</p>
                </div>

                </div>
                <div className='mt-[2vw]'>

                <PrimaryButton text={"Apply Now"} href={link}/>

                </div>

                </div>


            </div>
        </>
    )
}
const Jobs = () => {
    return (
        <section className='relative py-[5vw] w-screen h-full overflow-hidden mobile:pb-[10%]'>
            <div className='w-full h-full container-lg'>
                <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw] mobile:items-start">
                    <h2 data-heading-anim className="heading-2 headinganim">
                        Job
                        <span className="blue-text"> Openings</span>
                    </h2>
                    <p data-para-anim className="content w-[55%] text-center fadein mobile:w-full mobile:text-left">
                        Discover rewarding careers at HiveMinds—where innovative minds thrive. Our roles span creative strategy, data analytics, and digital marketing, offering opportunities to grow, collaborate, and transform the future of digital success.
                    </p>
                </div>

                <div className='flex flex-wrap w-full h-full gap-[1vw] mobile:flex-col  mobile:gap-[4vw] mobile:mt-[7vw]'>
                    <JobCard title={"Account Manager / Sr.Account Manager - SEM"} duration={"Full Time"} location={"Bangalore"} link={"/"}/>
                    <JobCard  title={"Performance Marketing"} duration={"Full Time"} location={"Bangalore"} link={"/"}/>
                    <JobCard  title={"Sr. Specialist - SEM"} duration={"Full Time"} location={"Bangalore"} link={"/"}/>
                    <JobCard  title={"Account Manager / Sr.Account Manager - SEM"} duration={"Full Time"} location={"Bangalore"} link={"/"}/>
                    <JobCard  title={"Specialist - Marketplace"} duration={"Full Time"} location={"Bangalore"} link={"/"}/>
                    <JobCard  title={"Marketing Analyst"} duration={"Full Time"} location={"Bangalore"} link={"/"}/>
                </div>
            </div>
            <span className='absolute w-screen h-[55%] bottom-0 left-0 bg-[#134BD6] z-[-1]'>

            </span>
        </section>
    )
}

export default Jobs