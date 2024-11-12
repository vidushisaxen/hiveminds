import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section id='footer'>
        <div className='w-screen h-full flex flex-col items-center justify-center bg-[#134BD6] py-[5vw] pt-[8vw] gap-[4vw] '>
        <div className='w-full h-full flex items-center justify-center gap-[10vw] text-white'>
            <div className='w-[30%] h-full flex flex-col items-start justify-start gap-[2vw]'>
                <p className='uppercase content-white'>Our Office Address</p>
                <div>
                    <p className='content-white'> Bengaluru (HQ) : No. 11, Seventh Floor, Global Tech Park, O Shaughnessy Rd, Langford Town, Langford Gardens, Bengaluru, Karnataka 560025</p>
                </div>
                <div>
                    <p className='content-white'>Mumbai : Office no 301 & 302, 3rd Floor, 
                    The Eagle&apos;s Flight Building, Gundavali, Andheri East, Andheri, Mumbai, Maharashtra 400047</p>
                </div>
                <div>
                    <p className='content-white'>Gurgaon : Spring House Coworking, 4th Floor,JMD Regent Arcade, Haryana 122002</p>
                </div>
                 
                 <div className='h-[20vw] w-[30vw] relative'>
                    <Image src="/assets/images/homepage/map.png" fill alt="map" className="rounded-[12px]"/>

                 </div>
            </div>
            <div className='w-[50%] h-full flex flex-col items-start justify-start gap-[4vw]'>
                <div className='flex items-start justify-between w-full'>
                    <div>
                        <p className='uppercase content-white'>Services</p>
                        <ul>
                           <Link href={"#"}> <li className='content-white'>Search Engine Optimization</li></Link>
                           <Link href={"#"}> <li className='content-white'>Branding</li></Link>
                            <Link href={"#"}><li className='content-white'>Marketplace</li></Link>
                            <Link href={"#"}><li className='content-white'>Analytics</li></Link>
                            <Link href={"#"}><li className='content-white'>Pay-Per-Click</li></Link>
                            <Link href={"#"}><li className='content-white'>Social Media Management</li></Link>
                            <Link href={"#"}><li className='content-white'>Creative & Content</li></Link>
                            <Link href={"#"}><li className='content-white'>Strategy & Consulting</li></Link>

                        </ul>
                    </div>
                    <div>
                        <p className='uppercase content-white'>Industries</p>
                        <ul>
                            <Link  href={"#"}><li className='content-white'>Healthcare</li></Link>
                            <Link href={"#"}><li className='content-white'>Automobiles</li></Link>
                            <Link href={"#"}><li className='content-white'>Wearables</li></Link>
                            <Link href={"#"}><li className='content-white'>NBFC</li></Link>
                            <Link href={"#"}><li className='content-white'>CDIT</li></Link>
                            <Link href={"#"}><li className='content-white'>BFSI</li></Link>
                        </ul>
                    </div>
                    <div>
                        <p className='uppercase content-white'>Quick Links</p>
                        <ul>
                            <Link href={"#"}><li className='content-white'>About Us</li></Link>
                            <Link href={"#"}><li className='content-white'>Career</li></Link>
                            <Link href={"#"}><li className='content-white'>Blogs</li></Link>
                            <Link href={"#"}><li className='content-white'>News & Events</li></Link>
                            <Link href={"#"}><li className='content-white'>Tools We Use</li></Link>
                            <Link href={"#"}><li className='content-white'>School of Digital</li></Link>
                            <Link href={"#"}><li className='content-white'>Contact Us</li></Link>
                        </ul>
                    </div>

                </div>
                <div className='w-full'>
                    <p className='uppercase content-white '>subscribe to get latest insights</p>
                    <input type='email' placeholder='Email Address*' className='w-full border-b-[2px] border-white bg-transparent mt-[2vw] p-[1vw]'/>
                </div>

                <div className='w-full flex items-start justify-center gap-[2vw] flex-col'>
                <p className='uppercase content-white '>follow us</p>
                <div className='flex items-center justify-center gap-[1vw]'>
                <div className='w-[3vw] h-[3vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/facebook.svg" fill alt='facebook' className='p-[0.8vw]'/>
                </div>
                <div className='w-[3vw] h-[3vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/linkedin.svg" fill alt='facebook' className='p-[0.8vw]'/>
                </div>
                <div className='w-[3vw] h-[3vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/twitter.svg" fill alt='facebook' className='p-[0.8vw]'/>
                </div>
                <div className='w-[3vw] h-[3vw] border border-white rounded-full relative'>
                    <Image src="/assets/icons/instagram.svg" fill alt='facebook' className='p-[0.8vw]'/>
                </div>
                </div>

                </div>
            </div>
        </div>
        <div>
        <span className='w-[95vw] h-[2px] bg-white block '></span>
        <div className='w-full flex items-center justify-between mt-[1vw]'>
            <Link href={"#"}><p className='content-white'>By: Enigma </p></Link>
            <p className='content-white'>© 2024 HiveMinds Innovative Market Solutions Pvt. Ltd. All rights reserved.</p>

        </div>
        </div>

            </div>

    </section>
  )
}

export default Footer