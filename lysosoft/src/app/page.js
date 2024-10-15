import Image from "next/image";
import Contact from "@/app/ui/Contact";
import MottoCard from "@/app/ui/homepage/MottoCard";
import HeroSection from "@/app/ui/homepage/HeroSection";
import SpotifyCard from "@/app/ui/homepage/SpotifyCard";
import ServiceBox from "./ui/homepage/ServiceBox";

export default function Home() {
  return (
    <div className="px-4">
      <HeroSection/>
      <MottoCard title={'"A good metric changes the way you behave"'} author={'- Alistair Croll, Lean Analytic'}/>
      <ServiceBox/>
      <Contact/>
      <SpotifyCard/>

    </div>
  );
}
