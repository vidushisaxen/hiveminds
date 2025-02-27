import Image from 'next/image'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { SplitInLineWord, SplitInLine} from "../splitTextUtils";
import {useLenis} from "lenis/react"
import CustomEase from 'gsap/dist/CustomEase'

const Hero = () => {
  const lenis = useLenis();

  useEffect(()=>{
    lenis&&lenis.stop()
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline()
    
      tl.to(".hero-img-cover",{
        scaleY:0,
        delay:0.5,
        
        duration:1,
        ease:CustomEase.create("", ".41,0,0,1.04"),
        // ease:"cubic-bezier(0.68, -0.55, 0.27, 1.55)"
     
      })
      tl.to(".hero-img",{
        scale:1,
        borderRadius:"0px",
        delay:0.2,
        duration:1,
        ease:CustomEase.create("", ".41,0,0,1.04"),
        onComplete:()=>{
          lenis&&lenis.start();
        }
      })
       const headingAnim = document.querySelectorAll(".hero-heading");
            headingAnim.forEach((headingAnim)=>{
                SplitInLineWord(headingAnim);
                const headingWord = headingAnim.querySelectorAll(".word");
                gsap.from(headingWord,{
                    scrollTrigger: {
                        trigger: headingWord,
                        start: 'top 90%', 
                      },
                      opacity: 0,
                      delay:2,
                      yPercent:20,
                      filter: 'blur(8px)',
                      stagger:0.08,
                      duration:1
                });
            })
      gsap.to(".hero-img",{
        yPercent:30,
       
        scrollTrigger:{
          trigger:"#hero",
          start:"top top",
          scrub:true
        }
      })

    })
    return()=>ctx.revert()
  },[lenis])
  return (
    <section id='hero' className='w-screen h-screen relative flex justify-center items-center bg-white'>
        <div className='absolute top-0 left-0 w-screen h-screen overflow-hidden'>
          <div className='w-screen h-screen scale-[0.5] hero-img-cover bg-white absolute top-[30%] origin-top left-0 z-[3]'>

          </div>
            <Image src={"/assets/images/homeCopy/hero-img-1.png"} alt='hero-img-1' className='object-cover w-full h-full brightness-75  scale-[0.4] hero-img rounded-[2vw] ' width={1920} height={1080}/>

        </div>
        <h1 className='relative z-[1] w-[60%] text-[4vw] capitalize text-center text-white hero-heading'>
        Building customer experiences that help the world&apos;s leading brands go further

        </h1>
      
    </section>
  )
}

export default Hero
