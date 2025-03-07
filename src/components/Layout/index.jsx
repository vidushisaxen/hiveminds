

import Footer from "../Footer";
import FooterMobile from "../FooterMobile";
import Header from "../Header";
import Loader from "../Loader";

const Layout = ({ children ,isOpen}) => {
    return (
        <>
           
            <Header isOpen={isOpen} />
            <main className="relative z-[1]">
                {children}
            </main>
            {/* <Footer /> */}
            <FooterMobile/>
        </>
    )
}

export default Layout;