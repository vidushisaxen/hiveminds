import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlainButton from '../Button/PlainButton';
import { slideIn } from '../gsapAnimations';

const BlogCard=()=>{
  return(
    <>
    <Link href={"#"} className='h-[35vw] w-[26vw] bg-white rounded-[1.5vw] flex flex-col items-start gap-[1vw] px-[1vw] py-[1vw] group hover:shadow-lg hover:drop-shadow-lg transition-all ease-in-out duration-500 '>
      <div className='h-[55%] w-full relative overflow-hidden rounded-[1.2vw]'>
        <Image src="/assets/images/homepage/blogs-1.png" fill alt='blogs-1' className='group-hover:scale-[1.1] transition-all ease-in-out duration-500'/>
      </div>
      <div className='px-[0.5vw] w-[90%] flex flex-col gap-[0.5vw] mt-[1vw]'>

      <p className='text-[1.35vw] font-medium montreal'>Decoding Attribution Windows: Finding the Perfect Fit for Your Marketing Strategy</p>
      <p className='text-[1vw] text-black/50'>June 6, 2024</p>
      <div className='w-fit'>

      <p className='content group-hover:text-[#134BD6] transition-all ease-in-out duration-500 after:block after:w-full after:bg-black after:h-[1.2px] after:mt-[-0.4vw] group-hover:after:scale-0 group-hover:after:transition-all after:transition-all after:duration-500 after:ease-in-out group-hover:after:duration-500 group-hover:after:ease-in-out    group-hover:after:origin-center'>Read more</p>
      
      </div>
      </div>
    </Link>
    </>
  )
}

const Blogs = () => {
  slideIn()
  return (
    <>
      <section id="blogs">
        <div className="w-screen h-full flex items-center justify-center  z-[10]  ">
          <div className="w-[92%] h-full rounded-[30px] bg-[#F2F2F2] flex  justify-center px-[2vw] py-[6vw] gap-[2vw]  drop-shadow-2xl shadow-inner overflow-hidden">
            <div className="w-[35%] h-full ">
              <div className='flex flex-col gap-[2vw]'>
                <h2 className="heading-2 headinganim">
               <span className='blue-text'> Passionate </span> About All Things Digital?
                </h2>
                <p data-para-anim className="content w-[80%]">
                Stay updated with our latest industry insights, company news, and thought leadership.
                </p>
              </div>
              <div className="flex flex-wrap items-center mt-[2vw] gap-[0.7vw]">
                <PlainButton text={"Blogs"} link={"#"} className="fadeup"/>
                <PlainButton text={"News"} link={"#"} className="fadeup"/>
              </div>
            </div>
            <div className="w-[70%] h-full flex items-center justify-center slideIn">
              <div className='flex items-start justify-center gap-[1vw] h-full w-full'>
                <BlogCard/>
                <BlogCard/>
                <div className='flex items-center justify-center h-[35vw] w-[5vw]'>
                <Link href={"#"}>
                <p className='content after:block after:w-full after:bg-black after:h-[1px] after:mt-[-0.4vw] after:transition-all after:duration-500 hover:after:scale-x-0 hover:after:transition-all hover:after:duration-500 hover:after:origin-center'>View All</p>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
