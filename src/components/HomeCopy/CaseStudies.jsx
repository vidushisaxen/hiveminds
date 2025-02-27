import React, { useEffect } from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'
import gsap from 'gsap'


const CaseStudies = () => {
    useEffect(()=>{
     const ctx = gsap.context(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".card-container",
                start:"top top",
                end:"+=3000 bottom",
                pin:true,
                scrub:true,
            }
        })
        tl.from(".card-1",{
            top:"90%",
            ease:"none",
            delay:-0.5

        })
        .to(".card-2",{
            top:"10%",
            ease:"none",
        })
        .to(".card-1",{
            scale:0.9,
            top:"0%",
            delay:-0.5,
            ease:"none"
        })
        .to(".card-3",{
            top:"10%",
            ease:"none"
        })
        .to(".card-2",{
            scale:0.95,
            top:"5%",
            delay:-0.5,
            ease:"none"
        })

     })
     return()=>ctx.revert();

    },[])
  return (
    <section className='w-screen h-full py-[5%]' id='casestudy'>
        <div className='w-full container-lg h-fit flex justify-between items-end'>
            <div  className='flex flex-col gap-[1vw]'>
              <h2 className='!text-[5.2vw] font-medium heading-2 montreal headinganim'>
              Our Case Studies

              </h2>
              <p data-para-anim className='content !text-[1.4vw] !font-medium pl-[0.5vw]'>
              Success Stories Scaling Our Clients Across Industries

              </p>
            </div>
            <div className='h-full flex justify-end items-end'>

            <PrimaryButton text={"All Case Study"} href={"#"}/>
            </div>

        </div>
        <div className='container-lg h-screen overflow-hidden relative card-container'>
            <div className='w-[90vw] h-[45vw] rounded-[2.5vw] bg-[#203538] p-[5vw] flex justify-between absolute top-[10%] card-1 left-[50%] translate-x-[-50%]'>
                <div className='w-[60%] h-full rounded-[3vw] overflow-hidden'>
                    <Image src={"/assets/images/homeCopy/big-basket-casestudy.png"} width={700} height={400} className='object-cover w-full h-full' />

                </div>
                <div className='w-[35%] text-white'>
                    <h3 className='text-[4vw] font-normal montreal '>
                         Big Basket
                    </h3>
                    <p className='text-[1.4vw] '>

                    </p>

                </div>

            </div>
            <div className='w-[90vw] h-[45vw] rounded-[2.5vw] bg-[#07293F] p-[5vw] flex justify-between absolute top-[100%] card-2 left-[50%] translate-x-[-50%]'>
                <div className='w-[60%] h-full rounded-[3vw] overflow-hidden'>
                    <Image src={"/assets/images/homeCopy/dominos-casestudy.png"} width={700} height={400} className='object-cover w-full h-full' />

                </div>
                <div className='w-[35%] text-white'>
                    <h3 className='text-[4vw] font-normal montreal '>
                         Dominos
                    </h3>
                    <p className='text-[1.4vw] '>

                    </p>

                </div>

            </div>
            <div className='w-[90vw] h-[45vw] rounded-[2.5vw] bg-[#085C62] p-[5vw] flex justify-between absolute top-[100%] card-3 left-[50%] translate-x-[-50%]'>
                <div className='w-[60%] h-full rounded-[3vw] overflow-hidden'>
                    <Image src={"/assets/images/homeCopy/portea-casestudy.png"} width={700} height={400} className='object-cover w-full h-full' />

                </div>
                <div className='w-[35%] text-white'>
                    <h3 className='text-[4vw] font-normal montreal '>
                         Portea
                    </h3>
                    <p className='text-[1.4vw] '>

                    </p>

                </div>

            </div>

        </div>
      
    </section>
  )
}

export default CaseStudies
