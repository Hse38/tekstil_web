'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { locale, setLocale, content } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/products', label: content.nav.products },
    { href: '#about', label: content.nav.about },
    { href: '#services', label: content.nav.services },
    { href: '#process', label: content.nav.process },
    { href: '#portfolio', label: content.nav.portfolio },
    { href: '#sustainability', label: content.nav.sustainability }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-neutral-900">
            TEXTILE
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors transition-transform hover:-translate-y-0.5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="#contact" 
              className="hidden sm:inline-flex px-6 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
            >
              {content.nav.cta}
            </Link>
            <a
              href="https://wa.me/905327462067"
              className="hidden sm:inline-flex items-center justify-center px-3 py-2 text-xs font-semibold border border-emerald-500 text-emerald-700 hover:bg-emerald-50 transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              WP
            </a>
            <button
              type="button"
              className="hidden lg:inline-flex items-center justify-center px-3 py-2 text-xs font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors"
              onClick={() => setLocale(locale === 'tr' ? 'en' : 'tr')}
              aria-label={content.nav.toggleLabel}
            >
              {locale === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40">
          <div className="container-custom px-6 md:px-12 lg:px-16 pt-24">
            <div id="mobile-menu" className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-neutral-900 hover:text-accent-stone transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="button-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {content.nav.cta}
              </Link>
              <a
                href="https://wa.me/905327462067"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold border border-emerald-500 text-emerald-700 hover:bg-emerald-50 transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors"
                onClick={() => setLocale(locale === 'tr' ? 'en' : 'tr')}
                aria-label={content.nav.toggleLabel}
              >
                {locale === 'tr' ? 'EN' : 'TR'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
