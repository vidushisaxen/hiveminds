import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Map from './Map'


const Footer = () => {
       
  return (
    <section id='footer'>
        <div className='w-screen h-full flex flex-col items-center justify-center bg-[#134BD6] py-[5vw] pb-[2vw] pt-[8vw] gap-[4vw]'>
        <div className='w-full h-full flex items-center justify-center gap-[10vw] text-white'>
            <div className='w-[30%] h-full flex flex-col items-start justify-start gap-[2vw]'>
                <p className='uppercase tracking-wider text-[1.16vw] text-white font-medium montreal'>Our Office Address</p>
                <div>
                    <p className='content-white underline'> Bengaluru (HQ) : No. 11, Seventh Floor, Global Tech Park, O Shaughnessy Rd, Langford Town, Langford Gardens, Bengaluru, Karnataka 560025</p>
                </div>
                <div>
                    <p className='content-white'>Mumbai : Office no 301 & 302, 3rd Floor, 
                    The Eagle&apos;s Flight Building, Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047</p>
                </div>
                <div>
                    <p className='content-white'>Gurgaon : Spring House Coworking, 4th Floor,JMD Regent Arcade, Haryana 122002</p>
                </div>
                 
                 <div className='h-[15vw] w-[25vw] relative rounded-[12px]'>
                    <Map/>
                 </div>
            </div>
            <div className='w-[50%] h-full flex flex-col items-start justify-start gap-[4vw]'>
                <div className='flex items-start justify-between w-full'>
                    <div className='space-y-[1.5vw]'>
                        <p className='uppercase tracking-wider text-[1.16vw] text-white font-medium montreal'>Services</p>
                        <ul className='text-[1.05vw] text-white montreal font-medium flex flex-col items-start justify-center gap-[0.5vw]'>
                           <Link href={"#"}> <li >Search Engine Optimization</li></Link>
                           <Link href={"#"}> <li >Branding</li></Link>
                            <Link href={"#"}><li >Marketplace</li></Link>
                            <Link href={"#"}><li >Analytics</li></Link>
                            <Link href={"#"}><li >Pay-Per-Click</li></Link>
                            <Link href={"#"}><li >Social Media Management</li></Link>
                            <Link href={"#"}><li >Creative & Content</li></Link>
                            <Link href={"#"}><li >Strategy & Consulting</li></Link>

                        </ul>
                    </div>
                    <div className='space-y-[1.5vw]'>
                        <p className='uppercase tracking-wider text-[1.16vw] text-white font-medium montreal'>Industries</p>
                        <ul className='text-[1.05vw] text-white montreal font-medium flex flex-col items-start justify-center gap-[0.5vw]'>
                            <Link  href={"#"}><li >Healthcare</li></Link>
                            <Link href={"#"}><li >Automobiles</li></Link>
                            <Link href={"#"}><li >Wearables</li></Link>
                            <Link href={"#"}><li >NBFC</li></Link>
                            <Link href={"#"}><li >CDIT</li></Link>
                            <Link href={"#"}><li >BFSI</li></Link>
                        </ul>
                    </div>
                    <div className='space-y-[1.5vw]'>
                        <p className='uppercase tracking-wider text-[1.16vw] text-white font-medium montreal'>Quick Links</p>
                        <ul className='text-[1.05vw] text-white montreal font-medium flex flex-col items-start justify-center gap-[0.5vw]'>
                            <Link href={"#"}><li >About Us</li></Link>
                            <Link href={"#"}><li >Career</li></Link>
                            <Link href={"#"}><li >Blogs</li></Link>
                            <Link href={"#"}><li >News & Events</li></Link>
                            <Link href={"#"}><li >Tools We Use</li></Link>
                            <Link href={"#"}><li >School of Digital</li></Link>
                            <Link href={"#"}><li >Contact Us</li></Link>
                        </ul>
                    </div>

                </div>
                <div className='w-full relative'>
                    <p className='uppercase tracking-wider text-[1.16vw] text-white font-medium montreal'>subscribe to get latest insights</p>
                    <input type='email' placeholder='Email Address*' className='w-full border-b-[2px] border-white bg-transparent mt-[0.5vw] p-[0.5vw] outline-none placeholder:text-white placeholder:text-[0.94vw]'/>
                    <div className='h-[0.98vw] w-[1vw] absolute right-[3%] bottom-[15%] cursor-pointer'>
                        <Image src="/assets/icons/top-right-arrow-white.svg" fill alt='top-right-arrow'/>

                    </div>
                </div>

                <div className='w-full flex items-start justify-center gap-[2vw] flex-col'>
                <p className='uppercase tracking-wider text-[1.16vw] text-white font-medium montreal'>follow us</p>
                <div className='flex items-center justify-center gap-[1vw]'>
                    <Link href={"#"}>
                <div className='w-[2.4vw] h-[2.4vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/facebook.svg" fill alt='facebook' className='p-[0.6vw]'/>
                </div>
                </Link>
                <Link href={"#"}>
                <div className='w-[2.4vw] h-[2.4vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/linkedin.svg" fill alt='facebook' className='p-[0.6vw]'/>
                </div>
                </Link>
                <Link href={"#"}>
                <div className='w-[2.4vw] h-[2.4vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/twitter.svg" fill alt='facebook' className='p-[0.6vw]'/>
                </div>
                </Link>
                <Link href={"#"}>
                <div className='w-[2.4vw] h-[2.4vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/instagram.svg" fill alt='facebook' className='p-[0.6vw]'/>
                </div>
                </Link>
                </div>

                </div>
            </div>
        </div>
        <div>
        <span className='w-[95vw] h-[2px] bg-white block '></span>
        <div className='w-full flex items-center justify-between mt-[2vw]'>
            <Link href={"#"}><p className='text-white text-[0.94vw] tracking-wide'>By: Enigma </p></Link>
            <p className='text-white text-[0.94vw] tracking-wide'>© 2024 HiveMinds Innovative Market Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
        </div>

            </div>

    </section>
  )
}

export default Footer