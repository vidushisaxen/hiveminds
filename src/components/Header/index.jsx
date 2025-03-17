import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {useLenis} from 'lenis/react'
import PlainButton from "../Button/PlainButton";
import img from "../../../public/assets/images/header/header-img.png";
import MobileMenu from "./MobileMenu";

const Header = ({ isOpen }) => {
  const lenis = useLenis()
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const[openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const openHam =()=>{
   setOpenMenu(prev=>!prev)
   

  }
  useEffect(()=>{
   if(openMenu){
    lenis&&lenis.stop()
    

   }
   else{
    lenis&&lenis.start()
   }
  },[openMenu])

  return !isOpen ? (
    <header
      className={`fixed top-0 left-0 w-full z-[100] header transition-all ease duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0 header-glassmorphism" } ${openMenu?"!translate-y-0":""}`}
    >
      <div className={``}>
        <div
          className={`h-fit w-full flex items-center justify-between px-[5vw] py-[1.5vw] tablet:py-[3vw]`}
          ref={headerRef}
        >
          <Link href={"/"}>
            <div className="w-[10.5vw] h-[3.2vw] relative mobile:h-[17vw] mobile:w-[30vw] tablet:w-[20vw] tablet:h-[7vw]">
              <Image src="/assets/icons/logo.svg" fill alt="hiveminds-logo" />
            </div>
          </Link>
          <div className="flex items-center justify-center gap-[2vw] text-[0.94vw] montreal font-medium uppercase mobile:hidden tablet:hidden">
            <div>
              <ul className="flex items-center justify-between gap-[1.5vw]">
                <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                  <Link
                    href={"/about-us"}
                    className="relative link-line"
                    prefetch={false}
                  >
                    Who We Are
                  </Link>
                </li>
                <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                  <Link
                    href={"#"}
                    className="relative link-line"
                    prefetch={false}
                  >
                    What We do
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 group-hover:rotate-[-180deg] ease-in-out transition-all duration-700 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div className="w-[97.5vw] left-[-53vw] bg-white h-0  top-[4.5vw] px-[3vw]  overflow-hidden rounded-[1.5vw] absolute group-hover:h-[40vw]  ease-in-out transition-all duration-700 block bgblur">
                    <div className="py-[5vw] flex justify-between gap-[2vw]">
                      <div>
                        <Link
                          href="/services"
                          prefetch={false}
                          className="uppercase text-primary link-line text-[1.2vw]"
                        >
                          Services
                        </Link>
                        <ul className=" flex flex-col  p-2 mt-2 px-0 rounded-[0.5vw] normal-case top-full pointer-events-auto">
                          <li className="py-2  content  ">
                            <Link
                              href="/services/performance-marketing"
                              prefetch={false}
                              className="link-line"
                            >
                              Performance Marketing
                            </Link>
                          </li>
                          <li className="py-1 content ">
                            <Link
                              href="/services/search-engine-optimization"
                              prefetch={false}
                              className="link-line"
                            >
                              SEO
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/retail-marketing"
                              prefetch={false}
                              className="link-line"
                            >
                              Retail Marketing
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/creative-content-management"
                              prefetch={false}
                              className="link-line"
                            >
                              Creative & Content
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/online-reputation-management"
                              prefetch={false}
                              className="link-line"
                            >
                              ORM
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/consumer-insights"
                              prefetch={false}
                              className="link-line"
                            >
                              Consumer Insights
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/influencer-marketing"
                              prefetch={false}
                              className="link-line"
                            >
                              Influencer Marketing
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/affiliate-marketing"
                              prefetch={false}
                              className="link-line"
                            >
                              Affiliate Marketing
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/branding"
                              prefetch={false}
                              className="link-line"
                            >
                              Branding & Programatic Ads
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/data-analytic"
                              prefetch={false}
                              className="link-line"
                            >
                              Data Analysis
                            </Link>
                          </li>{" "}
                          <li className="py-1 content ">
                            <Link
                              href="/services/social-media-marketing"
                              prefetch={false}
                              className="link-line"
                            >
                              Social Media
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <span className="bg-black h-[32vw] w-[1px] " />
                      <div>
                        <Link
                          href="/industry"
                          prefetch={false}
                          className="uppercase text-primary link-line text-[1.2vw]"
                        >
                          Industries
                        </Link>
                        <ul className=" flex flex-col  p-2 mt-2 px-0 rounded-[0.5vw] normal-case top-full pointer-events-auto">
                          <li className="py-2  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              FMCG & Beauty
                            </Link>
                          </li>
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Health & Wellness
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              BFSI - Fintech
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              E-Commerce
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Fashion & Lifestyle
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Electronics
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Consumer Durables
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Telecom
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Automobiles
                            </Link>
                          </li>{" "}
                          <li className="py-1  content ">
                            <Link
                              href="#"
                              prefetch={false}
                              className="link-line"
                            >
                              Travel & Tourism
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="w-[18vw] flex flex-col gap-[1vw]">
                        <Image
                          src={img}
                          height={360}
                          width={360}
                          alt="header-img"
                          className="rounded-[1.2vw]"
                        />
                        <Link
                          href="/solutions"
                          prefetch={false}
                          className="uppercase text-primary mx-[1vw]  link-line text-[1.2vw] flex items-center gap-[0.5vw]"
                        >
                          Solutions
                          <span>
                            <Image
                              src="/assets/icons/blue-arrow.svg"
                              width={15}
                              height={15}
                              alt="arrow"
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="w-[18vw] flex flex-col gap-[1vw]">
                        <Image
                          src={img}
                          height={360}
                          width={360}
                          alt="header-img"
                          className="rounded-[1.2vw]"
                        />
                        <Link
                          href="/our-ips"
                          prefetch={false}
                          className=" text-primary mx-[1vw] link-line text-[1.2vw] flex items-center gap-[0.5vw] "
                        >
                          IPs
                          <span>
                            <Image
                              src="/assets/icons/blue-arrow.svg"
                              width={15}
                              height={15}
                              alt="arrow"
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="w-[18vw] flex flex-col gap-[1vw]">
                        <Image
                          src={img}
                          height={360}
                          width={360}
                          alt="header-img"
                          className="rounded-[1.2vw]"
                        />
                        <Link
                          href="/school-of-digital"
                          prefetch={false}
                          className="uppercase mx-[1vw] text-primary link-line text-[1.2vw] flex items-center gap-[0.5vw] "
                        >
                          School of Digital
                          <span>
                            <Image
                              src="/assets/icons/blue-arrow.svg"
                              width={15}
                              height={15}
                              alt="arrow"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                </li>
                <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                  <Link
                    href={"/our-impact"}
                    className="relative link-line"
                    prefetch={false}
                  >
                    Our Impact
                  </Link>
                </li>
                <li className="relative group flex items-center gap-1 cursor-pointer">
                  <Link href={"/blog"} className="link-line" prefetch={false}>
                    What&apos;s Buzzing
                  </Link>
                </li>

                <li className="relative group flex items-center gap-1 cursor-pointer">
                  <Link
                    href={"/careers"}
                    className="link-line"
                    prefetch={false}
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <PlainButton
                link={"/contact-us"}
                text={"Work with us"}
                data-btn-blue
              />
            </div>
          </div>
          <div id="nav-icon3" className={`hidden mobile:block tablet:block fixed z-[999] ${openMenu?"open":""}`} onClick={openHam}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
     <MobileMenu openMenu={openMenu}/>
    </header>
  ) : (
    <></>
  );
};

export default Header;
