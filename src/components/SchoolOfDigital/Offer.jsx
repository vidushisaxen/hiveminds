import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/images/schoolofdigital/offer-card-img.png'


const OfferCard=({title,duration})=>{
    return(
       <div className='rounded-[1.5vw] shadow-md  w-[29vw] h-full fadeup font-body'>
       <div className=''>
        <Image src={img} height={390} width={570} alt='offer-card-img' className='rounded-[1.5vw] w-[30vw]'/>
       </div>
       <div className='p-[1.5vw] h-[12vw] flex flex-col justify-between'>
       <p className='text-[2vw] font-medium'>{title}</p>
       <p className='content'>Duration : {duration}</p>
       </div>
       </div>
    )
}

const Offer = () => {
  return (
    <section className='h-full w-screen py-[5vw]'>
    <div className='w-full h-full container-lg'>
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
            <h2 data-heading-anim className="heading-2 headinganim">
               What We
                <span className="blue-text"> Offer</span>
            </h2>
            <p data-para-anim className="content w-[65%] text-center fadein">
            We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high-quality. We provide effective strategies that are aligned with your long-term business goals.
            </p>
        </div>
        <div className='w-full h-full flex flex-wrap items-center justify-between gap-[1vw] gap-y-[2vw]'>
            <OfferCard title={"Advanced Digital Marketing"} duration={"3 months"}/>
            <OfferCard title={"Advanced Search Engine Optimization"} duration={"3 months"}/>
            <OfferCard title={"Marketplace Ads-Amazon & Flipkart"} duration={"3 months"}/>
            <OfferCard title={"Google Ads"} duration={"3 months"}/>
            <OfferCard title={"Facebook Ads"} duration={"3 months"}/>
            <OfferCard title={"Marketing Analytics"} duration={"3 months"}/>
        </div>
        </div>
        </section>
  )
}

export default Offer