import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap';

const TeamMembers = () => {
  useEffect(()=> {
    gsap.fromTo(
      '.card',
      {
        scale: 0,
        opacity:0.5
      },
      {
        scale: 1,
        opacity:1,
        duration: 1,
        stagger: {
          amount: 1,
          each: 0.3,
          from: 'random',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.team-container',
          start: "top 80%",
          end: "bottom 20%", 
        },
      }
    );
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
    
      document.querySelectorAll('.hexagon').forEach((hexagon, index) => {
        const offsetX = (clientX / window.innerWidth - 0.5) * (7 + index * 3); 
        const offsetY = (clientY / window.innerHeight - 0.5) * (7 + index * 3);
        hexagon.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };
  
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  },[]);

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      const cardInner = card.querySelector('.card-inner');
      
      if (cardInner) {
        if (id % 2 === 0) {
          gsap.set(cardInner, { rotationY: 180 });
        } else {
          gsap.set(cardInner, { rotationY: 0 }); 
        }
      }
    });

    const toggleCardRotation = () => {
      gsap.to('.card-inner', {
        rotationY: (index, target) => {
          const cardInner = target;
          const currentRotation = gsap.getProperty(cardInner, "rotationY");
          return currentRotation === 0 ? 180 : 0;
        },
        duration: 0.2,
        stagger: 0.05, 
        ease: "power3.out",
      });
    };

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const cardInner = card.querySelector('.card-inner');
        const rotation = gsap.getProperty(cardInner, "rotationY");
        if (rotation === 180) {
          toggleCardRotation();
        }
      });
    });

    // Cleanup event listeners
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
      });
    };
  }, []);

  return (
    <section id='team-members'>
      <div className="w-screen h-full flex flex-col items-center justify-center mb-[5vw] relative">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
          <h2 className="heading-2 headinganim">
            Be A Part Of
            <span className="blue-text"> HiveMinds </span>
          </h2>
          <p className="text-[1.2vw] w-[70%] text-center" data-para-anim>
            Journey of global impact, supporting brands from SMEs to industry giants. With <span className="blue-text font-medium" data-para-anim>14 years, 450+ team members</span>, and <span className="blue-text font-medium" data-apar-anim>4 locations</span>, we&apos;re creating tomorrow&apos;s digital successes together.
          </p>
        </div>

        <div className="hexagon absolute h-[2vw] w-[2.2vw] bottom-[10%] right-[5%] transition-all duration-100 ease-out">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[30%] right-[5%] transition-all duration-100 ease-out">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[45%] left-[20%] transition-all duration-100 ease-out">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[25%] left-[10%] transition-all duration-100 ease-out">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>
        <div className=" hexagon absolute h-[2vw] w-[2.2vw] bottom-[5%] left-[5%] transition-all duration-100 ease-out">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>
        <div className=" hexagon absolute h-[2vw] w-[2.2vw] top-[72%] right-[25%] transition-all duration-100 ease-out">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>

        <div className="team-container mx-auto grid grid-cols-12 items-center justify-center relative gap-[1.2vw]">
          {/* Manually created team cards */}
          <div className="card  col-span-3 col-start-1 w-[20vw] h-[20vw] flex items-center relative" data-id="1">
            <div className="card-inner w-full relative">
              <div className="card-front absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <img src="/assets/images/homepage/part-1.png" alt="team" className="card-image w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="card-back absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134BD6]"></div>
            </div>
          </div>

          <div className="card  col-span-4 col-start-4 w-full h-[33vw] relative" data-id="2">
            <div className="card-inner w-full relative">
              <div className="card-front absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <img src="/assets/images/homepage/part-2.png" alt="team" className="card-image w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="card-back absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134BD6]"></div>
            </div>
          </div>

          <div className="card col-span-3 col-start-8 w-full h-[15vw] top-[-15%] relative" data-id="4">
            <div className="card-inner w-full relative">
              <div className="card-front absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <img src="/assets/images/homepage/part-3.png" alt="team" className="card-image w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="card-back absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134BD6]"></div>
            </div>
          </div>

          <div className="card col-span-2 col-start-8 w-full h-[12vw] bottom-[1vw] absolute" data-id="3">
            <div className="card-inner w-full relative">
              <div className="card-front absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <img src="/assets/images/homepage/part-4.png" alt="team" className="card-image w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="card-back absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134BD6]"></div>
            </div>
          </div>

          <div className="card col-span-4 col-start-11 w-full h-[22vw] flex items-center  top-[-20%] relative" data-id="5">
            <div className="card-inner w-full relative">
              <div className="card-front absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <img src="/assets/images/homepage/part-5.png" alt="team" className="card-image w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="card-back absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134BD6]"></div>
            </div>
          </div>

          <div className=" absolute card  col-span-3 col-start-10 w-full h-[10vw] flex items-center bottom-[1vw] " data-id="6">
            <div className="card-inner w-full relative">
              <div className="card-front absolute w-full h-full top-0 left-0 flex items-center justify-center">
                <img src="/assets/images/homepage/part-6.png" alt="team" className="card-image w-full h-full object-cover rounded-[8px]" />
              </div>
              <div className="card-back absolute w-full h-full top-0 left-0 rounded-[8px] bg-[#134BD6]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
