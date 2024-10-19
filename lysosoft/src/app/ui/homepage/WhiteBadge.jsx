import Image from 'next/image'
import React from 'react'

const WhiteBadge = ({title,imgUrl}) => {
  return (
    <div className='flex items-center gap-1 bg-white w-fit py-1 px-2 rounded-lg'>
    <span className='inline-block w-4 h-4'>
        <Image src={`/icons/${imgUrl}`} width={20} height={20} alt='msg drop'/>
    </span>
    <p className='text-sm font-semibold text-[#0038ff] capitalize'>{title}</p>
</div>
  )
}

export default WhiteBadge
