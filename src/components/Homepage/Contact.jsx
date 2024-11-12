import React from 'react'
import Image from 'next/image'
import Contactform from './Contactform'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='w-screen h-[140vh] relative top-[30vw] m-[4vw]'>
            <div className='w-full h-screen flex gap-[10vw]'>
            <div className='w-[35%]'>
                <h2 className="heading-2 ">
                Looking to Drive <span className='blue-text'>Growth?</span>
                </h2>
                <p className="content w-[90%]">
                We’re passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us.
                </p>
                <div className='flex mt-[4vw] items-center justify-center gap-[2vw]'>
                    <div className='h-[15vw] w-[15vw] relative rounded-[16px]'>
                        <Image src="/assets/images/homepage/contact-1.png" fill alt='contact' className='rounded-[16px]'/>

                    </div>
                    <div className='h-[15vw] w-[15vw] relative rounded-[16px]'>
                        <Image src="/assets/images/homepage/contact-2.png" fill alt='contact' className='rounded-[16px]'/>

                    </div>

                </div>
              </div>

              <div className='w-[50%] '>
              <Contactform/>
              </div>
            </div>

        </div>
    </section>
  )
}

export default Contact