import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  Clock,
  Sparkles,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'sawairamaryam837@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Please enter a subject.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please enter a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Let&apos;s Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                START A <span className="text-gradient-purple">CONVERSATION</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Looking for a creative web developer for your next project, company MVP, or long-term
                contract? Let&apos;s discuss how we can collaborate.
              </p>
            </div>

            {/* Email Card with Copy Affordance */}
            <div className="p-5 rounded-2xl glass-card border border-purple-500/20 bg-[#0e0e18] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                  <Mail className="w-4 h-4" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium text-purple-300 hover:text-white bg-purple-950/60 border border-purple-500/30 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${contactEmail}`}
                className="text-base sm:text-lg font-bold text-white hover:text-purple-300 transition-colors font-mono block break-all"
              >
                {contactEmail}
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>Typical response within 12–24 hours</span>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect on Professional Platforms
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/sawaira-maryam-55b6653b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/20 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-200">
                        LinkedIn
                      </div>
                      <div className="text-[11px] text-slate-400">Professional Network</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-300" />
                </a>

                <a
                  href="https://github.com/sawairamaryam837-spec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/20 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-slate-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-200">
                        GitHub
                      </div>
                      <div className="text-[11px] text-slate-400">Code &amp; Repositories</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-300" />
                </a>
              </div>
            </div>

            {/* Freelance Availability Badge */}
            <div className="p-4 rounded-xl border border-purple-500/25 bg-gradient-to-r from-purple-950/40 to-transparent flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Upwork &amp; Contract Ready:</span> Open for freelance design, full-stack web builds, and frontend optimization contracts.
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl glass-card border border-purple-500/25 bg-[#0e0e18]/90 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-purple-500/10 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-purple-300/80 mt-0.5">
                    Fill out the form below to initiate our discussion.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mx-auto shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto">
                      Thank you for reaching out. I have received your message and will review your project details and get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-purple-200 hover:text-white glass-card border border-purple-500/30 transition-all cursor-pointer mt-4"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                      >
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-slate-500 text-sm transition-all focus:outline-none"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                      >
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-slate-500 text-sm transition-all focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Subject / Project Scope <span className="text-purple-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. New Web Application / UI/UX Redesign"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-slate-500 text-sm transition-all focus:outline-none"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Message Details <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project goals, timelines, and requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white placeholder-slate-500 text-sm transition-all focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] transition-all duration-300 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
