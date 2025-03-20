import { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader2 = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 w-screen h-screen bg-white z-[999] flex items-center justify-center"
    >
      <div className="overflow-hidden">
        <h1 ref={textRef} className="heading-1 !text-primary font-bold">
          HiveMinds
        </h1>
      </div>
    </div>
  );
};

export default Loader2;
