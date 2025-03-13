/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import "@/styles/globals.css";
import { ReactLenis } from "lenis/react";

import "lenis/dist/lenis.css";
import { DefaultSeo } from "next-seo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLenis } from "lenis/react";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mouseEnabled, setMouseEnabled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if(globalThis.innerWidth>1024){
      
      const enableMouse = () => setMouseEnabled(true);
      // console.log("mobile width")
      // Disable mouse interactions initially
      document.body.style.pointerEvents = mouseEnabled?"auto":"none";
  
      // Enable mouse interactions when user moves cursor
      
      window.addEventListener("mousemove", enableMouse, { once: true });
      return () => {
        document.body.style.pointerEvents = "auto"; // Restore mouse interactions
        window.removeEventListener("mousemove", enableMouse);
      };
    }
    else{
      setMouseEnabled(true)
    }

  }, [mouseEnabled]);
  
  useEffect(() => {
    const handleRouteChange = () => {
      lenis && lenis.start();
      lenis && lenis.scrollTo(0, { immediate: true });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, lenis]);
  useEffect(() => {
  
    const handleRouteChange = () => {
      document.body.style.backgroundColor = "#fafafa";
    };
  
    // Listen to route change events
    router.events.on("routeChangeStart", handleRouteChange);
  
    // Cleanup
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo
        title="Hiveminds"
        description="Delivering Digital Growth"
        additionalLinkTags={[
          {
            rel: "preload",
            href: "/assets/fonts/avenir.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/avenir-medium.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/ppneuemontreal-medium.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
        ]}
      />
      <ReactLenis root options={{ lerp: 0.07 }}>
        {/* <div style={{ pointerEvents: mouseEnabled ? "auto" : "none" }}> */}
        <div>
          <Component {...pageProps} />
        </div>
      </ReactLenis>
    </>
  );
}
