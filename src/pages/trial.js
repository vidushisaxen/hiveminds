/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react'
import {useLenis} from "lenis/react"
import { initMagneticButton } from '@/components/splitTextUtils';
import ReelButton from '@/components/Button/ReelButton';
import Header from '@/components/Header';
const VideoModal = dynamic(() => import("@/components/VideoPlayer"));
const trial = () => {
     const videoRef = useRef(null);
      const [videoLoaded, setVideoLoaded] = useState(false);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const lenis = useLenis();
    
      const handleOpen = () => {
        setIsModalOpen(true);
        lenis.stop();
      };
    
      const handleClose = () => {
        setIsModalOpen(false);
        lenis.start();
      };
      useEffect(() => {
        initMagneticButton();
      }, []);
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const video = videoRef.current;
                if (video && !videoLoaded) {
                  // Set video source dynamically when it enters the viewport
                  video.src = "/assets/videos/story-reel.mp4";
                  video.load(); // Ensure the video is loaded
                  video.play(); // Play the video when it's visible
                  setVideoLoaded(true); // Set video as loaded
                }
                observer.unobserve(entry.target); // Stop observing once the video has loaded
              }
            });
          },
          { threshold: 0.5 }
        );
    
        const videoElement = videoRef.current;
        if (videoElement) {
          observer.observe(videoElement);
        }
    
        return () => {
          if (videoElement) observer.unobserve(videoElement);
        };
      }, [videoLoaded]);
  return (

    <div className='w-screen h-[300vh]'>
        <Header />
         <div
            data-magnetic-target
            data-magnetic-strength="200"
            className="w-[90vw] h-[100%] bg-black rounded-[1.5vw] overflow-hidden absolute video top-0 left-[50%] translate-x-[-50%]"
          >
            <div className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 -translate-y-1/2 mobile:static mobile:translate-x-0 tablet:static tablet:translate-x-0">
              <ReelButton
                onClick={handleOpen}
                text="Play Reel"
                className="magnetic-inner z-10"
              />
            </div>
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              poster="/assets/images/homepage/story-reel-poster.png"
              className="object-cover w-full h-full"
            ></video>
          </div>

{isModalOpen && (
          <VideoModal
            poster="/assets/images/homepage/story-reel-poster.png"
            isOpen={isModalOpen}
            onClose={handleClose}
            videoSrc="/assets/videos/story-reel.mp4"
          />
        )}
        
      
    </div>
  )
}

export default trial
