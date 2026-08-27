'use client';

import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-32 w-80 h-80 bg-navy-600/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-6 sm:mb-8">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-navy-100 text-sm font-medium">
              QuickBooks ProAdvisor &middot; 5.0 Rated
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up fade-in-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Clean Books.{' '}
            <span className="text-brand-green">Clear Financial</span> Insights.
            <br className="hidden sm:block" /> Better Business Decisions.
          </h1>

          {/* Sub-headline */}
          <p className="fade-in-up fade-in-up-delay-2 mt-5 sm:mt-6 text-lg sm:text-xl text-navy-200 leading-relaxed max-w-2xl">
            If your QuickBooks doesn&rsquo;t match your bank accounts, your month-end
            close keeps getting delayed, or your AppFolio and Buildium records don&rsquo;t
            reconcile &mdash; I can help you get back on track.
          </p>

          {/* Problem Indicators */}
          <div className="fade-in-up fade-in-up-delay-3 mt-6 sm:mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-300">
            {[
              'Bank reconciliation issues',
              'Delayed month-end close',
              'Messy or outdated books',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up fade-in-up-delay-4 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-dark transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/25 text-base"
            >
              Book a Free Consultation
              <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo('#services')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-base"
            >
              View My Services
            </button>
          </div>

          {/* Trust Signals */}
          <div className="fade-in-up fade-in-up-delay-4 mt-10 sm:mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-navy-300">
            <div>
              <span className="block text-2xl font-bold text-white">4+</span>
              Years Experience
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">3</span>
              Professional Certifications
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">5.0</span>
              Client Rating
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">
                6+
              </span>
              Software Platforms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
