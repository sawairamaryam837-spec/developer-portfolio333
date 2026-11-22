import React, { useEffect } from 'react';
import { Service } from '../data/portfolioData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestService: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl glass-card border border-purple-400/40 p-6 sm:p-8 bg-[#0d0d16] shadow-2xl animate-in zoom-in-95 duration-200 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 pr-8">
          <div className="text-xs font-mono text-purple-400">
            SERVICE {service.number}
          </div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
          <p className="text-sm text-slate-300">{service.description}</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300">
            Included Deliverables &amp; Milestones
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-950/30 border border-purple-500/15 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onRequestService();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
