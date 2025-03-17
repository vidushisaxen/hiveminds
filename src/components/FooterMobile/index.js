import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FooterMobile = () => {
  const [openSection, setOpenSection] = useState(null);

  // Toggle Function
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <footer className="w-screen h-full py-[10%] bg-primary z-[1] relative overflow-hidden">
        <div className="container-lg flex flex-col gap-[5vw]">
          <div className="w-full relative">
            <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal mobile:text-[5vw] mobile:mb-[4vw]">
              subscribe to get latest insights
            </p>
            <input
              type="email"
              placeholder="Email Address*"
              className="w-[30vw] border-b-[1px] border-white bg-transparent mt-[0.5vw] p-[0.5vw] pl-0 outline-none placeholder:text-white placeholder:text-[0.94vw] mobile:w-[90vw] mobile:placeholder:text-[4vw] mobile:text-[4vw] mobile:pb-[3vw] text-white"
            />
            <div className="h-[0.98vw] w-[1vw] absolute right-[3%] bottom-[15%] cursor-pointer -rotate-45 mobile:right-[7%] mobile:pb-[3vw]">
              <svg
                className="relative -rotate-[90deg] w-[1vw] h-[1vw] overflow-hidden mobile:w-[5.5vw] mobile:h-[5.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`origin-center -translate-y-[110%] scale-0 group-hover:translate-y-0 group-hover:scale-100 text-white`}
                  d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                  fill="currentColor"
                />
                <path
                  className={`origin-center group-hover:scale-0 group-hover:translate-y-[110%] text-white`}
                  d="M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div>
            {/* Sections */}
            {[
              {
                title: "Services",
                links: [
                  {
                    href: "/services/performance-marketing",
                    text: "Performance Marketing",
                  },
                  {
                    href: "/services/retail-marketing",
                    text: "Retail Marketing",
                  },
                  {
                    href: "/services/consumer-insights",
                    text: "Consumer Insights",
                  },
                  {
                    href: "/services/influencer-marketing",
                    text: "Influencer Marketing",
                  },
                  {
                    href: "/services/affiliate-marketing",
                    text: "Affiliate Marketing",
                  },
                  { href: "/services/data-analytic", text: "Data & Analytics" },
                  {
                    href: "/services/social-media-marketing",
                    text: "Programatic Advertising",
                  },
                  {
                    href: "/services/search-engine-optimization",
                    text: "Search Engine Optimization",
                  },
                  {
                    href: "/services/creative-content-management",
                    text: "Content Management & Creative",
                  },
                  {
                    href: "/services/online-reputation-management",
                    text: "Online Reputation Management",
                  },
                  { href: "/services/branding", text: "Branding Services" },
                ],
              },
              {
                title: "Solutions",
                links: [
                  { href: "#", text: "Demand Generation" },
                  { href: "#", text: "Grow D2C Revenue" },
                  { href: "#", text: "Drive Organic Revenue" },
                  { href: "#", text: "Maximize Retention" },
                  { href: "#", text: "App Marketing Solutions" },
                  { href: "#", text: "Digital Brand Building" },
                  { href: "#", text: "Accelerate Ecommerce Growth" },
                ],
              },
              {
                title: "Industries",
                links: [
                  { href: "#", text: "FMCG & Beauty" },
                  { href: "#", text: "Health & Wellness" },
                  { href: "#", text: "BFSI - Fintech" },
                  { href: "#", text: "E-Commerce" },
                  { href: "#", text: "Fashion & Lifestyle" },
                  { href: "#", text: "Travel & Tourism" },
                  { href: "#", text: "Telecom & Automobiles" },
                  { href: "#", text: "Electronics & Consumer Durables" },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="flex flex-col mt-[7vw]">
                {/* Title */}
                <div
                  className="flex justify-between w-full list-title cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <p className="text-[5vw] uppercase montreal font-medium text-white">
                    {section.title}
                  </p>

                  {/* Icon with Rotation */}
                  <div className="w-[10vw] h-[10vw] relative pt-[3vw] list-icon">
                    <span
                      className={`w-[6vw] h-[3px] block bg-white absolute transition-transform duration-300 ${
                        openSection === section.title ? "" : ""
                      }`}
                    ></span>
                    <span
                      className={`w-[6vw] h-[3px] mt-[-1px] block bg-white transition-transform duration-300 ${
                        openSection === section.title
                          ? "rotate-180"
                          : "rotate-90"
                      }`}
                    ></span>
                  </div>
                </div>

                {/* Sublist (Expands on Click) */}
                <div
                  className={` overflow-hidden transition-all duration-500 ${
                    openSection === section.title
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="text-[4vw] pt-[3vw] pb-[7vw] text-white montreal font-medium flex flex-col items-start justify-center gap-[2vw]">
                    {section.links.map((link, idx) => (
                      <Link key={idx} href={link.href} className="link-line">
                        <li>{link.text}</li>
                      </Link>
                    ))}
                  </ul>
                </div>

                {/* Separator Line */}
                <div className="w-full h-[1px] bg-white mt-[3vw]"></div>
              </div>
            ))}
          </div>
          <div className="w-full h-full flex flex-col items-start justify-start gap-[4vw] mobile:mt-[7vw] mobile:gap-[6vw]">
            <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal order-1 mobile:text-[4.5vw]">
              Our Office Address
            </p>
            <div className="order-3">
              <p className="content-white underline mobile:!text-[4vw]">
                {" "}
                BENGALURU (HQ) : No. 11, Seventh Floor, Global Tech Park, O
                Shaughnessy Rd, Langford Town, Langford Gardens, Bengaluru,
                Karnataka 560025
              </p>
            </div>
            <div className="order-4">
              <p className="content-white mobile:!text-[4vw]">
                MUMBAI : Office no 301 & 302, 3rd Floor, The Eagle&apos;s Flight
                Building, Gundavali, Andheri East, Andheri, Mumbai, Maharashtra
                400047
              </p>
            </div>
            <div className="order-5">
              <p className="content-white mobile:!text-[4vw]">
                GURGAON : Spring House Coworking, 4th Floor,JMD Regent Arcade,
                Haryana 122002
              </p>
            </div>

            <div className="h-[15vw] w-[25vw] relative rounded-[12px] order-2 mobile:w-full mobile:h-[70vw]">
              {/* <Map /> */}
              <Image src={"/assets/images/homepage/map.png"} alt="map" fill />
            </div>
            <div className="w-full flex items-start justify-center gap-[2vw] flex-col order-6 mobile:gap-[4vw]">
              <p className="uppercase tracking-wider text-[1.16vw] text-white font-medium montreal mobile:text-[5vw]">
                follow us
              </p>
              <div className="flex items-center justify-center gap-[1vw] mobile:gap-[5vw]">
                <Link href={"#"}>
                  <div className=" border border-white rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw]">
                    <span className="flex justify-center items-center ">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 12 23"
                        fill="none"
                        className="mobile:w-[7vw] mobile:h-[7vw]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.70597 22.9203C6.30874 22.9203 4.9115 22.9203 3.51426 22.9203C3.51426 22.8215 3.50015 22.7226 3.50015 22.6237C3.50015 19.3323 3.50015 16.0409 3.50015 12.7495C3.50015 12.6506 3.50015 12.5658 3.50015 12.4528C2.31462 12.4528 1.15731 12.4528 0 12.4528C0 11.0826 0 9.74059 0 8.37035C1.17142 8.37035 2.32873 8.37035 3.50015 8.37035C3.50015 8.25734 3.50015 8.17259 3.50015 8.10196C3.50015 7.24026 3.48604 6.37856 3.50015 5.53099C3.51426 4.98007 3.54249 4.42914 3.6554 3.89235C4.06469 1.78755 5.58895 0.374926 7.70597 0.0782761C8.73626 -0.0629859 9.75243 0.0217713 10.7827 0.0641499C11.1356 0.0782761 11.5025 0.134781 11.8553 0.177159C11.8553 1.39201 11.8553 2.59274 11.8553 3.80759C10.9521 3.82172 10.0488 3.80759 9.15967 3.84997C8.42576 3.87822 7.97413 4.27376 7.79066 4.95181C7.74832 5.12133 7.72009 5.30497 7.72009 5.47448C7.70597 6.39269 7.70597 7.31089 7.70597 8.22909C7.70597 8.27147 7.72009 8.32798 7.7342 8.39861C9.06087 8.39861 10.3875 8.39861 11.7283 8.39861C11.559 9.76885 11.3755 11.1108 11.2061 12.467C10.0347 12.467 8.8774 12.467 7.72009 12.467C7.72009 12.58 7.72009 12.6506 7.72009 12.7353C7.72009 16.0409 7.72009 19.3605 7.72009 22.6661C7.69186 22.7508 7.70597 22.8356 7.70597 22.9203Z"
                          fill="white"
                          className="group-hover:fill-[#134bd6] transition-all duration-500 ease-in-out"
                        />
                      </svg>
                    </span>

                    {/* <Image
                      src="/assets/icons/facebook.svg"
                      fill
                      alt="facebook"
                      className="p-[0.6vw]"
                    /> */}
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="w-[2.4vw] h-[2.4vw] border border-white rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw]">
                    <span className=" flex justify-center items-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 21 21"
                        fill="none"
                         className="mobile:w-[6vw] mobile:h-[6vw]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.41992 20.9884C7.41992 16.4383 7.41992 11.9017 7.41992 7.3516C7.41992 7.2439 7.41992 7.13621 7.41992 7.00159C8.80649 7.00159 10.1796 7.00159 11.5931 7.00159C11.5931 7.62083 11.5931 8.24008 11.5931 8.87278C11.8892 8.52277 12.145 8.17277 12.4546 7.87661C13.222 7.14967 14.1508 6.77274 15.1874 6.67851C16.0893 6.59774 16.9913 6.66505 17.8663 6.93428C19.2932 7.39198 20.1817 8.38816 20.5586 9.80164C20.7471 10.5286 20.8144 11.2959 20.9356 12.0363C20.9625 12.1844 20.9759 12.3325 20.9894 12.494C20.9894 15.3075 20.9894 18.1345 20.9894 20.948C19.549 20.948 18.0951 20.948 16.6278 20.948C16.6278 20.8268 16.6278 20.7192 16.6278 20.6249C16.6278 18.3095 16.6412 16.0075 16.6143 13.6921C16.6143 13.1267 16.5336 12.5478 16.4124 11.9959C16.2509 11.2421 15.8066 10.7036 15.0124 10.5286C14.6893 10.4613 14.3527 10.4478 14.0162 10.4747C12.9258 10.5555 12.2123 11.1344 11.97 12.1978C11.8354 12.8036 11.7681 13.4498 11.7681 14.069C11.7412 16.3845 11.7546 18.6864 11.7546 21.0019C10.3277 20.9884 8.87379 20.9884 7.41992 20.9884Z"
                          fill="white"
                          className="group-hover:fill-[#134bd6] transition-all duration-500 ease-in-out"
                        />
                        <path
                          d="M0.351562 20.9878C0.351562 18.0396 0.351562 15.105 0.351562 12.1568C0.351562 10.5414 0.351562 8.91255 0.351562 7.29714C0.351562 7.2029 0.351562 7.10867 0.351562 7.00098C1.80544 7.00098 3.23239 7.00098 4.69972 7.00098C4.69972 7.10867 4.69972 7.21637 4.69972 7.32406C4.69972 11.8338 4.69972 16.3569 4.69972 20.8666C4.69972 20.907 4.69972 20.9474 4.69972 20.9878C3.25931 20.9878 1.80544 20.9878 0.351562 20.9878Z"
                          fill="white"
                          className="group-hover:fill-[#134bd6] transition-all duration-500 ease-in-out"
                        />
                        <path
                          d="M5.03518 2.54475C5.00826 3.9717 3.85054 5.08903 2.45052 5.04865C1.10434 5.02172 -0.0264525 3.83709 0.000471089 2.46398C0.0273947 1.09088 1.19857 -0.026447 2.57167 0.000476579C3.95824 0.0408619 5.0621 1.17165 5.03518 2.54475Z"
                          fill="white"
                          className="group-hover:fill-[#134bd6] transition-all duration-500 ease-in-out"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="w-[2.4vw] h-[2.4vw] border border-white rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw]">
                    <span className=" flex justify-center items-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 19 20"
                        fill="none"
                         className="mobile:w-[6vw] mobile:h-[6vw]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.0125528 19.1681C0.4519 18.6409 0.891246 18.1262 1.34315 17.599C3.28882 15.3395 5.2345 13.0674 7.18018 10.8079C7.21784 10.7577 7.2555 10.7075 7.30571 10.6573C4.87047 7.11742 2.44779 3.57754 0 0.0125528C0.0753166 0.0125528 0.112975 0 0.163186 0C1.90802 0 3.66541 0 5.41024 0C5.53577 0 5.59853 0.0502111 5.6613 0.13808C7.20529 2.38503 8.73672 4.61942 10.2807 6.86636C10.3184 6.91658 10.356 6.97934 10.4062 7.0421C10.7201 6.67807 11.0339 6.31404 11.3351 5.96256C12.9921 4.04199 14.6491 2.12142 16.2935 0.188292C16.4065 0.0502111 16.532 0 16.7077 0C17.1596 0.0125528 17.6115 0 18.1136 0C15.7788 2.72395 13.4566 5.41024 11.1469 8.10909C11.1845 8.17185 11.2222 8.22206 11.2598 8.27227C13.7076 11.8373 16.1554 15.4148 18.6158 18.9798C18.6534 19.03 18.6785 19.0928 18.7162 19.1555C16.8584 19.1555 15.0006 19.1555 13.1427 19.1555C13.1176 19.1179 13.1051 19.0802 13.08 19.0425C11.423 16.6575 9.7786 14.2599 8.13419 11.8624C8.10909 11.8247 8.07143 11.787 8.03377 11.7368C7.97101 11.7996 7.92079 11.8624 7.88314 11.9126C6.55254 13.4566 5.22195 15.0006 3.90391 16.5445C3.1633 17.4107 2.41013 18.2894 1.66952 19.1555C1.10464 19.1681 0.552322 19.1681 0.0125528 19.1681ZM2.24694 1.24272C2.29716 1.31804 2.32226 1.36825 2.34737 1.40591C6.17596 6.87892 9.992 12.3519 13.8206 17.8375C13.8834 17.9379 13.9587 17.9756 14.0842 17.9756C14.8123 17.9756 15.5403 17.9756 16.2684 17.9756C16.3186 17.9756 16.3688 17.963 16.4441 17.963C16.3814 17.8751 16.3437 17.8124 16.306 17.7622C13.5068 13.7453 10.695 9.72839 7.89569 5.72406C6.89147 4.29305 5.88725 2.84948 4.88303 1.41846C4.83281 1.3557 4.74495 1.26783 4.68218 1.26783C3.8788 1.24272 3.08798 1.24272 2.24694 1.24272Z"
                          fill="white"
                          className="group-hover:fill-[#134bd6] transition-all duration-500 ease-in-out"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href={"#"}>
                  <div className="w-[2.4vw] h-[2.4vw] border border-white rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw]">
                    <span className="flex justify-center items-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                         className="mobile:w-[6vw] mobile:h-[6vw]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.6491 11.8553C15.6491 12.6057 15.4266 13.3391 15.0097 13.963C14.5928 14.5869 14.0003 15.0731 13.3071 15.3603C12.6139 15.6474 11.8511 15.7225 11.1152 15.5762C10.3793 15.4298 9.70335 15.0685 9.17279 14.5379C8.64223 14.0073 8.28091 13.3314 8.13453 12.5955C7.98815 11.8596 8.06328 11.0968 8.35041 10.4036C8.63755 9.71035 9.1238 9.11785 9.74767 8.70099C10.3715 8.28413 11.105 8.06164 11.8553 8.06164C12.8611 8.06279 13.8254 8.46285 14.5366 9.17406C15.2478 9.88527 15.6479 10.8495 15.6491 11.8553ZM23.7107 6.63899V17.0717C23.7087 18.8319 23.0086 20.5194 21.764 21.764C20.5194 23.0086 18.8319 23.7087 17.0717 23.7107H6.63899C4.87884 23.7087 3.19134 23.0086 1.94672 21.764C0.702097 20.5194 0.00199345 18.8319 0 17.0717V6.63899C0.00199345 4.87884 0.702097 3.19134 1.94672 1.94672C3.19134 0.702097 4.87884 0.00199345 6.63899 0H17.0717C18.8319 0.00199345 20.5194 0.702097 21.764 1.94672C23.0086 3.19134 23.7087 4.87884 23.7107 6.63899ZM17.5459 11.8553C17.5459 10.7299 17.2122 9.62965 16.5869 8.69384C15.9616 7.75803 15.0728 7.02865 14.033 6.59795C12.9932 6.16724 11.849 6.05455 10.7452 6.27412C9.64131 6.49369 8.62735 7.03567 7.83151 7.83151C7.03567 8.62735 6.49369 9.64131 6.27412 10.7452C6.05455 11.849 6.16724 12.9932 6.59795 14.033C7.02865 15.0728 7.75803 15.9616 8.69384 16.5869C9.62965 17.2122 10.7299 17.5459 11.8553 17.5459C13.3641 17.5442 14.8105 16.9441 15.8773 15.8773C16.9441 14.8105 17.5442 13.3641 17.5459 11.8553ZM19.4428 5.69057C19.4428 5.40919 19.3593 5.13414 19.203 4.90019C19.0467 4.66624 18.8245 4.48389 18.5645 4.37622C18.3046 4.26854 18.0185 4.24037 17.7426 4.29526C17.4666 4.35015 17.2131 4.48565 17.0142 4.68461C16.8152 4.88357 16.6797 5.13706 16.6248 5.41302C16.5699 5.68899 16.5981 5.97503 16.7058 6.23499C16.8135 6.49494 16.9958 6.71713 17.2297 6.87345C17.4637 7.02977 17.7388 7.11321 18.0201 7.11321C18.3974 7.11321 18.7593 6.96332 19.0261 6.69653C19.2929 6.42973 19.4428 6.06787 19.4428 5.69057Z"
                          fill="white"
                          className="group-hover:fill-[#134bd6] transition-all duration-500 ease-in-out"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[7vw]">
          <span className="w-[92vw] h-[1px] bg-white block "></span>
          <div className="w-full flex justify-between mt-[5vw]">
            <Link href={"#"}>
              <p className="text-white text-[0.94vw] tracking-wide mobile:text-[3.5vw]">
                By: Enigma{" "}
              </p>
            </Link>
            <p className="text-white text-[0.94vw] tracking-wide mobile:text-[3vw] mobile:w-[50%] text-end">
              © 2024 HiveMinds Innovative Market Solutions Pvt. Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMobile;
