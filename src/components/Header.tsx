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
    <header className="fixed top-0 inset-x-0 z-50 bg-eggshell/80 backdrop-blur-lg border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-brand truncate">
          EJ Signs
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-all duration-150 ${
                active === href.substring(1) ? 'text-brand font-semibold' : 'text-foreground/80'
              } hover:-translate-y-0.5 hover:text-foreground`}
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
      </div>
    </header>
  );
}

export default Header 