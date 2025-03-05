
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Expanding = ({ content }) => {
    useEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.to(".category",{
                ease:"none",
                scrollTrigger:{
                    trigger:"#casestudy-detail",
                    start:"top top",
                    end:"75% top",
                 
                    pin:".category"
                }
            })
            gsap.from(".casestudies",{
                y:150,
                opacity:0,
                stagger:0.2,
                duration:2,
                ease:"power3.out",
                scrollTrigger:{
                  trigger:".more-casestudies",
                  start:"top 60%"
                }
               })
            

        })
        return()=>ctx.revert()
    },[])
    return (
        <section className='w-screen h-full py-[5vw]' id='casestudy-detail'>
            <div className='container-lg flex justify-between'>

                <div className='w-[55%]'>
                    <h2 className='heading-2 w-[70%] fadein'>
                        {content.subtitle1}
                        <span className='text-primary fadein'> {content.subtitle2} </span>
                    </h2>
                    
                    <div className='w-[80%] fadein' dangerouslySetInnerHTML={{ __html: content.intro }} />
                    <span className='w-[120%] h-[1.5px] bg-black block mt-[2vw] lineDraw'></span>

                    <div className='py-[1vw]'>
                        {content.features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                <div className='fadein' dangerouslySetInnerHTML={{ __html: feature }} />
                                <span className='w-[120%] h-[1.5px] bg-black block my-[1vw] lineDraw'></span>
                            </React.Fragment>
                        ))}
                    </div>


                    <div className='py-[4vw]'>
                        <h2 className='heading-2 w-[80%] fadein'>Problem <span className='text-primary'> Statement </span></h2>
                        <div className='fadein' dangerouslySetInnerHTML={{ __html: content.problem }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw'></span>
                    </div>

                    <div className='py-[4vw]'>
                        <h2 className='heading-2 w-[80%] fadein'>Our<span className='text-primary'> Approach </span></h2>
                        <div className='fadein' dangerouslySetInnerHTML={{ __html: content.approach }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw'></span>
                    </div>

                    <div className='py-[4vw]'>
                        <h2 className='heading-2 w-[80%] fadein'>Impact </h2>
                        <div className='fadein' dangerouslySetInnerHTML={{ __html: content.impact }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw'></span>
                    </div>

                   
                </div>

                <div className='w-[20%] category'>
                    <div className='py-[1vw]'>
                        <p data-para-anim className='content '> Industry:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein'>{content.industry}</p>
                    </div>
                    <div className='py-[1vw]'>
                        <p data-para-anim className='content '> Service:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein'>{content.service}</p>
                    </div>
                    <div className='py-[1vw]'>
                        <p data-para-anim className='content '>Category:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein'>{content.category}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Expanding
