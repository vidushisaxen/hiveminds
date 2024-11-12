import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      <section id="caseStudies">
        <div className="w-screen h-[80vh] flex items-center justify-center  z-[10] absolute mt-[-20vw]">
          <div className="w-[92%] h-full rounded-[30px] bg-white flex items-center justify-center px-[2vw] pt-[3vw]  drop-shadow-2xl shadow-inner">
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
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] group hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content group-hover:text-white">Blogs</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] group hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content group-hover:text-white">News</p>
                </div>
              </div>
            </div>
            <div className="w-[70%] h-[80%] flex items-center justify-center">
              <div className='flex items-center justify-center gap-[2vw]'>
                <BlogCard/>
                <BlogCard/>
                <Link href={"#"}>
                <p className='content  border-b border-[#111111]'>View more</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
