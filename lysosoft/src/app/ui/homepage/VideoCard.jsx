"use client"
import React, { useEffect, useRef } from 'react'
import Badge from '@/app/ui/homepage/Badge'

const VideoCard = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);
  return (
    <div className='w-full h-full max-h-[475px] sm:max-h-[1124px]'>
      <div className='w-fit absolute z-40 m-5 h-fit'>
        <Badge title={'From the Office'} imgUrl={'office.png'}/>
      </div>
        {/* <video width="588" height="1020" src="/video/officeFun.m4v" loop autoPlay  preload={'auto'} className='h-full w-full'>
            <source src="/video/officeFun.m4v"  />
            </video> */}
            <video
        ref={videoRef}
        width="588"
        height="1020"
        loop
        muted
        preload="auto"
        className="h-full w-full"
        src="/video/officeFun.m4v"
      >
        <source src="/video/officeFun.m4v" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoCard