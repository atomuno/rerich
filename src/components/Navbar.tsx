'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface SubMenuLink {
  href: string;
  label: string;
}

interface NavLink {
  label: string;
  href?: string;
  submenu?: SubMenuLink[];
}

interface NavConfigs {
  main: NavLink[];
  org1: NavLink[];
  org2: NavLink[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navConfigs: NavConfigs = {
    main: [
      { href: '/org1', label: 'Городской фонд' },
      { href: '/org2', label: 'Центр детского творчества' },
    ],
    org1: [
      { href: '/org1/about', label: 'О нас' },
      { href: '/org1/library', label: 'Библиотека' },
      { href: '/org1/museum', label: 'Музей' },
      { 
        label: 'Научная работа', 
        submenu: [
          { href: '/org1/science/conferences', label: 'Конференции' },
          { href: '/org1/science/lectures', label: 'Лекторий' }
        ] 
      },
      { href: '/org1/books', label: 'Изданные книги' },
      { href: '/org1/gallery', label: 'Галерея' },
    ],
    org2: [
      { href: '/org2/about', label: 'О нас' },
      { 
        label: 'Детские кружки', 
        submenu: [
          { href: '/org2/clubs/ships', label: 'Судомодельный' },
          { href: '/org2/clubs/art', label: 'Художественный' }
        ] 
      },
      { 
        label: 'Работы', 
        submenu: [
          { href: '/org2/works/models', label: 'Модели кораблей' },
          { href: '/org2/works/painting', label: 'Живопись' },
          { href: '/org2/works/crafts', label: 'Поделки' }
        ] 
      },
      { href: '/org2/exhibitions', label: 'Выставки' },
    ]
  };

  let currentLinks: NavLink[] = navConfigs.main;
  let logoLabel = "РЕРИХ";

  if (pathname.startsWith('/org1')) {
    currentLinks = navConfigs.org1;
    logoLabel = "СГФР";
  } else if (pathname.startsWith('/org2')) {
    currentLinks = navConfigs.org2;
    logoLabel = "УРИЭЛЬ";
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 font-serif">
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg md:text-2xl font-serif tracking-[0.25em] text-blue-900 font-bold shrink-0 transition-opacity hover:opacity-70"
        >
          {logoLabel}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-7 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.2em] text-slate-800">
          {currentLinks.map((link) => (
            <div 
              key={link.label} 
              className="relative group py-4"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={link.href || '#'} 
                className="flex items-center hover:text-blue-700 transition-colors duration-300"
              >
                {link.label}
                {link.submenu && <ChevronDown size={14} strokeWidth={3} className="ml-1.5 transition-transform group-hover:rotate-180" />}
              </Link>

              {/* Dropdown Menu (Desktop) */}
              {link.submenu && activeDropdown === link.label && (
                <div className="absolute left-0 mt-0 w-56 bg-white border border-slate-200 shadow-2xl py-3 animate-in fade-in slide-in-from-top-2">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-5 py-2.5 text-[11px] font-bold hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden p-2 text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-6 px-6 space-y-4 shadow-2xl">
          {currentLinks.map((link) => (
            <div key={link.label} className="space-y-3">
              <Link 
                href={link.href || '#'} 
                onClick={() => !link.submenu && setIsOpen(false)}
                className="block text-sm font-black uppercase tracking-[0.15em] text-slate-900 border-b border-slate-100 pb-2"
              >
                {link.label}
              </Link>
              {link.submenu && (
                <div className="pl-4 space-y-3 pb-2 border-l-2 border-slate-100">
                  {link.submenu.map(sub => (
                    <Link 
                      key={sub.href} 
                      href={sub.href} 
                      onClick={() => setIsOpen(false)}
                      className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-blue-700"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}