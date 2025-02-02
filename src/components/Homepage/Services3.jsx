import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        img: "/assets/images/homepage/part-1.png",
        title: "Demand Generation",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/part-2.png",
        title: "Grow D2C Revenue",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/part-3.png",
        title: "Drive Organic Revenue",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/part-4.png",
        title: "Accelerate Ecommerce Growth",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/part-5.png",
        title: "Maximise Retention",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/part-6.png",
        title: "App Marketing Solutions",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/part-1.png",
        title: "Digital Brand Building",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
];
const ServiceCard = ({ service, isActive, onMouseEnter, key }) => {
    const cardRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const linkRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);

    useEffect(() => {
        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline({
            defaults: {
                ease: "power2.inOut",
                duration: 0.5
            }
        });

        const tl = timelineRef.current;

        if (isActive) {
            tl.to(cardRef.current, { 
                width: "45%", 
                duration: 0.5,
                ease: "power2.inOut"
              })
              .to(headingRef.current, {
                rotation: 0,
                top: "55%",
                left:"10%",
              delay:-1,
                
                opacity: 1,
                duration:0.5,
                ease: "power3.out",
              }, "-=0.5")
                .to(contentRef.current, {
                    opacity: 1,
                    delay: 0.2,
                    duration: 0.5,
                }, "-=0.3")
                .to(linkRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                }, "-=0.4");
        } else {
            tl.to(cardRef.current, { 
                width: "18%", 
                duration: 0.5,
                ease: "power2.inOut"
              })
              .to(headingRef.current, {
                rotation: -90, 
                top: "90%",
                left:"45%",    
                opacity: 1,
                duration: 0.4,
                delay:-1,
                ease: "power3.out",
              }, "-=0.5")
                .to(contentRef.current, {
                    opacity: 0,
                    y: 0,
                    duration: 0.4,
                    delay:-1,
                }, "-=0.5")
                .to(linkRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.4,
                }, "-=0.5");
        }
    }, [isActive]);

    return (
        <div
            ref={cardRef}
            style={{
                transition: 'transform 0.5s ease-in-out'
            }}
            className="relative h-full overflow-hidden rounded-[1.2vw] service-card w-[18%]"
            onMouseEnter={onMouseEnter}
        >
            <Image
                src={service.img}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />

            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-white z-10">
                <h3
                    ref={headingRef}
                    className="text-white text-[1.5vw] absolute w-[20vw] text-left leading-[1.2]"
                    style={{
                        transition: 'transform 0.5s ease-in-out',
                        transformOrigin: "left center",
                        left: "2vw"
                    }}
                >
                    {service.title}
                </h3>

                <p
                    ref={contentRef}
                    className="content absolute !text-white opacity-0 text-left p-[2vw] leading-[1.2] bottom-[-2%]"
                    style={{
                        transition: 'transform 0.5s ease-in-out'
                    }}
                >
                    {service.para}
                </p>

                <Link href="#">
                    <div
                        ref={linkRef}
                        className="absolute top-4 right-4 bg-transparent border border-white text-white p-4 rounded-full flex items-center justify-center opacity-0 scale-0"
                        style={{
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        <Image
                            src="/assets/icons/top-right-arrow-white.svg"
                            height={15}
                            width={15}
                            alt="top-right-arrow"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

const Services3 = () => {
    const blueHexagonRef = useRef(null);
    const yellowHexagonRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMouseMove = (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;

        if (blueHexagonRef.current && yellowHexagonRef.current) {
            const offsetX = mouseX * 0.05;
            const offsetY = mouseY * 0.05;

            gsap.to(blueHexagonRef.current, {
                x: offsetX,
                y: offsetY,
                ease: "power2.out",
            });

            gsap.to(yellowHexagonRef.current, {
                x: offsetX * 1.2,
                y: offsetY * 1.2,
                ease: "power2.out",
            });
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section id="services">
            <div className="w-screen h-full flex flex-col items-center justify-center container-lg pb-[5%] relative">
                <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
                    <h2 className="heading-2 headinganim">
                        Your <span className="blue-text"> Goals </span>, Our Offerings
                    </h2>
                    <p className="content w-[70%] text-center fadeup">
                        See how our strategic partnerships and collaboration drive innovation and accelerate your business growth
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[60vh] flex overflow-hidden gap-[1.5vw]">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                service={service}
                                isActive={index === activeIndex}
                                onMouseEnter={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute h-[2vw] w-[2.2vw] top-[30%] right-[5%]" ref={blueHexagonRef}>
                    <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
                </div>
                <div className="absolute h-[2vw] w-[2.2vw] top-[15%] left-[-3%]" ref={yellowHexagonRef}>
                    <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
                </div>
            </div>
        </section>
    );
};

export default Services3;
