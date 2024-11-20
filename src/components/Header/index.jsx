import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import PlainButton from "../Button/PlainButton";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        opacity: 0,
        delay: 4.5,
        duration: 1
      })
    })
    return () => ctx.revert;
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0 glassmorphism"
        }`}
    >
      <div
        className={`h-fit w-full flex items-center justify-between px-[5vw] py-[2vw]`} ref={headerRef}
      >
        <div className="w-[10.5vw] h-[3.2vw] relative">
          <Image src="/assets/icons/logo.svg" fill alt="hiveminds-logo" />
        </div>
        <div className="flex items-center justify-center gap-[2vw] text-[0.94vw] montreal font-medium uppercase">
          <div>
            <ul className="flex items-center justify-between gap-[1.5vw]">
              <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"} className="relative link-line" prefetch={false}>
                  Services
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
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
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 mt-2 rounded-lg w-[12vw] top-full pointer-events-auto">
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Service 1</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Service 2</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Service 3</Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link href={"#"} className="link-line" prefetch={false}>
                  Solutions
                </Link>
              </li>
              <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"} className="link-line" prefetch={false}>
                  Industries
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
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
                <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg p-2 mt-2 rounded-lg w-[12vw] top-full pointer-events-auto">
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" className="" prefetch={false}>
                      Industry 1
                    </Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Industry 2</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Industry 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"#"} className="link-line" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <span className="h-[1px] text-black bg-black w-[2vw] block rotate-90"></span>
              </li>
              <li>
                <Link href={"#"} className="link-line" prefetch={false}>
                  CSR
                </Link>
              </li>
              <li>
                <Link href={"#"} className="link-line" prefetch={false}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"#"} className="link-line" prefetch={false}>
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <PlainButton link={"#"} text={"Work with us"} data-btn-blue />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
