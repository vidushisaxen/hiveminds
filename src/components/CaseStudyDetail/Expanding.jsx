
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Expanding = ({ content }) => {
    useEffect(()=>{
        if(globalThis.innerWidth>1024){

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
                
                return()=>ctx.revert()
    
            })
            
        }
    },[])
    return (
        <section className='w-screen h-full py-[5vw] overflow-hidden' id='casestudy-detail'>
            <div className='container-lg flex justify-between mobile:flex-col'>

                <div className='w-[55%] mobile:order-1 mobile:w-full mobile:pt-[15vw]'>
                    <h2 className='heading-2 w-[70%] fadein mobile:w-full'>
                        {content.subtitle1}
                        <span className='text-primary fadein'> {content.subtitle2} </span>
                    </h2>
                    
                    <div className='w-[80%] fadein mobile:w-full text-[1.5vw] mobile:text-[5vw]' dangerouslySetInnerHTML={{ __html: content.intro }} />
                    <span className='w-[120%] h-[1.5px] bg-black block mt-[2vw] lineDraw mobile:w-full mobile:h-[1px] mobile:my-[7vw]'></span>

                    <div className='py-[1vw]'>
                        {content.features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                <div className='fadein text-[1.5vw] mobile:text-[5vw]' dangerouslySetInnerHTML={{ __html: feature }} />
                                <span className='w-[120%] h-[1.5px] bg-black block my-[1vw] lineDraw mobile:w-full mobile:my-[7vw] mobile:h-[1px]'></span>
                            </React.Fragment>
                        ))}
                    </div>


                    <div className='py-[4vw] mobile:py-[7vw]'>
                        <h2 className='heading-2 w-[80%] fadein mobile:w-full'>Problem <span className='text-primary'> Statement </span></h2>
                        <div className='fadein text-[1.5vw] mobile:text-[5vw] mobile:mt-[7vw]' dangerouslySetInnerHTML={{ __html: content.problem }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw mobile:w-[92%] mobile:my-[7vw] mobile:h-[1px]'></span>
                    </div>

                    <div className='py-[4vw] mobile:mt-[7vw]'>
                        <h2 className='heading-2 w-[80%] fadein mobile:w-full'>Our<span className='text-primary'> Approach </span></h2>
                        <div className='fadein text-[1.5vw] mobile:text-[5vw] mobile:mt-[7vw]' dangerouslySetInnerHTML={{ __html: content.approach }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw mobile:w-[92%] mobile:h-[1px] mobile:mt-[8vw]'></span>
                    </div>

                    <div className='py-[4vw] mobile:mt-[7vw]'>
                        <h2 className='heading-2 w-[80%] fadein'>Impact </h2>
                        <div className='fadein text-[1.5vw] mobile:text-[5vw] mobile:mt-[7vw]' dangerouslySetInnerHTML={{ __html: content.impact }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw] lineDraw mobile:w-[92%] mobile:h-[1px] mobile:mt-[7vw]'></span>
                    </div>

                   
                </div>

                <div className='w-[20%] category mobile:w-full'>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '> Industry:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw]'>{content.industry}</p>
                    </div>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '> Service:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw]'>{content.service}</p>
                    </div>
                    <div className='py-[1vw] mobile:py-[2vw]'>
                        <p data-para-anim className='content '>Category:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadein mobile:text-[6.5vw]'>{content.category}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Expanding
