'use client';

import { Search, FolderOpen, ArrowRightLeft, FileBarChart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Review',
    description:
      'I start by reviewing your current books, bank statements, and software setup. This assessment reveals exactly where things stand — what is working, what is missing, and what needs to be fixed.',
  },
  {
    number: '02',
    icon: FolderOpen,
    title: 'Organize',
    description:
      'Transactions are categorized correctly, duplicate entries are removed, and your Chart of Accounts is restructured to reflect how your real estate business actually operates.',
  },
  {
    number: '03',
    icon: ArrowRightLeft,
    title: 'Reconcile',
    description:
      'Every bank account, credit card, and loan is reconciled against your statements. For AppFolio and Buildium users, I ensure the property management data aligns with your accounting records.',
  },
  {
    number: '04',
    icon: FileBarChart,
    title: 'Report',
    description:
      'You receive clean, accurate financial reports — P&L by property, balance sheet, cash flow, and owner statements — delivered on a schedule that keeps you informed and in control.',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            My Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            A Clear Path from Chaos to Clarity
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Every engagement follows this four-step framework. Whether it is a
            one-time cleanup or ongoing monthly support, the process stays the
            same.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Connector line (not on last item or mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-navy-200" />
              )}

              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-8 h-8 text-brand-green" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
