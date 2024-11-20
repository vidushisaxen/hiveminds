import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";

const Layout = ({ children }) => {
    return (
        <>
            <Loader />
            <Header />
            <main className="relative z-[1]">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;