/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  Layers, 
  LineChart, 
  Terminal, 
  Sparkles, 
  CheckCircle, 
  Flame, 
  Check, 
  MousePointer, 
  Code
} from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onContactClick, onNavigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'analytics' | 'editor' | 'blueprint'>('analytics');
  const [typedCode, setTypedCode] = useState('');
  const [deploying, setDeploying] = useState(false);
  const [deploySuccess, setDeploySuccess] = useState(false);
  const [revenue, setRevenue] = useState(142380);
  const [conversionRate, setConversionRate] = useState(3.42);
  const [activeUsers, setActiveUsers] = useState(128);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-increment live metrics to feel real-time and fluid
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 15) + 2);
      setActiveUsers(prev => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const next = prev + delta;
        return next > 80 && next < 180 ? next : prev;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Code editor simulated typing
  const codeSnippet = `{
  "projectName": "nexus-saas-platform",
  "engine": "React 19 + Vite 6",
  "styling": "TailwindCSS v4",
  "edgeOptimized": true,
  "dynamicRendering": "ISR / Server Components",
  "stateManagement": "React Context + Motion",
  "metrics": {
    "speedIndex": "0.19s",
    "coreVitals": "Pass (100/100)"
  }
}`;

  useEffect(() => {
    let index = 0;
    setTypedCode('');
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [activeTab]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const executeMockDeploy = () => {
    if (deploying) return;
    setDeploying(true);
    setDeploySuccess(false);
    setTimeout(() => {
      setDeploying(false);
      setDeploySuccess(true);
    }, 1800);
  };

  // Sparkly floating nodes data
  const particles = [
    { id: 1, top: '15%', left: '10%', size: 'w-3 h-3', color: 'bg-brand-purple/45', delay: 0 },
    { id: 2, top: '75%', left: '8%', size: 'w-4 h-4', color: 'bg-brand-pink/50', delay: 2 },
    { id: 3, top: '22%', left: '85%', size: 'w-3 h-3', color: 'bg-brand-blue/60', delay: 1 },
    { id: 4, top: '60%', left: '92%', size: 'w-5 h-5', color: 'bg-brand-purple/50', delay: 3.5 },
  ];

  return (
    <section 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden aurora-bg dot-pattern"
    >
      {/* Background Interactive Aura follow spotlight */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-brand-purple/10 to-brand-blue/10 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-[100px] transition-all duration-300 z-0"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Static abstract geometric gradients */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-indigo-200/20 blur-[120px] -z-10 animate-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/12 w-[350px] h-[350px] rounded-full bg-pink-100/30 blur-[130px] -z-10 animate-glow-2 pointer-events-none" />

      {/* Floating Sparkly Bits */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full pointer-events-none ${p.size} ${p.color}`}
          style={{ top: p.top, left: p.left }}
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left text column */}
        <div className="lg:col-span-6 flex flex-col text-left group" id="hero-left-content">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-gray-800 shadow-premium-soft mb-6 cursor-pointer hover:border-brand-purple/40 transition-colors"
            id="hero-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
            </span>
            <div className="flex items-center gap-1">
              <Sparkles size={12} className="text-brand-purple animate-pulse" />
              <span>Fintech Aesthetics & Ultra-Fast Code</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-gray-950 leading-[1.08] mb-6"
            id="hero-heading"
          >
            Elevating Your <span className="text-gradient">Digital Products</span> With Modern Web Development & UI/UX Design
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 font-sans font-normal leading-relaxed mb-8 max-w-xl"
            id="hero-description"
          >
            We create ultra-modern websites, SaaS products, web apps, mobile interfaces, and scalable software experiences with cutting-edge technology and world-class user experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            id="hero-ctas"
          >
            <button
              onClick={onContactClick}
              className="px-8 py-4 rounded-[2px] bg-gray-950 text-white font-semibold shadow-xl hover:shadow-brand-purple/20 transition-all duration-300 hover:bg-brand-purple flex items-center justify-center gap-2 group text-base cursor-pointer relative overflow-hidden"
              id="hero-cta-main"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Project Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </button>
            <button
              onClick={() => onNavigate('showcase')}
              className="px-7 py-4 rounded-[2px] glass-panel border border-gray-200/80 hover:border-gray-300 text-gray-800 font-semibold hover:bg-white/80 transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-sm group"
              id="hero-cta-secondary"
            >
              View Portfolio
              <div className="relative w-5 h-5 rounded-[2px] bg-gray-100 flex items-center justify-center text-gray-600 overflow-hidden group-hover:bg-gray-200 transition-colors">
                <Play size={10} className="ml-0.5" />
              </div>
            </button>
          </motion.div>

          {/* Core metrics mini widgets in sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6 text-gray-500 font-mono text-xs"
            id="hero-bulletpoints"
          >
            <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Full SVG Micro-Flows</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>100% Core Web Passing</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>GPU-Accelerated Transitions</span>
            </div>
          </motion.div>
        </div>

        {/* Right side interactive 3D style mockup dashboard */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[500px]" id="hero-right-container">
          
          {/* Floating glowing background decorative layers */}
          <div className="absolute top-10 right-4 w-72 h-72 rounded-full bg-brand-purple/10 blur-[80px] pointer-events-none -z-10 animate-float-medium" />
          <div className="absolute bottom-10 left-4 w-72 h-72 rounded-full bg-brand-pink/15 blur-[90px] pointer-events-none -z-10 animate-float-slow" />

          {/* Interactive Floating Indicator Tooltips */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-6 -left-4 z-20 px-3 py-1.5 rounded-2xl glass-panel text-xs text-slate-800 shadow-lg border border-white flex items-center gap-2"
            id="floating-indicator-perf"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex items-center justify-center animate-pulse">
              <div className="w-1 h-1 rounded-full bg-emerald-600" />
            </div>
            <span className="font-sans font-medium text-[11px]">System optimized</span>
            <span className="font-mono text-gray-500 font-semibold bg-gray-50 px-1 py-0.5 rounded">99.8ms</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            className="absolute -bottom-4 right-10 z-20 px-4 py-2.5 rounded-2xl bg-neutral-900 text-white shadow-xl flex items-center gap-3 border border-neutral-800"
            id="floating-indicator-stack"
          >
            <Terminal size={14} className="text-brand-purple animate-bounce" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-gray-400">DEPLOYMENT STATUS</div>
              <div className="text-[11px] text-emerald-400 font-bold">READY TO DEPLOY</div>
            </div>
          </motion.div>

          {/* Main Glass Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotateY: 3 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full relative glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/60 flex flex-col min-h-[420px] max-w-[540px] perspective-1000 transform group-hover:rotate-x-1 group-hover:rotate-y-1 transition-all duration-300"
            id="hero-mockup-browser"
          >
            {/* Browser Header Bar */}
            <div className="bg-white/70 border-b border-gray-100 px-5 py-3.5 flex items-center justify-between" id="mockup-browser-header">
              {/* Fake Chrome buttons */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
                <span className="w-3 h-3 rounded-full bg-green-400 block" />
              </div>
              
              {/* Tabs list inside mockup */}
              <div className="flex items-center gap-1 bg-gray-100/80 rounded-full p-1 border border-gray-200/50">
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${activeTab === 'analytics' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                  id="tab-analytics"
                >
                  <LineChart size={12} />
                  Analytics
                </button>
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${activeTab === 'editor' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                  id="tab-editor"
                >
                  <Code size={12} />
                  Syntax API
                </button>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all ${activeTab === 'blueprint' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                  id="tab-blueprint"
                >
                  <Layers size={12} />
                  Blueprint
                </button>
              </div>

              {/* Status link badge */}
              <div className="hidden sm:block font-mono text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">
                HTTPS/Secure
              </div>
            </div>

            {/* Dashboard Inner Container */}
            <div className="p-6 bg-white/45 flex-1 flex flex-col justify-between" id="mockup-browser-viewport">
              <AnimatePresence mode="wait">
                {activeTab === 'analytics' && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-5 flex-1"
                    id="viewport-analytics"
                  >
                    {/* Live Metric Cards Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/80 p-3 rounded-2xl border border-gray-200/50 flex flex-col hover:border-brand-purple/40 hover:-translate-y-0.5 transition-all">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">MRR Revenue</span>
                        <span className="text-sm font-semibold text-gray-950 font-mono mt-0.5">${revenue.toLocaleString()}</span>
                        <span className="text-[9px] text-emerald-500 font-medium flex items-center gap-0.5 mt-1">
                          Live Active
                        </span>
                      </div>
                      <div className="bg-white/80 p-3 rounded-2xl border border-gray-200/50 flex flex-col hover:border-brand-pink/40 hover:-translate-y-0.5 transition-all">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Conversion</span>
                        <span className="text-sm font-semibold text-gray-950 font-mono mt-0.5">{conversionRate}%</span>
                        <div className="flex items-center gap-1 mt-1">
                          <button 
                            onClick={() => setConversionRate(prev => Math.min(6, +(prev + 0.12).toFixed(2)))} 
                            className="text-[8px] bg-brand-pink/10 text-brand-pink px-1 rounded hover:bg-brand-pink/20 transition-transform"
                          >
                            Optimize
                          </button>
                        </div>
                      </div>
                      <div className="bg-white/80 p-3 rounded-2xl border border-gray-200/50 flex flex-col hover:border-brand-blue/40 hover:-translate-y-0.5 transition-all">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Real-Time Users</span>
                        <span className="text-sm font-semibold text-gray-900 font-mono mt-0.5">{activeUsers}</span>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[8px] text-gray-400 uppercase tracking-widest font-bold">Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Sparkline graph chart panel */}
                    <div className="bg-white/95 p-4 rounded-3xl border border-indigo-50/80 shadow-sm flex flex-col flex-grow min-h-[160px] justify-between relative overflow-hidden">
                      <div className="flex justify-between items-center z-10">
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Real-time throughput</span>
                          <span className="text-xs font-bold text-gray-800">Operational Efficiency</span>
                        </div>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-semibold">
                          <Flame size={10} className="animate-pulse" /> Over 100% Core Passing
                        </div>
                      </div>

                      {/* Smooth moving SVG waveform representing live graphs */}
                      <div className="relative h-24 w-full mt-4" id="mini-graph-canvas">
                        <svg className="absolute inset-0 w-full h-full" overflow="visible">
                          <defs>
                            <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Shimmer chart spline line */}
                          <motion.path
                            d="M 0 60 Q 40 10, 80 45 T 160 30 T 240 75 T 320 20 T 400 50 T 480 30 L 480 100 L 0 100 Z"
                            fill="url(#chart-grad)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                          />
                          <motion.path
                            d="M 0 60 Q 40 10, 80 45 T 160 30 T 240 75 T 320 20 T 400 50 T 480 30"
                            fill="none"
                            stroke="url(#line-grad)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                          />
                          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>

                          {/* Floating interactive hover plot point */}
                          <motion.circle
                            cx="320"
                            cy="20"
                            r="5"
                            fill="#8b5cf6"
                            stroke="#fff"
                            strokeWidth="2.5"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        </svg>

                        {/* Interactive Tooltip popup pointing to live dot */}
                        <div className="absolute top-[5px] left-[270px] bg-gray-950 text-white rounded-lg px-2 py-1 text-[9px] font-mono shadow-md flex flex-col z-20 border border-gray-800">
                          <span className="text-[7px] text-gray-400">USERS (MAX)</span>
                          <span className="font-bold">1,489 OPS</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'editor' && (
                  <motion.div
                    key="editor"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-4 flex-1 h-full justify-between"
                    id="viewport-editor"
                  >
                    <div className="bg-[#111827] text-gray-300 rounded-2xl p-4 font-mono text-[10.5px] leading-relaxed border border-gray-800 text-left overflow-auto max-h-[200px] shadow-inner relative">
                      <div className="absolute top-2 right-2 text-[8px] tracking-wider text-gray-500 bg-gray-900 border border-gray-800 px-1.5 py-0.5 rounded uppercase font-bold">
                        JSON Scheme
                      </div>
                      <pre className="text-indigo-400">{typedCode}</pre>
                    </div>

                    {/* Interactive compiler execution triggers */}
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-left">
                        <span className="block text-[8px] text-gray-400 uppercase font-mono tracking-widest leading-none">TARGET ENVIRONMENT</span>
                        <span className="text-[11px] font-semibold text-gray-800 font-mono">Edge Worker V6 Engine</span>
                      </div>
                      
                      <button
                        onClick={executeMockDeploy}
                        className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${deploySuccess ? 'bg-emerald-500 text-white' : deploying ? 'bg-indigo-300 text-white cursor-wait' : 'bg-gray-950 text-white hover:bg-brand-purple'}`}
                        id="btn-compiler-deploy"
                      >
                        {deploySuccess ? (
                          <>
                            <Check size={12} />
                            Deploy Complete (32ms)
                          </>
                        ) : deploying ? (
                          <>
                            <span className="w-2.5 h-2.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Compiling source...
                          </>
                        ) : (
                          <>
                            <Sparkles size={12} className="animate-spin" />
                            Run Project Build
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'blueprint' && (
                  <motion.div
                    key="blueprint"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex-1 flex flex-col justify-between"
                    id="viewport-blueprint"
                  >
                    {/* Layer selection mockup blueprint */}
                    <div className="flex flex-col gap-3 text-left">
                      <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">System Hierarchy Stack</span>
                      <h4 className="text-sm font-bold text-gray-800">Dynamic Multi-Layer Rendering Architecture</h4>
                    </div>

                    {/* 3D Stack visual illustration using CSS styling properties */}
                    <div className="relative py-4 flex flex-col items-center justify-center gap-2 group cursor-pointer" id="3d-blueprint-display">
                      
                      {/* Layer 3 - Brand Cloud Layer */}
                      <div className="w-56 h-10 rounded-xl bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 border border-brand-blue/40 shadow-sm flex items-center justify-between px-4 text-gray-800 hover:-translate-y-2 hover:scale-105 hover:bg-brand-blue/40 transition-all">
                        <span className="font-mono text-[9px] font-bold text-gray-600">LAYER 3: CDN edge Cache</span>
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      </div>

                      {/* Floating Link Connector */}
                      <div className="w-0.5 h-4 bg-dashed border-l border-gray-300" />

                      {/* Layer 2 - Layout State Component */}
                      <div className="w-64 h-11 rounded-xl bg-gradient-to-r from-brand-purple/30 to-brand-pink/30 border border-brand-purple/40 shadow-md flex items-center justify-between px-4 text-gray-800 hover:-translate-y-2 hover:scale-105 hover:bg-brand-purple/40 transition-all relative">
                        <div className="absolute -left-2 top-3 w-4 h-4 rounded-full bg-white border border-brand-purple flex items-center justify-center shadow">
                          <Check size={8} className="text-brand-purple" />
                        </div>
                        <span className="font-mono text-[9px] font-bold text-gray-600">LAYER 2: Framer View State</span>
                        <span className="text-[8px] bg-brand-purple/10 text-brand-purple px-1.5 py-0.5 rounded">GPU Direct</span>
                      </div>

                      {/* Floating Link Connector */}
                      <div className="w-0.5 h-4 bg-dashed border-l border-gray-300" />

                      {/* Layer 1 - DOM Core Base */}
                      <div className="w-72 h-12 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center justify-between px-4 text-gray-800 hover:-translate-y-2 hover:scale-105 transition-all">
                        <span className="font-mono text-[9px] font-bold text-gray-700">LAYER 1: Semantic React Virtual DOM</span>
                        <div className="font-mono text-[9px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">100 / 100 SEO</div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
