import React from 'react'

const VideoCard = () => {
  return (
    <div className='bg-white rounded-lg p-3 h-[1124px]'>
        <video width="588" height="1124"  autoPlay preload className='h-full w-full'>
            <source src="/video/officeFun.m4v"  />
            <track
                src="/video/officeFun.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
            
            />
            Your browser does not support the video tag.
            </video>
            {/* <video width="320" height="240" autoplay>
  <source src="/video/officeFun.m4v" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video> */}
    </div>
  )
}

export default VideoCard