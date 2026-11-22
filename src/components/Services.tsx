import React, { useState } from 'react';
import { SERVICES, Service } from '../data/portfolioData';
import { Layout, Code2, Palette, Zap, ArrowRight, CheckCircle } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-300" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-purple-300" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-purple-300" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-purple-300" />;
      default:
        return <Code2 className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background Subtle Gradient Spot */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Expertise &amp; Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              WHAT I <span className="text-gradient-purple">DO</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-400 leading-relaxed">
            From strategic concept to clean implementation, delivering end-to-end digital solutions
            tailored to amplify brand presence and technical performance.
          </p>
        </div>

        {/* 4 Modern Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const isHovered = activeCard === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 glass-card transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.2)] -translate-y-1.5 bg-purple-950/[0.08]'
                    : 'border-purple-500/15'
                }`}
              >
                {/* Top Corner Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold font-display text-purple-400/30 group-hover:text-purple-300 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/25 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-400/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:text-purple-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-purple-500/10">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-300/80 mb-2">
                      Key Deliverables
                    </div>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-purple-500/10">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300 hover:text-white transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
