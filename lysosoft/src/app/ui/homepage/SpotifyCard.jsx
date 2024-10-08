import React from 'react'
import CommonGradient2 from './CommonGradient2'
import Badge from './Badge'
import Link from 'next/link'
import Button from '@/app/ui/common/Button'
import Image from 'next/image'

const SpotifyCard = () => {
  return (
    <div className='w-[35%] relative group rounded-2xl p-5 flex flex-col gap-2 justify-start min-h-56  bg-[url("/images/commonBlur.png")] overflow-hidden bg-no-repeat bg-cover z-30 pb-0 pr-0 hover:drop-shadow-lg'>
        <Badge title={'Now Playing at Lysosoft'} imgUrl={'spotify.png'}/>
        <CommonGradient2/>
        <div className="flex items-end justify-between">
            <div className="my-5">
                <Button url={'tel:+91-9782241022'} title={'Are you Ready'}/>
            </div>
            <div className="relative h-full">
                <div className="relative z-30  rounded-lg translate-x-2 bg-white w-[250px] h-[250px] flex items-center justify-center">
                    <Image src={'/images/queue3.png'} width={220} height={220} alt='queue song' className="animate-spin m-auto"/>
                </div>
                <Image src={'/images/queue2.png'} width={242} height={242} alt='queue song' className="absolute right-6 -bottom-5 z-20 rounded-lg h-full"/>
                <Image src={'/images/queue1.png'} width={242} height={242} alt='queue song' className="absolute right-10 -bottom-10 rounded-lg  h-full"/>

            </div>
        </div>
          
    </div>
  )
}

export default SpotifyCard