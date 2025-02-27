import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import PlainButton from "../Button/PlainButton";

const Header = ({isOpen}) => {
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

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(headerRef.current, {
  //       y: -20,
  //       // opacity: 0,
  //       delay: 0.1,
  //       duration: 1.5
  //     })
  //   })
  //   return () => ctx.revert;
  // }, [])

  return (
    !isOpen?(

    <header className="fixed top-0 left-0 w-full z-[100] header">
      <div className={`transition-all ease duration-500 ${isHidden ? "-translate-y-full" : "translate-y-0 header-glassmorphism" }`}>
      <div
        className={`h-fit w-full flex items-center justify-between px-[5vw] py-[1.5vw]`} ref={headerRef}
      >
        <div className="w-[10.5vw] h-[3.2vw] relative">
          <Image src="/assets/icons/logo.svg" fill alt="hiveminds-logo" />
        </div>
        <div className="flex items-center justify-center gap-[2vw] text-[0.94vw] montreal font-medium uppercase">
          <div>
            <ul className="flex items-center justify-between gap-[1.5vw]">
            <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"} className="relative link-line" prefetch={false}>
                  Who We Are
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 group-hover:rotate-[-180deg] ease-in-out transition-all duration-700"
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
                <span className="w-fit h-0 top-[80%] overflow-hidden absolute group-hover:h-[8vw] rounded-[0.5vw] ease-in-out transition-all duration-700 block">
                <ul className="flex flex-col bg-white shadow-lg p-2 px-0 mt-2 rounded-[0.5vw] w-[7.5vw] top-full pointer-events-auto">
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>About 1</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>About 2</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>About 3</Link>
                  </li>
                </ul>
                </span>
              </li>
              <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"} className="relative link-line" prefetch={false}>
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
                <span className="w-fit h-0 top-[80%] overflow-hidden absolute group-hover:h-[8vw] rounded-[0.5vw] ease-in-out transition-all duration-700 block">

                <ul className=" flex flex-col bg-white shadow-lg p-2 mt-2 px-0 rounded-[0.5vw] w-[7.5vw] top-full pointer-events-auto">
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
                </span>
              </li>
              <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                <Link href={"#"} className="relative link-line" prefetch={false}>
                  Our Impact
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3  group-hover:rotate-[-180deg] ease-in-out transition-all duration-700"
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
                <span className="w-fit h-0 top-[80%] overflow-hidden absolute group-hover:h-[8vw] rounded-[0.5vw] ease-in-out transition-all duration-700 block">
                <ul className="flex flex-col bg-white shadow-lg p-2 px-0 mt-2 rounded-[0.5vw] w-[7.5vw] top-full  pointer-events-auto">
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Impact 1</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Impact 2</Link>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100">
                    <Link href="#" prefetch={false}>Impact 3</Link>
                  </li>
                </ul>
                </span>
              </li>


              <li className="relative group flex items-center gap-1 cursor-pointer">
                <Link href={"#"} className="link-line" prefetch={false}>
                  Careers
                </Link>
              </li>
             
            </ul>
          </div>
          <div>
            <PlainButton link={"#"} text={"Work with us"} data-btn-blue />
          </div>
        </div>
      </div>
      </div>
    </header>
    ):(<>
    </>)
  );
};

export default Header;
