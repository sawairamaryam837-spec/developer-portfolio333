import React, { useState } from 'react';
import { Statistic, INITIAL_STATISTICS } from '../data/portfolioData';
import { Award, Briefcase, Cpu, ThumbsUp, Edit3, Check, X, RotateCcw } from 'lucide-react';

export const Statistics: React.FC = () => {
  const [stats, setStats] = useState<Statistic[]>(INITIAL_STATISTICS);
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState<Record<string, string>>({
    exp: stats[0].value,
    projects: stats[1].value,
    tech: stats[2].value,
    satisfaction: stats[3].value,
  });

  const getIcon = (id: string) => {
    switch (id) {
      case 'exp':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'projects':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'tech':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'satisfaction':
        return <ThumbsUp className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-purple-400" />;
    }
  };

  const handleSave = () => {
    setStats((prev) =>
      prev.map((stat) => ({
        ...stat,
        value: editValues[stat.id] || stat.value,
      }))
    );
    setIsEditing(false);
  };

  const handleReset = () => {
    setStats(INITIAL_STATISTICS);
    setEditValues({
      exp: INITIAL_STATISTICS[0].value,
      projects: INITIAL_STATISTICS[1].value,
      tech: INITIAL_STATISTICS[2].value,
      satisfaction: INITIAL_STATISTICS[3].value,
    });
    setIsEditing(false);
  };

  return (
    <section className="relative py-12 border-y border-purple-500/15 bg-gradient-to-b from-[#09090D] via-[#0d0d16] to-[#09090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Verified Experience
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Performance &amp; Milestones
            </h2>
          </div>

          {/* Quick Edit Action Toggle for Live Customization */}
          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-300 hover:text-white glass-card border border-purple-500/20 hover:border-purple-500/40 transition-colors cursor-pointer"
                title="Customize statistical metrics"
              >
                <Edit3 className="w-3.5 h-3.5 text-purple-400" />
                <span>Edit Values</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-purple-600 hover:bg-purple-500 transition-colors cursor-pointer shadow-sm shadow-purple-600/50"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white glass-card border border-slate-700 transition-colors cursor-pointer"
                  title="Reset to default values"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white glass-card border border-slate-700 transition-colors cursor-pointer"
                  title="Cancel edit"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 4 Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative p-6 rounded-2xl glass-card border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-white/[0.03] to-purple-950/[0.04]"
            >
              {/* Subtle top indicator glow */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent group-hover:via-purple-400 transition-colors" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-shadow">
                  {getIcon(stat.id)}
                </div>
                <span className="text-[11px] font-mono text-purple-400/80 uppercase tracking-wider">
                  Metric
                </span>
              </div>

              {isEditing ? (
                <div className="space-y-1 mb-2">
                  <input
                    type="text"
                    value={editValues[stat.id] || ''}
                    onChange={(e) =>
                      setEditValues({
                        ...editValues,
                        [stat.id]: e.target.value,
                      })
                    }
                    className="w-full text-2xl font-bold text-white bg-black/60 border border-purple-500/50 rounded-lg px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-purple-400 font-display tabular-nums"
                  />
                  <div className="text-[10px] text-purple-300">Editable value</div>
                </div>
              ) : (
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight tabular-nums mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-purple-300">
                    {stat.value}
                  </span>
                </div>
              )}

              <div className="text-sm font-semibold text-slate-200 tracking-wide">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
