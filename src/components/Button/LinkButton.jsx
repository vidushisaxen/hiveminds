import Link from "next/link";

const LinkButton = ({text,link}) => {
    return(
        <Link href={link}>
            <div className="max-w-[16vw] flex bg-[#134BD6] rounded-[50px] h-[3vw] items-center justify-center px-[1vw] py-[2.2vw] pr-[2vw] gap-[1vw] border-[2px] border-white">
                <div className="h-[3vw] w-[3vw] bg-white rounded-full flex items-center justify-center">
                    <img src="/assets/icons/right-arrow.svg"/>
                </div>
                <div>
                    <p className="text-[1.15vw] font-medium text-white">
                        {text}
                    </p>
                </div>
                
            </div>
            
        </Link>
    )
}

export default LinkButton;