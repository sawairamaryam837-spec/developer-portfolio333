import React, { useState } from 'react';

interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  level: string;
  experience: string;
  description: string;
  iconSvg: React.ReactNode;
}

export const TechToolkit: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('All');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const technologies: TechItem[] = [
    {
      id: 'html5',
      name: 'HTML5',
      category: 'Frontend',
      level: 'Advanced',
      experience: 'Semantic structure, accessibility (a11y), SEO optimization',
      description: 'Clean semantic markup ensuring high accessibility scores and solid document foundations.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 19.3L12 21.1L18.4 19.3L20 3H4Z" fill="#E44D26" />
          <path d="M12 4.7V19.3L17 17.9L18.3 4.7H12Z" fill="#F16529" />
          <path d="M8.2 7.7H15.8L15.6 9.8H10.4L10.6 11.9H15.4L15 15.6L12 16.5L9 15.6L8.8 13.5H7.2L7.6 17.2L12 18.4L16.4 17.2L17.1 7.7H8.2Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'css3',
      name: 'CSS3',
      category: 'Frontend',
      level: 'Advanced',
      experience: 'Modern CSS Grid, Flexbox, Custom Properties, Animations',
      description: 'Fluid responsive layout modeling, complex transform keyframes, and modern styling.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 19.3L12 21.1L18.4 19.3L20 3H4Z" fill="#1572B6" />
          <path d="M12 4.7V19.3L17 17.9L18.3 4.7H12Z" fill="#33A9DC" />
          <path d="M15.8 7.7H8.2L8.4 9.8H15.6L15.4 11.9H10.6L10.4 9.8H7.2L7.6 13.5H15.2L14.8 17.2L12 18L9.2 17.2L9 15.6H7.4L7.8 18.9L12 20.1L16.2 18.9L17.1 7.7H15.8Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Frontend',
      level: 'Advanced',
      experience: 'ES6+, Async/Await, Web APIs, DOM Performance, Architecture',
      description: 'Writing performant, modular JS logic with asynchronous event streams and clean patterns.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M6 18.5V14.5C6 13.2 6.8 12.5 8 12.5C9.2 12.5 10 13.2 10 14.5V18.5H8.2V14.5C8.2 14 7.9 13.7 7.5 13.7C7.1 13.7 6.8 14 6.8 14.5V18.5H6ZM14 18.5V16.8C14.8 17 15.6 17.1 16.2 17.1C17.1 17.1 17.6 16.8 17.6 16.2C17.6 15.6 17.2 15.3 16.1 14.9L15.4 14.6C14 14.1 13.4 13.2 13.4 12C13.4 10.5 14.7 9.5 16.6 9.5C17.5 9.5 18.5 9.7 19.3 10.1L18.7 11.7C18 11.4 17.3 11.2 16.6 11.2C15.8 11.2 15.3 11.5 15.3 12C15.3 12.5 15.7 12.8 16.6 13.1L17.3 13.4C18.9 14 19.5 14.9 19.5 16.2C19.5 17.8 18.2 18.8 16.1 18.8C15.1 18.8 14.3 18.7 14 18.5Z" fill="#000000" />
        </svg>
      ),
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Frontend',
      level: 'Advanced',
      experience: 'Strict typing, generics, interfaces, compiler configs',
      description: 'Ensuring enterprise robustness, preventing runtime defects, and streamlining refactors.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M5.5 11.2H12.5V13H10V20H8V13H5.5V11.2ZM13.8 18.5L14.8 17C15.5 17.5 16.4 17.9 17.4 17.9C18.4 17.9 18.9 17.5 18.9 16.9C18.9 16.3 18.5 16 17.2 15.5L16.4 15.2C14.7 14.6 14 13.7 14 12.4C14 10.8 15.4 9.8 17.3 9.8C18.4 9.8 19.4 10.1 20.3 10.6L19.4 12.1C18.6 11.7 17.8 11.4 17.1 11.4C16.3 11.4 15.8 11.8 15.8 12.3C15.8 12.8 16.2 13.1 17.3 13.5L18.1 13.8C19.9 14.4 20.7 15.4 20.7 16.8C20.7 18.5 19.2 19.6 17.2 19.6C15.8 19.6 14.6 19.2 13.8 18.5Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'Frontend',
      level: 'Expert',
      experience: 'Hooks, Suspense, Context, Custom Hooks, Motion Choreography',
      description: 'Building reactive, declarative component trees with optimal rendering performance.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'Frontend',
      level: 'Advanced',
      experience: 'App Router, Server Components, SSR/SSG, Route Handlers, SEO',
      description: 'Production-ready full-stack applications with optimal first contentful paint and edge delivery.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 180 180" fill="none">
          <mask id="mask0_next" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask0_next)">
            <circle cx="90" cy="90" r="90" fill="black" stroke="rgba(168,85,247,0.5)" strokeWidth="6" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
            <rect x="115" y="54" width="12" height="72" fill="white" />
          </g>
        </svg>
      ),
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 'Expert',
      experience: 'Tailwind v4, Theme Configs, Glassmorphism, Micro-interactions',
      description: 'Crafting pixel-perfect design systems with zero bloat and streamlined utility patterns.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
        </svg>
      ),
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'Backend',
      level: 'Advanced',
      experience: 'Express.js, RESTful APIs, Middleware, File Streams, Auth',
      description: 'Scalable backend services, proxy routes, and robust asynchronous event handlers.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 2.5L29 10V25L16 32.5L3 25V10L16 2.5Z" fill="#339933" />
          <path d="M16 4.8L27 11.2V23.8L16 30.2L5 23.8V11.2L16 4.8Z" fill="#5FA04E" />
          <path d="M16 11.5C13.5 11.5 11.5 13.5 11.5 16C11.5 18.5 13.5 20.5 16 20.5C18.5 20.5 20.5 18.5 20.5 16C20.5 13.5 18.5 11.5 16 11.5Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'Tools',
      level: 'Advanced',
      experience: 'Branching strategies, CI/CD Actions, Pull Requests, Code Review',
      description: 'Collaborative development pipelines with meticulous version control and deployment hooks.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.843 20.211 8.817 21.534C9.317 21.627 9.499 21.319 9.499 21.056C9.499 20.822 9.491 20.201 9.487 19.38C6.705 19.987 6.117 18.037 6.117 18.037C5.663 16.879 5.006 16.571 5.006 16.571C4.099 15.947 5.075 15.96 5.075 15.96C6.077 16.031 6.606 16.994 6.606 16.994C7.502 18.536 8.951 18.09 9.523 17.834C9.614 17.182 9.873 16.738 10.16 16.486C7.94 16.234 5.606 15.372 5.606 11.517C5.606 10.418 5.996 9.519 6.634 8.815C6.531 8.56 6.186 7.536 6.732 6.162C6.732 6.162 7.574 5.891 9.487 7.195C10.287 6.971 11.144 6.859 12 6.855C12.856 6.859 13.713 6.971 14.515 7.195C16.426 5.891 17.266 6.162 17.266 6.162C17.814 7.536 17.469 8.56 17.366 8.815C18.006 9.519 18.392 10.418 18.392 11.517C18.392 15.383 16.053 16.231 13.826 16.478C14.185 16.789 14.505 17.404 14.505 18.348C14.505 19.704 14.492 20.798 14.492 21.056C14.492 21.322 14.671 21.633 15.18 21.533C19.151 20.207 21.991 16.444 21.991 12.017C21.991 6.484 17.514 2 12 2Z" fill="#F0F6FC" />
        </svg>
      ),
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'Tools',
      level: 'Advanced',
      experience: 'Auto Layout, Components, Variants, Design Tokens, Prototyping',
      description: 'Bridging high-fidelity UX prototyping seamlessly to pixel-accurate React implementation.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      ),
    },
    {
      id: 'vscode',
      name: 'VS Code',
      category: 'Tools',
      level: 'Advanced',
      experience: 'Extensions, Debugger, Linting/Prettier, Snippets, Terminal',
      description: 'Streamlined development workflow tuned for TypeScript productivity and rapid debugging.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M17.8 22.8L22.5 20.5C23.4 20.1 24 19.2 24 18.2V5.8C24 4.8 23.4 3.9 22.5 3.5L17.8 1.2C17.1 0.8 16.2 1 15.7 1.5L8.5 8.1L4.3 4.9C3.7 4.5 2.8 4.6 2.3 5.1L0.4 7C-0.1 7.5 -0.1 8.3 0.4 8.8L4.3 12L0.4 15.2C-0.1 15.7 -0.1 16.5 0.4 17L2.3 18.9C2.8 19.4 3.7 19.5 4.3 19.1L8.5 15.9L15.7 22.5C16.2 23 17.1 23.2 17.8 22.8Z" fill="#007ACC" />
        </svg>
      ),
    },
    {
      id: 'supabase',
      name: 'Supabase',
      category: 'Backend',
      level: 'Proficient',
      experience: 'PostgreSQL, Row Level Security, Auth Providers, Realtime Data',
      description: 'Open source Firebase alternative with relational SQL power, auth, and fast data APIs.',
      iconSvg: (
        <svg className="w-8 h-8" viewBox="0 0 109 113" fill="none">
          <path d="M63.7076 110.284C60.848 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0632H99.1934C106.386 40.0632 110.364 48.3394 105.865 53.9934L63.7076 110.284Z" fill="#3ECF8E" />
          <path d="M45.2924 2.716C48.152 -0.885 53.9498 1.088 54.0187 5.686L54.4533 72.9368H9.80661C2.61399 72.9368 -1.36417 64.6606 3.13531 59.0066L45.2924 2.716Z" fill="#3ECF8E" />
        </svg>
      ),
    },
  ];

  const filteredTech =
    activeFilter === 'All'
      ? technologies
      : technologies.filter((t) => t.category === activeFilter);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#08080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Full-Stack &amp; Creative Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              MY TECHNOLOGY <span className="text-gradient-purple">TOOLKIT</span>
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl bg-purple-950/40 border border-purple-500/20">
            {(['All', 'Frontend', 'Backend', 'Tools'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {filter === 'Tools' ? 'Tools & Design' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Authentic Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              className="group relative rounded-2xl p-5 glass-card border border-purple-500/15 hover:border-purple-400/50 hover:bg-purple-950/[0.12] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col items-center text-center justify-between min-h-[160px]"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-black/40 border border-purple-500/20 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:border-purple-400/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                {tech.iconSvg}
              </div>

              {/* Name & Proficiency */}
              <div className="mt-4 space-y-1 w-full">
                <div className="font-semibold text-sm text-white group-hover:text-purple-200 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[11px] text-purple-400/80 font-mono">
                  {tech.level}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Details Modal (if clicked) */}
        {selectedTech && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTech(null)}
          >
            <div
              className="relative w-full max-w-md rounded-2xl glass-card border border-purple-400/40 p-6 sm:p-8 bg-[#0d0d16] shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-black/60 border border-purple-500/40 flex items-center justify-center p-2.5">
                  {selectedTech.iconSvg}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedTech.name}</h3>
                  <div className="text-xs font-mono text-purple-400">
                    {selectedTech.category} · {selectedTech.level}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {selectedTech.description}
              </p>

              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200 space-y-1">
                <div className="font-semibold uppercase tracking-wider text-[10px] text-purple-300">
                  Practical Application
                </div>
                <div>{selectedTech.experience}</div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-purple-600 hover:bg-purple-500 text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
