/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  ChevronRight, 
  ArrowUpRight, 
  X, 
  LineChart, 
  Smartphone, 
  Globe, 
  Activity, 
  MousePointer 
} from 'lucide-react';
import { PortfolioProject } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS Dashboards' },
    { id: 'ai', label: 'AI Products' },
    { id: 'mobile', label: 'Mobile Interfaces' },
    { id: 'custom-web', label: 'Bespoke Web' }
  ];

  const projects: PortfolioProject[] = [
    {
      id: 'aura-fintech',
      title: 'Aura Core: Multi-Tenant Fintech Dashboard',
      category: 'saas',
      tag: 'FINTECH SaaS',
      description: 'An advanced tracking engine built to route, isolate, and audit financial transaction pipelines with optimized virtual table cells.',
      image: 'from-blue-600 via-indigo-600 to-brand-purple',
      stats: { label: 'PROCESSING AUDIT SPEED', value: '42ms' },
      highlights: ['Aggregated Stripe payout proxy webhooks', 'Fully isolated database schemas per client account', 'Instant tabular CSV file exports assemblies']
    },
    {
      id: 'vectra-ai',
      title: 'Vectra Automation: Self-Refining AI agent',
      category: 'ai',
      tag: 'AI INTEGRATIONS',
      description: 'Automates manual web updates by mapping page nodes to semantic layouts using embeddings search.',
      image: 'from-brand-purple via-brand-pink to-brand-blue',
      stats: { label: 'HOURS SAVED PER COMM.', value: '62 Hours' },
      highlights: ['Configured Prompt contexts matching Gemini APIs', 'Robust vector database indexing models', 'Semantic HTML reducers generating CSS tags']
    },
    {
      id: 'apex-store',
      title: 'Apex Market: Decentralized Global Storefront',
      category: 'custom-web',
      tag: 'E-COMMERCE CORE',
      description: 'Ultra-fast static storefront catalog serving thousands of active products worldwide using caching edge CDNs.',
      image: 'from-violet-600 via-rose-500 to-amber-500',
      stats: { label: 'SPEEDINDEX PERFORMANCE score', value: '100 / 100' },
      highlights: ['Vite optimized static production bundles', 'Automated image compressing and metadata indexing', 'Dynamic local cart browser state syncs']
    },
    {
      id: 'hologram-mobile',
      title: 'Hologram Mobile: Touch Interface applet',
      category: 'mobile',
      tag: 'iOS & ANDROID APP',
      description: 'A gesture-optimized medical telemetry interface delivering 60FPS fluid screen redraw speeds.',
      image: 'from-emerald-500 via-teal-600 to-indigo-600',
      stats: { label: 'GESTUR RESPO. RATIO', value: '0.04s' },
      highlights: ['Rigorous touch padding targets accommodations', 'Optimized native layouts reducing battery draw', 'Real-time WebSocket data stream listeners']
    },
    {
      id: 'axiom-branding',
      title: 'Axiom core brand design guidelines',
      category: 'custom-web',
      tag: 'BRAND COHESION',
      description: 'Defining uniform company standards, font configurations, matching vector models, and theme parameters.',
      image: 'from-pink-500 via-purple-600 to-indigo-500',
      stats: { label: 'BRAND ASSETS EXPORTED', value: '254 Vectors' },
      highlights: ['Tailwind custom variables mapping setups', 'Complete scalable SVG web emblem catalogs', 'High-end slide presentation vectors']
    },
    {
      id: 'atlas-admin',
      title: 'Atlas Analytics: Server Orchestrator panel',
      category: 'saas',
      tag: 'ADMIN CONTROL',
      description: 'Robust server metric aggregator containing real-time memory allocations, security flags, and logs.',
      image: 'from-gray-950 via-slate-800 to-zinc-900',
      stats: { label: 'LIVE LOGS INGESTION', value: '25K/sec' },
      highlights: ['Optimized streaming terminal cell components', 'Authorized multi-tenant access blocks', 'Configurable metric chart dashboards']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white/40 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="portfolio-header">
          <div className="max-w-xl text-left" id="portfolio-text-header">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-[10.5px] font-mono font-bold text-brand-purple uppercase tracking-widest mb-4">
              <Layers size={11} className="text-brand-purple" />
              <span>CRAFTED AGENCY SHOWROOM</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
              Our Curated Project <span className="text-gradient">Masterpieces</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Click any project tile to load exact architectural parameters, metrics audits, and client handshakes.
            </p>
          </div>

          {/* Filtering selectors */}
          <div className="flex flex-wrap gap-2.5 bg-gray-100/85 p-1 rounded-2xl border border-gray-200/50 self-start md:self-end" id="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${filter === cat.id ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                id={`btn-filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 flex flex-col justify-between cursor-pointer text-left h-[380px]"
                id={`project-tile-${project.id}`}
              >
                {/* Visual mock cover overlay gradient canvas block */}
                <div className={`relative h-44 w-full bg-gradient-to-tr ${project.image} flex items-center justify-center p-6 overflow-hidden`}>
                  
                  {/* Decorative glass dots resembling visual mock grids */}
                  <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />
                  <div className="absolute inset-0 dot-pattern opacity-10" />

                  {/* Simulated interactive live graph component inside card */}
                  <div className="relative z-10 w-full h-16 rounded-xl glass-panel border border-white/20 p-3 shadow-md flex items-center justify-between text-white/90">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <div className="text-left leading-none">
                        <span className="block text-[8px] uppercase tracking-wider font-mono opacity-60">AGGREGATE EFFICIENCY</span>
                        <span className="text-xs font-bold font-mono text-white">{project.stats.value}</span>
                      </div>
                    </div>
                    {/* Tiny visual wave bar line */}
                    <div className="h-6 flex items-end gap-1 select-none">
                      {[0.4, 0.7, 0.5, 0.9, 0.3, 0.6].map((h, i) => (
                        <div key={i} className="w-1 bg-white/60 rounded" style={{ height: `${h * 100}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Highlight arrow that slides up on hover */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Footer text panel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9.5px] font-mono tracking-widest font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded uppercase">
                        {project.tag}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 font-bold">0{index + 1} / SITE SPEC</span>
                    </div>

                    <h3 className="font-display font-bold text-gray-950 text-base group-hover:text-brand-purple transition-all leading-snug mt-1.5">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 text-xs font-sans mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover indicator link */}
                  <div className="text-gray-400 font-mono font-bold text-[10px] uppercase flex items-center gap-1 group-hover:text-brand-purple transition-colors mt-4 self-start">
                    <span>Inspect System Code</span>
                    <ChevronRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full-width Modal details drawer on select */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/40 backdrop-blur-md" id="portfolio-modal-overlay">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative"
                id="portfolio-drawer"
              >
                {/* Visual Cover header */}
                <div className={`p-8 bg-gradient-to-tr ${selectedProject.image} text-white text-left relative overflow-hidden`} id="drawer-cover">
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <div className="absolute inset-0 dot-pattern opacity-10" />

                  {/* Close floating button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
                    aria-label="Close details"
                    id="btn-close-drawer"
                  >
                    <X size={15} />
                  </button>

                  <div className="relative z-10 max-w-md mt-6">
                    <span className="text-[9.5px] font-mono tracking-wider font-extrabold bg-white/20 px-2 py-0.5 rounded-full uppercase">
                      {selectedProject.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mt-3 mb-1.5">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/80 text-xs font-sans">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>

                {/* Body Details block lists */}
                <div className="p-8 text-left bg-white" id="drawer-body">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
                    {/* Performance specifications */}
                    <div className="flex flex-col p-4 bg-gray-50 border border-gray-100 rounded-2xl">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#059669] uppercase mb-1">
                        MEASURED KPI BENCHMARK
                      </span>
                      <div className="text-xl font-mono font-bold text-gray-950">
                        {selectedProject.stats.value}
                      </div>
                      <span className="text-[10px] font-sans text-gray-400 mt-0.5 uppercase tracking-wider">
                        {selectedProject.stats.label}
                      </span>
                    </div>

                    <div className="flex flex-col p-4 bg-gray-50 border border-gray-100 rounded-2xl justify-center font-mono text-[10.5px]">
                      <div className="text-gray-400">TECHNOLOGIES EMBEDDED:</div>
                      <div className="font-bold text-gray-900 mt-1">Vite 6, TypeScript ESM, Tailwind v4</div>
                    </div>
                  </div>

                  {/* Bulleted checklist items */}
                  <div className="space-y-4">
                    <span className="text-[10.5px] font-mono tracking-widest font-extrabold text-gray-400 uppercase block">
                      CORE SYSTEM DELIVERABLES AUDIT:
                    </span>

                    <div className="space-y-3">
                      {selectedProject.highlights.map((feat, index) => (
                        <div key={index} className="flex items-start gap-2.5 text-xs text-gray-700 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 flex-shrink-0" />
                          <span className="font-sans font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-[1px] bg-gray-100 my-8" />

                  {/* Actions in drawer */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-sans">Project isolated and hosted on active GCP.</span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-full bg-gray-950 hover:bg-brand-purple text-white font-semibold text-xs transition-colors"
                      id="btn-return-drawer"
                    >
                      Return to Showcase
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
