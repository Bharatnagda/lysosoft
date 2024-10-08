"use client"
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
const InfiniteScroller = () => {
  return (
    <div class="infinite-slider">
                <div class="infinite-slide-track w-[calc(150px*20)] flex gap-5 ">
                    
                    {
                        Services.map((service)=>(
                            <div class="group relative infinite-slide rounded-lg grid place-items-center cursor-pointer">
                                <div className="rounded-lg overflow-hidden opacity-75 group-hover:opacity-100 w-fit">
                                    <Image src={`/images/`+ service.imgUrl} width={298} height={374} alt={service.badgeTitle} classNamne=""/>
                                </div>
                                <div className="absolute -top-16 left-0 right-0 w-fit m-auto">
                                    <RedirectBadge badgeTitle={service.badgeTitle}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
  )
}

export default InfiniteScroller