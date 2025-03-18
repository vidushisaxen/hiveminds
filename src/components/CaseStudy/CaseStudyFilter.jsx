import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CaseStudyFilter = ({ industries, industry, selectedIndustry, setIndustry, clearFilters }) => {
    const isFilterApplied = industry;


    return (
        <div className="flex gap-[1vw] pb-[3vw] tablet:items-end mobile:items-end">
            <div className="flex flex-col">
                <p className="content px-[1vw] py-[0.5vw] mobile:py-[3vw]">Filters:</p>
                <Select value={industry || ""} onValueChange={setIndustry}>
                    <SelectTrigger className="w-[22vw] h-[3.5vw] drop-shadow-none shadow-none mobile:h-full mobile:py-3.5 mobile:px-6 border-[1.5px] border-black rounded-full mobile:w-[40vw] mobile:rounded-[9vw] mobile:border-[1px] ">
                        <SelectValue placeholder="All Indutries" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {industries.map((item) => (
                                <SelectItem key={item.slug} value={item.slug}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {isFilterApplied && (
                <button
                    className="bg-[#134BD6] text-white px-[3vw] py-[1vw] mt-[3vw] rounded-[30px] tablet:py-[1.5vw] tablet:px-[5vw] mobile:text-[4vw] mobile:px-[7vw] mobile:py-[3vw]"
                    onClick={clearFilters} >
                    Clear Filters
                </button>
            )}
        </div>
    )
}

export default CaseStudyFilter;