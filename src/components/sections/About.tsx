'use client';

import Image from 'next/image';
import { Award, Globe, Users, TrendingUp, Linkedin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  {
    icon: Award,
    title: 'Certified Professional',
    description:
      'QuickBooks Online ProAdvisor, Xero Certified Advisor, and AppFolio Certified — three credentials that reflect a commitment to accuracy and professional standards.',
  },
  {
    icon: Globe,
    title: 'International Client Base',
    description:
      'Working with real estate professionals and property management companies across the US and international markets, adapting to diverse reporting requirements and tax frameworks.',
  },
  {
    icon: Users,
    title: 'Real Estate Focused',
    description:
      'Every engagement centers on property management, real estate investment, and rental operations — not generic bookkeeping applied to real estate as an afterthought.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven Approach',
    description:
      'From cleaning up months of neglected records to building streamlined monthly processes, the focus is always on delivering financial clarity that drives better decisions.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div
          className={`flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-lg ring-4 ring-brand-green/10 flex-shrink-0">
            <Image
              src="/profile-photo.jpeg"
              alt="Asif Ali - Real Estate Bookkeeper"
              fill
              className="object-cover object-top"
              sizes="128px"
            />
          </div>
          <div className="text-center sm:text-left">
            <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-1">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              A Bookkeeper Who Actually Understands Real Estate
            </h2>
            <div className="flex items-center gap-3 mt-3 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/asif-alibookkeeper/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-brand-green transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <span className="text-navy-200">|</span>
              <a
                href="https://www.upwork.com/freelancers/~0151ad6431951e1ed9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-brand-green transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Upwork Profile
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&rsquo;m Asif Ali, a QuickBooks Online ProAdvisor with over four years
                of hands-on experience in bookkeeping and accounting for the real
                estate industry. My work centers on helping property managers,
                landlords, and real estate investors maintain accurate financial
                records that support confident decision-making.
              </p>
              <p>
                Whether it&rsquo;s cleaning up months of backlogged transactions,
                reconciling complex bank and credit card statements, or building a
                Chart of Accounts that actually reflects how your properties operate
                — I bring structure where there is chaos and clarity where there is
                confusion.
              </p>
              <p>
                I work extensively with QuickBooks Online, AppFolio, Buildium, Xero,
                and Bill.com, and I&rsquo;ve supported clients across the US and
                international markets. My goal is simple: make sure your books tell
                the truth about your business, every single month.
              </p>
            </div>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`p-5 sm:p-6 rounded-2xl bg-navy-50/70 border border-navy-100 card-hover transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 120}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
