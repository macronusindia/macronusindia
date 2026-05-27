/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Github, 
  Twitter, 
  Linkedin, 
  Dribbble, 
  Check, 
  Layers, 
  Sparkles, 
  Mail, 
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Instagram
} from 'lucide-react';
import { MacronusLogo } from './MacronusLogo';

interface ContactFooterProps {
  onNavigate: (sectionId: string) => void;
  onContactSuccess: () => void;
}

export default function ContactFooter({ onNavigate, onContactSuccess }: ContactFooterProps) {
  // Configured states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  
  // Interactive Project questionnaire
  const [projectService, setProjectService] = useState<'saas' | 'website' | 'mobile' | 'ai' | null>(null);
  const [projectBudget, setProjectBudget] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [projectMessage, setProjectMessage] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || newsletterLoading) return;
    setNewsletterLoading(true);
    setNewsletterError(null);

    try {
      const formData = new FormData();
      formData.append("email", newsletterEmail);

      const response = await fetch("https://formspree.io/f/xbdbanoe", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        setNewsletterSubscribed(true);
        setNewsletterEmail('');
        setTimeout(() => {
          setNewsletterSubscribed(false);
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => null);
        const msg = errorData?.errors?.map((err: any) => err.message).join(", ") || "Registration failed. Please review email address.";
        setNewsletterError(msg);
      }
    } catch (err) {
      setNewsletterError("Network fault, please verify connection.");
      console.error("Newsletter submission error:", err);
    } finally {
      setNewsletterLoading(false);
    }
  };

  const handleProjectSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!clientEmail || !projectService || !projectBudget) return;
    setFormLoading(true);
    setFormError(null);

    try {
      // Formspree works best with standard FormData submissions as it guarantees 
      // name-to-field matching, proper headers, and automatic spam-filtering metadata.
      const formData = new FormData();
      formData.append("email", clientEmail);
      formData.append("name", clientName || "Anonymous Client");
      formData.append("service", projectService);
      formData.append("budget", projectBudget);
      formData.append("message", projectMessage || "No additional parameters provided.");

      const response = await fetch("https://formspree.io/f/mwvzngoy", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        setFormSent(true);
        onContactSuccess(); // Callback to trigger a notification
        setProjectService(null);
        setProjectBudget(null);
        setClientName('');
        setProjectMessage('');
        setClientEmail('');
        setTimeout(() => {
          setFormSent(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        const msg = errorData?.errors?.map((err: any) => err.message).join(", ") || "Form submission failed. Please verify credentials.";
        setFormError(msg);
      }
    } catch (err) {
      setFormError("Network exception. Please review cloud permissions or connect manually.");
      console.error("Submission error:", err);
    } finally {
      setFormLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#020617] text-gray-300 overflow-hidden border-t border-white/[0.06] py-16 md:py-24">
      
      {/* Dark Cinematic Ambient Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#050816] to-[#0B1020]" />
      
      {/* Soft Purple and Indigo glow orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#7C3AED]/8 to-transparent blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-glow-1" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#4F46E5]/8 to-transparent blur-[140px] pointer-events-none animate-glow-2" />

      {/* High-end ambient grid overlay to match app's aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      {/* Subtle animated neon light streaks */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent blur-[3px] animate-pulse pointer-events-none" />
      <div className="absolute top-[35%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4F46E5]/10 to-transparent blur-[2px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Main interactive upper container row */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16" id="footer-upper">
        
        {/* Col 1: Project Planner questionnaire Column (SaaS Form Spec) */}
        <div className="lg:col-span-7 flex flex-col text-left" id="footer-planner-block">
          <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9.5px] font-mono font-bold text-gray-200 uppercase tracking-widest mb-4">
            <Sparkles size={11} className="text-brand-pink animate-spin" />
            <span>INTERACTIVE BRIEF PLANNER</span>
          </div>

          <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight leading-tight mb-4">
            Initiate Your Project Design
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mb-8 leading-relaxed font-sans">
            Build a custom specification brief using the panels below. When completed, we will output optimized delivery budgets, milestone targets, and schedule an alignment call.
          </p>

          {/* Sizing interactive selection questionnaire grids */}
          <form onSubmit={handleProjectSubmit} className="flex flex-col gap-6" id="interactive-planner-form">
            {/* Class of service selector */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                01. SELECT TARGET VERTICAL:*
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="vertical-selector-grid">
                {[
                  { id: 'saas', label: 'SaaS Dashboard' },
                  { id: 'website', label: 'Bespoke Website' },
                  { id: 'mobile', label: 'Mobile App UI' },
                  { id: 'ai', label: 'AI Agent Sync' }
                ].map((serv) => (
                  <button
                    key={serv.id}
                    type="button"
                    onClick={() => setProjectService(serv.id as any)}
                    className={`p-3 rounded-xl border text-center font-semibold text-xs cursor-pointer select-none transition-all duration-300 ${
                      projectService === serv.id 
                        ? 'bg-gradient-to-tr from-brand-purple to-[#4F46E5] border-transparent text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] scale-[1.02]' 
                        : 'bg-white/[0.02] border-white/10 text-gray-300 hover:bg-white/[0.06] hover:border-white/20'
                    }`}
                    id={`picker-serv-${serv.id}`}
                  >
                    {serv.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget estimate brackets */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                02. BUDGET ALLOCATION RANGE:*
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="budget-selector-grid">
                {['₹15K - ₹35K', '₹35K - ₹60K', '₹60K - ₹80K', '₹80K - ₹1 Lakh'].map((bracket) => (
                  <button
                    key={bracket}
                    type="button"
                    onClick={() => setProjectBudget(bracket)}
                    className={`p-3 rounded-xl border text-center font-semibold text-xs cursor-pointer select-none transition-all duration-300 ${
                      projectBudget === bracket 
                        ? 'bg-gradient-to-tr from-brand-purple to-[#4F46E5] border-transparent text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] scale-[1.02]' 
                        : 'bg-white/[0.02] border-white/10 text-gray-300 hover:bg-white/[0.06] hover:border-white/20'
                    }`}
                    id={`picker-budget-${bracket.replace(/[^a-zA-Z0-9]/g, '')}`}
                  >
                    {bracket}
                  </button>
                ))}
              </div>
            </div>

            {/* Hidden Input field specs to align fully with Formspree automated field parsers */}
            <input type="hidden" name="service" value={projectService || ''} />
            <input type="hidden" name="budget" value={projectBudget || ''} />

            {/* Client Name Input */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                03. CLIENT OR COMPANY NAME (OPTIONAL):
              </span>
              <input
                type="text"
                name="name"
                placeholder="What should we call you?"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="px-5 py-3.5 rounded-xl bg-white/[0.02] focus:bg-white/[0.05] border border-white/10 focus:border-brand-purple/40 outline-none text-white text-xs font-medium font-sans transition-all duration-300"
                id="client-name-form-input"
              />
            </div>

            {/* Client specifications Message */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                04. SCOPE DETAILS & SPECIFICATIONS (OPTIONAL):
              </span>
              <textarea
                name="message"
                placeholder="Briefly describe your objectives, performance goals, or design references..."
                rows={3}
                value={projectMessage}
                onChange={(e) => setProjectMessage(e.target.value)}
                className="px-5 py-3.5 rounded-xl bg-white/[0.02] focus:bg-white/[0.05] border border-white/10 focus:border-brand-purple/40 outline-none text-white text-xs font-medium font-sans resize-none transition-all duration-300"
                id="client-message-form-input"
              />
            </div>

            {/* Mail submission input */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">
                05. SECURE AUTHENTICATION MAIL:*
              </span>
              {formError && (
                <div className="text-red-400 text-xs py-1" id="form-error-msg">
                  ⚠️ {formError}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="px-5 py-3.5 rounded-full bg-white/[0.02] focus:bg-white/[0.05] border border-white/10 focus:border-brand-purple/40 outline-none text-white text-xs font-medium font-sans flex-1 transition-all duration-300"
                  id="client-email-form-input"
                />
                
                <button
                  type="submit"
                  disabled={!projectService || !projectBudget || !clientEmail || formLoading}
                  className={`px-6 py-3.5 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md ${
                    formSent 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-white text-slate-950 hover:bg-gradient-to-r hover:from-brand-purple hover:to-[#4F46E5] hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/[0.02] disabled:hover:text-gray-400'
                  }`}
                  id="client-form-submit-btn"
                >
                  {formSent ? (
                    <>
                      <Check size={12} className="animate-bounce" /> Brief Transmitted
                    </>
                  ) : formLoading ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
                      Uploading Spec...
                    </>
                  ) : (
                    <>
                      Submit Project Brief <ArrowRight size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Col 2: High-Fidelity Glassmorphic Newsletter Block */}
        <div className="lg:col-span-5 flex flex-col justify-start" id="footer-newsletter-block">
          
          <div className="flex flex-col gap-5 bg-white/[0.02] p-6 rounded-2xl border border-white/10 hover:border-white/15 transition-all duration-300 shadow-premium-soft" id="newsletter-card">
            <div className="flex items-center gap-2 text-white">
              <Mail size={15} className="text-brand-purple animate-pulse" />
              <h4 className="font-display font-bold text-xs tracking-widest text-[#94a3b8] uppercase">Active Edge Updates</h4>
            </div>
            
            <p className="text-gray-400 text-xs leading-relaxed font-sans text-left">
              Subscribe to stay updated with performance logs, new system architectures, and UI/UX design updates.
            </p>

            {newsletterError && (
              <p className="text-red-400 text-[11px] text-left font-sans animate-pulse">
                ⚠️ {newsletterError}
              </p>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2" id="news-form">
              <input
                type="email"
                required
                disabled={newsletterLoading}
                placeholder={newsletterLoading ? "Registering..." : "developer@company.com"}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/10 outline-none text-white text-xs font-sans flex-1 transition-all duration-300 focus:border-brand-purple/40 disabled:opacity-55"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                disabled={newsletterLoading}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center transition-all duration-300 disabled:opacity-55 ${
                  newsletterSubscribed 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-white text-slate-950 hover:bg-brand-purple hover:text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                }`}
                id="btn-news-submit"
              >
                {newsletterSubscribed ? (
                  <Check size={12} />
                ) : newsletterLoading ? (
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
                ) : (
                  'Join'
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Directory Section Divider */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto my-14" />

      {/* Footer Links Matrix Directory row */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-12" id="footer-links-directory">
        
        {/* Left: Brand Column (col-span-5) */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-5 text-left" id="footer-logo-brand-details">
          <div className="flex items-center gap-3.5 group cursor-pointer" onClick={() => onNavigate('hero')}>
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/15 group-hover:border-brand-purple/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-300">
              <MacronusLogo size={28} className="h-7 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-brand-purple/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
            <div className="flex flex-col leading-none text-left">
              <span 
                className="font-brand-outline text-transparent uppercase tracking-[0.08em] text-[12px] md:text-[14px] font-bold select-none"
                style={{
                  WebkitTextStroke: '1.2px #ffffff',
                }}
              >
                Macronus
              </span>
              <span className="text-[8px] tracking-[0.16em] font-mono font-bold text-brand-purple uppercase mt-0.5">
                digital labs
              </span>
            </div>
          </div>

          <p className="text-[13.5px] font-bold text-white tracking-wide mt-2">
            “Where Ideas Become Interfaces.”
          </p>

          <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed max-w-xs font-sans">
            Crafting premium digital experiences through modern web development, UI/UX design, SaaS solutions, and cutting-edge technology.
          </p>

          {/* Social Links Matrix buttons (Glassmorphism, Purple glow hover, scaling animation, modern minimal icons) */}
          <div className="flex items-center gap-3 mt-1" id="footer-socials-row">
            {[
              { 
                id: 'instagram', 
                label: 'Instagram', 
                link: 'https://www.instagram.com/macronusindia/?utm_source=ig_web_button_share_sheet', 
                icon: <Instagram size={14} /> 
              },
              { 
                id: 'twitter', 
                label: 'X (Twitter)', 
                link: 'https://x.com/Macronusindia', 
                icon: (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ) 
              },
              { 
                id: 'email', 
                label: 'Email', 
                link: 'mailto:macronusindia@gmail.com', 
                icon: <Mail size={14} /> 
              }
            ].map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.03] hover:bg-brand-purple/10 border border-white/10 hover:border-brand-purple/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
                aria-label={social.label}
                id={`footer-social-${social.id}`}
              >
                <div className="absolute inset-0 bg-brand-purple/15 blur-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative z-10 text-gray-400 group-hover/social:text-white group-hover/social:scale-110 transition-all duration-300 flex items-center justify-center">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Services section Column (col-span-3.5) */}
        <div className="md:col-span-3 lg:col-span-3.5 flex flex-col gap-4 text-left" id="footer-services-list">
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white/55 uppercase border-b border-white/[0.05] pb-2 max-w-[120px]">
            SERVICES
          </span>
          <div className="flex flex-col gap-2 font-sans text-xs">
            {[
              'UI/UX Design',
              'Web Development',
              'SaaS Solutions',
              'Full Stack Development',
              'Branding',
              'AI Integration'
            ].map((serv) => (
              <button
                key={serv}
                type="button"
                onClick={() => onNavigate('services')}
                className="text-gray-400 hover:text-white hover:translate-x-1.5 hover:scale-[1.01] transition-all duration-300 flex items-center gap-2 group/item text-left w-fit"
              >
                <ChevronRight size={11} className="text-brand-purple/40 group-hover/item:text-brand-purple transition-colors" />
                <span className="text-[13px]">{serv}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Company Section Column (col-span-3.5) */}
        <div className="md:col-span-3 lg:col-span-3.5 flex flex-col gap-4 text-left" id="footer-company-list">
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white/55 uppercase border-b border-white/[0.05] pb-2 max-w-[120px]">
            COMPANY
          </span>
          <div className="flex flex-col gap-2 font-sans text-xs">
            {[
              { name: 'About', target: 'hero' },
              { name: 'Portfolio', target: 'portfolio' },
              { name: 'Contact', target: 'contact' },
              { name: 'Careers', target: 'careers' }
            ].map((comp) => {
              const isCareers = comp.target === 'careers';
              return (
                <button
                  key={comp.name}
                  type="button"
                  onClick={() => {
                    if (isCareers) {
                      alert("Our careers portal is opening soon. Stay tuned!");
                    } else {
                      onNavigate(comp.target);
                    }
                  }}
                  className="text-gray-400 hover:text-white hover:translate-x-1.5 hover:scale-[1.01] transition-all duration-300 flex items-center gap-2 group/item text-left w-fit"
                >
                  <ChevronRight size={11} className="text-brand-purple/40 group-hover/item:text-brand-purple transition-colors" />
                  <span className="text-[13px]">{comp.name}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Copy legal row footer bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full z-10 relative flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.05] mt-16 font-sans text-xs text-gray-500" id="footer-legal">
        <div className="flex items-center gap-2">
          <MacronusLogo size={14} className="h-3.5 w-auto text-white/60" />
          <span>© 2026 Macronus Digital Labs. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-400">
          <span>Designed & Engineered by</span>
          <span className="font-semibold text-white/80 select-none tracking-wide hover:text-white transition-colors">Macronus</span>
        </div>
      </div>

    </footer>
  );
}
