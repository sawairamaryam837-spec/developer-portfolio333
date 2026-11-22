import React from 'react';
import { ArrowDownRight, Sparkles, Send, Code, Terminal, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onViewWorkClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onConnectClick }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Purple Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-700/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Row: Availability Status & Script Portfolio Tag */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-medium tracking-wide">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                </span>
                <span>Available for Projects</span>
              </div>

              {/* Script-Style "Portfolio" Text */}
              <div className="flex items-center gap-2">
                <span className="font-script text-3xl sm:text-4xl text-purple-300 drop-shadow-[0_0_12px_rgba(216,180,254,0.5)] transform -rotate-3 select-none">
                  Portfolio
                </span>
                <span className="text-purple-400/50">✦</span>
              </div>
            </div>

            {/* Headline Block */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                SAWAIRA <br />
                <span className="text-gradient-purple">MARYAM</span>
              </h1>
              <div className="pt-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-lavender-200">
                  CREATIVE WEB DEVELOPER
                </h2>
              </div>
            </div>

            {/* Subtitle & Value Proposition */}
            <div className="space-y-3 max-w-xl">
              <p className="text-lg sm:text-xl font-medium text-purple-100/90 leading-relaxed text-balance">
                &ldquo;I Design & Develop Modern Digital Experiences That Inspire.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Specializing in building high-performance web applications, intuitive interface architecture,
                and scalable digital products where precision engineering meets high-end aesthetics.
              </p>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Next.js & React Expert</span>
              </div>
              <span className="text-purple-500/40">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Modern Glassmorphism UI</span>
              </div>
              <span className="text-purple-500/40">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Responsive & Clean Code</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewWorkClick}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onConnectClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-purple-200 hover:text-white glass-card rounded-xl hover:border-purple-400/50 hover:bg-purple-900/20 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Let&apos;s Connect</span>
              </button>
            </div>
          </div>

          {/* Right Column: Developer Portrait & Rotating Badge */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Outer Neon Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/40 via-purple-400/20 to-indigo-600/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card border border-purple-500/25 shadow-2xl bg-[#0e0e16]/80 p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-900">
                  <img
                    src="/src/assets/images/hero_portrait_sawaira_1794045522108.jpg"
                    alt="Sawaira Maryam - Creative Web Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Gradient Scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-transparent to-transparent opacity-80" />

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-black/60 backdrop-blur-md border border-purple-500/20">
                    <div>
                      <p className="text-xs font-semibold text-white tracking-wide">Sawaira Maryam</p>
                      <p className="text-[11px] text-purple-300">Creative Web Developer &amp; UI/UX</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-purple-950/60 border border-purple-500/30 text-[10px] text-purple-200 font-mono">
                      <Terminal className="w-3 h-3 text-purple-400" />
                      <span>ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rotating Circular Developer Badge */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-28 h-28 sm:w-32 sm:h-32 z-20 pointer-events-none">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Rotating SVG with curved text */}
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 120 120"
                  >
                    <path
                      id="textCircle"
                      d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] uppercase font-bold tracking-[2.5px] fill-purple-300">
                      <textPath href="#textCircle" startOffset="0%">
                        • CREATIVE DEVELOPER • UI/UX &amp; CODE
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Badge Core */}
                  <div className="absolute inset-7 rounded-full bg-[#09090D] border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                    <Code className="w-4 h-4 text-purple-300" />
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-card p-3 rounded-xl border border-purple-500/30 shadow-xl flex items-center gap-3 bg-[#09090D]/90 backdrop-blur-md z-20">
                <div className="w-9 h-9 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white tracking-wide">Modern Web Apps</div>
                  <div className="text-[11px] text-purple-300">Scalable &amp; Interactive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
