import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({text,link}) => {
  return (
    <Link href={link}>
     <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[1.5vw] py-[0.9vw] rounded-[40px] min-w-[7vw] group hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="text-[0.97vw] font-light group-hover:text-white ">{text}</p>
                </div>
    
</Link>
  )
}

export default PrimaryButton