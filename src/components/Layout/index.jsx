import { useEffect, useState } from "react";

import Header from "../Header";
import dynamic from "next/dynamic";
const FooterComponent = dynamic(() => import("@/components/Footer"));
const FooterMobileComponent = dynamic(() => import("@/components/FooterMobile"));

const Layout = ({ children, isOpen }) => {
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 541) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  return (
    <>
     
      <Header isOpen={isOpen} />
      <main className="relative z-[1]">
        {children}
      </main>
      {!mobileWidth && <FooterComponent />}
      {mobileWidth && <FooterMobileComponent />}
    </>
  )
}

export default Layout;