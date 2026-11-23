import React from 'react';
import { X, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectCardGraphic } from './ProjectCardGraphic';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl border border-neutral-300 shadow-2xl overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-neutral-200 text-neutral-800">
              {project.category}
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              {project.metric} • {project.metricLabel}
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

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6">
          {/* Card Graphic */}
          <ProjectCardGraphic type={project.imageType} />

          {/* Title & Description */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-2">{project.title}</h3>
            <p className="text-sm text-neutral-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Architecture Deep Dive */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-600 font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-neutral-800" />
              Technical Architecture
            </h4>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
              {project.architecture}
            </p>
          </div>

          {/* Core Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-3">
              Key Features &amp; Innovations
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`p-3.5 sm:p-5 border-t border-neutral-200 bg-neutral-50 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 ${
          project.liveUrl ? 'justify-between' : 'justify-end'
        }`}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-medium px-4 py-2.5 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 transition-colors w-full sm:w-auto text-center"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-medium px-5 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white transition-colors w-full sm:w-auto text-center"
            >
              <span>Live Interactive Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
