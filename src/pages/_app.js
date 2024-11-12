import "@/styles/globals.css";
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css';
import { DefaultSeo } from 'next-seo';


export default function App({ Component, pageProps }) {

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
    <ReactLenis root>
    <Component {...pageProps} />
    </ReactLenis>
    </>
  ) 
}
