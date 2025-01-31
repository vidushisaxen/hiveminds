import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        img: "/assets/images/homepage/services/brand-building.png",
        title: "Digital Brand Building",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/services/e-commerce.png",
        title: "Accelerate Ecommerce Growth",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/services/revenue.png",
        title: "Drive Organic Revenue",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/services/marketing.png",
        title: "App Marketing Solutions",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/services/performance.png",
        title: "Demand Generation",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/services/retention.png",
        title: "Maximise Retention",
        para: "We provide effective strategies that are aligned with your long-term business goals. We promise to deliver high - quality targeted traffic and increase brand visibility.",
    },
    {
        img: "/assets/images/homepage/services/grow.png",
        title: "Grow D2C Revenue",
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
                ease: "power3.out",
                duration: 0.6
            }
        });

        const tl = timelineRef.current;

        if (isActive) {
            tl.add([
                gsap.to(cardRef.current, {
                    width: "45%"
                }),
                gsap.to(headingRef.current, {
                    rotation: 0,
                    top: "63%",
                    left: "8%",
                    transformOrigin: "0% 50%"
                })
            ], "<")
            .to([contentRef.current, linkRef.current], {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease:"power3.out",
                delay:0.25,
            }, "-=0.3");
        } else {
            tl.add([
                gsap.to(cardRef.current, {
                    width: "18%"
                }),
                gsap.to(headingRef.current, {
                    rotation: -90,
                    top: "90%",
                    left: "45%",
                    transformOrigin: "0% 50%"
                })
            ], "<")
            .to([contentRef.current, linkRef.current], {
                opacity: 0,
                scale: 1,
                duration: 0.4,
            }, "-=0.6");
        }
    }, [isActive]);

    return (
        <div
            ref={cardRef}
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

            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-white z-10">
                <h3
                    ref={headingRef}
                    className="text-white text-[1.5vw] absolute w-[23vw] text-left leading-[1.2]"
                    style={{
                        transformOrigin: "0% 50%",
                        rotation: -90,
                        top: "90%",
                        left: "45%"
                    }}
                >
                    {service.title}
                </h3>

                <p
                    ref={contentRef}
                    className="content absolute !text-white opacity-0 text-left p-[2vw] !leading-[1.3] bottom-0 "
                >
                    {service.para}
                </p>

                <Link href="#">
                    <div
                        ref={linkRef}
                        className="absolute top-4 right-4 bg-transparent border border-white text-white p-4 rounded-full flex items-center justify-center opacity-0 scale-0"
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

const Services2 = () => {
   
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <section id="services">
            <div className="w-screen h-full flex flex-col items-center justify-center container-lg pb-[4%] relative">
                <div className="flex flex-col items-center justify-center gap-[1vw] py-[4vw]">
                    <h2 className="heading-2 headinganim">
                        Your <span className="blue-text"> Goals </span>, Our Offerings
                    </h2>
                    <p className="content w-[70%] text-center fadeup">
                        See how our strategic partnerships and collaboration drive innovation and accelerate your business growth
                    </p>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[60vh] flex overflow-hidden gap-[1.5vw] fadein">
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

                <div className="absolute h-[2vw] w-[2.2vw] top-[20%] right-[3%] blue-hexagon-animation">
                    <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
                </div>
                <div className="absolute h-[2vw] w-[2.2vw] top-[10%] left-[5%] yellow-hexagon-animation" >
                    <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
                </div>
            </div>
        </section>
    );
};

export default Services2;
