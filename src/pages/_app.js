"use client";
import "@/styles/globals.css";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { DefaultSeo } from "next-seo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mouseEnabled, setMouseEnabled] = useState(false);

  useEffect(() => {
    const enableMouse = () => setMouseEnabled(true);

    // Disable mouse interactions initially
    document.body.style.pointerEvents = "none";

    // Enable mouse interactions when user moves cursor
    window.addEventListener("mousemove", enableMouse, { once: true });

    return () => {
      document.body.style.pointerEvents = "auto"; // Restore mouse interactions
      window.removeEventListener("mousemove", enableMouse);
    };
  }, []);
  
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

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
        <div style={{ pointerEvents: mouseEnabled ? "auto" : "none" }}>
          <Component {...pageProps} />
        </div>
      </ReactLenis>
    </>
  );
}
