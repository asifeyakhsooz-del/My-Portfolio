'use client';

import { BookOpen } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'QuickBooks Setup', href: '#services' },
      { label: 'Monthly Bookkeeping', href: '#services' },
      { label: 'Bookkeeping Cleanup', href: '#services' },
      { label: 'Bank Reconciliation', href: '#services' },
      { label: 'Financial Reporting', href: '#services' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { label: 'Property Management', href: '#about' },
      { label: 'Real Estate Investors', href: '#about' },
      { label: 'Short-Term Rentals', href: '#about' },
      { label: 'Fix & Flip', href: '#about' },
      { label: 'AppFolio & Buildium', href: '#services' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'About Me', href: '#about' },
      { label: 'My Process', href: '#process' },
      { label: 'Results', href: '#results' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <BookOpen className="w-6 h-6 text-brand-green" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg tracking-tight">
                  Asif Ali
                </span>
                <span className="text-[10px] text-navy-400 font-medium tracking-wide uppercase">
                  Real Estate Bookkeeper
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-400 leading-relaxed max-w-xs">
              QuickBooks Online ProAdvisor specializing in bookkeeping for
              property managers, landlords, and real estate investors.
            </p>
            <div className="flex gap-3 mt-5">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-navy-300">
                QuickBooks ProAdvisor
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-navy-300">
                Xero Advisor
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-navy-300">
                AppFolio Certified
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-white text-sm mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-navy-400 hover:text-brand-green transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} Asif Ali. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Real Estate Bookkeeping &middot; QuickBooks Online &middot; Property
            Management Accounting
          </p>
        </div>
      </div>
    </footer>
  );
}
