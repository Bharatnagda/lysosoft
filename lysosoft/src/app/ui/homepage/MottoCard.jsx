import React from 'react'
import Badge from '@/app/ui/homepage/Badge'

const MottoCard = ({title,author}) => {
  return (
    <div className='rounded-2xl p-5 flex flex-col gap-2 justify-between min-h-56 h-fit opacity-85 hover:opacity-100 w-fit bg-slate-600'>
        <Badge title={'Weekly Motto'} imgUrl={'msgdrop.png'}/>
        <div className='flex flex-col gap-2 items-start '>
            <p className='text-white text-2xl font-semibold'>{title}</p>
            <p className='text-sm text-white '>{author}</p>
        </div>
    </div>
  )
}

export default MottoCard