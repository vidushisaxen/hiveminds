import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Certification = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        ease:"none",
        scrollTrigger: {
          trigger: "#certifications",
          start: "top top",
          end: "+=2500 bottom",
          pin: true,
          scrub: true,
        },
      });

      tl.from(".certification-text", {
        yPercent: 100,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".certification-text",
          start: "top 90%",
          end: "bottom 40%",
          scrub: true,
        },
      });
      tl.from(".cert-1", {
        scale: 0.8,
        opacity:0,
        delay:0.2,
        ease:"none",
      });
      tl.from(".cert-2", {
        scale: 0.8,
        opacity:0,
        delay: 0.2,
        ease:"none",
      });
      tl.from(".cert-3", {
        scale: 0.8,
        opacity:0,
        delay: 0.2,
        ease:"none",
      });
      tl.to(".cert-1", {
        top: "-50%",
        ease:"none",
        duration:2
      });
      tl.to(".cert-2", {
        delay: -1.5,
        duration:2,
        top: "-30%",
        ease:"none",
      });
      tl.to(".cert-3", {
        delay: -1.5,
        duration:2,
        top: "-50%",
        ease:"none",
      })
     gsap.to(".certification-text",{
      y:-100,
      scrollTrigger:{
        trigger:"#certifications",
        start:"101% bottom",
        scrub:true,
        
      }
     })
      // 3D effect for cert-1 (Appearing from far and zooming in)
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="w-screen h-screen relative" id="certifications">
      <div className="w-screen h-screen flex justify-center items-center">
        <h2 className="heading-2 !text-[5vw] overflow-hidden">
          <span className="block certification-text">Our Certification</span>
        </h2>
      </div>
      <div className="w-[25vw] h-[15vw] border border-black/20 rounded-[0.7vw] top-[15%] left-[15%] absolute bg-white cert-1">
        <Image
          src={"/assets/images/homeCopy/amazon-certificate.png"}
          width={200}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-[25vw] h-[15vw] border border-black/20 rounded-[0.7vw] absolute top-[60%] left-[30%] bg-white cert-2">
        <Image
          src={"/assets/images/homeCopy/google-certificate.png"}
          width={200}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-[25vw] h-[15vw] border border-black/20 rounded-[0.7vw] absolute top-[30%] left-[70%] bg-white cert-3">
        <Image
          src={"/assets/images/homeCopy/flipkart-certificate.png"}
          width={200}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default Certification;
