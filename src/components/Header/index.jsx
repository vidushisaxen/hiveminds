import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import PlainButton from "../Button/PlainButton";

const Header = ({ isOpen }) => {
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

  return !isOpen ? (
    <header className="fixed top-0 left-0 w-full z-[100] header">
      <div
        className={`transition-all ease duration-500 ${
          isHidden ? "-translate-y-full" : "translate-y-0 header-glassmorphism"
        }`}
      >
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
                    href={"#"}
                    className="relative link-line"
                    prefetch={false}
                  >
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
                        <Link href="#" prefetch={false}>
                          About 1
                        </Link>
                      </li>
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          About 2
                        </Link>
                      </li>
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          About 3
                        </Link>
                      </li>
                    </ul>
                  </span>
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
                  <span className="w-fit h-0 top-[80%] overflow-hidden absolute group-hover:h-[8vw] rounded-[0.5vw] ease-in-out transition-all duration-700 block">
                    <ul className=" flex flex-col bg-white shadow-lg p-2 mt-2 px-0 rounded-[0.5vw] w-[7.5vw] top-full pointer-events-auto">
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          Service 1
                        </Link>
                      </li>
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          Service 2
                        </Link>
                      </li>
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          Service 3
                        </Link>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="relative group flex items-center gap-1 after:content-[''] after:bg-transparent after:block after:absolute after:top-[20px] after:left-0 after:w-full after:h-[30px]">
                  <Link
                    href={"#"}
                    className="relative link-line"
                    prefetch={false}
                  >
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
                        <Link href="#" prefetch={false}>
                          Impact 1
                        </Link>
                      </li>
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          Impact 2
                        </Link>
                      </li>
                      <li className="py-1 px-3 hover:bg-gray-100">
                        <Link href="#" prefetch={false}>
                          Impact 3
                        </Link>
                      </li>
                    </ul>
                  </span>
                </li>

                <li className="relative group flex items-center gap-1 cursor-pointer">
                  <Link href={"/careers"} className="link-line" prefetch={false}>
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
          <div className="cursor-pointer mobile:block hidden tablet:block">
            <svg
              className="w-[7.5vw] tablet:w-[4vw]"
              width="40"
              height="23"
              viewBox="0 0 40 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12692 10.0001C0.979688 9.99734 0.833509 10.0341 0.696879 10.1082C0.56025 10.1823 0.435895 10.2923 0.331041 10.4319C0.226187 10.5714 0.142926 10.7377 0.0860955 10.9211C0.0292655 11.1044 0 11.3012 0 11.5C0 11.6988 0.0292655 11.8956 0.0860955 12.0789C0.142926 12.2623 0.226187 12.4286 0.331041 12.5681C0.435895 12.7077 0.56025 12.8177 0.696879 12.8918C0.833509 12.9659 0.979688 13.0027 1.12692 12.9998H38.8731C39.0203 13.0027 39.1665 12.9659 39.3031 12.8918C39.4397 12.8177 39.5641 12.7077 39.669 12.5681C39.7738 12.4286 39.8571 12.2623 39.9139 12.0789C39.9707 11.8956 40 11.6988 40 11.5C40 11.3012 39.9707 11.1044 39.9139 10.9211C39.8571 10.7377 39.7738 10.5714 39.669 10.4319C39.5641 10.2923 39.4397 10.1823 39.3031 10.1082C39.1665 10.0341 39.0203 9.99734 38.8731 10.0001H1.12692Z"
                fill="#111111"
              />
              <path
                d="M1.12692 0.000149999C0.979688 -0.00266079 0.833509 0.0340568 0.696879 0.10817C0.56025 0.182283 0.435895 0.292314 0.331041 0.431867C0.226187 0.571419 0.142926 0.737711 0.0860955 0.921078C0.0292655 1.10445 0 1.30123 0 1.5C0 1.69877 0.0292655 1.89555 0.0860955 2.07892C0.142926 2.26229 0.226187 2.42858 0.331041 2.56813C0.435895 2.70769 0.56025 2.81772 0.696879 2.89183C0.833509 2.96594 0.979688 3.00266 1.12692 2.99985H38.8731C39.0203 3.00266 39.1665 2.96594 39.3031 2.89183C39.4397 2.81772 39.5641 2.70769 39.669 2.56813C39.7738 2.42858 39.8571 2.26229 39.9139 2.07892C39.9707 1.89555 40 1.69877 40 1.5C40 1.30123 39.9707 1.10445 39.9139 0.921078C39.8571 0.737711 39.7738 0.571419 39.669 0.431867C39.5641 0.292314 39.4397 0.182283 39.3031 0.10817C39.1665 0.0340568 39.0203 -0.00266079 38.8731 0.000149999H1.12692Z"
                fill="#111111"
              />
              <path
                d="M1.12692 20.0001C0.979688 19.9973 0.833508 20.0341 0.696879 20.1082C0.560249 20.1823 0.435894 20.2923 0.33104 20.4319C0.226186 20.5714 0.142926 20.7377 0.0860955 20.9211C0.0292655 21.1044 0 21.3012 0 21.5C0 21.6988 0.0292655 21.8956 0.0860955 22.0789C0.142926 22.2623 0.226186 22.4286 0.33104 22.5681C0.435894 22.7077 0.560249 22.8177 0.696879 22.8918C0.833508 22.9659 0.979688 23.0027 1.12692 22.9998H38.8731C39.0203 23.0027 39.1665 22.9659 39.3031 22.8918C39.4397 22.8177 39.5641 22.7077 39.669 22.5681C39.7738 22.4286 39.8571 22.2623 39.9139 22.0789C39.9707 21.8956 40 21.6988 40 21.5C40 21.3012 39.9707 21.1044 39.9139 20.9211C39.8571 20.7377 39.7738 20.5714 39.669 20.4319C39.5641 20.2923 39.4397 20.1823 39.3031 20.1082C39.1665 20.0341 39.0203 19.9973 38.8731 20.0001H1.12692Z"
                fill="#111111"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <></>
  );
};

export default Header;
