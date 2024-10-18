import React from 'react'
import Badge from '@/app/ui/homepage/Badge'
import CommonGradient from '@/app/ui/homepage/CommonGradient'

const MottoCard = ({title,author}) => {
  return (
    <div className='relative rounded-2xl p-5 flex flex-col gap-2 justify-between min-h-56 h-fit opacity-85 hover:opacity-100 w-full bg-[url("/images/commonBlur.png")] overflow-hidden bg-no-repeat bg-cover z-30'>
        <Badge title={'Weekly Motto'} imgUrl={'msgdrop.png'}/>
        <div className='flex flex-col gap-2 items-start '>
            <p className='text-white text-xl 2xl:text-2xl font-semibold'>{title}</p>
            <p className='text-sm text-white '>{author}</p>
        </div>
      <CommonGradient/>
    </div>
  )
}

export default MottoCard