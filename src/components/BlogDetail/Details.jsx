import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from"./blogstyles.module.css"


const Details = ({content}) => {

  return (
    <>
      <section className='h-full w-screen py-[5vw]' id='blog-detail'>
        <div className='container-lg w-full h-full flex items-start justify-between mobile:flex-col tablet:flex-col'>

          <div className='w-[30%] blog-credentials mobile:w-full mobile:flex mobile:flex-col mobile:gap-[3vw] tablet:w-full sticky mobile:static tablet:static top-[8vw]'>
            <p className='text-[1.3vw] font-medium leading-[1] mobile:text-[4vw] tablet:text-[2.5vw]'>Posted On:</p>
            <p className='text-[1.3vw] font-medium leading-[1] py-[1vw] mobile:text-[5.5vw] tablet:text-[3.5vw]'>{content.date}</p>
            <div className='py-[2vw] tablet:py-[3vw]'>
              <p className='text-[1.3vw] font-medium leading-[1] mobile:text-[4vw] mobile:mb-[4vw] tablet:text-[2.5vw] tablet:mb-[2vw]'>Share Article:</p>
              <div className="flex items-start gap-[1vw] py-[1vw] mobile:gap-[3vw] tablet:gap-[2vw]">
                <Link href={content.fbLink}>
                  <div className="w-[2.4vw] h-[2.4vw] border border-black rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw] tablet:w-[7vw] tablet:h-[7vw] ">
                    <span className=" flex justify-center items-center ">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 12 23"
                        fill="none"
                        className='mobile:w-[5vw] mobile:h-[5vw] w-[1.2vw] h-[1.2vw] tablet:h-[3.5vw] tablet:w-[3.5vw]'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.70597 22.9203C6.30874 22.9203 4.9115 22.9203 3.51426 22.9203C3.51426 22.8215 3.50015 22.7226 3.50015 22.6237C3.50015 19.3323 3.50015 16.0409 3.50015 12.7495C3.50015 12.6506 3.50015 12.5658 3.50015 12.4528C2.31462 12.4528 1.15731 12.4528 0 12.4528C0 11.0826 0 9.74059 0 8.37035C1.17142 8.37035 2.32873 8.37035 3.50015 8.37035C3.50015 8.25734 3.50015 8.17259 3.50015 8.10196C3.50015 7.24026 3.48604 6.37856 3.50015 5.53099C3.51426 4.98007 3.54249 4.42914 3.6554 3.89235C4.06469 1.78755 5.58895 0.374926 7.70597 0.0782761C8.73626 -0.0629859 9.75243 0.0217713 10.7827 0.0641499C11.1356 0.0782761 11.5025 0.134781 11.8553 0.177159C11.8553 1.39201 11.8553 2.59274 11.8553 3.80759C10.9521 3.82172 10.0488 3.80759 9.15967 3.84997C8.42576 3.87822 7.97413 4.27376 7.79066 4.95181C7.74832 5.12133 7.72009 5.30497 7.72009 5.47448C7.70597 6.39269 7.70597 7.31089 7.70597 8.22909C7.70597 8.27147 7.72009 8.32798 7.7342 8.39861C9.06087 8.39861 10.3875 8.39861 11.7283 8.39861C11.559 9.76885 11.3755 11.1108 11.2061 12.467C10.0347 12.467 8.8774 12.467 7.72009 12.467C7.72009 12.58 7.72009 12.6506 7.72009 12.7353C7.72009 16.0409 7.72009 19.3605 7.72009 22.6661C7.69186 22.7508 7.70597 22.8356 7.70597 22.9203Z"
                          fill="black"

                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href={content.linkedinLink}>
                  <div className="w-[2.4vw] h-[2.4vw] border border-black rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw] tablet:w-[7vw] tablet:h-[7vw]">
                    <span className=" flex justify-center items-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 21 21"
                        fill="none"
                         className='mobile:w-[5vw] mobile:h-[5vw] w-[1.2vw] h-[1.2vw] tablet:h-[3.5vw] tablet:w-[3.5vw]'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.41992 20.9884C7.41992 16.4383 7.41992 11.9017 7.41992 7.3516C7.41992 7.2439 7.41992 7.13621 7.41992 7.00159C8.80649 7.00159 10.1796 7.00159 11.5931 7.00159C11.5931 7.62083 11.5931 8.24008 11.5931 8.87278C11.8892 8.52277 12.145 8.17277 12.4546 7.87661C13.222 7.14967 14.1508 6.77274 15.1874 6.67851C16.0893 6.59774 16.9913 6.66505 17.8663 6.93428C19.2932 7.39198 20.1817 8.38816 20.5586 9.80164C20.7471 10.5286 20.8144 11.2959 20.9356 12.0363C20.9625 12.1844 20.9759 12.3325 20.9894 12.494C20.9894 15.3075 20.9894 18.1345 20.9894 20.948C19.549 20.948 18.0951 20.948 16.6278 20.948C16.6278 20.8268 16.6278 20.7192 16.6278 20.6249C16.6278 18.3095 16.6412 16.0075 16.6143 13.6921C16.6143 13.1267 16.5336 12.5478 16.4124 11.9959C16.2509 11.2421 15.8066 10.7036 15.0124 10.5286C14.6893 10.4613 14.3527 10.4478 14.0162 10.4747C12.9258 10.5555 12.2123 11.1344 11.97 12.1978C11.8354 12.8036 11.7681 13.4498 11.7681 14.069C11.7412 16.3845 11.7546 18.6864 11.7546 21.0019C10.3277 20.9884 8.87379 20.9884 7.41992 20.9884Z"
                          fill="black"

                        />
                        <path
                          d="M0.351562 20.9878C0.351562 18.0396 0.351562 15.105 0.351562 12.1568C0.351562 10.5414 0.351562 8.91255 0.351562 7.29714C0.351562 7.2029 0.351562 7.10867 0.351562 7.00098C1.80544 7.00098 3.23239 7.00098 4.69972 7.00098C4.69972 7.10867 4.69972 7.21637 4.69972 7.32406C4.69972 11.8338 4.69972 16.3569 4.69972 20.8666C4.69972 20.907 4.69972 20.9474 4.69972 20.9878C3.25931 20.9878 1.80544 20.9878 0.351562 20.9878Z"
                          fill="black"

                        />
                        <path
                          d="M5.03518 2.54475C5.00826 3.9717 3.85054 5.08903 2.45052 5.04865C1.10434 5.02172 -0.0264525 3.83709 0.000471089 2.46398C0.0273947 1.09088 1.19857 -0.026447 2.57167 0.000476579C3.95824 0.0408619 5.0621 1.17165 5.03518 2.54475Z"
                          fill="black"

                        />
                      </svg>
                    </span>
                  </div>
                </Link>
                <Link href={content.twitterLink}>
                  <div className="w-[2.4vw] h-[2.4vw] border border-black rounded-full relative flex justify-center items-center hover:bg-white transition-all duration-500 ease-in-out group mobile:w-[12vw] mobile:h-[12vw] tablet:w-[7vw] tablet:h-[7vw]">
                    <span className=" flex justify-center items-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 19 20"
                        fill="none"
                         className='mobile:w-[5vw] mobile:h-[5vw] w-[1.2vw] h-[1.2vw] tablet:h-[3.5vw] tablet:w-[3.5vw]'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.0125528 19.1681C0.4519 18.6409 0.891246 18.1262 1.34315 17.599C3.28882 15.3395 5.2345 13.0674 7.18018 10.8079C7.21784 10.7577 7.2555 10.7075 7.30571 10.6573C4.87047 7.11742 2.44779 3.57754 0 0.0125528C0.0753166 0.0125528 0.112975 0 0.163186 0C1.90802 0 3.66541 0 5.41024 0C5.53577 0 5.59853 0.0502111 5.6613 0.13808C7.20529 2.38503 8.73672 4.61942 10.2807 6.86636C10.3184 6.91658 10.356 6.97934 10.4062 7.0421C10.7201 6.67807 11.0339 6.31404 11.3351 5.96256C12.9921 4.04199 14.6491 2.12142 16.2935 0.188292C16.4065 0.0502111 16.532 0 16.7077 0C17.1596 0.0125528 17.6115 0 18.1136 0C15.7788 2.72395 13.4566 5.41024 11.1469 8.10909C11.1845 8.17185 11.2222 8.22206 11.2598 8.27227C13.7076 11.8373 16.1554 15.4148 18.6158 18.9798C18.6534 19.03 18.6785 19.0928 18.7162 19.1555C16.8584 19.1555 15.0006 19.1555 13.1427 19.1555C13.1176 19.1179 13.1051 19.0802 13.08 19.0425C11.423 16.6575 9.7786 14.2599 8.13419 11.8624C8.10909 11.8247 8.07143 11.787 8.03377 11.7368C7.97101 11.7996 7.92079 11.8624 7.88314 11.9126C6.55254 13.4566 5.22195 15.0006 3.90391 16.5445C3.1633 17.4107 2.41013 18.2894 1.66952 19.1555C1.10464 19.1681 0.552322 19.1681 0.0125528 19.1681ZM2.24694 1.24272C2.29716 1.31804 2.32226 1.36825 2.34737 1.40591C6.17596 6.87892 9.992 12.3519 13.8206 17.8375C13.8834 17.9379 13.9587 17.9756 14.0842 17.9756C14.8123 17.9756 15.5403 17.9756 16.2684 17.9756C16.3186 17.9756 16.3688 17.963 16.4441 17.963C16.3814 17.8751 16.3437 17.8124 16.306 17.7622C13.5068 13.7453 10.695 9.72839 7.89569 5.72406C6.89147 4.29305 5.88725 2.84948 4.88303 1.41846C4.83281 1.3557 4.74495 1.26783 4.68218 1.26783C3.8788 1.24272 3.08798 1.24272 2.24694 1.24272Z"
                          fill="black"

                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className='w-[60%] h-full mobile:w-full tablet:w-full'>
           {content.content1.map((item,index)=>(
            <div key={index} className='space-y-[2vw] py-[1vw] fadein' dangerouslySetInnerHTML={{__html:item}}/>
           ))}
            {/* <span className='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]' /> */}
            <div className='py-[2vw] mobile:py-[7vw] '>
              <div className='py-[1.5vw] fadein tablet:py-[3vw]'>
                <Image src={content.featuredImage1} height={690} width={1130} alt='blog-image' className='rounded-[1vw] mobile:h-[85vw] mobile:rounded-[4vw] tablet:rounded-[3vw]' />
              </div>
              <span className='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw] mobile:h-[1px] mobile:w-[92%] mobile:my-[10vw] mobile:hidden tablet:w-[92%] tablet:h-[1px]' />
            </div>

            {content.content2.map((item,index)=>(
            <div key={index} className='space-y-[2vw] py-[1vw] fadein' dangerouslySetInnerHTML={{__html:item}}/>
           ))}

            <div className='py-[2vw]'>
              <div className='py-[1.5vw] fadein tablet:py-[3vw]'>
                <Image src={content.featuredImage2} height={690} width={1130} alt='blog-image' className='rounded-[1vw] mobile:rounded-[4vw] tablet:rounded-[3vw]' />
              </div>
              <span className='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw] mobile:h-[1px] mobile:w-[92%] mobile:my-[10vw] mobile:hidden  tablet:w-[92%] tablet:h-[1px]' />
            </div>

            {content.content3.map((item,index)=>(
            <div key={index} className='space-y-[2vw] py-[1vw] fadein' dangerouslySetInnerHTML={{__html:item}}/>
           ))}

           
          </div>

        </div>

      </section>
      
    </>
  )
}

export default Details