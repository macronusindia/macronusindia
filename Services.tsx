/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Layers, 
  Search, 
  Cpu, 
  Smartphone, 
  Grid, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  DollarSign,
  ChevronDown
} from 'lucide-react';
import { ServiceItem } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'custom-web',
      title: 'Custom Website Development',
      description: 'Elegant bespoke company sites, pricing matrices, marketing funnels, and static catalogs with speed optimizations.',
      icon: 'website',
      gradient: 'from-blue-600/5 via-violet-600/5 to-transparent border-blue-100',
      features: ['Prerendered dynamic cache configurations', 'SEO metadata index mapping', 'Fully integrated CMS admin controls', 'Adaptive dark/light style toggles']
    },
    {
      id: 'saas-design',
      title: 'SaaS Product Design',
      description: 'Translating product descriptions into fully designed visual SaaS canvas boards, grids, drawers, and mock modules.',
      icon: 'saas',
      gradient: 'from-purple-600/5 via-brand-pink/5 to-transparent border-purple-100',
      features: ['Atomic structured design system setups', 'Responsive visual user journey plans', 'Interactive layout feedback prototyping', 'Component library handover assets']
    },
    {
      id: 'ux-research',
      title: 'UI/UX Interactive Research',
      description: 'Running user interaction studies, heatmaps mapping, and behavioral profiling lists to refine retention numbers.',
      icon: 'research',
      gradient: 'from-emerald-600/5 via-teal-600/5 to-transparent border-emerald-100',
      features: ['Fitts Law layout compliance tests', 'User click map audit profiles', 'Core A/B style option experiments', 'Interactive component drag studies']
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'Fully decoupled high-velocity web portals, analytics software, transaction engines, and customer control directories.',
      icon: 'webapp',
      gradient: 'from-brand-pink/5 via-rose-600/5 to-transparent border-pink-100',
      features: ['TypeScript type-safe server routers', 'Real-time state managers syncing', 'Secure multi-tenant data structures', 'Indexed browser-side database caches']
    },
    {
      id: 'mobile-ui',
      title: 'Mobile Interface Engineering',
      description: 'Constructing polished multi-channel templates optimized for gesture swipes, haptics, and retina screen devices.',
      icon: 'mobile',
      gradient: 'from-sky-600/5 via-blue-600/5 to-transparent border-sky-100',
      features: ['Touch target size accommodations', 'Native iOS & Android fluid styles', 'Low-connection storage capability', 'Frictionless entry and login workflows']
    },
    {
      id: 'dashboards',
      title: 'Dashboard & Admin Panels',
      description: 'Immersive tracking hubs containing tabular databases, spreadsheet hand-offs, file export workflows, and alert centers.',
      icon: 'dashboard',
      gradient: 'from-yellow-600/5 via-orange-600/5 to-transparent border-yellow-101',
      features: ['Optimized virtual table cell rendering', 'Configurable column layout grids', 'One-click CSV & PDF export nodes', 'Integrated alert trigger nodes']
    },
    {
      id: 'branding',
      title: 'Branding & Design Systems',
      description: 'Setting cohesive company styles, font combinations, matching icon packages, and geometric logo guidelines.',
      icon: 'branding',
      gradient: 'from-violet-600/5 via-purple-600/5 to-transparent border-violet-101',
      features: ['Cohesive brand visual standards assets', 'Tailwind custom variables export', 'SVG vector logo collection arrays', 'Stylized digital presentation charts']
    },
    {
      id: 'ai-solutions',
      title: 'AI-Powered Software Systems',
      description: 'Automating standard workflows with neural embeddings, semantic search routing, and self-triggering context models.',
      icon: 'ai',
      gradient: 'from-fuchsia-600/5 via-pink-600/5 to-transparent border-fuchsia-100',
      features: ['Gemini prompt construction matrices', 'Efficient server-less API proxy setups', 'Localized structured outputs parsing', 'Intelligent search context grounding']
    }
  ];

  const renderIcon = (key: string) => {
    switch (key) {
      case 'website': return <Monitor className="text-blue-500" size={20} />;
      case 'saas': return <Layers className="text-purple-500" size={20} />;
      case 'research': return <Search className="text-emerald-500" size={20} />;
      case 'webapp': return <Cpu className="text-pink-500" size={20} />;
      case 'mobile': return <Smartphone className="text-sky-500" size={20} />;
      case 'dashboard': return <Grid className="text-orange-500" size={20} />;
      case 'branding': return <Palette className="text-violet-500" size={20} />;
      case 'ai': return <Sparkles className="text-fuchsia-500 animate-pulse" size={20} />;
      default: return <Monitor className="text-blue-500" size={20} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-40 -z-0" />
      
      {/* Dynamic light halos */}
      <div className="absolute top-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-blue/5 to-brand-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-brand-pink/5 to-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16" id="services-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink/5 border border-brand-pink/10 text-[10.5px] font-mono font-bold text-brand-pink uppercase tracking-widest mb-4">
            <Layers size={11} className="text-brand-pink" />
            <span>AGENCY SERVICE CATALOG</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
            High-End Engineering <span className="text-gradient">Tailored</span> For Modern Startups
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-sans">
            We operate at scale to deliver functional masterpieces. Look through our core service nodes below. Select any card to unfold exact milestones.
          </p>
        </div>

        {/* Services Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid-container">
          {services.map((item) => {
            const isSelected = selectedService === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedService(isSelected ? null : item.id)}
                className={`group text-left rounded-3xl p-6 bg-white border border-gray-100 hover:border-gray-200 shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 relative flex flex-col justify-between overflow-hidden cursor-pointer min-h-[250px] ${item.gradient}`}
                id={`service-card-${item.id}`}
              >
                {/* Glow Ring backdrop */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon Panel with floating glow circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {renderIcon(item.icon)}
                    </div>
                    {/* Animated arrow indicators */}
                    <div className="relative w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-purple group-hover:text-white transition-all">
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title and Short description */}
                  <h3 className="font-display font-bold text-gray-950 group-hover:text-brand-purple text-base mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Unfolding features sub-panel */}
                <div className="mt-4" id={`unfold-${item.id}`}>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100/80 pt-4 flex flex-col gap-2.5 overflow-hidden"
                      >
                        <span className="text-[9px] font-mono font-bold tracking-widest text-brand-purple uppercase">
                          TECHNICAL SPECS:
                        </span>
                        {item.features.map((feat, index) => (
                          <div key={index} className="flex items-start gap-2 text-[11px] text-gray-600 leading-tight">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle fold action visualizer */}
                  <div className="text-gray-400 hover:text-gray-900 flex items-center gap-1.5 text-[10px] font-mono font-semibold mt-4 transition-colors">
                    <span>{isSelected ? 'View less parameters' : 'Interrogate specs'}</span>
                    <ChevronDown size={10} className={`transform transition-transform ${isSelected ? 'rotate-180 text-brand-purple' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
