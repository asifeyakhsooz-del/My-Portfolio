'use client';

import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Linkedin, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'nav-blur bg-white/95 shadow-sm border-b border-navy-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2.5 transition-colors ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-brand-green" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg tracking-tight">
              Asif Ali
            </span>
            <span
              className={`text-[10px] sm:text-xs font-medium tracking-wide uppercase ${
                scrolled ? 'text-muted-foreground' : 'text-navy-200'
              }`}
            >
              Real Estate Bookkeeper
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-brand-green/10 hover:text-brand-green ${
                scrolled
                  ? 'text-navy-700'
                  : 'text-navy-100 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Social Icons */}
          <div className="flex items-center gap-1 ml-2">
            <a
              href="https://www.linkedin.com/in/asif-alibookkeeper/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-navy-500 hover:text-brand-green hover:bg-brand-green/10'
                  : 'text-navy-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0151ad6431951e1ed9"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-navy-500 hover:text-brand-green hover:bg-brand-green/10'
                  : 'text-navy-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Upwork Profile"
            >
              <ExternalLink className="w-4.5 h-4.5" />
            </a>
          </div>
          <button
            onClick={() => handleNavClick('#contact')}
            className="ml-2 px-5 py-2.5 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-all duration-200 hover:shadow-lg hover:shadow-brand-green/25"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile: Social + Menu Button */}
        <div className="flex lg:hidden items-center gap-1">
          <a
            href="https://www.linkedin.com/in/asif-alibookkeeper/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-navy-600 hover:bg-navy-50'
                : 'text-navy-200 hover:bg-white/10'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-navy-900 hover:bg-navy-50'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-navy-100 px-4 py-3 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-navy-700 font-medium rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-2 px-4 py-2">
            <a
              href="https://www.linkedin.com/in/asif-alibookkeeper/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-brand-green transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="text-navy-200">|</span>
            <a
              href="https://www.upwork.com/freelancers/~0151ad6431951e1ed9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-navy-600 hover:text-brand-green transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Upwork
            </a>
          </div>
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full mt-1 px-5 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green-dark transition-colors"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
