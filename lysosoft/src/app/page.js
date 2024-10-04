import Image from "next/image";
import Contact from "@/app/ui/Contact";
import MottoCard from "@/app/ui/homepage/MottoCard";

export default function Home() {
  return (
    <div className="h-screen">
      <MottoCard title={'"A good metric changes the way you behave"'} author={'- Alistair Croll, Lean Analytic'}/>
        <Contact/>

    </div>
  );
}
