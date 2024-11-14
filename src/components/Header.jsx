import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './Button/PrimaryButton';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(scrollPosition > currentScroll || currentScroll < 10);
      setScrollPosition(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <section id="header">
      <div
        className={`h-fit w-screen flex fixed top-0 left-0 z-[990] items-center justify-between px-[5vw] py-[2vw] bg-white/70 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-[10.5vw] h-[3.2vw] relative">
          <Image 
            src="/assets/icons/logo.svg"
            fill
            alt="hiveminds-logo"
          />
        </div>
        <div className="flex items-center justify-center gap-[2vw] text-[0.94vw] montreal font-medium uppercase">
          <div>
            <ul className="flex items-center justify-between gap-[1.5vw]">
              <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"} className="relative">Services</Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 mt-2 rounded-lg w-[12vw] top-full pointer-events-auto">
                  <li className="py-1 px-3 hover:bg-gray-100"><Link href="#">Service 1</Link></li>
                  <li className="py-1 px-3 hover:bg-gray-100"><Link href="#">Service 2</Link></li>
                  <li className="py-1 px-3 hover:bg-gray-100"><Link href="#">Service 3</Link></li>
                </ul>
              </li>
              
              <li className="relative group">
                <Link href={"#"}>Solutions</Link>
              </li>
              
              <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"}>Industries</Link>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 mt-2 rounded-lg w-[12vw] top-full pointer-events-auto">
                  <li className="py-1 px-3 hover:bg-gray-100"><Link href="#">Industry 1</Link></li>
                  <li className="py-1 px-3 hover:bg-gray-100"><Link href="#">Industry 2</Link></li>
                  <li className="py-1 px-3 hover:bg-gray-100"><Link href="#">Industry 3</Link></li>
                </ul>
              </li>
              
              <li><Link href={"#"}>About Us</Link></li>
              <li><span className="h-[1px] text-black bg-black w-[2vw] block rotate-90"></span></li>
              <li><Link href={"#"}>CSR</Link></li>
              <li><Link href={"#"}>Careers</Link></li>
              <li><Link href={"#"}>Resources</Link></li>
            </ul>
          </div>
          <div>
            <PrimaryButton link={"#"} text={"Work with us"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
