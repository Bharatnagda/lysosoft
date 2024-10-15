import React from 'react'
import CommonGradient2 from '@/app/ui/homepage/CommonGradient2'
import Badge from '@/app/ui/homepage/Badge'
import ServiceScroller from '@/app/ui/common/ServiceScroller'

const ServiceBox = () => {
  return (
    <div className="flex items-stretch gap-5 mt-10  sm:h-[548px]">
      <div className='w-3/4 relative pt-20 pb-10 rounded-2xl p-5 flex flex-col gap-2 justify-between items-center min-h-56  bg-[url("/images/commonBlur.png")] overflow-hidden bg-no-repeat bg-cover z-30'>
        <div className='flex flex-col gap-2 items-center justify-center min-w-2/5 max-w-3/4'>
            <p className='text-white text-4xl font-semibold text-center'>All you need for your next big step</p>
            <p className='text-base text-white my-4 leading-[180%] text-center w-3/4'>From marketing moves and strategies to design and tech, we've got everything to boost your growth.</p>
            
        </div>
        <CommonGradient2/>
        <ServiceScroller/>
      </div>
      
    </div>
  )
}

export default ServiceBox