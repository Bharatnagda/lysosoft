import Image from 'next/image'
import React from 'react'

const Badge = ({title,imgUrl}) => {
  return (
    <div className='flex items-center gap-1 bg-[#0038ff] w-fit p-1 rounded-sm'>
        <span className='inline-block w-4 h-4'>
            <Image src={`/icons/${imgUrl}`} width={20} height={20} alt='msg drop'/>
        </span>
        <p className='text-sm font-semibold text-white capitalize'>{title}</p>
    </div>
  )
}

export default Badge