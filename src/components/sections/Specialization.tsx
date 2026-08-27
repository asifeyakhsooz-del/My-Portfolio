'use client';

import { Building2, Home, Hotel, Hammer, Building, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const specializations = [
  {
    icon: Building2,
    title: 'Property Management Companies',
    description:
      'Full-cycle bookkeeping for property management firms handling multiple units, owner distributions, and complex trust accounting requirements.',
  },
  {
    icon: Building,
    title: 'Real Estate Investors',
    description:
    'Portfolio-level and property-level financial tracking for investors with rental properties, commercial assets, and multi-unit buildings.',
  },
  {
    icon: Home,
    title: 'Rental Property Owners',
    description:
      'Accurate income and expense tracking for single-family rentals, duplexes, and small apartment buildings — including security deposits and repair reserves.',
  },
  {
    icon: Hotel,
    title: 'Airbnb & Short-Term Rental Hosts',
    description:
      'Bookkeeping designed for the unique cash flow patterns of short-term rentals, including platform fee tracking, cleaning costs, and occupancy-based reporting.',
  },
  {
    icon: Hammer,
    title: 'Fix & Flip Investors',
    description:
      'Project-based accounting for fix-and-flip deals — tracking acquisition costs, rehab expenses, holding costs, and final sale proceeds for clear profit analysis.',
  },
  {
    icon: Briefcase,
    title: 'Small & Medium-Sized Businesses',
    description:
      'Reliable monthly bookkeeping and financial reporting for growing businesses that need professional financial management without the cost of a full-time controller.',
  },
];

export default function Specialization() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Built for Real Estate Financials
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Real estate accounting is not the same as restaurant accounting or e-commerce accounting. The chart of accounts, the reconciliation process, and the reporting structure all need to reflect how property businesses actually operate.
          </p>
        </div>

        {/* Specialization Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specializations.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-6 sm:p-8 rounded-2xl border border-navy-100 bg-white card-hover transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-brand-green transition-colors duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
