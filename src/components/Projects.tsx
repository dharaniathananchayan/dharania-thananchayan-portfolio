import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectCardGraphic } from './ProjectCardGraphic';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'AI / ML', 'Full Stack & APIs'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#e5e5dc]/80 bg-[#f8f8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-neutral-500 uppercase mb-2">
              03 / FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
              Projects with receipts.
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Production-grade applications across RAG architectures, computer vision, and backend APIs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-200/60 border border-neutral-300/60 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3x2 Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group rounded-2xl border border-neutral-300/80 bg-white p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-neutral-400 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                {/* Visual Graphic Header */}
                <ProjectCardGraphic type={project.imageType} />

                {/* Category & Metric Badge */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200/80">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-neutral-900 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/60">
                    {project.metric}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-black flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tech Pills */}
              <div className="pt-4 mt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-50 text-neutral-600 border border-neutral-200/60"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 transition-colors inline-flex items-center gap-0.5"
                    >
                      Demo <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  <span className="text-[11px] font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
