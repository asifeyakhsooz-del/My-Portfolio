'use client';

import { Star, CheckCircle2, TrendingUp, Clock, Layers, FileText, ArrowRightLeft, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const caseStudy = {
  tag: 'Case Study',
  title: 'Real Estate Bookkeeping & QuickBooks Online Cleanup',
  clientType: 'Real Estate Investment Firm',
  description:
    'A real estate investment firm operating across brokerage, long-term rentals, fix-and-flip projects, and property acquisitions needed a complete overhaul of their financial records. Their QuickBooks file had not been properly maintained for months, resulting in unreliable reports and delayed decision-making.',
  scope: [
    { icon: Clock, text: 'Long-term bookkeeping engagement with weekly updates' },
    { icon: Layers, text: 'Managed books across brokerage, rentals, flips, and acquisitions' },
    { icon: ArrowRightLeft, text: 'Bank and credit card reconciliation across all entities' },
    { icon: TrendingUp, text: 'Chart of Accounts optimization for property-level reporting' },
    { icon: FileText, text: 'Accurate, decision-ready P&L reports delivered weekly' },
    { icon: BarChart3, text: 'Owner statements and financial reporting for investors' },
  ],
  outcome:
    'Completed successfully with a 5-star client review. The firm now has reliable, up-to-date financials that support strategic decisions across every area of their business.',
};

const stats = [
  { value: '100%', label: 'Accounts Reconciled' },
  { value: 'Weekly', label: 'Reporting Cadence' },
  { value: '5.0', label: 'Client Rating' },
  { value: 'Ongoing', label: 'Engagement Status' },
];

export default function Results() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="py-20 sm:py-28 bg-navy-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Real Results for Real Estate Clients
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Every project has a clear starting point and a measurable outcome.
            Here is an example of what a complete bookkeeping engagement looks
            like.
          </p>
        </div>

        {/* Case Study Card */}
        <div
          className={`max-w-4xl mx-auto bg-white rounded-3xl border border-navy-100 overflow-hidden shadow-sm transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Case Study Header */}
          <div className="bg-navy-900 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-brand-green/20 text-brand-green text-xs font-semibold rounded-full">
                {caseStudy.tag}
              </span>
              <span className="text-navy-300 text-sm">
                {caseStudy.clientType}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {caseStudy.title}
            </h3>
          </div>

          <div className="p-6 sm:p-8">
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {caseStudy.description}
            </p>

            {/* Scope List */}
            <h4 className="font-semibold text-navy-900 mb-4">Scope of Work</h4>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {caseStudy.scope.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-navy-50 rounded-2xl mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-navy-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Outcome */}
            <div className="p-4 bg-brand-green/5 border border-brand-green/20 rounded-xl">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <p className="text-sm text-navy-800 font-medium leading-relaxed">
                  {caseStudy.outcome}
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="mt-5 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-navy-900">5.0</span>
              <span className="text-sm text-muted-foreground">
                &mdash; Client Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
