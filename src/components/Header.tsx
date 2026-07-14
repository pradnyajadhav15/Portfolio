'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const handleScroll = () => setMenuOpen(false);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        

        <nav className="hidden md:flex items-center gap-1 px-5 py-2 bg-secondary/70 backdrop-blur-sm rounded-full border border-border">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-200"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
          >
            Hire Me
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-xl transition-all"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 py-3 px-4 bg-primary text-primary-foreground rounded-xl text-base font-semibold text-center hover:bg-primary/90 transition-all"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}