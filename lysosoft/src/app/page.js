import Image from "next/image";
import Contact from "@/app/ui/Contact";
import MottoCard from "@/app/ui/homepage/MottoCard";
import HeroSection from "@/app/ui/homepage/HeroSection";
import SpotifyCard from "@/app/ui/homepage/SpotifyCard";
import ServiceBox from "@/app/ui/homepage/ServiceBox";
import TeamCard from "@/app/ui/homepage/TeamCard";
import VideoCard from "@/app/ui/homepage/VideoCard";
import Capabilities from "@/app/ui/homepage/Capabilities";
import FloatingServices from "./ui/homepage/FloatingServices";

export default function Home() {
  return (
    <div className="px-2 sm:px-4 flex-col flex gap-4">
      <HeroSection/>
      <div className="flex flex-col sm:flex-row  w-full gap-8">
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <SpotifyCard/>
          <TeamCard/>
          <FloatingServices/>
        </div>
        <div className="w-full sm:w-2/3">
          <ServiceBox/>
          <div className="flex flex-col sm:flex-row items-start gap-8 my-8">
            <div className="w-full sm:w-1/2 rounded-xl overflow-hidden h-full">
              <VideoCard/>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-6">
              <MottoCard title={'"A good metric changes the way you behave"'} author={'- Alistair Croll, Lean Analytic'}/>
              <div className="w-full max-h-[450px] sm:max-h-[830px] overflow-hidden">
                <Capabilities/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Contact/>

    </div>
  );
}
