import Image from 'next/image';
import React from 'react';
import styles from '@/styles/clientSlider.module.css';

const LogoSlider = ({ images, altPrefix, sliderClass, sliderWidth, slideMargin }) => (
  <div className={`${sliderClass} h-[7vw] m-auto overflow-hidden relative fadeup`} style={{ width: sliderWidth }}>
    <div className={`${styles.slideTrack}`}>
      {images.map((src, index) => (
        <div key={index} className="slide h-[10vw]" style={{ width: sliderWidth, marginRight: slideMargin }}>
          <div className="h-[3.5vw] w-[11vw] relative group px-[0.5vw]">
            <Image
              src={src}
              fill
              alt={`${altPrefix}-${index}`}
              className="object-contain saturate-0 group-hover:saturate-[1] transition-all duration-300 ease"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Clients = () => {
  const clients1 = [
    "/assets/images/homepage/clients/big-basket-logo.png",
    "/assets/images/homepage/clients/dominos.png",
    "/assets/images/homepage/clients/urban-ladder.png",
    "/assets/images/homepage/clients/pidilite.png",
    "/assets/images/homepage/clients/png.png",
    "/assets/images/homepage/clients/portea.png"    
  ];
  const clients2 = [
    "/assets/images/homepage/clients/airtel.png",
    "/assets/images/homepage/clients/crompton.png",
    "/assets/images/homepage/clients/godrej.png",
    "/assets/images/homepage/clients/cleartrip.png",
    "/assets/images/homepage/clients/jockey.png",
    "/assets/images/homepage/clients/tanishq.png"    
  ];
  const platform1 = [
    "/assets/images/homepage/platform/facebook.png",
    "/assets/images/homepage/platform/times-network.png",
    "/assets/images/homepage/platform/sony-liv.png",
    "/assets/images/homepage/platform/amazon.png",
    "/assets/images/homepage/platform/quora.png",
    "/assets/images/homepage/platform/spotify.png",
    "/assets/images/homepage/platform/network-18.png",
    "/assets/images/homepage/platform/ndtv.png",
    "/assets/images/homepage/platform/gaana.png",
    "/assets/images/homepage/platform/double-click.png",
    "/assets/images/homepage/platform/disney-hotstar.png"
  ];
  const platform2 = [
    "/assets/images/homepage/platform/inshort.png",
    "/assets/images/homepage/media/social-samosa.png",
    "/assets/images/homepage/media/crunch-base.png",
    "/assets/images/homepage/media/mxm.png",
    "/assets/images/homepage/media/hindu.png",
    "/assets/images/homepage/media/your-story.png",
  ];

  return (
    <section id="clients">
      <div className="w-screen h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[1vw] py-[5vw]">
          <h2 className="heading-2 headinganim">
            <span className="blue-text">Proud</span> to work with
          </h2>
          <p className="content w-[70%] text-center fadeup">
            Our diverse & growing portfolio spanning from lean startups to household brands - and everything in between
          </p>
        </div>

        <p className="pb-[3vw] text-[1.24vw] text-[#111111] montreal font-medium">Clients</p>
        <LogoSlider images={[...clients1, ...clients1]} altPrefix="client-logo" sliderClass={`${styles.slider}`} sliderWidth="calc(19vw * 12)" slideMargin="1vw" />
        <LogoSlider images={[...clients2, ...clients2]} altPrefix="client-logo" sliderClass={`${styles.slider}`} sliderWidth="calc(19vw * 12)" slideMargin="1vw" />

        <p className="text-[1.24vw] text-[#111111] montreal font-medium py-[3vw] pb-[4vw]">Platform & Media Partners</p>
        <LogoSlider images={[...platform1,...platform1]} altPrefix="platform-logo" sliderClass={`${styles.slider2}`} sliderWidth="calc(19vw * 10)" slideMargin="8vw" />
        <LogoSlider images={[...platform2, ...platform2]} altPrefix="platform-logo" sliderClass={`${styles.slider2}`} sliderWidth="calc(19vw * 10)" slideMargin="1.5vw" />
      </div>
    </section>
  );
};

export default Clients;
