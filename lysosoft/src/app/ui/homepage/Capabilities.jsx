import Image from 'next/image'
import React from 'react'
import Badge from '@/app/ui/homepage/Badge'
const Technologies = [
    {
        title:"Adobe Premiere",
        imgUrl:"AdobePremiere.png"
    },
    {
        title:"Adobe Creative Suite",
        imgUrl:"Adobe-Creative-Suite.png"
    },
    {
        title:"Adobe Illustrator",
        imgUrl:"Adobe-Illustrator.png"
    },
    {
        title:"Amazon Aurora",
        imgUrl:"Amazon-Aurora.png"
    },
    {
        title:"Amazon RDS",
        imgUrl:"Amazon-RDS.png"
    },
    {
        title:"Angular",
        imgUrl:"Angular.png"
    },
    {
        title:"Azure",
        imgUrl:"Azure.png"
    },
    {
        title:"Centra",
        imgUrl:"Centra.png"
    },
    {
        title:"Cloudfare",
        imgUrl:"Cloudfare.png"
    },
    {
        title:"Dato CMS",
        imgUrl:"Dato-CMS.png"
    },
    {
        title:"Firebase",
        imgUrl:"Firebase.png"
    },
    {
        title:"Framer Motion",
        imgUrl:"Framer-Motion.png"
    },
    {
        title:"Google Ads",
        imgUrl:"Google-Ads.png"
    },
    {
        title:"Hubspot",
        imgUrl:"Hubspot.png"
    },
    {
        title:"Javascript",
        imgUrl:"Javascript.png"
    },
    {
        title:"Jquery",
        imgUrl:"Jquery.png"
    },
    {
        title:"MongoDB",
        imgUrl:"MongoDB.png"
    },
    {
        title:"Node.js",
        imgUrl:"Node.js"
    },
    {
        title:"Pardot",
        imgUrl:"Pardot.png"
    },
    {
        title:"Planetscale",
        imgUrl:"Planetscale.png"
    },
    {
        title:"React",
        imgUrl:"React.png"
    },
    {
        title:"React-Native",
        imgUrl:"React-Native.png"
    },
    {
        title:"Redis",
        imgUrl:"Redis.png"
    },
    {
        title:"Sitevision",
        imgUrl:"Sitevision.png"
    },
    {
        title:"Strapi",
        imgUrl:"Strapi.png"
    },
    {
        title:"Styled-components",
        imgUrl:"Styled-components.png"
    },
    {
        title:"Threejs",
        imgUrl:"Threejs.png"
    },
    {
        title:"Typescript",
        imgUrl:"Typescript.png"
    },
    {
        title:"Vercel",
        imgUrl:"Vercel.png"
    },
    {
        title:"Webflowtech",
        imgUrl:"Webflowtech.png"
    },
    {
        title:"WooCommerce",
        imgUrl:"WooCommerce.png"
    },
    {
        title:"Microsoft SQL",
        imgUrl:"Microsoft-SQL.png"
    },
]
const Capabilities = () => {
  return (
    <div className='w-full rounded-lg overflow-hidden h-full relative'>
        <div className='w-fit absolute z-40 m-5 h-fit hidden sm:block'>
            <Badge title={'Capabilities'} imgUrl={'capabilities.png'}/>
        </div>
        <div className='w-full flex flex-wrap gap-8 hover:scale-110 hover:translate-y-10 duration-1000 transition-all'>
            {
                Technologies.map((technology)=>(
                    <div className='w-1/6 sm:w-1/5 rounded-lg relative group sm:opacity-80 hover:opacity-100'>
                        <div className='w-full'>
                            <Image src={`/images/`+ technology.imgUrl} width={136} height={136} alt={technology.title} />
                        </div>
                        <p className='text-blue-500 bg-white p-1 rounded-lg absolute -top-5 right-0 left-0 w-fit text-xs text-center m-auto invisible group-hover:visible transition-all'>
                            {technology.title}
                        </p>    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Capabilities