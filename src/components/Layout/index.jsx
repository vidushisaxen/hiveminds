

import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";

const Layout = ({ children ,isOpen}) => {
    return (
        <>
           
            <Header isOpen={isOpen} />
            <main className="relative z-[1]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;