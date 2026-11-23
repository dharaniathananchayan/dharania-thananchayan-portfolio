import React from 'react';
import { accomplishments } from '../data/portfolioData';
import { CheckCircle2, Star, Trophy, Newspaper } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const getIcon = (idx: number) => {
    if (idx === 0) return <Star className="w-5 h-5 text-[#1b4d3e]" />;
    if (idx === 1) return <Trophy className="w-5 h-5 text-[#1b4d3e]" />;
    return <Newspaper className="w-5 h-5 text-[#1b4d3e]" />;
  };

  return (
    <section id="proof" className="py-16 md:py-24 border-b border-[#e5e5dc]/80 bg-[#f4f4f0]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase mb-2">
            06 / ACCOMPLISHMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Proof, not promises.
          </h2>
          <p className="text-sm text-neutral-600 mt-1 max-w-xl">
            Honors and awards conferred by Dr M.G.R Educational and Research Institute for academic merit, technical contribution, and leadership.
          </p>
        </div>

        {/* Accomplishments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {accomplishments.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 sm:p-7 rounded-2xl sm:rounded-[26px] border border-neutral-300/80 bg-white shadow-xs space-y-5 hover:border-neutral-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#eaf4ed] flex items-center justify-center shrink-0">
                    {getIcon(idx)}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-700 font-semibold mt-1">
                    {item.award}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-2.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Organization Footer */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-800 flex items-center gap-1.5 min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate max-w-[140px] sm:max-w-[200px]">{item.organization}</span>
                </span>

                <span className="text-[10px] font-mono text-neutral-400 shrink-0">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
