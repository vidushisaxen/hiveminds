import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({text,link}) => {
  return (
    <Link href={link}>
    <div className="w-[10.4vw] flex bg-[#134BD6] rounded-[50px] h-[3vw] items-center justify-center px-[1vw] py-[2vw]  gap-[1vw]">
        <div>
            <p className="text-[0.94vw] font-medium montreal text-white">
                {text}
            </p>
        </div>
        
    </div>
    
</Link>
  )
}

export default PrimaryButton