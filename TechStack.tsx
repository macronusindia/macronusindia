/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Atom, 
  Terminal, 
  Activity, 
  Code, 
  Cpu, 
  Workflow, 
  CloudLightning, 
  Smartphone, 
  GitBranch, 
  Database,
  Sparkles
} from 'lucide-react';
import { TechCard } from '../types';

export default function TechStack() {
  const cards: TechCard[] = [
    {
      name: 'React Development',
      category: 'Frontend Core',
      description: 'Building custom state-driven user interfaces using modern concurrent rendering React systems.',
      icon: 'react',
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20'
    },
    {
      name: 'Next.js Systems',
      category: 'Static & Server Architecture',
      description: 'Production-ready frameworks with edge-rendering caching, optimizing loading metrics down to milliseconds.',
      icon: 'nextjs',
      color: 'from-gray-500/10 to-neutral-800/10 border-neutral-700/20'
    },
    {
      name: 'Full Stack Engines',
      category: 'Monolithic & Decoupled',
      description: 'Unifying high-availability Node.js, Python, or Go microservices with robust database transaction logs.',
      icon: 'fullstack',
      color: 'from-purple-500/10 to-brand-pink/10 border-purple-500/20'
    },
    {
      name: 'UI/UX Design Systems',
      category: 'Figma & Engineering Handshake',
      description: 'High-end interface design crafted down to 4px spacing grids, typography grids, and microscale specs.',
      icon: 'uiux',
      color: 'from-pink-500/10 to-rose-500/10 border-pink-500/20'
    },
    {
      name: 'SaaS Architecture',
      category: 'Multi-Tenant Databases',
      description: 'Multi-tenancy isolation systems, Stripe integrations, real-time metrics tracking, and admin controls.',
      icon: 'saas',
      color: 'from-orange-500/10 to-amber-500/10 border-orange-500/20'
    },
    {
      name: 'AI Agent Integrations',
      category: 'Gemini & Vector DBs',
      description: 'Retrieval Augmented Generation pipelines, embeddings indexing, semantic search, and self-improving agents.',
      icon: 'ai',
      color: 'from-violet-600/10 to-indigo-600/10 border-violet-600/20'
    },
    {
      name: 'API Development & Dev',
      category: 'Low-Latency Gateways',
      description: 'Highly self-documenting REST & GraphQL endpoints constructed with strict schemas and JWT token logs.',
      icon: 'api',
      color: 'from-amber-500/10 to-yellow-500/10 border-amber-500/20'
    },
    {
      name: 'Cloud Services & CDN',
      category: 'High-Availability Hosting',
      description: 'Deploying robust container solutions on GCP and AWS, backed by high-velocity Cloudflare cache networks.',
      icon: 'cloud',
      color: 'from-cyan-500/10 to-sky-500/10 border-cyan-500/20'
    },
    {
      name: 'Mobile App Engines',
      category: 'iOS & Android Sync',
      description: 'Native layout rendering utilizing reactive native libraries that achieve steady 60FPS fluid refresh speeds.',
      icon: 'mobile',
      color: 'from-indigo-500/10 to-teal-500/10 border-indigo-500/20'
    },
    {
      name: 'DevOps & Git Pipings',
      category: 'Continual Deployments',
      description: 'Supercharging commits with automated GitHub Actions testing and single-command rollback triggers.',
      icon: 'devops',
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20'
    }
  ];

  // Helper mapping string icon keys to Lucide SVG nodes
  const renderIcon = (key: string) => {
    switch (key) {
      case 'react': return <Atom className="text-blue-500" size={24} />;
      case 'nextjs': return <Code className="text-gray-900" size={24} />;
      case 'fullstack': return <Database className="text-purple-600" size={24} />;
      case 'uiux': return <Workflow className="text-pink-500" size={24} />;
      case 'saas': return <Terminal className="text-orange-500" size={24} />;
      case 'ai': return <Cpu className="text-violet-600" size={24} />;
      case 'api': return <Activity className="text-amber-500" size={24} />;
      case 'cloud': return <CloudLightning className="text-cyan-500" size={24} />;
      case 'mobile': return <Smartphone className="text-indigo-500" size={24} />;
      case 'devops': return <GitBranch className="text-emerald-500" size={24} />;
      default: return <Atom className="text-blue-500" size={24} />;
    }
  };

  // State to track localized hover coordinates for EACH card individually
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent, index: number, el: HTMLDivElement | null) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-white/30">
      {/* Background Decorative Mesh Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-pink/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        {/* Header content section */}
        <div className="max-w-3xl text-left mb-16" id="tech-stack-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 text-[10.5px] font-mono font-bold text-brand-purple uppercase tracking-widest mb-4">
            <Sparkles size={11} className="animate-spin duration-700" />
            <span>CORE SYSTEMS CAPABILITIES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
            Our Multi-Disciplinary <span className="text-gradient">Tech Stack</span> Ecosystem
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-sans">
            We operate at the forefront of engineering, utilizing battle-tested frameworks and high-performance developer setups to generate fluid web applications that outperform competitors.
          </p>
        </div>

        {/* Dynamic Glowing Border Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" id="tech-cards-grid">
          {cards.map((card, idx) => {
            const cardElRef = useRef<HTMLDivElement>(null);
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={card.name}
                ref={cardElRef}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={(e) => handleMouseMove(e, idx, cardElRef.current)}
                className={`relative rounded-3xl p-6 bg-white border border-gray-100 hover:border-transparent cursor-pointer shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 flex flex-col justify-between group min-h-[200px] overflow-hidden`}
                id={`tech-card-cell-${idx}`}
              >
                {/* Embedded spotlight backlight glow follower */}
                {isHovered && (
                  <div
                    className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-brand-purple/15 to-brand-blue/15 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-[40px] transition-all"
                    style={{ left: coords.x, top: coords.y }}
                  />
                )}

                {/* Top content wrapper */}
                <div className="relative z-10 flex flex-col align-start text-left">
                  {/* Category Pill Tag */}
                  <span className="text-[9.5px] tracking-wider uppercase font-mono font-bold text-gray-400 group-hover:text-brand-purple transition-colors mb-4 block">
                    {card.category}
                  </span>

                  {/* Icon Emblem Halo */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center border mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    {renderIcon(card.icon)}
                  </div>
                </div>

                {/* Bottom details description */}
                <div className="relative z-10 text-left mt-3">
                  <h3 className="font-display font-bold text-sm text-gray-900 group-hover:text-brand-purple transition-colors mb-1">
                    {card.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans font-normal opacity-90">
                    {card.description}
                  </p>
                </div>

                {/* Subtle visual gradient border track on hover */}
                {isHovered && (
                  <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-sky-400/20 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
