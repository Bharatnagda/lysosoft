import React from 'react'
import CommonGradient from '@/app/ui/homepage/CommonGradient'
import Button from '../common/Button'
import CommonGradient2 from '@/app/ui/homepage/CommonGradient2'
import Badge from './Badge'
import Link from 'next/link'
import InfiniteScroller from '../common/InfiniteScroller'

const HeroSection = () => {
  return (
    <div className="flex items-stretch gap-5 my-8  sm:h-[548px]">
      <div className='w-3/4 relative py-20 rounded-2xl p-5 flex flex-col gap-2 justify-between min-h-56 opacity-85 hover:opacity-100 bg-[url("/images/commonBlur.png")] overflow-hidden bg-no-repeat bg-cover z-30'>
        <div className='flex flex-col gap-2 items-start w-2/5'>
            <p className='text-white text-4xl font-semibold'>This is the turning point of your digital growth</p>
            <p className='text-base text-white my-4 leading-[180%]'>With a data-first approach, we identify growth opportunities, design optimal experiences, and build scalable solutions.</p>
            <Button url={'tel:+91-9782241022'} title={'Are you Ready'}/>
        </div>
        <CommonGradient/>
      </div>
      <div className='w-[35%] relative group rounded-2xl p-5 flex flex-col gap-2 justify-start min-h-56  bg-[url("/images/commonBlur.png")] overflow-hidden bg-no-repeat bg-cover z-30'>
        <Badge title={'Latest Cases'} imgUrl={'stars.png'}/>
        <Link href={''}>
          <div className='flex flex-col gap-2 items-start w-3/5 pt-4'>
              <p className='text-white text-4xl font-semibold'>Result driven</p>
              <p className='text-base text-white leading-[180%]'>Read more about the custom solutions we built for a wide range of client.</p>
          </div>
          <span className="bg-[hsla(0,0%,100%,.2)] text-white py-2 px-4 rounded-lg w-fit invisible text-xl font-medium translate-y-5 cursor-pointer transition-all delay-300 absolute top-5 right-5 group-hover:visible group-hover:translate-y-0">↗</span>
        </Link>
          <CommonGradient2/>
          <div className="rotate-[-20deg] translate-y-20">
            <InfiniteScroller/>
          </div>
      </div>
    </div>
  )
}

export default HeroSection