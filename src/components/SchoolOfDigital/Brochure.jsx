import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import LinkButton from '../Button/LinkButton';
import Brochureform from './BrochureForm';
gsap.registerPlugin(ScrollTrigger)

const Brochure = () => {
    const blueHexagonRef = useRef(null);
    const yellowHexagonRef = useRef(null);

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
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="brochure" className=' bg-[#134BD6]'>
            <div className="w-screen h-full z-[10] relative container-lg py-[7%] mobile:py-[12%]">
                <div className="w-full h-full flex gap-[10vw] mobile:flex-col tablet:flex-col">
                    <div className="w-[45%] flex flex-col gap-[2vw] mobile:w-full mobile:gap-[4vw] tablet:w-full">
                        <h2 className="heading-2 headinganim !text-white">
                            Download Our Brochure!
                        </h2>
                        <p data-para-anim className="content w-[70%] !text-white mobile:w-full">
                            Want details on what we have to offer?
                            Our brochure provides a comprehensive guide on the various Digital Marketing training we have to offer
                        </p>
                    </div>

                    <div className="w-[50%] h-full mobile:w-full mobile:px-[2vw] tablet:w-full">
                        <Brochureform />
                    </div>
                </div>

                <div
                    className="absolute h-[2vw] w-[2.2vw] top-[25%] left-[25%] blue-hexagon-animation mobile:hidden tablet:hidden"

                >
                    <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon" />
                </div>
                <div
                    className="absolute h-[2vw] w-[2.2vw] top-[5%] left-[15%] yellow-hexagon-animation mobile:hidden tablet:hidden"

                >
                    <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon" />
                </div>
            </div>
        </section>
    );
};

export default Brochure;
