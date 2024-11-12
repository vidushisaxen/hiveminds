import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../Button/PrimaryButton';

const BlogCard=()=>{
  return(
    <>
    <div className='h-[30vw] w-[25vw] bg-white rounded-[30px] flex flex-col items-start justify-center gap-[1vw] px-[2vw] py-[2vw] shadow-2xl drop-shadow-2xl'>
      <div className='h-[50%] w-full relative'>
        <Image src="/assets/images/homepage/blogs-1.png" fill alt='blogs-1'/>
      </div>
      <p className='text-[1.35vw] font-medium montreal'>Decoding Attribution Windows: Finding the Perfect Fit for Your Marketing Strategy</p>
      <p className='content'>June 6, 2024</p>
      <Link href={"#"}>
      <p className='content  border-b border-[#111111]'>Read more</p>
      </Link>
    </div>
    </>
  )
}

const Blogs = () => {
  return (
    <>
      <section id="blogs">
        <div className="w-screen h-[40vw] flex items-center justify-center  z-[10] ">
          <div className="w-[92%] h-full rounded-[30px] bg-white flex items-center justify-center px-[2vw] py-[5vw]  drop-shadow-2xl shadow-inner">
            <div className="w-[30%] h-full ">
              <div>
                <h2 className="heading-2 ">
               <span className='blue-text'> Passionate </span> About All Things Digital?
                </h2>
                <p className="content w-[60%]">
                Stay updated with our latest industry insights, company news, and thought leadership.
                </p>
              </div>
              <div className="flex flex-wrap items-center mt-[4vw] gap-[2vw]">
                <PrimaryButton text={"Blogs"} link={"#"}/>
                <PrimaryButton text={"News"} link={"#"}/>
              </div>
            </div>
            <div className="w-[70%] h-full flex items-center justify-center">
              <div className='flex items-start justify-center gap-[2vw] h-full w-full'>
                <BlogCard/>
                <BlogCard/>
                <div className='flex items-center justify-center h-full'>
                <Link href={"#"}>
                <p className='content  border-b border-[#111111]'>View more</p>
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
