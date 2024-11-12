import Image from 'next/image';
import React from 'react';

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
  const platform1=[
    "/assets/images/homepage/platform/facebook.png",
    "/assets/images/homepage/platform/times-network.png",
    "/assets/images/homepage/platform/sony-liv.png",
    "/assets/images/homepage/platform/share-chat.png",
    "/assets/images/homepage/platform/amazon.png",
    "/assets/images/homepage/platform/quora.png",
    "/assets/images/homepage/platform/spotify.png"
  ]
  const platform2= [
    "/assets/images/homepage/platform/inshort.png",
    "/assets/images/homepage/platform/network-18.png",
    "/assets/images/homepage/platform/ndtv.png",
    "/assets/images/homepage/platform/gaana.png",
    "/assets/images/homepage/platform/double-click.png",
    "/assets/images/homepage/platform/disney-hotstar.png"
  ]
  const media1= [
    "/assets/images/homepage/media/social-samosa.png",
    "/assets/images/homepage/media/crunch-base.png",
    "/assets/images/homepage/media/mxm.png",
    "/assets/images/homepage/media/hindu.png",
    "/assets/images/homepage/media/your-story.png",
  ]

  // Duplicate the array for a seamless loop
  const images = [...clients1, ...clients1];
  const images2 = [...clients2, ...clients2];
  const pimages1= [...platform1,...platform1];
  const pimages2 = [...platform2,...platform2];
  const mimages1= [...media1,...media1];


  return (
    <section id="clients">
      <div className="w-screen h-full  flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[1vw]  py-[5vw]">
          <h2 className="heading-2">
            <span className="blue-text">Proud</span> to work with
          </h2>
          <p className="content w-[70%] text-center">
            Our diverse & growing portfolio spanning from lean startups to household brands - and everything in between
          </p>
        </div>
        <p className='content pb-[3vw]'>Clients</p>
        <div className="slider h-[7vw] m-auto overflow-hidden relative">
          <div className="slide-track">
            {images.map((src, index) => (
              <div key={index} className="slide h-[10vw] w-[19vw]">
                <div className="h-[3vw] w-[10vw] relative">
                  <Image
                    src={src}
                    fill
                    alt={`client-logo-${index}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="slider h-[7vw]  overflow-hidden relative m-auto">
          <div className="slide-track">
            {images2.map((src, index) => (
              <div key={index} className="slide h-[10vw] w-[19vw]">
                <div className="h-[3vw] w-[10vw] relative">
                  <Image
                    src={src}
                    fill
                    alt={`client-logo-${index}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className='content py-[3vw]'>Platform Partners</p>
        <div className="slider2 h-[7vw] m-auto overflow-hidden relative">
          <div className="slide-track">
            {pimages1.map((src, index) => (
              <div key={index} className="slide h-[10vw] w-[19vw]">
                <div className="h-[3vw] w-[10vw] relative">
                  <Image
                    src={src}
                    fill
                    alt={`client-logo-${index}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="slider2 h-[7vw]  overflow-hidden relative m-auto">
          <div className="slide-track">
            {pimages2.map((src, index) => (
              <div key={index} className="slide h-[10vw] w-[19vw]">
                <div className="h-[3vw] w-[10vw] relative">
                  <Image
                    src={src}
                    fill
                    alt={`client-logo-${index}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className='content py-[3vw]'>Media Partners</p>
        <div className="slider h-[7vw] m-auto overflow-hidden relative">
          <div className="slide-track">
            {mimages1.map((src, index) => (
              <div key={index} className="slide h-[10vw] w-[19vw]">
                <div className="h-[3vw] w-[10vw] relative">
                  <Image
                    src={src}
                    fill
                    alt={`client-logo-${index}`}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
