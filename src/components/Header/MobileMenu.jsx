import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = ({ openMenu, setOpenMenu }) => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  return (
    <>
      <section
        data-lenis-prevent
        className={`w-screen h-screen overflow-y-auto fixed top-0 bg-white z-[998] transition-all duration-500 ease-out tablet:w-[70vw] ${openMenu ? "left-0 tablet:left-[30%]" : "left-[100%]"}`}
        id="mobile-menu"
      >
        <div className="w-full h-fit mobile:px-[5vw] flex flex-col mobile:gap-[4vw] mobile:py-[25vw] text-xl tablet:px-[5vw] tablet:py-[15vw] tablet:text-2xl tablet:gap-[3vw]">
          <Link
            href={"/about-us"}
            className="relative link-line "
            prefetch={false}
          >
            Who We Are
          </Link>

          <div className="w-full h-[1px] bg-black/20"></div>
          <div>
            {[
              {
                title: "What We do",
                links: [
                  {
                    href: "/solutions",
                    text: "Solutions",
                  },
                  {
                    href: "/our-ips",
                    text: "IPs",
                  },
                  {
                    href: "/school-of-digital",
                    text: "School of Digital",
                  },
                ],
              },
              {
                title: "Services",
                links: [
                  { text: "Performance Marketing", href: "/services/performance-marketing" },
                  { text: "Retail Marketing", href: "/services/retail-marketing" },
                  { text: "Search Engine Optimization", href: "/services/search-engine-optimization" },
                  { text: "Content Management & Creative", href: "/services/creative-content-management" },
                  { text: "Online Reputation Management", href: "/services/online-reputation-management" },
                  { text: "Consumer Insights", href: "/services/consumer-insights" },
                  { text: "Influencer Marketing", href: "/services/influencer-marketing" },
                  { text: "Affiliate Marketing", href: "/services/affiliate-marketing" },
                  { text: "Social Media Marketing", href: "/services/social-media-marketing" },
                  { text: "Data & Analytics", href: "/services/data-analytic" },
                  { text: "Branding Services", href: "/services/branding" },
                ],
              },

              {
                title: "Industries",
                links: [
                  { text: "FMCG & Beauty", href: "/industries/fmcg-and-beauty" },
                  { text: "Health & Wellness", href: "/industries/health-and-wellness" },
                  { text: "BFSI - Fintech", href: "/industries/bfsi-fintech" },
                  { text: "E-Commerce", href: "/industries/e-commerce" },
                  { text: "Fashion & Lifestyle", href: "/industries/fashion-and-lifestyle" },
                  { text: "Electronics ", href: "/industries/electronics" },
                  { text: "Consumer Durables", href: "/industries/consumer-durables" },
                  { text: "Telecom", href: "/industries/telecom" },
                  { text: "Automobiles", href: "/industries/automobiles" },
                  { text: "Travel & Tourism", href: "/industries/travel-and-tourism" },
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 3 >= 1 ? "mt-[5vw] tablet:mt-[3vw]" : "mt-[2vw] tablet:mt-0"}`}
              >
                {/* Title */}
                <div
                  className="flex justify-between w-full list-title cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <p className="text-xl text-black tablet:text-2xl">{section.title}</p>

                  {/* Icon with Rotation */}

                  <div
                    className={` w-fit h-fit transition-transform duration-300  ${openSection === section.title ? "-rotate-90" : "rotate-0"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[5vw] w-[5vw] tablet:w-[3vw] tablet:h-[3vw] group-hover:rotate-[-180deg] ease-in-out transition-all duration-700 "
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
                  </div>
                </div>

                {/* Sublist (Expands on Click) */}
                <div
                  className={` overflow-hidden transition-all duration-700 ease-in-out ${openSection === section.title
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <ul className="text-lg pt-[3vw] pl-[3vw] pb-[7vw] text-black montreal flex flex-col items-start justify-center gap-[1.5vw]">
                    {section.links.map((link, idx) => (
                      <li key={idx} >
                        <a href={link.href} className="link-line" onClick={() => (setOpenMenu(false))}>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Separator Line */}
                <div className="w-full h-[1px] bg-black/20 mt-[4vw] tablet:mt-[2vw]"></div>
              </div>
            ))}
          </div>
          <Link
            href={"/our-impact"}
            className="relative link-line"
            prefetch={false}
          >
            Our Impact
          </Link>
          <div className="w-full h-[1px] bg-black/20"></div>

          <Link href={"/blog"} className="link-line" prefetch={false}>
            What&apos;s Buzzing
          </Link>
          <div className="w-full h-[1px] bg-black/20"></div>

          <Link href={"/careers"} className="link-line" prefetch={false}>
            Careers
          </Link>
          <div className="w-full h-[1px] bg-black/20"></div>

          <Link href={"/contact-us"} className="link-line" prefetch={false}>
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default MobileMenu;
