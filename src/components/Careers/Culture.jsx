import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/images/careers/culture-img.png'
import PrimaryButton from '../Button/PrimaryButton'

const Culture = () => {
    return (
        <section className='h-full w-screen py-[5vw]'>
            <div className='w-full h-full container-lg'>
                <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
                    <h2 data-heading-anim className="heading-2 headinganim">
                        Our
                        <span className="blue-text"> Culture</span>
                    </h2>
                    <p data-para-anim className="content w-[55%] text-center fadein">
                        At HiveMinds, our culture thrives on innovation, collaboration, and a relentless pursuit of excellence. We celebrate diversity and encourage creative thinking, fostering a dynamic environment where every team member is empowered to grow, challenge the norm, and drive impactful digital marketing solutions.
                    </p>
                </div>
                <div className='flex items-start justify-between py-[1vw]'>
                    <div className='w-[45%] h-full'>
                    <Image src={img} height={890} width={790} className='rounded-[1.5vw] fadein'/>
                    </div>
                    <div className='w-1/2 '>
                    <p data-para-anim className='text-[1.8vw] font-medium py-[2vw]'>We cultivate an environment that encourages creative problem-solving, continuous learning, and collaborative teamwork. Every voice is heard, and every idea is valued. Our diverse and inclusive community celebrates milestones together, supports personal growth, and drives digital transformation—making our workplace not only a hub for professional success but also a place where lifelong relationships are forged.</p>
                    <div className='mt-[3vw]'>
                    <PrimaryButton text={"Join Our Team"} href="/"/>
                    </div>
                    </div>
                    

                </div>

            </div>


        </section>
    )
}

export default Culture