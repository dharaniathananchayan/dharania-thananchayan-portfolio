import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data/portfolioData';

export const Foundations: React.FC = () => {
  return (
    <section id="foundations" className="py-16 md:py-24 border-b border-[#e5e5dc]/80 bg-[#f8f8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase mb-2">
              05 / RESEARCH &amp; WRITING
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Ideas, explored in depth.
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Technical write-ups, deep dives into distributed inference, and system designs.
            </p>
          </div>

          <a
            href="https://medium.com/@readmeandrepeat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-950 hover:underline"
          >
            <span>Read on Medium ↗</span>
          </a>
        </div>

        {/* Article Cards Grid (same 3-col card size as before) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <a
              key={art.id}
              href={art.url || 'https://medium.com/@readmeandrepeat'}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-5 rounded-2xl border border-neutral-300/80 bg-white shadow-xs hover:shadow-md hover:border-neutral-400 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-800 border border-neutral-200">
                    {art.tag}
                  </span>
                  <span className="text-[11px]">
                    {art.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-base font-bold text-neutral-950 group-hover:text-black leading-snug">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-neutral-400">
                  {art.date}
                </span>
                <span className="font-medium text-neutral-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
