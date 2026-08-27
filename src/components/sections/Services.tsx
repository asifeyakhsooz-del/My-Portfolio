'use client';

import {
  BookOpen,
  ArrowRightLeft,
  FileText,
  Settings,
  Receipt,
  BarChart3,
  Calculator,
  Layers,
  CheckCircle2,
  RefreshCcw,
  ClipboardList,
  PieChart,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Settings,
    title: 'QuickBooks Online Setup',
    description:
      'A properly configured QuickBooks file from day one. I set up your Chart of Accounts, connect bank feeds, establish reporting templates, and configure workflows tailored to your property portfolio.',
  },
  {
    icon: RefreshCcw,
    title: 'Cleanup & Catch-Up Bookkeeping',
    description:
      'Months or even years of unorganized records? I systematically work through backlogged transactions, correct miscategorizations, and bring your books fully current.',
  },
  {
    icon: BookOpen,
    title: 'Monthly Bookkeeping',
    description:
    'Consistent, reliable monthly bookkeeping so your financials are always ready when you need them. Categorized transactions, reconciled accounts, and delivered reports on a schedule you can count on.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Bank & Credit Card Reconciliation',
    description:
      'Every dollar accounted for. I reconcile all bank accounts, credit cards, loans, and lines of credit so your balances match and your reports are trustworthy.',
  },
  {
    icon: Layers,
    title: 'AppFolio & Buildium Reconciliation',
    description:
      'Specialized reconciliation for property management platforms. I ensure your AppFolio or Buildium data aligns with your accounting software and bank statements.',
  },
  {
    icon: Receipt,
    title: 'Accounts Payable & Receivable',
    description:
      'Manage what you owe and what is owed to you with accuracy. I track vendor bills, owner distributions, rent payments, and security deposits across your properties.',
  },
  {
    icon: PieChart,
    title: 'Financial Statements',
    description:
      'Clear, accurate P&L statements, balance sheets, and cash flow reports that give you a true picture of your property performance and overall financial health.',
  },
  {
    icon: ClipboardList,
    title: 'Month-End Close',
    description:
      'A disciplined month-end close process that ensures every transaction is recorded, every account is reconciled, and your financials are ready for review.',
  },
  {
    icon: FileText,
    title: 'Owner Statements',
    description:
      'Professional owner statements that clearly show income, expenses, and net proceeds for each property — so your investors and partners stay informed and confident.',
  },
  {
    icon: Calculator,
    title: 'Chart of Accounts Optimization',
    description:
      'A Chart of Accounts structured around how real estate businesses actually operate — property-level tracking, expense categorization, and reporting clarity built in from the start.',
  },
  {
    icon: BarChart3,
    title: 'Profit & Loss Statements',
    description:
      'Property-level and portfolio-wide P&L reports that break down revenue, operating expenses, and net operating income in a format that drives real decisions.',
  },
  {
    icon: CheckCircle2,
    title: 'Property-Level Income & Expense Tracking',
    description:
      'Track income and expenses for each individual property so you know exactly which investments are performing and which need attention.',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 sm:py-28 bg-navy-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Everything Your Real Estate Books Need
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            From initial setup to ongoing monthly support, every service is designed
            around the specific financial needs of property managers, landlords, and
            real estate investors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 sm:p-7 bg-white rounded-2xl border border-navy-100/80 card-hover transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                <service.icon className="w-5 h-5 text-brand-green" />
              </div>
              <h3 className="font-semibold text-navy-900 text-base mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
