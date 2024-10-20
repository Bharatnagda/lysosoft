"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(window.scrollY > 0); // Update when scrolled past the initial view
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);
  return (
    <header className={`header-section transition-all px-4 top-0 w-full z-50 p-3 flex items-center justify-between bg-[#19191a] shadow-[0_5px_16px_0_(0, 0, 0, 0.1)] backdrop-blur-[.625rem]  ${
      isScrolling ? 'shadow-white shadow-md  fixed top-0' : 'sticky'}`}>
              <Link className="header-title text-white font-medium text-[28px] transition-all" href='javascript:;'>
                  <Image src="/logo.png" width={135} height={48} className='w-40 sm:w-fit sm:h-fit'/>
              </Link>
              <ul className="services-list flex items-center gap-5">
                  <li className="single-list text-white/60 text-[20px] font-medium hover:text-white hidden sm:block"><Link href="javascript:;">Projects</Link></li>
                  <li className="single-list text-white/60 text-[20px] font-medium hover:text-white hidden sm:block"><Link href="javascript:;">Services</Link></li>
                  <li className="single-list text-white/60 text-[20px] font-medium hover:text-white hidden sm:block"><Link href="javascript:;">About</Link></li>
                  <li className="single-list text-white/60 text-[20px] font-medium hover:text-white hidden sm:block"><Link href="javascript:;">Contact</Link></li>
                  <li className="single-list text-white/60 text-[20px] font-medium hover:text-white ml-[20px] sm:last:ml-[120px]"><Link href="tel:+91-9782241022">Let's Talk</Link></li>
              </ul>
          </header>
  )
}

export default Header