import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";

const Layout = ({ children }) => {
    return (
        <>
           
            <Header />
            <main className="relative z-[1]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;