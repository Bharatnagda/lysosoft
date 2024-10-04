import Link from "next/link"
import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="footer-section px-8 pt-3 pb-2 bg-black">
           <div className="footer-nav-card flex items-start justify-between relative h-[24rem] pt-4">
                <div className="single-card flex items-start gap-4">
                        <span className="card-span capitalize text-white/60 font-semibold text-[12px]">Menu</span>
                    <ul className="card-ul">
                        <li className="card-li mt-2.5">
                            <Link href="/" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Home</Link>
                        </li>
                        <li className="card-li mt-2.5">
                            <Link href="javascript:;" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Projects</Link>
                        </li>
                        <li className="card-li mt-2.5">
                            <Link href="javascript:;" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Services</Link>
                        </li>
                        <li className="card-li mt-2.5">
                            <Link href="javascript:;" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">About</Link>
                        </li>
                        <li className="card-li mt-2.5">
                            <Link href="javascript:;" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Contact</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="single-card flex items-start gap-4">
                        <span className="card-span capitalize text-white/60 font-semibold text-[12px]">social</span>
                    <ul className="card-ul">
                        <li className="card-li mt-2.5">
                            <Link href="javascript:;" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Instagram</Link>
                        </li>
                        <li className="card-li mt-2.5">
                            <Link href="javascript:;" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Linkedin</Link>
                        </li>
                        <li className="card-li mt-2.5">
                            <Link href="https://wa.me/919782421022" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">Whatsapp</Link>
                        </li>
                    </ul>
                </div>
                <div className="single-card flex items-start gap-4">
                        <span className="card-span capitalize text-white/60 font-semibold text-[12px]">contact</span>
                    <ul className="card-ul">
                        <li className="card-li mt-2.5">
                            <Link href = "mailto: lysosoft@gmail.com" className="li-link text-white hover:text-white/60 text-[22px] font-medium ">lysosoft@gmail.com</Link>
                        </li>
                        {/* address link will be remote */}
                    </ul>
                </div>
                <div className="single-card legal flex items-center justify-between gap-4 absolute bottom-0 w-full">
                    <p href="javascript:;" className="legal-page text-white text-[14px] font-medium">Legal</p>
                    <p href="javascript:;" className="copy-right text-[44px] text-white font-semibold">&copy; 2020</p>
                </div>

           </div>
        </footer>
      </>
  )
}
