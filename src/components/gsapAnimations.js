/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitInLineWord, SplitInLine} from "./splitTextUtils";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);


export function headingBlur() {
    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const headingAnim = document.querySelectorAll(".headinganim");
            headingAnim.forEach((headingAnim)=>{
                SplitInLineWord(headingAnim);
                const headingWord = headingAnim.querySelectorAll(".word");
                gsap.from(headingWord,{
                    scrollTrigger: {
                        trigger: headingWord,
                        start: 'top 80%', 
                        // markers:true
                      },
                      opacity: 0,
                    //   skewX: 10,
                      yPercent:20,
                      filter: 'blur(8px)',
                      stagger:0.05,
                      duration:0.7
                });
            })
    
        });
        
        return () => ctx.revert();
    },[]);
        
}

export function paraAnim() {
    useEffect(() => {
      const ctx = gsap.context(() => {
        const paraAnimations = document.querySelectorAll("[data-para-anim]");
        paraAnimations.forEach((paraAnimation) => {
          SplitInLine(paraAnimation);
          const paraLine = paraAnimation.querySelectorAll(".line-internal");
          gsap.from(paraLine, {
            scrollTrigger: {
              trigger: paraAnimation,
              start: "top 90%",
            },
            duration: 1.2,
            yPercent: 100,
            stagger: 0.07,
            ease: "power3.out"
          });
        });
      });
      return () => ctx.revert();
    }, []);
  }
  export function fadeUp() {
    useEffect(() => {
      if (globalThis.innerWidth > 0) {
        const ctx = gsap.context(() => {
          const content = document.querySelectorAll(".fadeup");
          content.forEach((content) => {
            gsap.from(content, {
              scrollTrigger: {
                trigger: content,
                start: "top bottom",
                end: "bottom 60%",
              },
              opacity: 0,
              yPercent:50,
              ease:"power3.out",
              duration: 0.7,
              stagger: 0.5,
            });
          });
        });
        return () => ctx.revert();
      }
    }, []);
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
