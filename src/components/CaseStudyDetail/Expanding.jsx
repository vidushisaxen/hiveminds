import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import PrimaryButton from '../Button/PrimaryButton'
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
                    end:"78% bottom",
                 
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

                    <div className='py-[4vw] w-screen more-casestudies'>
                        <h2 className='heading-2 w-[80%] fadein'>More Case <span className='text-primary'> Studies </span> </h2>
                        <div className='w-full flex justify-between'>
                            <p className='text-[1.2vw] mt-[2vw] w-[40%] fadein'>Discover our accolades and industry recognition that highlight our commitment to excellence.</p>
                            <div className='w-[20%] '>
                                <PrimaryButton text={"All Case Studies"} href={"/our-impact"} className='fadein' />
                            </div>
                        </div>
                        <div className='w-full flex pt-[5vw] pb-[3vw] gap-[1vw]'>
                            <Link href={"/casestudies/dominos-case-study"} >
                                <div className='relative casestudies'>
                                    <Image src="/assets/images/impact/dominos-listing.png" height={450} width={450} alt='dominos' className='rounded-[1.5vw]' />
                                    <div className='absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[0.5vw]'>
                                        <p className='text-white text-[2.5vw] font-medium montreal'>Dominos</p>
                                        <Image src={"/assets/icons/right-arrow-white.svg"} height={20} width={20} alt='right-arrow' />
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/casestudies/flydubai-case-study"}>
                                <div className='relative casestudies'>
                                    <Image src="/assets/images/impact/flydubai-listing.png" height={450} width={450} alt='flydubai' className='rounded-[1.5vw]' />
                                    <div className='absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[0.5vw]'>
                                        <p className='text-white text-[2.5vw] font-medium montreal'>Flydubai</p>
                                        <Image src={"/assets/icons/right-arrow-white.svg"} height={20} width={20} alt='right-arrow' />
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/casestudies/flipkart-healthplus-case-study"}>
                                <div className='relative casestudies'>
                                    <Image src="/assets/images/impact/flipkart-healthplus-listing.png" height={450} width={450} alt='flipkart' className='rounded-[1.5vw]' />
                                    <div className='absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[0.5vw]'>
                                        <p className='text-white text-[2.5vw] font-medium montreal'>Flipkart Health+</p>
                                        <Image src={"/assets/icons/right-arrow-white.svg"} height={20} width={20} alt='right-arrow' />
                                    </div>
                                </div>
                            </Link>
                        </div>
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
