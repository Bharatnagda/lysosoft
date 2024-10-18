"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import RedirectBadge from '@/app/ui/homepage/RedirectBadge';
const Services =[
    {
        imgUrl:"webflow.png",
        badgeTitle:"SEM"
    },
    {
        imgUrl:"webflow1.png",
        badgeTitle:"Brand Identity"
    },
    {
        imgUrl:"webflow2.png",
        badgeTitle:"Audience Insights"
    },
    {
        imgUrl:"webflow3.png",
        badgeTitle:"CRO"
    },
    {
        imgUrl:"webflow4.png",
        badgeTitle:"Display & Programmatic"
    },
    {
        imgUrl:"webflow5.png",
        badgeTitle:"UI &amp; UX"
    },
    {
        imgUrl:"webflow6.png",
        badgeTitle:"Dashboards & Visualisations"
    },
    {
        imgUrl:"webflow7.png",
        badgeTitle:"E-Commerce"
    },
    {
        imgUrl:"webflow8.png",
        badgeTitle:"Svalner"
    },
    {
        imgUrl:"webflow9.png",
        badgeTitle:"Websites"
    },
    {
        imgUrl:"webflow10.png",
        badgeTitle:"Web Vitals"
    },
    {
        imgUrl:"webflow11.png",
        badgeTitle:"Automations"
    },
    {
        imgUrl:"webflow12.png",
        badgeTitle:"SEO"
    },
    {
        imgUrl:"webflow13.png",
        badgeTitle:"Growth Strategy"
    },
    // {
    //     imgUrl:"webflow14.png",
    //     badgeTitle:"Landingpages"
    // },
    {
        imgUrl:"webflow15.png",
        badgeTitle:"Email Marketing"
    },
    {
        imgUrl:"webflow16.png",
        badgeTitle:"Email Design"
    },
    {
        imgUrl:"webflow17.png",
        badgeTitle:"Content Strategy"
    },
    {
        imgUrl:"webflow18.png",
        badgeTitle:"Paid Social"
    },
    

]
const ServiceScroller = () => {
  return (
    <div class="infinite-slider">
                <div class="infinite-slide-track w-[calc(150px*20)] 2xl:w-[calc(150px*30)] flex gap-5 ">
                    
                    {
                        Services.map((service)=>(
                            <div class="group relative infinite-slide rounded-lg grid place-items-center cursor-pointer w-full" key={service.badgeTitle}>
                                <div className="rounded-lg overflow-hidden  ">
                                    <Image src={`/images/`+ service.imgUrl} width={200} height={200} alt={service.badgeTitle} classNamne=""/>
                                </div>
                                <div className="absolute -top-12 2xl:-top-16 left-0 right-0 w-fit m-auto invisible group-hover:visible group-hover:-skew-y-2">
                                    <RedirectBadge badgeTitle={service.badgeTitle}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
  )
}

export default ServiceScroller