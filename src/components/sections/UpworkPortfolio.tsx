'use client';

import { Star, ExternalLink, Calendar, DollarSign, BadgeCheck, Clock, Layers, ArrowRightLeft, TrendingUp, FileText, Video, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface UpworkProject {
  title: string;
  rating: number | null;
  dateRange: string;
  earnings: string;
  type: string;
  description: string;
  testimonial?: string;
  endorsements?: string[];
  highlights?: { icon: typeof Star; text: string }[];
  featured?: boolean;
}

const projects: UpworkProject[] = [
  {
    title: 'Experienced Real Estate Bookkeeper (QuickBooks Online) – Weekly Friday Updates - LONG TERM',
    rating: 5.0,
    dateRange: 'Feb 2026 – Aug 2026',
    earnings: '$1,040.00',
    type: 'Fixed Price',
    description:
      'Long-term engagement providing weekly QuickBooks Online bookkeeping updates for a real estate client. Delivered consistent, accurate financial records every Friday, maintaining clean books and reliable reports throughout the engagement.',
    endorsements: ['Clear Communicator'],
    featured: true,
    highlights: [
      { icon: Clock, text: 'Weekly Friday updates on a long-term basis' },
      { icon: Layers, text: 'Ongoing QuickBooks Online management' },
      { icon: FileText, text: 'Consistent, reliable financial reporting' },
      { icon: TrendingUp, text: 'Property-level bookkeeping across multiple entities' },
    ],
  },
  {
    title: 'Video Editor with Accounting Experience for How to Tutorial',
    rating: 5.0,
    dateRange: 'Feb 2026 – Mar 2026',
    earnings: '$15.00',
    type: 'Fixed Price',
    description:
      'Combined accounting expertise with video editing skills to create educational tutorial content, demonstrating the ability to communicate complex financial concepts clearly and visually.',
  },
  {
    title: 'Video Editing for Accounting & QuickBooks Tutorial Videos',
    rating: 5.0,
    dateRange: 'Jan 2026',
    earnings: '$10.00',
    type: 'Fixed Price',
    description:
      'Produced instructional video content for accounting and QuickBooks tutorials, leveraging deep domain knowledge to ensure accuracy and clarity in educational material.',
    testimonial:
      'Everything was beyond my expectation really appreciated. highly Recommended',
    endorsements: ['Solution Oriented'],
  },
  {
    title: 'Real Estate Bookkeeper | QuickBooks Online Cleanup & Financial CatchUp',
    rating: 5.0,
    dateRange: 'Nov 2025',
    earnings: '$10.00',
    type: 'Fixed Price',
    description:
      'QuickBooks Online cleanup and financial catch-up project for a real estate client. Organized backlogged transactions, reconciled accounts, and delivered clean, accurate financial records.',
    testimonial:
      'Asif did a great job cleaning up our QuickBooks Online account. Everything is now organized, fully reconciled, and error-free. Clear communication and very professional. Highly recommended!',
    endorsements: ['Committed to Quality', 'Clear Communicator', 'Detail Oriented', 'Professional'],
    featured: true,
    highlights: [
      { icon: ArrowRightLeft, text: 'Full QuickBooks Online cleanup' },
      { icon: CheckCircle2, text: 'All accounts fully reconciled and error-free' },
      { icon: TrendingUp, text: 'Chart of Accounts restructured' },
      { icon: FileText, text: 'Clean financial records delivered' },
    ],
  },
  {
    title: 'QuickBooks Online Bookkeeper | Cleanup Specialist | QuickBooks Expert',
    rating: null,
    dateRange: 'Sep 2025 – Oct 2025',
    earnings: '$5.00',
    type: 'Fixed Price',
    description:
      'Provided expert QuickBooks Online cleanup and bookkeeping services, applying specialized knowledge to resolve complex accounting issues and restore financial record accuracy.',
  },
  {
    title: 'Certified QuickBooks Online | Clean-up | Catch-up | Expert | Bookkeeper',
    rating: null,
    dateRange: '2025',
    earnings: '—',
    type: 'Fixed Price',
    description:
      'Engaged as a certified QuickBooks Online expert for cleanup and catch-up bookkeeping, demonstrating proficiency in handling disorganized financial records and delivering accurate results.',
  },
];

function ProjectCard({ project, index, isVisible }: { project: UpworkProject; index: number; isVisible: boolean }) {
  const isFeatured = project.featured;

  return (
    <div
      className={`group bg-white rounded-2xl border border-navy-100 overflow-hidden card-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${isFeatured ? 'lg:col-span-2' : ''}`}
      style={{ transitionDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Card Header */}
      <div className={`p-5 sm:p-6 ${isFeatured ? 'bg-navy-900' : 'bg-navy-50 border-b border-navy-100'}`}>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {isFeatured && (
            <span className="px-2.5 py-0.5 bg-brand-green/20 text-brand-green text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wide">
              Featured Project
            </span>
          )}
          <span className="text-[10px] sm:text-xs text-navy-400 flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            {project.earnings}
          </span>
          <span className="text-[10px] sm:text-xs text-navy-400">
            {project.type}
          </span>
        </div>
        <h3 className={`font-bold leading-snug ${isFeatured ? 'text-white text-base sm:text-lg' : 'text-navy-900 text-sm sm:text-base'}`}>
          {project.title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <span className={`text-xs flex items-center gap-1 ${isFeatured ? 'text-navy-300' : 'text-muted-foreground'}`}>
            <Calendar className="w-3 h-3" />
            {project.dateRange}
          </span>
          {project.rating !== null && (
            <span className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 text-yellow-400 fill-yellow-400 ${
                      i < Math.floor(project.rating!) ? '' : 'opacity-30 fill-transparent'
                    }`}
                  />
                ))}
              </div>
              <span className={`text-xs font-semibold ${isFeatured ? 'text-white' : 'text-navy-900'}`}>
                {project.rating}
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights (featured only) */}
        {project.highlights && (
          <div className="grid sm:grid-cols-2 gap-2.5 mb-4">
            {project.highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <div className="p-4 bg-brand-green/5 border border-brand-green/20 rounded-xl mb-4">
            <p className="text-sm text-navy-800 italic leading-relaxed">
              &ldquo;{project.testimonial}&rdquo;
            </p>
          </div>
        )}

        {/* Endorsements */}
        {project.endorsements && project.endorsements.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.endorsements.map((endorsement) => (
              <span
                key={endorsement}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-navy-50 text-navy-700 text-[11px] font-medium rounded-full"
              >
                <BadgeCheck className="w-3 h-3 text-brand-green" />
                {endorsement}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function UpworkPortfolio() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="py-20 sm:py-28 bg-navy-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-green font-semibold text-sm tracking-wide uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Completed Projects on Upwork
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            A track record of 5-star deliveries across real estate bookkeeping,
            QuickBooks cleanup, and financial reporting projects.
          </p>
        </div>

        {/* Stats Summary */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '6', label: 'Projects Completed' },
            { value: '5.0', label: 'Average Rating' },
            { value: '$1,080+', label: 'Earnings on Upwork' },
            { value: '100%', label: 'Success Rate' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-white rounded-2xl border border-navy-100"
            >
              <div className="text-2xl sm:text-3xl font-bold text-navy-900">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA to Upwork */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://www.upwork.com/freelancers/~0151ad6431951e1ed9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-xl hover:bg-navy-900 hover:text-white transition-all duration-300 text-sm"
          >
            View All Projects on Upwork
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
