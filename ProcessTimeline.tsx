/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Search, 
  Activity, 
  PenTool, 
  Terminal, 
  CheckCircle, 
  Rocket, 
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';
import { ProcessStep } from '../types';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      phase: '01',
      title: 'Discovery & Analytics Audit',
      description: 'Review legacy performance numbers, gather marketing specs, audit accessibility compliance, and build user target metrics lists.',
      details: ['Legacy SEO speed metrics check', 'Stakeholder alignment panels', 'UX friction profiling audits', 'Competitor benchmarking matrices'],
      metrics: 'Aims for 2x retention increase profile'
    },
    {
      phase: '02',
      title: 'Strategic Architecture Spec',
      description: 'Form sitemaps charts, draft detailed scope sheets, define route structures, specify database variables, and choose technical libraries.',
      details: ['Dynamic sitemap diagramming', 'Database table configuration definitions', 'API router scope documentation', 'Security authorization plans'],
      metrics: 'Delivers full system schemas'
    },
    {
      phase: '03',
      title: 'UI/UX Interactive Prototypes',
      description: 'Construct full atomic styling libraries inside Figma conforming to 8px spacing coordinates, setting typography bounds and layout guidelines.',
      details: ['Interactive wireframe designs', 'Color typography asset setups', 'Touch-target padding alignment', 'Component animations prototyping'],
      metrics: 'Handover complete and signed off'
    },
    {
      phase: '04',
      title: 'Decoupled Server Production',
      description: 'Converting designed interfaces into high-speed React layouts compiled via Vite. Write compliant REST configurations.',
      details: ['Semantic React layout engineering', 'Tailwind CSS class application', 'Fast asynchronous API linking', 'Local state engines integration'],
      metrics: 'Uptime target locked at 99.9%'
    },
    {
      phase: '05',
      title: 'Comprehensive Quality Auditing',
      description: 'Running page load simulation streams under restricted bandwidth throttling to secure clean Core Vitals logs.',
      details: ['Restricted connection speed audits', 'Core Web Vitals scoring reviews', 'Secure authentication boundary tests', 'Automatic schema validation blocks'],
      metrics: '100% Mobile score guaranteed'
    },
    {
      phase: '06',
      title: 'Automated Cloud Hand-Off',
      description: 'Deploying completed builds through seamless custom compilers to cloud containers and global edge workers.',
      details: ['Vite optimization pack compilations', 'Edge caching headers mapping', 'Automatic CDN propagation schedules', 'Rolling deploy safety buffers'],
      metrics: 'Live edge deployment in 32ms'
    },
    {
      phase: '07',
      title: 'Optimization & SEO Scale',
      description: 'Conduct ongoing speed assessments, deploy targeted A/B setups, and optimize asset distribution sizes.',
      details: ['Asset compression audits', 'Performance logs audits', 'Prompt calibration refinements', 'Dynamic conversion indexing tracking'],
      metrics: 'Ensures steady speed outputs'
    }
  ];

  const renderIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Search size={16} />;
      case 1: return <MapPin size={16} />;
      case 2: return <PenTool size={16} />;
      case 3: return <Terminal size={16} />;
      case 4: return <Activity size={16} />;
      case 5: return <Rocket size={16} />;
      case 6: return <TrendingUp size={16} />;
      default: return <Search size={16} />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#FAF8FB] border-t border-b border-purple-50/70 relative overflow-hidden">
      
      {/* Visual background rings */}
      <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] rounded-full border border-purple-500/5 pointer-events-none" />
      <div className="absolute top-1/2 right-[-150px] w-[500px] h-[500px] rounded-full border border-pink-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16" id="process-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-[10.5px] font-mono font-bold text-brand-purple uppercase tracking-widest mb-4">
            <Clock size={11} className="text-brand-purple" />
            <span>EXIGENT DEVELOPMENT TIMELINE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
            How We Translate <span className="text-gradient-purple-pink">Ideation</span> To Scale Production
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-sans">
            Our systematic 7-phase implementation architecture guarantees structural longevity, peak page velocities, and beautiful aesthetics. Select a step to explore detailed deliverables.
          </p>
        </div>

        {/* Stepper Node Line Picker */}
        <div className="relative w-full overflow-hidden py-6 mb-12 select-none" id="progress-timeline-nav">
          
          {/* Timeline background active meter track */}
          <div className="absolute h-1 top-1/2 left-0 right-0 bg-gray-200/80 -translate-y-1/2 -z-10" />
          <div 
            className="absolute h-1 top-1/2 left-0 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-blue -translate-y-1/2 -z-10 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          <div className="flex justify-between items-center relative z-10 px-4" id="timeline-node-track">
            {steps.map((step, idx) => {
              const active = idx === activeStep;
              const passed = idx < activeStep;

              return (
                <div
                  key={step.phase}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center gap-2.5 cursor-pointer relative group"
                  id={`timeline-node-step-${idx}`}
                >
                  {/* Circle bubble representing milestone node */}
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center transition-all ${active ? 'bg-gray-950 text-white border-brand-purple shadow-lg scale-110 shadow-brand-purple/10' : passed ? 'bg-brand-purple text-white border-transparent' : 'bg-white text-gray-400 border-gray-200 group-hover:border-gray-400'}`}>
                    {passed ? <CheckCircle size={14} /> : renderIcon(idx)}
                  </div>

                  {/* Text visual labels */}
                  <span className={`text-[10px] font-mono font-bold tracking-widest leading-none ${active ? 'text-gray-950 font-extrabold' : 'text-gray-400'}`}>
                    PHASE {step.phase}
                  </span>
                  <span className={`hidden md:block text-[11px] font-bold tracking-tight absolute top-16 whitespace-nowrap overflow-hidden transition-opacity ${active ? 'opacity-100 text-brand-purple font-extrabold' : 'opacity-0'}`}>
                    {step.title.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Information Panel */}
        <div className="max-w-4xl mx-auto" id="timeline-detail-viewport">
          <AnimatePresence mode="wait">
            {steps.map((currStep, idx) => {
              if (idx !== activeStep) return null;

              return (
                <motion.div
                  key={currStep.phase}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-premium-hard relative overflow-hidden flex flex-col md:flex-row gap-8 items-stretch"
                  id={`process-detail-card-${idx}`}
                >
                  {/* Subtle ambient accent glows */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-brand-purple/5 to-transparent blur-md rounded-bl-3xl pointer-events-none" />

                  {/* Left Column: Stage description */}
                  <div className="flex-1 text-left flex flex-col justify-between" id={`timeline-card-left-${idx}`}>
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="font-mono text-xs font-bold text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                          STEP 0{idx + 1}
                        </span>
                        <div className="h-[1px] bg-gray-100 flex-1" />
                      </div>

                      <h3 className="font-display font-bold text-gray-950 text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight mb-4">
                        {currStep.title}
                      </h3>
                      <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                        {currStep.description}
                      </p>
                    </div>

                    {/* Measurable Benchmark Target bottom callout */}
                    <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-3 text-emerald-600 bg-emerald-50/45 p-3 rounded-2xl border border-emerald-100 text-xs font-medium">
                      <Target size={14} className="text-emerald-500 animate-pulse" />
                      <div className="text-left font-sans">
                        <span className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 leading-none">TARGET CRITERIA</span>
                        <span className="font-bold">{currStep.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key list deliverables */}
                  <div className="flex-1 bg-[#FCFCFD]/90 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center text-left" id={`timeline-card-right-${idx}`}>
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-gray-400 mb-4 block">
                      CORE PROJECT DELIVERABLES:
                    </span>
                    
                    <div className="space-y-3.5">
                      {currStep.details.map((val, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-tight">
                          <div className="w-5 h-5 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm text-brand-purple mt-0.5">
                            <CheckCircle size={10} />
                          </div>
                          <span className="font-sans font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
