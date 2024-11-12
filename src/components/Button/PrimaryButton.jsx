import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({text,link}) => {
  return (
    <Link href={link}>
     <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[1vw] py-[0.5vw] rounded-[40px] min-w-[7vw] group hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content group-hover:text-white">{text}</p>
                </div>
    
</Link>
  )
}

export default PrimaryButton