import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='text-white text-2xl h-screen relative'>
        <div className="flex items-center justify-center flex-col gap-6 h-full group ">
          <div className='flex flex-col gap-2 items-center relative z-20'>
            <h2 className='text-4xl text-white font-semibold'>Growth takes many shapes and forms.</h2>
            <p className='text-4xl text-white font-medium'>Let's find out what yours looks like.</p>
          </div>
          <Link href="tel:+91-9782241022" className='bg-white/20 px-8 py-3 rounded-[8px] text-sm font-medium text-white z-20 action-btn peer'>Get in touch ↗</Link>
          <Image src={'/images/loop-img.png'} width={650} height={450} alt='loop image' className='-z-10 absolute top-0 bottom-0 right-0 left-0 m-auto animate-spinCustom '/>
        </div>
    </div>
  )
}

export default Contact