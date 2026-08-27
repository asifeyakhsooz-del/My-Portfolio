'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { BadgeCheck } from 'lucide-react';

const softwareList = [
  { name: 'QuickBooks Online', category: 'Primary' },
  { name: 'QuickBooks Desktop', category: 'Experienced' },
  { name: 'AppFolio', category: 'Specialized' },
  { name: 'Buildium', category: 'Specialized' },
  { name: 'Xero', category: 'Certified' },
  { name: 'Bill.com', category: 'Experienced' },
  { name: 'Microsoft Excel', category: 'Advanced' },
];

const certifications = [
  {
    name: 'QuickBooks Online ProAdvisor',
    issuer: 'Intuit',
    detail: 'Certified by Intuit to provide expert-level QuickBooks Online setup, cleanup, and ongoing bookkeeping services.',
  },
  {
    name: 'Xero Certified Advisor',
    issuer: 'Xero',
    detail: 'Trained and certified to implement and manage Xero accounting for small and medium-sized businesses.',
  },
  {
    name: 'AppFolio Certified',
    issuer: 'AppFolio Property Manager',
    detail: 'Certified in AppFolio Property Manager, with expertise in its accounting module, trust reporting, and data export workflows.',
  },
];

export default function SoftwareCertifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            Tools & Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Software Expertise & Certifications
          </h2>
          <p className="mt-4 text-navy-300 text-lg leading-relaxed">
            Proficient across the platforms that real estate professionals rely
            on, with formal certifications that validate the depth of that
            expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Software Section */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Software I Use
            </h3>
            <div className="space-y-3">
              {softwareList.map((software) => (
                <div
                  key={software.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <span className="text-white font-medium text-sm">
                    {software.name}
                  </span>
                  <span className="text-xs font-medium text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full">
                    {software.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Professional Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-navy-400 text-xs mt-0.5 mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-navy-300 text-sm leading-relaxed">
                        {cert.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
