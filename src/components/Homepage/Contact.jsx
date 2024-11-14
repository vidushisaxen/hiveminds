import React, { useEffect } from 'react'
import Image from 'next/image'
import Contactform from './Contactform'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Contact = () => {
  // useEffect(()=>{
  //   let ctx = gsap.context(()=>{
  //        gsap.to("#contact",{
  //         yPercent:-100,
          
  //         ease:"none",
  //         scrollTrigger:{
  //           trigger:"#contact",
  //           start:"top top",
  //           end:"+=2000 top",
  //           // markers:true, 
  //           scrub:true
  //         }
  //        })
  //   })
  //   return()=>ctx.revert();
  // },[])
  return (
    <section id='contact' >
        <div className='w-screen h-full z-[10] relative container-lg py-[7%]'>
            <div className='w-full h-full flex gap-[10vw]'>
            <div className='w-[45%] flex flex-col gap-[2vw]'>
                <h2 className="heading-2 ">
                Looking to Drive <span className='blue-text'>Growth?</span>
                </h2>
                <p className="content w-[90%]">
                We&apos;re passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us.
                </p>
                <div className='flex mt-[4vw] items-center justify-center gap-[2vw]'>
                    <div className='h-[17.5vw] w-[16.5vw] relative rounded-[16px]'>
                        <Image src="/assets/images/homepage/contact-1.png" fill alt='contact' className='rounded-[16px]'/>

                    </div>
                    <div className='h-[17.5vw] w-[16.5vw] relative rounded-[16px]'>
                        <Image src="/assets/images/homepage/contact-2.png" fill alt='contact' className='rounded-[16px]'/>

                    </div>

                </div>
              </div>

              <div className='w-[50%] h-full'>
              <Contactform/>
              </div>
            </div>

            <div className="absolute h-[2vw] w-[2.2vw] top-[33%] left-[33%]">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[17%] left-[20%]">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>

        </div>
    </section>
  )
}

export default Contact