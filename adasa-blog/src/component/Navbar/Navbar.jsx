import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Search, Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo-GdqARQRt.png';

export const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
      isActive
        ? 'bg-[#EE600F] text-white shadow-md shadow-[#EE600F]/25'
        : 'text-zinc-400 hover:text-white'
    }`;

  return (
    <>

    <header className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-sm">
            <img src={logo} alt="Logo" className="" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white tracking-tight leading-none">
              عدسة
            </span>
            <span className="text-[11px] font-medium text-[#ED9625]/90 mt-1">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </Link>

        
        <nav className="hidden md:flex items-center bg-[#18181b] border border-zinc-800 rounded-full p-1.5 gap-1">
          <NavLink to="/" end className={navLinkClass}>
            الرئيسية
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            المدونة
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            من نحن
          </NavLink>
        </nav>

        
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/blog"
            aria-label="بحث"
            className="text-zinc-400 hover:text-white transition p-2 rounded-full hover:bg-zinc-800/60"
          >
            <Search className="w-5 h-5" />
          </Link>

          <Link
            to="/blog"
            className="bg-brand hover:bg-brand text-white font-bold text-sm px-7 py-3 rounded-full transition shadow-lg shadow-[#EE600F]/20"
          >
            ابدأ القراءة
          </Link>
        </div>

        
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2"
          aria-label="القائمة"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      
      {mobileOpen && (
        <div className="md:hidden bg-[#141414] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col gap-2">
            <NavLink to="/" end onClick={() => setMobileOpen(false)} className={navLinkClass}>
              الرئيسية
            </NavLink>
            <NavLink to="/blog" onClick={() => setMobileOpen(false)} className={navLinkClass}>
              المدونة
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} className={navLinkClass}>
              من نحن
            </NavLink>
          </div>
          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-brand text-white font-bold text-sm py-3 rounded-full"
          >
            ابدأ القراءة
          </Link>
        </div>
      )}
    </header>

    
    
    
    </>
  )
}
