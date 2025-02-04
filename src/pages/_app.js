import "@/styles/globals.css";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { DefaultSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
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
        {/* Mouse interactions enabled dynamically */}
        <div style={{ pointerEvents: mouseEnabled ? "auto" : "none" }}>
          <Component {...pageProps} />
        </div>
      </ReactLenis>
    </>
  );
}
