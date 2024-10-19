import Image from 'next/image';
import WhiteBadge from '@/app/ui/homepage/WhiteBadge';

const images = [
    {imaUrl:"float1.png",imgTitle:'Safe And Stable'},
    {imaUrl:"float2.png",imgTitle:'Privacy'},
    {imaUrl:"float3.png",imgTitle:'API Interface'},
    {imaUrl:"float4.png",imgTitle:'Growth Analyitcs '},
    {imaUrl:"float5.png",imgTitle:'Surveillance Defense'},
    {imaUrl:"float6.png",imgTitle:'Port Detection '},
    {imaUrl:"float7.png",imgTitle:'Interface Control'},
    {imaUrl:"float8.png",imgTitle:'Advance Technology'},
    {imaUrl:"float9.png",imgTitle:'Data Analysis '},
    {imaUrl:"float10.png",imgTitle:'Multiple Defenses '},
    {imaUrl:"float11.png",imgTitle:'Core Web Vitals'},
    {imaUrl:"float12.png",imgTitle:'DNA'},
    {imaUrl:"float13.png",imgTitle:'Native Apps '},
    {imaUrl:"float14.png",imgTitle:'Mail Reception'},
    {imaUrl:"float15.png",imgTitle:'System Settings'},
    {imaUrl:"float16.png",imgTitle:'Cloud Acceleration'},
    {imaUrl:"float17.png",imgTitle:'Host Record'},
    {imaUrl:"float18.png",imgTitle:'Flexible Access '},
    {imaUrl:"float19.png",imgTitle:'Cloud Backup'},
    {imaUrl:"float20.png",imgTitle:'24*7 Availability'},
];

const FloatingServices = () => {
    
  return (
    <div className=" h-[780px] w-full flex items-center justify-center rounded-lg overflow-hidden bg-[#0038ff] relative">
        <div className='w-fit absolute top-0 left-0 z-40 m-5'>
            <WhiteBadge title={'TechGuard Suite"'} imgUrl={'clients.png'}/>
        </div>
            <div className='flex flex-wrap gap-12 m-auto w-full justify-center hover:scale-110 transition-all duration-1000 mt-16'>
                {
                    images.map((image)=>(
                        <div className='w-1/6 rounded-lg overflow-hidden  ' title={image.imgTitle}>
                            <Image src={`/images/`+ image.imaUrl} width={105} height={105} alt='floating image'/>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default FloatingServices