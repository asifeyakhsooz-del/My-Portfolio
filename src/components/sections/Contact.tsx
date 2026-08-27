'use client';

import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const businessTypes = [
  'Property Management Company',
  'Real Estate Investor',
  'Landlord / Rental Owner',
  'Airbnb / Short-Term Rental Host',
  'Fix & Flip Investor',
  'Other Real Estate Business',
  'Small / Medium Business',
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('Message sent successfully! I will get back to you within 24 hours.');
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div ref={ref} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-brand-green" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Message Sent
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Thank you for reaching out. I typically respond within 24 hours
            with a brief assessment of your bookkeeping needs.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 inline-flex items-center gap-2 text-brand-green font-semibold hover:underline"
          >
            Send another message
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Let&rsquo;s Get Your Books Organized
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Whether you need a one-time cleanup, ongoing monthly bookkeeping,
              or a complete QuickBooks setup, I am happy to review your current
              process and discuss how I can help.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy-900 text-sm">
                    Free Initial Consultation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    I will review your current bookkeeping setup at no cost and
                    provide honest feedback on what needs attention.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy-900 text-sm">
                    Response Within 24 Hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Every message gets a personal response — no automated
                    replies, no long wait times.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-navy-900 text-sm">
                    No Long-Term Contracts
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Work on your terms. Monthly engagements, project-based work,
                    or one-time cleanups — whatever fits your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-navy-50/70 rounded-2xl border border-navy-100"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company or property name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Type of Business <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all text-sm appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your bookkeeping needs, current challenges, or what you are looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-green/40 focus:border-brand-green transition-all text-sm resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/25 disabled:opacity-70 disabled:cursor-not-allowed text-base"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
