import React from 'react'

const Overview = () => {
  return (
   <section className='w-screen h-full'>
    <div className='w-full h-full px-[3vw] py-[5vw] flex items-center justify-between'>
        <div className='w-[40%]'>
            <h2 className=' font-bold heading-2'>Services 
                <span className='text-primary'> Overview</span>
            </h2>
        </div>
        <div className='w-[60%] flex items-end justify-end flex-col'>
            <p className='content w-[68%] tracking-wide para py-[2vw]'>At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology, and data-driven insights to craft campaigns that elevate your brand and drive sustainable growth.</p>
            <p className='content  w-[68%] tracking-wide para py-[2vw]'>At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach - integrating strategic expertise, cutting-edge technology.</p>
        </div>

    </div>


   </section>
  )
}

export default Overview