"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import RedirectBadge from '@/app/ui/homepage/RedirectBadge';
const Services =[
    {
        imgUrl:"service1.png",
        badgeTitle:"UN Women Sweden"
    },
    {
        imgUrl:"service2.png",
        badgeTitle:"Michael Berglünd"
    },
    {
        imgUrl:"service3.png",
        badgeTitle:"Verifone"
    },
    {
        imgUrl:"service4.png",
        badgeTitle:"Jokabbergsgatan 24"
    },
    {
        imgUrl:"service5.png",
        badgeTitle:"Cryptonow"
    },
    {
        imgUrl:"service6.png",
        badgeTitle:"Dokumentera"
    },
    {
        imgUrl:"service7.png",
        badgeTitle:"Volkswagen"
    },
    {
        imgUrl:"service8.png",
        badgeTitle:"Svalner"
    },
    

]
const TeamScroller = () => {
  return (
    <div class="infinite-slider overflow-hidden">
    <div class="Horizontal-scroll-track w-[calc(150px*10)] flex flex-col gap-5 ">
        
        {
            Services.map((service)=>(
                <div class="flex group relative infinite-slide rounded-lg  place-items-center cursor-pointer opacity-75 hover:opacity-100">
                    <div className="rounded-full overflow-hidden  ">
                        <Image src={`/images/`+ service.imgUrl} width={50} height={50} alt={service.badgeTitle} classNamne=""/>
                    </div>
                    <div className="absolute -top-16 left-0 right-0 w-fit m-auto group-hover:skew-y-3">
                        {service.badgeTitle}
                    </div>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default TeamScroller