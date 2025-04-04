"use client";
import "@/styles/globals.css";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { DefaultSeo } from "next-seo";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import nextSeoConfig from "../../next-seo.config";
import { 
  AnimatePresence, 
  LazyMotion, 
  domAnimation ,
  m
} from "framer-motion"; 
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import gsap from "gsap";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mouseEnabled, setMouseEnabled] = useState(false);
  const lenis = useLenis();
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      const enableMouse = () => setMouseEnabled(true);
      document.body.style.pointerEvents = mouseEnabled ? "auto" : "none";
      window.addEventListener("mousemove", enableMouse, { once: true });
      return () => {
        document.body.style.pointerEvents = "auto";
        window.removeEventListener("mousemove", enableMouse);
      };
    } else {
      setMouseEnabled(true);
    }
  }, [mouseEnabled]);
  
  useEffect(() => {
    const handleRouteChange = () => {
      if (lenis) {
        lenis.start();
        lenis.scrollTo(0, { immediate: true });
      }
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
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <LocalBusiness />
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />
      <DefaultSeo {...nextSeoConfig} />

      <ReactLenis root options={{ lerp: 0.07, autoRaf: false }} ref={lenisRef}>
        <div style={{ pointerEvents: mouseEnabled ? "auto" : "none" }}>
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
              <m.div
                key={router.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Component {...pageProps} />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
          <SpeedInsights />
          <Analytics />
        </div>
      </ReactLenis>
    </>
  );
}