"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

// --- Типизация данных ---
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

  // Конфигурация ссылок
  const navConfigs: NavConfigs = {
    main: [
      { href: "/org1", label: "Фонд Рериха" },
      { href: "/org2", label: "Центр Уриэль" },
    ],
    org1: [
      { href: "/org1/about", label: "О нас" },
      { href: "/org1/library", label: "Библиотека" },
      { href: "/org1/museum", label: "Музей" },
      {
        label: "Просвещение",
        submenu: [
          { href: "/org1/science/conferences", label: "Конференции" },
          { href: "/org1/science/lectures", label: "Лекторий" },
        ],
      },
      { href: "/org1/books", label: "Книги" },
      { href: "/org1/gallery", label: "Галерея" },
    ],
    org2: [
      { href: "/org2/about", label: "О нас" },
      {
        label: "Кружки",
        submenu: [
          { href: "/org2/clubs/ships", label: "Судомодельный" },
          { href: "/org2/clubs/art", label: "Художественный" },
        ],
      },
      {
        label: "Работы",
        submenu: [
          { href: "/org2/works/models", label: "Модели кораблей" },
          { href: "/org2/works/painting", label: "Живопись" },
          { href: "/org2/works/crafts", label: "Поделки" },
        ],
      },
      { href: "/org2/exhibitions", label: "Выставки" },
    ],
  };

  // Определение текущего набора ссылок на основе URL
  let currentLinks: NavLink[] = navConfigs.main;
  let logoLabel = "РЕРИХ";
  let subLabel = "Наследие и Культура";

  if (pathname.startsWith("/org1")) {
    currentLinks = navConfigs.org1;
    logoLabel = "ФОНД РЕРИХА";
    subLabel = "Севастопольский городской";
  } else if (pathname.startsWith("/org2")) {
    currentLinks = navConfigs.org2;
    logoLabel = "УРИЭЛЬ";
    subLabel = "Центр детского творчества";
  }

  return (
    <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-slate-200 font-serif">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* ЛОГОТИП */}
        <Link
          href="/"
          className="group flex items-center gap-3 shrink-0 py-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="h-10 w-[2px] bg-blue-900/20 group-hover:bg-blue-900 transition-all duration-500 hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.15em] text-blue-900 leading-none uppercase">
              {logoLabel}
            </span>
            <span className="text-[8px] lg:text-[9px] font-sans font-bold tracking-[0.3em] text-slate-400 uppercase leading-tight mt-1 group-hover:text-blue-600 transition-colors whitespace-nowrap">
              {subLabel}
            </span>
          </div>
        </Link>

        {/* Desktop Навигация (показывается от 1024px) */}
        <nav className="hidden lg:flex items-center xl:gap-8 lg:gap-4 text-[11px] xl:text-[13px] font-bold uppercase tracking-widest text-slate-800">
          {currentLinks.map((link) => (
            <div
              key={link.label}
              className="relative py-8"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href || "#"}
                className={`flex items-center whitespace-nowrap transition-colors duration-300 hover:text-blue-700 ${
                  pathname === link.href ? "text-blue-900" : ""
                }`}
              >
                {link.label}
                {link.submenu && (
                  <ChevronDown
                    size={12}
                    className={`ml-1 transition-transform duration-300 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Выпадающее меню */}
              {link.submenu && activeDropdown === link.label && (
                <div className="absolute top-[100%] left-[-20px] w-64 bg-white border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] py-4 animate-in fade-in slide-in-from-top-2">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-6 py-3 text-[12px] font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-all border-l-4 border-transparent hover:border-blue-900"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Бургер-кнопка для мобильных и планшетов */}
        <div className="flex items-center lg:hidden">
          <button
            className="p-2.5 text-blue-900 hover:bg-slate-50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="container mx-auto py-8 px-6 space-y-6">
            {currentLinks.map((link) => (
              <div key={link.label} className="border-b border-slate-50 pb-4">
                <Link
                  href={link.href || "#"}
                  onClick={() => !link.submenu && setIsOpen(false)}
                  className="text-lg font-black uppercase tracking-tighter text-slate-900 flex justify-between items-center"
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="mt-4 ml-4 grid gap-4 border-l-2 border-blue-900/10 pl-4">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[13px] font-bold uppercase tracking-wider text-slate-500 hover:text-blue-900"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
