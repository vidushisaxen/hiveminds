import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const [strokePercentage, setStrokePercentage] = useState(0);
  const [isBgVisible, setIsBgVisible] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const strokeInterval = setInterval(() => {
      setStrokePercentage((prev) => {
        if (prev >= 100) {
          clearInterval(strokeInterval);
          animateLoaderExit(); 
          return 100;
        }
        return prev + 2.5;
      });
    }, 50);

    return () => clearInterval(strokeInterval);
  }, []);

  const animateLoaderExit = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsBgVisible(false), 
    });

    tl.to(".hexagon-path", {
      duration: 1,
      ease: "power2.out",
    })
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5"); 
  };

  const hexagonPathLength = 1000;
  const strokeDashoffset =
    hexagonPathLength - (strokePercentage / 100) * hexagonPathLength;

  const HexagonSVG = ({ color }) => (
    <svg
      className="w-[8vw] h-[8vw] object-contain hexagon-svg"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hexagon-path"
        d="M 50,10 L 150,10 L 190,100 L 150,190 L 50,190 L 10,100 Z"
        fill="transparent"
        stroke={color}
        strokeWidth="4"
        strokeDasharray={hexagonPathLength}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: "stroke-dashoffset 10s",
        }}
      />
    </svg>
  );

  return (
    isBgVisible && (
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-screen h-screen bg-white z-[999] flex items-center justify-center"
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="relative h-[25vw] w-[12.5vw] flex items-center justify-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4">
              <HexagonSVG color={"#416AB2"} />
            </div>
            <div className="absolute right-0 top-1/3 -translate-y-1/2">
              <HexagonSVG color={"#6FA1D6"} />
            </div>
            <div className="absolute right-0 bottom-1/3 translate-y-1/2">
              <HexagonSVG color={"#98DAF8"} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
