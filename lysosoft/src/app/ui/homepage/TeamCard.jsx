
import React from 'react'
import CommonGradient from '@/app/ui/homepage/CommonGradient'
import Badge from '@/app/ui/homepage/Badge'
import TeamScroller from '@/app/ui/common/TeamScroller'
import Image from 'next/image'

const Teams=[
    {
        name:"Designer",
        img:"designer1.png"
    },
    {
        name:"Content Creator",
        img:"designer2.png"
    },
    {
        name:"Developer",
        img:"designer3.png"
    },
    {
        name:"Content Writer",
        img:"designer8.png"
    },
    {
        name:"Developer",
        img:"designer5.png"
    },
    {
        name:"Designer",
        img:"designer6.png"
    },
    {
        name:"Designer",
        img:"designer7.png"
    },
    {
        name:"SEO Starategist",
        img:"designer8.png"
    },
    {
        name:"Designer",
        img:"designer9.png"
    },
    {
        name:"Video Editor",
        img:"designer10.png"
    },
    
   
]
const TeamCard = () => {
  return (
    <div className="relative flex gap-5 rounded-2xl sm:max-h-[545px] p-3 overflow-hidden bg-[url('/images/commonBlur.png')] bg-no-repeat bg-cover z-30 opacity-85 hover:opacity-100">
    
      <div className='w-3/5 2xl:w-1/2 relative   flex flex-col gap-2 justify-around sm:justify-between h-inherit '>
        <Badge title={'Agency'} imgUrl={'agency.png'}/>
        <div className='flex flex-col gap-2 items-start justify-center min-w-2/5 max-w-3/4'>
            <p className='text-white text-lg sm:text-3xl 2xl:text-4xl font-semibold '>Growth Team</p>
            <p className='text-sm sm:text-base 2xl:text-lg text-white w-full 2xl:w-3/4'>Get the dynamic and skilled team you deserve.</p>
        </div>
      </div>
      
      <CommonGradient/>
      <div className='h-full flex flex-col gap-3 w-3/5 sm:w-1/2 translate-x-4 sm:translate-x-8 2xl:translate-x-20'>
            {
                Teams.map((team)=>(
                    <div className='bg-[hsla(0,0%,100%,.15)] py-1  flex items-center gap-2 rounded-full'>
                        <div className='w-10 h-10 rounded-full overflow-hidden'>
                            <Image src={`/images/` + team.img} width={42} height={42} alt={team.name}/>
                        </div>
                        <p className='text-white text-sm sm:text-base 2xl:text-xl font-medium pr-4'>{team.name}</p>
                    </div> 
                ))
            } 
      </div>
      
      
    </div>
  )
}

export default TeamCard