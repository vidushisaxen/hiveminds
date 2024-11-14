/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitInLineWord } from "./splitTextUtils";
import { useEffect } from "react";
// import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function headingBlur() {
  // const headingAnims = document.querySelectorAll(".headinganim");
  // headingAnims.forEach((headingAnim) => {
  // let ctx = gsap.context(() => {
  //     SplitInLineWord(headingAnim);
  //     const headingWord = headingAnim.querySelectorAll(".word");
  //     console.log(headingWord)
  //     gsap.fromTo(headingWord,{
  //         scrollTrigger: {
  //           trigger: headingAnim,
  //           start: "top 80%",
  //         //   end: "bottom 70%",
  //           markers: true,
  //         },
  //         opacity: 0,
  //         skewX: 20,
  //         filter: "blur(8px)",
  //       },
  //       {
  //         // ease: "sine",
  //         opacity: 1,
  //         skewX: 0,
  //         filter: "blur(0px)",
  //         stagger: 0.2,
  //         duration: 1,
  //       }
  //     );
  //   });
  // });
  // return () => ctx.revert();

  const headings = document.querySelectorAll(".headinganim");

  headings.forEach((heading) => {
    let ctx = gsap.context(() => {
      SplitInLineWord(heading);
      let animWord = heading.querySelectorAll(".word");

      gsap.from(
        animWord,
        {
          opacity: 0,
          skewX: 20,
          stagger:0.1,
          filter: "blur(8px)",
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  });
}

export function slideIn(){
    useEffect(()=>{

        const Slide = document.querySelectorAll(".slideIn");
    
        Slide.forEach((slide) => {
          let ctx = gsap.context(() => {
      
            gsap.from(
              slide,
              {
                opacity: 0,
                xPercent:100,
                duration:1,
                
                scrollTrigger: {
                  trigger: slide,
                  start: "top 80%",
                  
                },
              }
            );
          });

          return () => ctx.revert();  
    },[])
    });
}
