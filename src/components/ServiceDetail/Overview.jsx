import React from 'react'

const Overview = ({title1, title2, para}) => {
  return (
   <section className='w-screen h-full bg-white'>
    <div className='w-full h-full px-[3vw] py-[5vw] flex items-center justify-between'>
        <div className='w-[40%]'>
            <h2 className=' font-bold heading-2 headinganim'>{title1}
                <span className='text-primary'>{title2}</span>
            </h2>
        </div>
        <div className='w-[60%] flex items-end justify-end flex-col'>
    <p className='content w-[68%] tracking-wide para py-[2vw] fadeup' dangerouslySetInnerHTML={{ __html: para }}></p>
</div>


    </div>


   </section>
  )
}

export default Overview