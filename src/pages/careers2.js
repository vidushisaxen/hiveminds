import Culture from "@/components/Careers/Culture";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import img from '../../public/assets/images/careers/careers-hero-img.png'
import Contact from "@/components/Careers/Contact";

const CareersSection = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.khConfig = {
                identifier: "ba2656db-0fdb-4859-a652-f6eec08f8d7e",
                domain: "https://hiveminds.keka.com/careers/",
                targetContainer: "#khembedjobs",
            };

            const script = document.createElement("script");
            script.src =
                "https://hiveminds.keka.com/careers/api/embedjobs/js/ba2656db-0fdb-4859-a652-f6eec08f8d7e";
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <Layout>
            <Hero title1={"Careers"} title2={"With Us"} para={"Join HiveMinds, where creativity, data, and innovation converge. Our collaborative team drives digital transformation with passion and purpose, offering dynamic careers that empower you to shape the future of marketing."} img={img} />
            <Culture />
            <section>
                <div className="container-lg">
                    <div id="khembedjobs"></div>
                </div>
            </section>
            <Contact />
        </Layout>
    );
};

export default CareersSection;
