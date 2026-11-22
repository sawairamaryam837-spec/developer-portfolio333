import React, { useState } from 'react';
import { WORK_PROCESS_STEPS } from '../data/portfolioData';
import { Search, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Search className="w-5 h-5 text-purple-300" />;
      case '02':
        return <Compass className="w-5 h-5 text-purple-300" />;
      case '03':
        return <Code className="w-5 h-5 text-purple-300" />;
      case '04':
        return <Rocket className="w-5 h-5 text-purple-300" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-purple-300" />;
    }
  };

  return (
    <section id="process" className="relative py-24 sm:py-32">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-700/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>Workflow &amp; Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            MY WORK <span className="text-gradient-purple">PROCESS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed text-balance">
            A battle-tested 4-stage engineering lifecycle focused on rapid execution, clean code,
            and flawless user experiences.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Central Timeline Spine Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20" />

          <div className="space-y-12 md:space-y-16">
            {WORK_PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeStep === step.number;

              return (
                <div
                  key={step.number}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`md:col-span-5 ${
                      isEven ? 'md:text-right' : 'md:order-last'
                    }`}
                  >
                    <div
                      onClick={() => setActiveStep(step.number)}
                      className={`group p-6 sm:p-8 rounded-2xl glass-card transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-purple-400/50 bg-purple-950/[0.12] shadow-[0_0_30px_rgba(168,85,247,0.2)]'
                          : 'border-purple-500/15 hover:border-purple-400/30'
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        <span className="font-mono text-xs font-bold text-purple-400 tracking-wider">
                          PHASE {step.number}
                        </span>
                        <span className="text-slate-600">·</span>
                        <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-purple-300 transition-colors">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-sm font-medium text-purple-200/90 mb-3">
                        {step.description}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {step.details}
                      </p>

                      {/* Milestones */}
                      <div
                        className={`flex flex-col gap-1.5 pt-3 border-t border-purple-500/10 ${
                          isEven ? 'md:items-end' : ''
                        }`}
                      >
                        {step.milestones.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className={`flex items-center gap-2 text-xs text-slate-300 ${
                              isEven ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Center Indicator Node */}
                  <div className="hidden md:flex md:col-span-2 justify-center items-center relative">
                    <button
                      onClick={() => setActiveStep(step.number)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 cursor-pointer ${
                        isSelected
                          ? 'bg-purple-600 text-white shadow-[0_0_25px_#a855f7] scale-110'
                          : 'bg-[#09090D] border border-purple-500/40 text-purple-300 hover:scale-105'
                      }`}
                    >
                      {getStepIcon(step.number)}
                    </button>
                  </div>

                  {/* Empty Spacer Column on opposite side for desktop balance */}
                  <div
                    className={`hidden md:block md:col-span-5 ${
                      isEven ? 'md:order-last' : ''
                    }`}
                  >
                    <div className="p-4 opacity-40 hover:opacity-80 transition-opacity">
                      <div className="text-4xl font-extrabold text-purple-900/40 font-display">
                        0{step.number} // STAGE
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
