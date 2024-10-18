import Image from "next/image";
import Contact from "@/app/ui/Contact";
import MottoCard from "@/app/ui/homepage/MottoCard";
import HeroSection from "@/app/ui/homepage/HeroSection";
import SpotifyCard from "@/app/ui/homepage/SpotifyCard";
import ServiceBox from "@/app/ui/homepage/ServiceBox";
import TeamCard from "@/app/ui/homepage/TeamCard";
import VideoCard from "@/app/ui/homepage/VideoCard";

export default function Home() {
  return (
    <div className="px-2 sm:px-4 flex-col flex gap-4">
      <HeroSection/>
      <div className="flex flex-col sm:flex-row  w-full gap-4">
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <SpotifyCard/>
          <TeamCard/>
          <MottoCard title={'"A good metric changes the way you behave"'} author={'- Alistair Croll, Lean Analytic'}/>
        </div>
        <div className="w-full sm:w-2/3">
          <ServiceBox/>
          <VideoCard/>
        </div>
      </div>
      
      <Contact/>

    </div>
  );
}
