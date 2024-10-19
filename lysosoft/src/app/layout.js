import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/layout/Header";
import Footer from "@/app/ui/layout/Footer";

const montserrat = Montserrat_Alternates({ subsets: ["latin"],
weight: ["400", "500", "700"],
 });

export const metadata = {
  title: "Lysosoft - Lyft Your Digital Growth",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} h-screen bg-[#19191a]`}>
        <Header/>
        <div className="">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
