
import React, { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { ExternalLink, Eye, ArrowUpRight, Layers } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    ...Array.from(new Set(FEATURED_PROJECTS.map((project) => project.category))).map(
      (category) => ({
        id: category,
        label: category,
      })
    ),
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-purple-500/15">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Selected Portfolio Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              FEATURED <span className="text-gradient-purple">PROJECTS</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl bg-purple-950/40 border border-purple-500/20 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-card border border-purple-500/20 overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] bg-[#0d0d16]/90"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Preview Side */}
                  <div
                    className={`lg:col-span-7 relative ${
                      isReversed ? 'lg:col-start-6' : ''
                    }`}
                  >
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-purple-500/25 bg-slate-950 cursor-pointer group/image"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} Preview Screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.04]"
                        referrerPolicy="no-referrer"
                      />

                      {/* Scrim overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover/image:opacity-40 transition-opacity" />

                      {/* Floating Project Number Tag */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-purple-500/30 text-xs font-mono font-bold text-purple-300">
                        {project.number}
                      </div>

                      {/* Hover Quick Action Badge */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/90 text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-purple-900/50">
                          <Eye className="w-4 h-4" />
                          <span>View Case Study</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content & Metadata Side */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isReversed ? 'lg:col-start-1' : ''
                    }`}
                  >
                    {/* Project Metadata */}
                    <div className="flex items-center gap-2 text-xs font-medium text-purple-300">
                      <span>{project.category}</span>
                      <span aria-hidden="true" className="text-purple-500/40">·</span>
                      <span className="text-slate-400">Featured Work</span>
                    </div>

                    <div>
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-purple-300 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-purple-200/80 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Core Tech Stack */}
                    <div className="pt-2">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-purple-400" />
                        <span>Core Tech Stack</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-purple-300/90 font-mono">
                        {project.tags.map((tag, i) => (
                          <React.Fragment key={tag}>
                            <span className="hover:text-purple-200 transition-colors">
                              {tag}
                            </span>

                            {i < project.tags.length - 1 && (
                              <span aria-hidden="true" className="text-purple-500/30">
                                /
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Live Demo + Case Study */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-500/15">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all cursor-pointer"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white glass-card border border-purple-500/25 hover:border-purple-400/50 transition-colors cursor-pointer"
                      >
                        <span>Details &amp; Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
