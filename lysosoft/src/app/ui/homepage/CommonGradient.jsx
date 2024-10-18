import Image from 'next/image'
import React from 'react'

const CommonGradient = () => {
  return (
    <div className="absolute -right-0 sm:-right-[15%] top-0 bottom-0 object-cover h-full w-full -z-10 opacity-80">
        <Image src={'/images/commonGradient.png'} width={550} height={550} alt="gradient" className="object-cover w-full h-full"/>
    </div>
  )
}

export default CommonGradient