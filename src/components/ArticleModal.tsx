import React from 'react';
import { X, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';
import type { ArticleItem } from '../data/portfolioData';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-neutral-300 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-neutral-200 text-neutral-800">
              {article.tag}
            </span>
            <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime} • {article.date}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-neutral-950 mb-3">{article.title}</h3>
            <p className="text-sm text-neutral-600 italic bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              {article.excerpt}
            </p>
          </div>

          {/* Detailed Content Paragraphs */}
          <div className="space-y-3.5 text-sm text-neutral-800 leading-relaxed font-sans">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/90 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Key Engineering Takeaways
            </h4>
            <ul className="space-y-2">
              {article.takeaways.map((t, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2">
                  <span className="text-neutral-400 font-bold shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-neutral-500 font-mono">
            Published on Medium (@readmeandrepeat)
          </span>
          <div className="flex items-center gap-2">
            {article.url && (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span>Read Full on Medium</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="text-xs font-medium px-4 py-2 rounded-xl bg-neutral-200 hover:bg-neutral-300 text-neutral-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
