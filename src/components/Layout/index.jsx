import { useEffect, useState } from "react";
import Footer from "../Footer";
import FooterMobile from "../FooterMobile";
import Header from "../Header";

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
      {!mobileWidth && <Footer />}
      {mobileWidth && <FooterMobile />}
    </>
  )
}

export default Layout;