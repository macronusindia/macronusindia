/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  BarChart, 
  TrendingUp, 
  Smile, 
  Activity, 
  LineChart 
} from 'lucide-react';

export default function InteractiveStats() {
  // Counters states
  const [satisfaction, setSatisfaction] = useState(80);
  const [reach, setReach] = useState(1);
  const [projectsCount, setProjectsCount] = useState(5);
  const [yearsCount, setYearsCount] = useState(1);

  // Trigger counters count-up simulation on lifecycle mount
  useEffect(() => {
    const endSatisfaction = 99;
    const endReach = 25; // 25K+
    const endProjects = 50; // 50+
    const endYears = 4;

    const rate = 35;
    const intervalS = setInterval(() => {
      setSatisfaction(prev => (prev < endSatisfaction ? prev + 1 : endSatisfaction));
    }, rate);

    const intervalR = setInterval(() => {
      setReach(prev => (prev < endReach ? prev + 1 : endReach));
    }, rate);

    const intervalP = setInterval(() => {
      setProjectsCount(prev => (prev < endProjects ? prev + 2 : endProjects));
    }, 45);

    const intervalY = setInterval(() => {
      setYearsCount(prev => (prev < endYears ? prev + 1 : endYears));
    }, 150);

    return () => {
      clearInterval(intervalS);
      clearInterval(intervalR);
      clearInterval(intervalP);
      clearInterval(intervalY);
    };
  }, []);

  return (
    <section id="stats" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-20 -z-0" />
      
      {/* Glow Backlights */}
      <div className="absolute top-[30%] left-[8%] w-80 h-80 rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16" id="stats-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10.5px] font-mono font-bold text-indigo-600 uppercase tracking-widest mb-4">
            <LineChart size={11} className="text-indigo-500" />
            <span>AGENCY OPERATING STATISTICS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
            Measured In Delivery <span className="text-gradient">Performance</span> Logs
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-sans">
            We hold ourselves to high engineering benchmarks. Analyze our running metrics and years of combined software operation delivery below.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="stats-cards-grid">
          
          {/* Tile 1: Projects Delivered */}
          <div className="bg-white rounded-[2px] p-6 border border-gray-100 hover:border-gray-200 shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 text-left flex flex-col justify-between min-h-[220px]" id="stat-card-projects">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">PROJECTS COMPLETED</span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-gray-950 mt-1.5 font-mono">
                {projectsCount}+
              </div>
            </div>
            
            {/* Embedded Mini Dot Density visual mapping */}
            <div className="my-4 h-11 flex-1 flex flex-wrap gap-1.5 items-center bg-gray-50/50 p-2.5 rounded-[2px] border border-gray-100">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span 
                   key={idx} 
                   className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx < projectsCount / 2 ? 'bg-brand-purple' : 'bg-gray-200'}`} 
                />
              ))}
            </div>

            <p className="text-gray-500 text-[11px] leading-snug font-sans">
              High-performance web applications, portals, and responsive SaaS interfaces.
            </p>
          </div>

          {/* Tile 2: Client Satisfaction */}
          <div className="bg-white rounded-[2px] p-6 border border-gray-100 hover:border-gray-200 shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 text-left flex flex-col justify-between min-h-[220px]" id="stat-card-satisfaction">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">CLIENT SATISFACTION</span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-[#059669] mt-1.5 font-mono">
                {satisfaction}%
              </div>
            </div>

            {/* Circular Progress speedometer graphic */}
            <div className="my-4 h-12 flex items-center gap-3 bg-gray-50/50 p-3 rounded-[2px] border border-gray-100">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="16" cy="16" r="13" stroke="#e5e7eb" strokeWidth="2.5" fill="none" />
                  <circle cx="16" cy="16" r="13" stroke="#10b981" strokeWidth="2.5" fill="none" strokeDasharray="81.6" strokeDashoffset={81.6 - (81.6 * satisfaction) / 100} />
                </svg>
                <span className="absolute text-[8px] font-bold font-mono text-gray-700">{satisfaction}</span>
              </div>
              <span className="text-[10px] font-mono font-semibold text-gray-500 uppercase tracking-wider leading-tight">
                Net Promoter Score: Perfect 9.8/10
              </span>
            </div>

            <p className="text-gray-500 text-[11px] leading-snug font-sans">
              Trusted by tech firms for continuous product iterations and feature rolls.
            </p>
          </div>

          {/* Tile 3: User Reach */}
          <div className="bg-white rounded-[2px] p-6 border border-gray-100 hover:border-gray-200 shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 text-left flex flex-col justify-between min-h-[220px]" id="stat-card-reach">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">AGGREGATE USER REACH</span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-blue-600 mt-1.5 font-mono">
                {reach}K+
              </div>
            </div>

            {/* Sparkline gradient slope visual */}
            <div className="my-4 h-12 flex items-end bg-gray-50/50 p-2.5 rounded-[2px] border border-gray-100 overflow-hidden">
              <svg className="w-full h-full" overflow="visible">
                <path 
                  d="M0 35 L12 30 L24 28 L36 20 L48 24 L60 12 L72 15 L84 4 Q 96 30, 200 12" 
                  fill="none" 
                  stroke="url(#spark-grad)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
                <linearGradient id="spark-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </svg>
            </div>

            <p className="text-gray-500 text-[11px] leading-snug font-sans">
              Dynamic payloads routed worldwide via caching edge CDN centers.
            </p>
          </div>

          {/* Tile 4: Years Experience */}
          <div className="bg-white rounded-[2px] p-6 border border-gray-100 hover:border-gray-200 shadow-premium-soft hover:shadow-premium-hard transition-all duration-300 text-left flex flex-col justify-between min-h-[220px]" id="stat-card-years">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-gray-400 tracking-wider">YEARS EXPERIENCE ENGINE</span>
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-pink mt-1.5 font-mono">
                {yearsCount}+ Years
              </div>
            </div>

            {/* Speed optimization visual */}
            <div className="my-4 h-12 flex items-center justify-between bg-gray-50/50 p-3 rounded-[2px] border border-gray-100">
              <div className="flex flex-col text-left text-[9.5px] font-mono leading-tight">
                <span className="font-bold text-gray-800">FOUNDED: 2022</span>
                <span className="text-gray-400">EXPANSIONS IN 4 REGIONS</span>
              </div>
              <span className="text-[9px] bg-brand-pink/10 text-brand-pink border border-brand-pink/20 px-1.5 py-0.5 rounded-[2px] font-bold uppercase font-mono">
                Mature Code
              </span>
            </div>

            <p className="text-gray-500 text-[11px] leading-snug font-sans font-normal">
              Continuously integrating modern features like vector DBs and AI routers.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
