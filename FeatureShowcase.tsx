/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Terminal, 
  Zap, 
  Layers, 
  Cpu, 
  Sliders, 
  Sparkles, 
  Radio, 
  Send, 
  Check, 
  ArrowRight,
  Database,
  RefreshCw
} from 'lucide-react';

export default function FeatureShowcase() {
  const [protocol, setProtocol] = useState<'graphql' | 'rest' | 'grpc'>('graphql');
  const [logs, setLogs] = useState<string[]>(['[system] socket initialized', '[worker] listening on port 3000']);
  const [aiTone, setAiTone] = useState<'creative' | 'stringent' | 'performant'>('performant');
  const [boardStep, setBoardStep] = useState<number>(0);
  const [packetProgress, setPacketProgress] = useState(0);

  // Trigger packet simulation for code editor
  useEffect(() => {
    setPacketProgress(0);
    const interval = setInterval(() => {
      setPacketProgress(prev => {
        if (prev >= 100) {
          setLogs(l => [...l.slice(-4), `[packet] synced ${protocol.toUpperCase()} payload successfully`]);
          return 0; // reset
        }
        return prev + 10;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [protocol]);

  // Log updater simulation in background
  useEffect(() => {
    const interval = setInterval(() => {
      const msgs = [
        `[performance] speedIndex normalized at 0.12ms`,
        `[cdn] routed successfully through cloudflare worker node`,
        `[security] JWT authentication signature verifiably passed`,
        `[memory] allocation steady at 12MB / 128MB max`
      ];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      setLogs(l => [...l.slice(-3), randomMsg]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const aiPrompts = {
    creative: {
      input: 'Optimize this layout for custom user avatars and animated comments lists.',
      output: 'Injecting customized flex-grids with relative spring animations, layout transitions, and GPU-cached overlays.',
      speed: '92ms'
    },
    stringent: {
      input: 'Audit this route for security, memory leaks, and core web vitals speed constraints.',
      output: 'Memory allocation limits checked. Implemented route level boundaries and static rendering targets.',
      speed: '110ms'
    },
    performant: {
      input: 'Deliver maximum frames and reduce hydration cost with zero client js.',
      output: 'Transfusing codebase to static HTML layouts and pre-rendered inline CSS variables.',
      speed: '43ms'
    }
  };

  return (
    <section id="showcase" className="py-24 space-y-32 bg-white/50 relative overflow-hidden">
      
      {/* Decorative floating grids */}
      <div className="absolute top-1/6 left-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-50/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/6 right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-pink/5 to-transparent blur-[120px] pointer-events-none" />

      {/* BLOCK 1: Alternating Left-Right Block (API and sandbox) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="showcase-block-1">
        
        {/* Left: Text parameters */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 text-left"
          id="showcase-content-1"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-4">
            <Radio size={11} className="text-blue-500 animate-pulse" />
            <span>INTERACTIVE TESTING CONSOLE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-950 mb-5 leading-tight tracking-tight">
            Sandbox Coding & Seamless API Integration
          </h3>
          <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
            Test routing and edge deliveries live. Our cloud pipeline connects you directly into virtualized worker servers running in CJS bundles. Select your communication framework protocol to trigger packet transfers across the live mesh maps.
          </p>

          {/* Interactive Protocol Selectors */}
          <div className="flex gap-2.5 p-1 bg-gray-100/80 rounded-2xl border border-gray-200/50 max-w-sm mb-6" id="protocol-trigger-bar">
            {['graphql', 'rest', 'grpc'].map((type) => (
              <button
                key={type}
                onClick={() => setProtocol(type as any)}
                className={`flex-1 py-2 text-xs font-semibold rounded-xl uppercase transition-all ${protocol === type ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                id={`btn-protocol-${type}`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Core specifications highlights */}
          <div className="space-y-3 font-sans text-xs text-gray-600" id="showcase-specs-list-1">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-[10px] font-bold font-mono">01</span>
              <span>Endpoint fully compliant with GraphQL and modular GraphQL modules.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-[10px] font-bold font-mono">02</span>
              <span>Ultra-fast payload delivery logs using local caching strategies.</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Immersive Interactive Sandbox Panel */}
        <div className="lg:col-span-7 flex justify-center" id="showcase-visual-1">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[500px] glass-panel rounded-3xl p-6 shadow-xl border border-white flex flex-col gap-6"
            id="sandbox-mockup"
          >
            {/* Visual network nodes layout */}
            <div className="bg-white/95 rounded-2xl p-4 border border-gray-100/80 flex items-center justify-between" id="network-flow-nodes">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gray-950 flex items-center justify-center text-white font-mono text-xs shadow-md">
                  <Database size={14} className="text-brand-purple" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-bold uppercase font-mono tracking-wider">Source Origin</div>
                  <div className="text-xs font-bold text-gray-800">CJS Server Module</div>
                </div>
              </div>

              {/* Live moving packet path line */}
              <div className="flex-1 px-4 relative flex items-center">
                <div className="w-full h-1 bg-gray-100 rounded relative overflow-hidden">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-brand-purple to-brand-blue rounded transition-all duration-150"
                    style={{ width: `${packetProgress}%` }}
                  />
                </div>
                {/* Floating flying packet dot */}
                <div 
                  className="absolute w-2.5 h-2.5 rounded-full bg-brand-purple border border-white shadow-md -translate-y-1/2 top-1/2 z-10 transition-all duration-150"
                  style={{ left: `${packetProgress}%` }}
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-[10px] text-gray-400 font-bold uppercase font-mono tracking-wider">Edge Gateway</div>
                  <div className="text-xs font-bold text-gray-800">Cloud CDN</div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-mono text-xs shadow-md">
                  <Zap size={14} className="animate-pulse" />
                </div>
              </div>
            </div>

            {/* Terminal Live logs */}
            <div className="bg-gray-950 text-[#10B981] rounded-2xl p-4 font-mono text-[10px] h-[120px] overflow-hidden text-left border border-gray-850 shadow-inner flex flex-col justify-between" id="terminal-pane">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-2 text-[8px] text-gray-500 font-bold tracking-wider uppercase">
                <span>CONNEC. LOGS — {protocol.toUpperCase()} FLOWS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="flex-1 flex flex-col gap-1 overflow-auto">
                {logs.map((log, i) => (
                  <div key={i} className="leading-tight select-none opacity-90">{log}</div>
                ))}
              </div>
            </div>

            {/* Micro details row */}
            <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 bg-gray-50 p-3 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-1">
                <Zap size={12} className="text-brand-pink" />
                <span>ACTIVE HOPS: </span>
                <span className="font-semibold text-gray-900 bg-white px-1 py-0.5 rounded border">12 POPS</span>
              </div>
              <div className="flex items-center gap-1">
                <RefreshCw size={11} className="animate-spin text-brand-purple" />
                <span>UPTIME: </span>
                <span className="font-semibold text-gray-900 bg-white px-1 py-0.5 rounded border">99.998%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BLOCK 2: Alternating Left-Right Block (AI automation and metadata) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="showcase-block-2">
        
        {/* Left: Immersive Visuals */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center" id="showcase-visual-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[500px] glass-panel rounded-3xl p-6 shadow-xl border border-white flex flex-col gap-5 text-left"
            id="ai-insight-panel"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-100 flex items-center justify-center text-fuchsia-600">
                  <Cpu size={15} className="animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Generative Brain Node</h4>
                  <span className="text-[8px] font-mono text-gray-400">GEMINI HYDRATION ROUTER</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[9px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-bold font-mono">
                  <Sparkles size={10} /> LATENCY: {aiPrompts[aiTone].speed}
                </span>
              </div>
            </div>

            {/* Prompt input bubble */}
            <div className="bg-slate-50 border border-slate-100/80 p-3 rounded-2xl flex flex-col gap-1.5 shadow-sm">
              <span className="text-[8px] font-mono font-bold tracking-widest text-[#B45309] uppercase block">AI Optimization Prompt Context</span>
              <p className="text-slate-800 text-xs font-medium leading-relaxed font-sans select-all">
                "{aiPrompts[aiTone].input}"
              </p>
            </div>

            {/* AI Reasoning compilation */}
            <div className="bg-indigo-950 text-indigo-200 border border-indigo-900/50 p-4 rounded-2xl shadow-md min-h-[90px] flex flex-col justify-between">
              <div className="text-[8.5px] font-mono tracking-widest text-brand-pink font-bold uppercase mb-2">
                REASONING PIPELINE OUTPUT
              </div>
              <p className="text-xs text-white leading-relaxed font-mono flex-grow">
                {aiPrompts[aiTone].output}
              </p>
            </div>

            {/* Dynamic visual parameters selectors */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="text-[10px] text-gray-400 font-mono">Select tuning model:</span>
              <div className="flex gap-1.5 bg-gray-100 p-1 rounded-xl">
                {['creative', 'stringent', 'performant'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setAiTone(tone as any)}
                    className={`px-2.5 py-1 text-[9.5px] rounded-lg tracking-tight font-bold capitalize transition-all ${aiTone === tone ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-400 hover:text-gray-900'}`}
                    id={`btn-toggle-tone-${tone}`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 order-1 lg:order-2 text-left"
          id="showcase-content-2"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-50 border border-fuchsia-100 text-[10px] font-mono font-bold text-fuchsia-600 uppercase tracking-widest mb-4">
            <Sparkles size={11} className="text-fuchsia-500" />
            <span>AI ENGINE AUTOMATION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-950 mb-5 leading-tight tracking-tight">
            Intelligent AI Agent Code Reducers
          </h3>
          <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
            Bypass redundant development setup stages. Our integrated AI agents hydrate layouts back into standard static vectors, saving up to 60 hours in manual design refactoring cycles with pure pixel fidelity.
          </p>

          <div className="space-y-3 font-sans text-xs text-gray-600" id="showcase-specs-list-2">
            <div className="flex items-start gap-2.5">
              <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={14} />
              <span>Hydrates client templates with clean Tailwind CSS variables dynamically.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={14} />
              <span>Reduces manual viewport and grid adjustment layouts.</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* BLOCK 3: Alternating Left-Right Block (Collaboration Task Board) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="showcase-block-3">
        
        {/* Left: Text parameters */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 text-left"
          id="showcase-content-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-4">
            <Sliders size={11} className="text-emerald-500 animate-spin" />
            <span>SPRINT COLLABORATIVE BOARD</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-950 mb-5 leading-tight tracking-tight">
            Design Collaboration & Agile Workflows
          </h3>
          <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
            Coordinate mockups directly with developers under unified interfaces. Track sprint boards, deploy pipelines, and review client comments in single dashboards. Toggle the task cards below to advance task states.
          </p>

          {/* Interactive Toggle Trigger list */}
          <div className="flex flex-col gap-2.5" id="sprint-steps-trigger">
            {[
              { idx: 0, title: 'Concept Blueprint Mapping', state: 'Staging Backlog' },
              { idx: 1, title: 'Interactive Handshake Handover', state: 'Active Staging' },
              { idx: 2, title: 'Edge Worker Deployment', state: 'Production Live' }
            ].map((step) => (
              <div
                key={step.idx}
                onClick={() => setBoardStep(step.idx)}
                className={`p-3 rounded-2xl flex items-center justify-between cursor-pointer border transition-all ${boardStep === step.idx ? 'bg-white border-brand-purple shadow-sm text-brand-purple' : 'bg-transparent border-gray-100 text-gray-600 hover:bg-white/40'}`}
                id={`btn-board-step-${step.idx}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-6 h-6 rounded-lg text-[10.5px] font-bold font-mono border flex items-center justify-center ${boardStep === step.idx ? 'bg-brand-purple text-white border-transparent' : 'bg-white text-gray-400'}`}>
                    0{step.idx + 1}
                  </div>
                  <span className="text-xs font-bold font-sans">{step.title}</span>
                </div>
                <span className="text-[9px] font-mono font-bold uppercase bg-gray-50 px-1.5 py-0.5 rounded border">
                  {step.state}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Immersive Interactive Collaboration Panels */}
        <div className="lg:col-span-7 flex justify-center" id="showcase-visual-3">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[500px] glass-panel rounded-3xl p-6 shadow-xl border border-white flex flex-col gap-6"
            id="sprintboard-mockup"
          >
            {/* Visual Task Grid Mockup */}
            <div className="flex justify-between items-center text-xs font-bold text-gray-500 font-mono tracking-wider border-b border-gray-100 pb-3">
              <span>WORKFLOW SPRINT #24</span>
              <span className="text-[10px] text-emerald-500 uppercase flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> IN SYNC
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3" id="sprint-board-cols">
              {/* Backlog Column */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase font-mono tracking-widest text-left block">
                  Backlog (3)
                </span>
                <div className="h-[140px] bg-slate-50/50 rounded-2xl border border-dashed border-gray-200 p-2.5 flex flex-col gap-2 relative">
                  {boardStep === 0 && (
                    <motion.div
                      layoutId="task-blueprint-card"
                      className="bg-white p-2.5 rounded-xl border border-brand-purple shadow-sm flex flex-col gap-1.5 text-left cursor-move"
                    >
                      <span className="text-[8px] bg-brand-purple/10 text-brand-purple px-1 rounded font-bold uppercase tracking-wider self-start">FEATURE</span>
                      <span className="text-[11px] font-bold text-gray-800 leading-tight">Configuring multi-layer graphics</span>
                      <div className="h-1 w-2/3 bg-brand-purple rounded mt-1.5" />
                    </motion.div>
                  )}
                  <div className="bg-white/80 p-2 rounded-xl border border-gray-100 text-left">
                    <span className="text-[10px] font-bold text-gray-700 leading-none">Standard SSL settings</span>
                  </div>
                </div>
              </div>

              {/* In Progress Column */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase font-mono tracking-widest text-left block">
                  Staging (2)
                </span>
                <div className="h-[140px] bg-slate-50/50 rounded-2xl border border-dashed border-gray-200 p-2.5 flex flex-col gap-2 relative">
                  {boardStep === 1 && (
                    <motion.div
                      layoutId="task-blueprint-card"
                      className="bg-white p-2.5 rounded-xl border border-brand-pink shadow-sm flex flex-col gap-1.5 text-left cursor-move"
                    >
                      <span className="text-[8px] bg-brand-pink/10 text-brand-pink px-1 rounded font-bold uppercase tracking-wider self-start">INTERACTIVE</span>
                      <span className="text-[11px] font-bold text-gray-800 leading-tight">Configuring multi-layer graphics</span>
                      <div className="h-1 w-full bg-brand-pink rounded mt-1.5" />
                    </motion.div>
                  )}
                  <div className="bg-white/80 p-2 rounded-xl border border-gray-100 text-left">
                    <span className="text-[10px] font-bold text-gray-700 leading-none">Testing CDN caching</span>
                  </div>
                </div>
              </div>

              {/* Completed Column */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase font-mono tracking-widest text-left block">
                  Production (2)
                </span>
                <div className="h-[140px] bg-slate-50/50 rounded-2xl border border-dashed border-gray-200 p-2.5 flex flex-col gap-2 relative">
                  {boardStep === 2 && (
                    <motion.div
                      layoutId="task-blueprint-card"
                      className="bg-white p-2.5 rounded-xl border border-emerald-500 shadow-sm flex flex-col gap-1.5 text-left cursor-move"
                    >
                      <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-1 rounded font-bold uppercase tracking-wider self-start flex items-center gap-1">
                        <Check size={8} /> LIVE NOW
                      </span>
                      <span className="text-[11px] font-bold text-gray-800 leading-tight">Configuring multi-layer graphics</span>
                      <div className="h-1 w-full bg-emerald-500 rounded mt-1.5" />
                    </motion.div>
                  )}
                  <div className="bg-white/80 p-2 rounded-xl border border-gray-100 text-left">
                    <span className="text-[10px] font-bold text-gray-700 leading-none">API Payload verifiably live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive instructions block info */}
            <div className="bg-yellow-50/40 border border-amber-100 p-3 rounded-2xl text-left flex items-start gap-2 font-sans text-[11px] text-[#92400E]">
              <Sparkles size={13} className="text-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
              <span>Sprint components are fully integrated with localized triggers inside React 19 concurrent environments.</span>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
