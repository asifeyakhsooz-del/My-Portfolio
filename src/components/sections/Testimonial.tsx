'use client';

import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonial() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Quote className="w-12 h-12 text-brand-green/20 mx-auto mb-6" />
          
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-navy-900 leading-relaxed">
            &ldquo;Asif was very professional throughout the project. He communicated
            clearly and consistently, which made the process smooth and easy to
            follow. He also showed strong dedication and ensured everything was
            completed with care and attention to detail.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-8">
            <div className="w-12 h-px bg-brand-green mx-auto mb-4" />
            <p className="font-semibold text-navy-900">Verified Client</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Real Estate Bookkeeping & QuickBooks Online Cleanup Project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
