import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

interface CtaBannerProps {
  onGetInTouchClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onGetInTouchClick }) => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Purple Gradient CTA Card */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-purple-400/40 shadow-[0_0_50px_rgba(168,85,247,0.25)] bg-gradient-to-r from-purple-950/80 via-[#1e1035] to-[#120924]">
          {/* Ambient Lighting Circles inside */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Have an Idea in Mind?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              LET&apos;S BUILD SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-lavender-100">
                AMAZING TOGETHER.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl text-balance">
              I&apos;m open to exciting projects, collaborations, and new opportunities. Let&apos;s turn your ideas into reality.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onGetInTouchClick}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-purple-100 shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs text-purple-200/80">
                <MessageSquare className="w-4 h-4 text-purple-300" />
                <span>Quick reply guaranteed within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
