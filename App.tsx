/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Check, Info, Layers, RefreshCw } from 'lucide-react';

// Import Child Modular Components
import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeLogos from './components/MarqueeLogos';
import TechStack from './components/TechStack';
import Services from './components/Services';
import FeatureShowcase from './components/FeatureShowcase';
import ProcessTimeline from './components/ProcessTimeline';
import InteractiveStats from './components/InteractiveStats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import { MacronusLogo } from './components/MacronusLogo';
import FaqSection from './components/FaqSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showCursorBackdrop, setShowCursorBackdrop] = useState(false);

  // loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Track cursor spotlight for screen devices
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowCursorBackdrop(true);
    };
    
    const handleMouseLeave = () => {
      setShowCursorBackdrop(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-white to-[#18181B] text-gray-900 font-sans selection:bg-brand-purple/20 overflow-x-hidden">
      
      {/* Intro Portal Opening Reveal Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#0B0A0F] flex flex-col items-center justify-center text-white text-left p-6 select-none"
            id="intro-loader-screen"
          >
            <div className="flex flex-col gap-5 max-w-sm w-full" id="loader-content-block">
              {/* Spinning/floating Vector core logo */}
              <div className="relative flex items-center justify-center h-14 w-14 animate-pulse">
                <MacronusLogo size={52} className="h-full w-auto animate-float-fast" />
              </div>

              {/* Progress Labels */}
              <div>
                <h2 className="font-display font-extrabold text-lg tracking-tight text-white mb-1">
                  HYDRATING MACRONUS ENGINE
                </h2>
                <span className="text-[10px] font-mono tracking-widest text-brand-purple font-semibold uppercase block animate-pulse">
                  Ready to stream modules...
                </span>
              </div>

              {/* Static visual compile logs terminal */}
              <div className="bg-black/50 border border-white/5 rounded-xl p-3 font-mono text-[9px] text-[#059669] flex flex-col gap-1 shadow-inner h-[80px]" id="loader-logs">
                <div className="flex items-center gap-1.5"><Check size={8} /> <span>RESOLVING TS CONTEXT... OK</span></div>
                <div className="flex items-center gap-1.5"><Check size={8} /> <span>IMPORTING CORE VECTOR ARRAYS... OK</span></div>
                <div className="flex items-center gap-1.5 animate-pulse"><RefreshCw size={8} className="animate-spin" /> <span>PACKING EDG COMPILATIONS... ACTIVE</span></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Interactive cursor spotlight glowing halo */}
      {showCursorBackdrop && !loading && (
        <div
          className="fixed w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-brand-purple/5 to-brand-blue/5 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-[80px] z-50 transition-all duration-300 pointer-events-none"
          style={{ left: cursorPos.x, top: cursorPos.y }}
        />
      )}

      {/* Floating Notification Toast Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-5 py-4 rounded-2xl bg-[#111827] text-white shadow-2xl border border-gray-800 flex items-center gap-3 max-w-sm text-left"
            id="toast-block"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400">
              <Check size={14} />
            </div>
            <div className="flex-1 font-sans">
              <span className="block text-[8px] uppercase tracking-widest font-mono text-gray-500 font-extrabold">SYSTEM LOGS STATUS: SUCCESS</span>
              <p className="text-xs text-gray-200 mt-0.5">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Sticky layout nav */}
      <Header 
        onContactClick={() => handleNavigate('contact')} 
        onNavigate={handleNavigate} 
      />

      {/* Main viewport segments sequential stack */}
      <main id="applet-primary-view">
        {/* HERO SECTION */}
        <Hero 
          onContactClick={() => handleNavigate('contact')} 
          onNavigate={handleNavigate} 
        />

        {/* LOGO TRUST TICKER */}
        <MarqueeLogos />

        {/* STATS SECTION */}
        <InteractiveStats />

        {/* TECH STACK SECTION */}
        <TechStack />

        {/* SERVICES SECTION */}
        <Services />

        {/* PORTFOLIO ACCENT SHOWROOM */}
        <Portfolio />

        {/* FEATURE ALIGNING ALTERNATING BLOCK */}
        <FeatureShowcase />

        {/* PROCESS STEPS TIMELINE */}
        <ProcessTimeline />

        {/* TESTIMONIALS SLIDER SECTION */}
        <Testimonials />

        {/* FAQ DIRECTIVES ACCORDION */}
        <FaqSection />
      </main>

      {/* FOOTER & PLANNING questionnaire */}
      <ContactFooter 
        onNavigate={handleNavigate} 
        onContactSuccess={() => triggerToast('Your customized project spec brief proposal has been verifiably saved. Check logs.')} 
      />

    </div>
  );
}
