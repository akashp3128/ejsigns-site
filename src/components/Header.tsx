'use client';

import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

const sectionIds = ['services', 'about', 'faq', 'contact'] as const;

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const Header: FC = () => {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-eggshell/80 backdrop-blur-md border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-brand truncate">
          EJ Signs
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-all duration-150 ${
                active === href.substring(1) ? 'text-brand font-semibold' : 'text-foreground/80'
              } hover:-translate-y-0.5 hover:text-foreground`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="md:block hidden">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center transition-transform rounded-full font-medium text-sm h-10 px-6 bg-brand-accent text-white hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-foreground hover:text-brand-accent focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-5 h-0.5 bg-current transform transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current my-1 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transform transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-eggshell/95 backdrop-blur border-b border-black/10 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-base ${active === href.substring(1) ? 'text-brand font-semibold' : 'text-foreground'} hover:text-brand`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center transition-transform rounded-full font-medium text-base h-11 px-6 bg-brand-accent text-white hover:scale-105"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header 