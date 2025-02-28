import React from 'react'

const SubServices = ({ heading, para, subservices }) => {
    return (
        <section className='w-screen h-full py-[5vw] px-[3vw] bg-[#134BD6]'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h2 className='heading-2 !text-white'>
                    {heading}
                </h2>
                <p className='content !text-white w-[45%] py-[1vw] '>{para}</p>
                <div className='flex flex-wrap items-center justify-center text-left gap-[2vw] py-[3vw]'>
                    {subservices.map((item, index) => (
                        <div key={index} className='bg-white rounded-[20px] p-[2vw] w-[30vw] min-h-[13.5vw] text-center'>
                            <h4 className='text-[1.55vw] font-medium'>
                                {item.title}
                            </h4>
                            <p className='content mt-[1vw]'>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubServices
