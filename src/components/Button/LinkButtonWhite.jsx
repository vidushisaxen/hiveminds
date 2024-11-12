import Link from "next/link";

const LinkButtonWhite = ({text,link}) => {
    return(
        <Link href={link}>
            <div className="max-w-[16vw] flex bg-white rounded-[50px] h-[3vw] items-center justify-center px-[1vw] py-[2.2vw] pr-[2vw] gap-[1vw] border-[2px] border-[#134BD6]">
                <div className="h-[3vw] w-[3vw] bg-[#134BD6] rounded-full flex items-center justify-center">
                    <img src="/assets/icons/right-arrow-white.svg"/>
                </div>
                <div>
                    <p className="text-[1.15vw] font-medium text-[#111111]">
                       {text}
                    </p>
                </div>
                
            </div>
            
        </Link>
    )
}

export default LinkButtonWhite;