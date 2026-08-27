'use client';

import Image from 'next/image';
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
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3">
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
            <h1 className="fade-in-up fade-in-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight">
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
                <span className="block text-2xl font-bold text-white">6</span>
                Completed Projects
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">5.0</span>
                Client Rating
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">6+</span>
                Software Platforms
              </div>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="hidden lg:flex lg:col-span-2 justify-center fade-in-up fade-in-up-delay-3">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-brand-green/20" />
              <div className="absolute -inset-8 rounded-[2rem] border border-white/5" />
              <div className="relative w-72 h-80 xl:w-80 xl:h-[22rem] rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Asif Ali - Real Estate Bookkeeper and QuickBooks ProAdvisor"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="320px"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy-800 border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white text-xs font-semibold">5.0 on Upwork</p>
                <p className="text-navy-400 text-[10px]">6 jobs completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
