import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const Join = () => {
  return (
   <section className='py-[5vw]'>
   <div className='w-full h-full container-lg  rounded-[1.5vw] p-[5vw] shadow-md  '>
    <div className='flex items-center justify-between  '>
        <h3 data-heading-anim className='heading-2 w-[30%]'>Are you Ready to Get Join?</h3>
        <PrimaryButton text={"Join Us"} href={"/"}/>

    </div>

   </div>
   </section>
  )
}

export default Join