import React from 'react'
import CommonGradient2 from '@/app/ui/homepage/CommonGradient2'
import Badge from '@/app/ui/homepage/Badge'
import ServiceScroller from '@/app/ui/common/ServiceScroller'

const ServiceBox = () => {
  return (
    <div className='w-full'>
      <div className="realtive flex items-stretch gap-5 h-[428px]  2xl:h-[548px] w-full">
      <div className='w-fit absolute z-40 m-5'>
        <Badge title={'Services'} imgUrl={'service.png'}/>
      </div>
      <div className='w-full relative pt-20 pb-8 2xl:pb-10 rounded-2xl p-5 flex flex-col gap-2 justify-between items-center min-h-56  bg-[url("/images/commonBlur.png")] overflow-hidden bg-no-repeat bg-cover z-30'>
        <div className='flex flex-col gap-2 items-center justify-center min-w-2/5 max-w-full sm:max-w-3/4'>
            <p className='text-white text-2xl sm:text-4xl font-semibold text-center'>All you need for your next big step</p>
            <p className='text-sm sm:text-base text-white sm:my-4 leading-[180%] text-center w-full sm:w-3/4'>From marketing moves and strategies to design and tech, we've got everything to boost your growth.</p>
            
        </div>
        <CommonGradient2/>
        <ServiceScroller/>
      </div>
      
    </div>
    </div>
  )
}

export default ServiceBox