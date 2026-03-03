'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/org1', label: 'Городской фонд' },
    { href: '/org2', label: 'Центр детского творчества' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      {/* Высота уменьшена с h-20 до h-16 */}
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg md:text-xl font-serif tracking-[0.2em] text-blue-900 font-bold shrink-0 transition-opacity hover:opacity-70"
        >
          РЕРИХ
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-blue-600 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-blue-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-6 px-6 space-y-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-widest text-slate-800 border-b border-slate-50 pb-3"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}