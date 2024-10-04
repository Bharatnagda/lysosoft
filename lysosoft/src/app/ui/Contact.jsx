import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='text-white text-2xl h-screen'>
        <div className="flex items-center justify-center flex-col gap-2 h-full">
          <h2 className='text-[26px] text-white font-semibold'>Growth takes many shapes and forms.</h2>
          <p className='text-[26px] text-white font-medium'>Let's find out what yours looks like.</p>
          <Link href="tel:+91- 9782241022" className='bg-white/20 px-2.5 py-1.5 rounded-[8px] text-[12px] text-white'>Get in touch↗</Link>
        </div>
    </div>
  )
}

export default Contact