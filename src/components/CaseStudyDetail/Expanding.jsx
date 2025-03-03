import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const Expanding = ({ content }) => {
    return (
        <section className='w-screen h-full py-[5vw]'>
            <div className='container-lg flex justify-between'>
                <div className='w-[55%]'>
                    <h2 className='heading-2 w-[70%] fadeup'>
                        {content.subtitle1}
                        <span className='text-primary fadeup'> {content.subtitle2} </span>
                    </h2>
                    
                    <div className='w-[80%] fadein' dangerouslySetInnerHTML={{ __html: content.intro }} />
                    <span className='w-[120%] h-[1.5px] bg-black block mt-[2vw]'></span>

                    <div className='py-[1vw]'>
                        {content.features?.map((feature, index) => (
                            <React.Fragment key={index}>
                                <div className='fadein' dangerouslySetInnerHTML={{ __html: feature }} />
                                <span className='w-[120%] h-[1.5px] bg-black block my-[1vw]'></span>
                            </React.Fragment>
                        ))}
                    </div>


                    <div className='py-[4vw]'>
                        <h2 className='heading-2 w-[80%] fadeup'>Problem <span className='text-primary'> Statement </span></h2>
                        <div className='fadein' dangerouslySetInnerHTML={{ __html: content.problem }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw]'></span>
                    </div>

                    <div className='py-[4vw]'>
                        <h2 className='heading-2 w-[80%] fadeup'>Our<span className='text-primary'> Approach </span></h2>
                        <div className='fadein' dangerouslySetInnerHTML={{ __html: content.approach }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw]'></span>
                    </div>

                    <div className='py-[4vw]'>
                        <h2 className='heading-2 w-[80%] fadeup'>Impact </h2>
                        <div className='fadein' dangerouslySetInnerHTML={{ __html: content.impact }} />
                        <span className='w-[60%] h-[1.5px] bg-black absolute mt-[3vw]'></span>
                    </div>

                    <div className='py-[4vw] w-screen '>
                        <h2 className='heading-2 w-[80%] fadeup'>More Case <span className='text-primary'> Studies </span> </h2>
                        <div className='w-full flex justify-between'>
                            <p className='text-[1.2vw] mt-[2vw] w-[40%] fadeup'>Discover our accolades and industry recognition that highlight our commitment to excellence.</p>
                            <div className='w-[20%] '>
                                <PrimaryButton text={"All Case Studies"} href={"/our-impact"} className='fadein' />
                            </div>
                        </div>
                        <div className='w-full flex pt-[5vw] pb-[3vw] gap-[1vw]'>
                            <Link href={"/dominos-case-study"} >
                                <div className='relative fadein'>
                                    <Image src="/assets/images/impact/dominos-listing.png" height={450} width={450} alt='dominos' className='rounded-[1.5vw]' />
                                    <div className='absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[0.5vw]'>
                                        <p className='text-white text-[2.5vw] font-medium montreal'>Dominos</p>
                                        <Image src={"/assets/icons/right-arrow-white.svg"} height={20} width={20} alt='right-arrow' />
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/flydubai-case-study"}>
                                <div className='relative fadein'>
                                    <Image src="/assets/images/impact/flydubai-listing.png" height={450} width={450} alt='flydubai' className='rounded-[1.5vw]' />
                                    <div className='absolute bottom-[10%] left-[10%] flex items-center justify-between gap-[0.5vw]'>
                                        <p className='text-white text-[2.5vw] font-medium montreal'>Flydubai</p>
                                        <Image src={"/assets/icons/right-arrow-white.svg"} height={20} width={20} alt='right-arrow' />
                                    </div>
                                </div>
                            </Link>

                            <Link href={"/flipkart-healthplus-case-study"}>
                                <div className='relative fadein'>
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

                <div className='w-[20%]'>
                    <div className='py-[1vw]'>
                        <p className='content fadeup'> Industry:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadeup'>{content.industry}</p>
                    </div>
                    <div className='py-[1vw]'>
                        <p className='content fadeup'> Service:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadeup'>{content.service}</p>
                    </div>
                    <div className='py-[1vw]'>
                        <p className='content fadeup'>Category:</p>
                        <p className='text-[1.5vw] font-bold py-[0.5vw] fadeup'>{content.category}</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Expanding
