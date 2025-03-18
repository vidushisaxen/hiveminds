import { useEffect, useState } from "react";
import CaseStudyCard from "../CaseStudy/CaseStudyCard";
import CaseStudyFilter from "../CaseStudy/CaseStudyFilter";
import { useQueryState } from "next-usequerystate";

const Listing = ({ industries, caseStudies }) => {

    const [industry, setIndustry] = useQueryState("industry");
    const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);

    // Filtering Logic
    useEffect(() => {
        let filtered = caseStudies;

        if (industry) {
            filtered = filtered.filter((caseStudy) => caseStudy.industries[0].slug === industry);
        }

        setFilteredCaseStudies(filtered);
    }, [industry, caseStudies]);

    // Function to clear filters
    const clearFilters = () => {
        setIndustry(null);
    };

    return (
        <section className="w-screen h-full pb-[7%] mobile:pt-[5%] tablet:pb-[20%]">
            <div className="container-lg h-full">
                <div className="flex flex-col items-center justify-start gap-[1vw] pt-[7vw] pb-[3vw] mobile:block mobile:space-y-[4vw] tablet:items-start  tablet:gap-[4vw] tablet:pb-0">
                    <h2 className="heading-2 headinganim">
                        Our Case <span className="blue-text">Studies</span>
                    </h2>
                    <p data-para-anim className="content w-[55%] text-center mobile:w-[90%] mobile:text-left tablet:w-[90%] tablet:text-left">
                        At HiveMinds, we tackle your most challenging business problems with
                        our specialised digital marketing approach - integrating strategic
                        expertise, cutting-edge technology, and data-driven insights to
                        craft campaigns that elevate your brand and drive sustainable
                        growth.
                    </p>
                </div>

                <CaseStudyFilter industries={industries} industry={industry} setIndustry={setIndustry} clearFilters={clearFilters} />

                <div className="flex flex-wrap items-start justify-start gap-x-[2%] gap-y-[5vw] mobile:flex-col mobile:gap-y-10 tablet:justify-between tablet:gap-x-0 tablet:gap-y-[5vw] tablet:mt-[5vw] mobile:mt-[10vw]">
                    {filteredCaseStudies.map((item) => (
                        <CaseStudyCard
                            key={item.id}
                            image={item.featuredImage}
                            title={item.title}
                            description={item.excerpt}
                            link={item.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Listing;