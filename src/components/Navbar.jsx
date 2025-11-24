import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/invictus_logo.png"
              alt="Invictus Global Tech"
              className="h-8 w-auto invert hue-rotate-180 saturate-150 brightness-90 transition-all duration-300"
            />
          </Link>

          <div className="flex items-center gap-6">
            <a href="https://wa.me/916369757054" className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#00DC82] transition-colors uppercase tracking-widest">
              <MessageCircle size={16} /> +91 6369 757 054
            </a>
            <button onClick={() => document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' })} className="bg-[#00DC82] text-black font-bold text-xs md:text-sm px-6 py-3 uppercase tracking-wider hover:bg-[#00b368] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,220,130,0.6)] transition-all duration-300 flex items-center gap-2">
              Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
