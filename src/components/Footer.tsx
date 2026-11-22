import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#07070b] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-white font-display flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              <span>SAWAIRA MARYAM</span>
            </a>
            <p className="text-xs text-slate-400">
              Creative Web Developer &amp; UI/UX Specialist
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-purple-300 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-purple-300 transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">
              Featured Work
            </a>
            <a href="#skills" className="hover:text-purple-300 transition-colors">
              Toolkit
            </a>
            <a href="#process" className="hover:text-purple-300 transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sawaira-maryam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass-card border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sawaira-maryam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass-card border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:sawairamaryam.dev@gmail.com"
              className="w-9 h-9 rounded-xl glass-card border border-purple-500/20 hover:border-purple-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 flex items-center justify-center text-purple-300 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>Designed &amp; Developed with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 inline" />
            <span>by Sawaira Maryam</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Sawaira Maryam. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
