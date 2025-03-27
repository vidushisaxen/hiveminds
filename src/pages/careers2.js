import Culture from "@/components/Careers/Culture";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import img from '../../public/assets/images/careers/careers-hero-img.png'
import Contact from "@/components/Careers/Contact";
import  styles from '@/styles/jobs.module.css'
import Jobs from "@/components/Careers/Jobs";
import PrimaryButton from "@/components/Button/PrimaryButton";

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
            <section className='relative py-[5vw] w-screen h-full overflow-hidden mobile:pb-[10%]'>
            <div className='w-full h-full container-lg'>
                <div className="flex flex-col items-center justify-center gap-[1vw] pb-[5vw] mobile:items-start tablet:items-start tablet:gap-[3vw] mobile:gap-[4vw]">
                    <h2 data-heading-anim className="heading-2 headingAnim">
                        Job
                        <span className="blue-text"> Openings</span>
                    </h2>
                    <p data-para-anim className="content w-[55%] text-center fadein mobile:w-full mobile:text-left tablet:w-[70%] tablet:text-left">
                        Discover rewarding careers at HiveMinds—where innovative minds thrive. Our roles span creative strategy, data analytics, and digital marketing, offering opportunities to grow, collaborate, and transform the future of digital success.
                    </p>
                </div>

                {/* <div className='flex flex-wrap w-full h-full gap-[1vw] mobile:flex-col  mobile:gap-[4vw] mobile:mt-[7vw] tablet:gap-[2vw]'>
                    <JobCard title={"Account Manager / Sr.Account Manager - SEM"} duration={"Full Time"} location={"Bangalore"} link={"/"} />
                    <JobCard title={"Performance Marketing"} duration={"Full Time"} location={"Bangalore"} link={"/"} />
                    <JobCard title={"Sr. Specialist - SEM"} duration={"Full Time"} location={"Bangalore"} link={"/"} />
                    <JobCard title={"Account Manager / Sr.Account Manager - SEM"} duration={"Full Time"} location={"Bangalore"} link={"/"} />
                    <JobCard title={"Specialist - Marketplace"} duration={"Full Time"} location={"Bangalore"} link={"/"} />
                    <JobCard title={"Marketing Analyst"} duration={"Full Time"} location={"Bangalore"} link={"/"} />
                </div> */}
            </div>
            {/* <span className='absolute w-screen h-[55%] bottom-0 left-0 bg-[#134bd5] z-[-1]'>

            </span> */}
        </section>
            <section>
                <div className="container-lg">
                    <div id="khembedjobs" className={styles.jobs}>
                    </div>
                </div>
            </section>
            <Contact />
        </Layout>
    );
};

export default CareersSection;
