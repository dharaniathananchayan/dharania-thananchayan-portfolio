import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, MapPin, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { educations, certifications } from '../data/portfolioData';
import type { ExperienceItem } from '../data/portfolioData';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);
  const educationScrollRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollEducation = (direction: 'left' | 'right') => {
    if (educationScrollRef.current) {
      const scrollAmount = 360;
      educationScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const certificationsScrollRef = useRef<HTMLDivElement>(null);

  const scrollCertifications = (direction: 'left' | 'right') => {
    if (certificationsScrollRef.current) {
      const scrollAmount = 360;
      certificationsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#e5e5dc]/80 bg-[#f4f4f0]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase mb-2">
              02 / EXPERIENCE &amp; ACADEMICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Where I&#39;ve worked &amp; studied.
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Professional internship experience, academic qualifications, and verified technical milestones.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:underline"
          >
            <span>Get in touch &rarr;</span>
          </a>
        </div>

        {/* Experience Cards List */}
        <div className="space-y-4 mb-12">
          <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
            Work Experience
          </h3>

          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="rounded-2xl border border-neutral-300/80 bg-white shadow-xs overflow-hidden transition-all duration-200 hover:border-neutral-400"
              >
                {/* Main Card Header */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                        {exp.period}
                      </span>
                      <span className="text-xs text-neutral-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 pt-1">
                      {exp.role}{' '}
                      <span className="text-neutral-500 font-normal">
                        — {exp.company}
                      </span>
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed pt-1">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-100">
                    <div className="hidden sm:flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {exp.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                      {exp.tech.length > 4 && (
                        <span className="text-[11px] font-mono px-1.5 py-0.5 text-neutral-400">
                          +{exp.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <button
                      className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500 transition-colors"
                      aria-label="Expand details"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Achievements */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-neutral-100 bg-neutral-50/50 space-y-4 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                        Responsibilities &amp; Technical Execution
                      </h4>
                      <ul className="space-y-2">
                        {exp.keyAchievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* All Tech Tags */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                        Technologies &amp; Domain Concepts
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate Link if available */}
                    {exp.credentialUrl && (
                      <div className="pt-2 border-t border-neutral-200/60">
                        <a
                          href={exp.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors group/link bg-emerald-50/80 px-3 py-1.5 rounded-lg border border-emerald-200/80"
                        >
                          <span>View Internship Certificate</span>
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-600 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div id="education" className="space-y-4 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Education
              </h3>
            </div>

            {/* Scroll navigation arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollEducation('left')}
                aria-label="Scroll left"
                className="p-1.5 rounded-lg border border-neutral-300/80 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollEducation('right')}
                aria-label="Scroll right"
                className="p-1.5 rounded-lg border border-neutral-300/80 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal scroll track */}
          <div
            ref={educationScrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="w-[84vw] max-w-[340px] sm:w-[360px] md:w-[380px] shrink-0 snap-start flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-neutral-300/80 bg-white shadow-xs hover:border-neutral-400/90 transition-all space-y-4"
              >
                <div className="space-y-4">
                  {/* Badges Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 shrink-0">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                      {edu.grade}
                    </span>
                  </div>

                  {/* Title & Metadata Block */}
                  <div className="flex items-start gap-3 min-h-[96px]">
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center shrink-0 text-neutral-700 mt-0.5 shadow-2xs">
                      <GraduationCap className="w-4 h-4 text-neutral-700" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-neutral-950 leading-snug">
                        {edu.degree}
                      </h4>
                      {edu.subject && (
                        <p className="text-xs font-semibold text-black leading-tight">
                          {edu.subject}
                        </p>
                      )}
                      <p className="text-xs text-neutral-700 font-medium leading-snug">
                        {edu.institution}
                      </p>
                      {edu.location && (
                        <p className="text-xs text-neutral-500 flex items-center gap-1 leading-snug pt-0.5">
                          <MapPin className="w-3 h-3 text-neutral-400 shrink-0" />
                          <span>{edu.location}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="pt-3 border-t border-neutral-100 mt-auto">
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Highlight */}
        <div id="certifications" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Verified Certifications
              </h3>
            </div>

            {/* Scroll navigation arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollCertifications('left')}
                aria-label="Scroll left"
                className="p-1.5 rounded-lg border border-neutral-300/80 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCertifications('right')}
                aria-label="Scroll right"
                className="p-1.5 rounded-lg border border-neutral-300/80 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal scroll track */}
          <div
            ref={certificationsScrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="w-[84vw] max-w-[340px] sm:w-[360px] md:w-[380px] shrink-0 snap-start flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-neutral-300/80 bg-white shadow-xs hover:border-neutral-400/90 transition-all"
              >
                <div>
                  {/* Badges Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                      {cert.tag || 'Coursework'}
                    </span>
                    {cert.date && (
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 shrink-0">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  {/* Title & Metadata Block */}
                  <div className="flex items-start gap-3 min-h-[104px] sm:min-h-[108px]">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-700 mt-0.5 shadow-2xs">
                      <Award className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-neutral-950 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-neutral-700 font-medium leading-snug">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Details Section - aligned identically like education descriptions */}
                  <div className="pt-3 border-t border-neutral-100 mt-3">
                    <p className="text-xs text-neutral-600 leading-relaxed min-h-[76px] sm:min-h-[80px]">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100/60 mt-auto">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Certificate Link */}
                {cert.credentialUrl && (
                  <div className="pt-3 border-t border-neutral-100 mt-3">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:text-emerald-700 transition-colors group/link"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover/link:text-emerald-600 transition-colors" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
