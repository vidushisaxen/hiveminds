import { Marquee } from "@/components/ui/marquee"

const clients1 = [
    "/assets/images/homepage/logos/clients/big-basket.png",
    "/assets/images/homepage/logos/clients/dominos.png",
    "/assets/images/homepage/logos/clients/urban-ladder.png",
    "/assets/images/homepage/logos/clients/pidilite.png",
    "/assets/images/homepage/logos/clients/P&G.png",
    "/assets/images/homepage/logos/clients/portea.png" ,
   "/assets/images/homepage/logos/clients/big-basket.png",
    "/assets/images/homepage/logos/clients/dominos.png",
    "/assets/images/homepage/logos/clients/urban-ladder.png",
    "/assets/images/homepage/logos/clients/pidilite.png",
    "/assets/images/homepage/logos/clients/P&G.png",
    "/assets/images/homepage/logos/clients/portea.png" ,   
  ];
  const clients2 = [
    "/assets/images/homepage/logos/clients/airtel.png",
    "/assets/images/homepage/logos/clients/crompton.png",
    "/assets/images/homepage/logos/clients/godrej.png",
    "/assets/images/homepage/logos/clients/cleartrip.png",
    "/assets/images/homepage/logos/clients/jockey.png",
    "/assets/images/homepage/logos/clients/tanishq.png",
    "/assets/images/homepage/logos/clients/airtel.png",
    "/assets/images/homepage/logos/clients/crompton.png",
    "/assets/images/homepage/logos/clients/godrej.png",
    "/assets/images/homepage/logos/clients/cleartrip.png",
    "/assets/images/homepage/logos/clients/jockey.png",
    "/assets/images/homepage/logos/clients/tanishq.png"       
  ];
  const platform1 = [
    "/assets/images/homepage/logos/media/amazon.png",
    "/assets/images/homepage/logos/media/disney-hotstar.png",
    "/assets/images/homepage/logos/media/double-click.png",
    "/assets/images/homepage/logos/media/ET.png",
    "/assets/images/homepage/logos/media/fb.png",
    "/assets/images/homepage/logos/media/flipkart.png",
    "/assets/images/homepage/logos/media/gaana.png",
    "/assets/images/homepage/logos/media/google-partner.png",
    "/assets/images/homepage/logos/media/ndtv.png",
    "/assets/images/homepage/logos/media/network-18.png",
    "/assets/images/homepage/logos/media/quora.png",
    "/assets/images/homepage/logos/media/sony-liv.png",
    "/assets/images/homepage/logos/media/spotify.png",
    "/assets/images/homepage/logos/media/the-hindu.png",
    "/assets/images/homepage/logos/media/times-network.png",
    "/assets/images/homepage/logos/media/your-story.png",
  ];
  
  export function Clients() {
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
          <Marquee  pauseOnHover="true" speed={40}>
        {clients1.map((logoSrc, index) => (
          <div
            key={index}
            className="relative h-full w-[13vw] mx-[2vw] flex items-center justify-start group"
          >
            <img src={logoSrc} alt={`Logo ${index}`} className="h-[7vw] sm:w-auto w-[13vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100" />
          </div>
        ))}
      </Marquee>
      <Marquee  pauseOnHover="true" speed={40}>
        {clients2.map((logoSrc, index) => (
          <div
            key={index}
            className="relative h-full w-[13vw] mx-[2vw] flex items-center justify-start group"
          >
            <img src={logoSrc} alt={`Logo ${index}`} className="h-[7vw] sm:w-auto w-[13vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100" />
          </div>
        ))}
      </Marquee>
          <p className="text-[1.24vw] text-[#111111] montreal font-medium py-[3vw]">Platform & Media Partners</p>
          <Marquee direction="right" pauseOnHover="true" speed={60}>
        {platform1.map((logoSrc, index) => (
          <div
            key={index}
            className="relative h-full w-[13vw] mx-[1.5vw] flex items-center justify-start group"
          >
            <img src={logoSrc} alt={`Logo ${index}`} className="h-[7vw] sm:w-auto w-[13vw] saturate-0  transition-all duration-300 ease group-hover:saturate-100" />
          </div>
        ))}
      </Marquee>
        </div>
        
      </section>
      
    );
  }