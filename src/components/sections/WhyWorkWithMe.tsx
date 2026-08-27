'use client';

import {
  Clock,
  BadgeCheck,
  Building2,
  Target,
  MessageSquare,
  CalendarCheck,
  Globe,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  {
    icon: Clock,
    title: '4+ Years of Experience',
    description:
      'Four years of focused, hands-on work in real estate bookkeeping — not a side gig, not a generalist moonlighting in property management. This is what I do every day.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified QuickBooks ProAdvisor',
    description:
      'Formally certified by Intuit, with additional certifications in Xero and AppFolio. These credentials are earned through exams and validated through real client work.',
  },
  {
    icon: Building2,
    title: 'Real Estate Bookkeeping Specialist',
    description:
      'Every client I work with operates in real estate. I understand trust accounts, property-level accounting, owner distributions, and the specific reporting needs of property managers and investors.',
  },
  {
    icon: Target,
    title: 'Accurate and Detail-Oriented',
    description:
      'Every transaction is reviewed, every reconciliation is verified, and every report is double-checked before it reaches you. Accuracy is not negotiable in financial reporting.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'You will always know where things stand. I provide regular updates, flag issues proactively, and explain financial concepts in plain language — not accounting jargon.',
  },
  {
    icon: CalendarCheck,
    title: 'Reliable Monthly & Weekly Support',
    description:
      'Whether you need weekly bookkeeping updates for an active investment portfolio or a solid monthly close for your property management firm, I deliver on a consistent schedule.',
  },
  {
    icon: Globe,
    title: 'International Client Experience',
    description:
      'I have worked with clients across the US and international markets, adapting to different time zones, reporting requirements, and business structures.',
  },
];

export default function WhyWorkWithMe() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-navy-50/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            Why Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            What Sets Me Apart
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            There are plenty of bookkeepers. Finding one who understands real
            estate, communicates clearly, and delivers on time is harder. Here
            is what makes working with me different.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                  <reason.icon className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
