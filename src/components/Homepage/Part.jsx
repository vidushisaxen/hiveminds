import Image from 'next/image';
import React from 'react';
import styles from '@/styles/flipCard.module.css';

const Part = () => {
  return (
    <section id="part mb-[10vw]">
      <div className="w-screen h-full flex flex-col items-center justify-center mb-[5vw] relative">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
          <h2 className="heading-2">
            Be A Part Of
            <span className="blue-text"> HiveMinds </span>
          </h2>
          <p className="text-[1.2vw] w-[43%] text-center">
            Journey of global impact, supporting brands from SMEs to industry giants. With <span className="blue-text font-medium">14 years, 450+ team members</span>, and <span className="blue-text font-medium">4 locations</span>, we&apos;re creating tomorrow&apos;s digital successes together.
          </p>
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-12 items-center justify-center relative gap-[2vw]">
          {/* First Card - Flipped to Backside initially */}
          <div className={`${styles.flipCard} w-full h-[20vw] hover:${styles.flipCardInner}`}>
            <div className={`${styles.flipCardInner} relative col-span-3 col-start-1 w-[20vw] h-full flex items-center transform transition-transform duration-500 rotate-y-180 hover:rotate-y-0`}>
              <div className={`${styles.flipCardBack} absolute w-full h-full ${styles.backfaceHidden}`}>
                <Image 
                  src="/assets/images/homepage/part-1.png"
                  fill
                  alt="Be a part of HiveMinds"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className={`z-[2] absolute w-full h-full bg-[#134BD6] rounded-[20px] flex items-center justify-center ${styles.backfaceHidden} transform rotate-y-180`}>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className={`${styles.flipCard} relative col-span-4 col-start-4 w-full h-[35vw] hover:${styles.flipCardInner}`}>
            <div className={`${styles.flipCardInner} relative w-full h-full flex items-center transition-transform duration-500`}>
              <div className={`z-[2] absolute w-full h-full ${styles.backfaceHidden}`}>
                <Image 
                  src="/assets/images/homepage/part-2.png"
                  fill
                  alt="Be a part of HiveMinds"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className={`${styles.flipCardBack} absolute w-full h-full bg-[#134BD6] rounded-[20px] flex items-center justify-center ${styles.backfaceHidden}`}>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className={`${styles.flipCard} absolute col-span-3 col-start-8 w-full h-[15vw] top-[-1%] hover:${styles.flipCardInner}`}>
            <div className={`${styles.flipCardInner} relative w-full h-full flex items-center transition-transform duration-500`}>
              <div className={`z-[2] absolute w-full h-full ${styles.backfaceHidden}`}>
                <Image 
                  src="/assets/images/homepage/part-3.png"
                  fill
                  alt="Be a part of HiveMinds"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className={`${styles.flipCardBack} absolute w-full h-full bg-[#134BD6] rounded-[20px] flex items-center justify-center ${styles.backfaceHidden}`}>
              </div>
            </div>
          </div>

          {/* Fourth Card - Flipped to Backside initially */}
          <div className={`${styles.flipCard} absolute col-span-2 col-start-8 w-full h-[15vw] bottom-[1vw] hover:${styles.flipCardInner}`}>
            <div className={`${styles.flipCardInner} relative w-full h-full flex items-center transform transition-transform duration-500 rotate-y-180 hover:rotate-y-0`}>
              <div className={`${styles.flipCardBack} absolute w-full h-full ${styles.backfaceHidden}`}>
                <Image 
                  src="/assets/images/homepage/part-4.png"
                  fill
                  alt="Be a part of HiveMinds"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className={`z-[2] absolute w-full h-full bg-[#134BD6] rounded-[20px] flex items-center justify-center ${styles.backfaceHidden}`}>
              </div>
            </div>
          </div>

          {/* Fifth Card - Flipped to Backside initially */}
          <div className={`${styles.flipCard} relative col-span-4 col-start-11 w-full h-[22vw] flex items-center hover:${styles.flipCardInner} top-[-20%]`}>
            <div className={`${styles.flipCardInner} relative w-full h-full flex items-center transform transition-transform duration-500 rotate-y-180 hover:rotate-y-0`}>
              <div className={`${styles.flipCardBack} absolute w-full h-full ${styles.backfaceHidden}`}>
                <Image 
                  src="/assets/images/homepage/part-5.png"
                  fill
                  alt="Be a part of HiveMinds"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className={`z-[2] absolute w-full h-full bg-[#134BD6] rounded-[20px] flex items-center justify-center ${styles.backfaceHidden}`}>
              </div>
            </div>
          </div>

          {/* Sixth Card */}
          <div className={`${styles.flipCard} absolute col-span-3 col-start-10 w-full h-[10vw] flex items-center bottom-[1vw] hover:${styles.flipCardInner}`}>
            <div className={`${styles.flipCardInner} relative w-full h-full flex items-center transition-transform duration-500`}>
              <div className={`z-[2] absolute w-full h-full ${styles.backfaceHidden}`}>
                <Image 
                  src="/assets/images/homepage/part-6.png"
                  fill
                  alt="Be a part of HiveMinds"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className={`${styles.flipCardBack} absolute w-full h-full bg-[#134BD6] rounded-[20px] flex items-center justify-center ${styles.backfaceHidden}`}>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute h-[2vw] w-[2.2vw] bottom-[10%] right-[5%]">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[30%] right-[5%]">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[45%] left-[20%]">
          <Image src="/assets/icons/blue-hexagon.svg" fill alt="blue-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[25%] left-[10%]">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] bottom-[5%] left-[5%]">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>
        <div className="absolute h-[2vw] w-[2.2vw] top-[70%] right-[25%]">
          <Image src="/assets/icons/yellow-hexagon.svg" fill alt="yellow-hexagon"/>
        </div>
      </div>
    </section>
  );
};

export default Part;
