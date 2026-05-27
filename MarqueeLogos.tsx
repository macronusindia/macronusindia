/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function MarqueeLogos() {
  // We'll design high-fidelity inline SVG logos representing famous SaaS brands
  const brands = [
    {
      name: 'Vercel',
      color: 'hover:text-black hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]',
      svg: (
        <svg className="w-6 h-6 mr-2" viewBox="0 0 76 65" fill="currentColor">
          <path d="M37.527 0L75.054 65H0L37.527 0Z" />
        </svg>
      )
    },
    {
      name: 'Stripe',
      color: 'hover:text-[#635BFF] hover:drop-shadow-[0_0_15px_rgba(99,91,255,0.1)]',
      svg: (
        <svg className="w-16 h-6 mr-1" viewBox="0 0 80 25" fill="currentColor">
          <path d="M12.9 8.2c0-1.8 1.1-2.6 3.1-2.6 1.4 0 2.8.2 4.1.7V.9C18.6.4 17.1.2 15.6.2c-5.8 0-9.1 2.9-9.1 7.8 0 8 11 6.7 11 10.3 0 2.1-1.4 2.8-3.6 2.8-1.5 0-3.3-.4-4.8-1V25c1.6.6 3.5.9 5.3.9 5.9 0 9.7-2.7 9.7-8 0-8.6-11.2-7.1-11.2-9.7zm18.3-6c-2 0-3.1 1-3.7 2.1l-.1-1.7h-5.9v22.2h6.5V11c0-2.4 1.5-4 4.1-4 .4 0 .9.1 1.2.2V1.5c-.7-.2-1.4-.3-2.1-.3zm15.1 4c0-1.1-.8-1.9-2-1.9s-2 .8-2 1.9.8 1.9 2 1.9 2-.8 2-1.9zm-5.1 4.5h6.5v14.1h-6.5zm19.6-.3c-1.9 0-3.1 1-3.7 2l-.1-1.7h-5.9v19.8c1.7.5 3.5.7 5.2.7 5.4 0 8.7-2.7 8.7-8v-6.9c0-3.6-2-5.9-4.2-5.9zm-1.8 11.2c0 2-1.1 2.9-2.9 2.9-.6 0-1.2-.1-1.7-.3v-7.1c.5-.2 1.1-.3 1.7-.3 1.8 0 2.9.9 2.9 4.8zm11.7.9c0-.4.1-.7.2-1 .4-1.9 2-3.1 4-3.1 3.2 0 4.1 2.4 4.1 5.3H70.7c2.5 0 3.7.8 3.7 2.2 0 1.2-.9 2-3 2-2.1 0-3.3-1-3.6-2.5h12.5c0-4.6-2-8.5-7.4-8.5-4.8 0-8.2 3.6-8.2 8.3 0 5 3.5 8.1 8.5 8.1 2.2 0 4.4-.5 6.2-1.4v-4.1c-1.5.8-3.1 1.2-4.9 1.2-3.4 0-4.3-2.1-4.3-4.1z" />
        </svg>
      )
    },
    {
      name: 'Google',
      color: 'hover:text-[#4285F4] hover:drop-shadow-[0_0_15px_rgba(66,133,244,0.1)]',
      svg: (
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.167-5.236 4.167A5.33 5.33 0 0 1 8.541 13.2a5.33 5.33 0 0 1 5.351-5.367c2.472 0 4.148 1.49 4.148 1.49l3.13-3.13s-2.855-3.04-7.278-3.04C7.751 2.153 2.155 7.751 2.155 13.2s5.596 11.047 11.72 11.047c7.18 0 10.133-5.26 9.873-11.047H12.24Z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      color: 'hover:text-[#24292F] hover:drop-shadow-[0_0_15px_rgba(36,41,47,0.15)]',
      svg: (
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: 'AWS',
      color: 'hover:text-[#FF9900] hover:drop-shadow-[0_0_15px_rgba(255,153,0,0.12)]',
      svg: (
        <svg className="w-12 h-6 mr-1" viewBox="0 0 100 60" fill="currentColor">
          <path d="M12 36c-2.4 0-4-1.2-4-3 0-2.4 2-3.8 5.6-4.4 2.8-.5 5.6-1.1 8-.5v1.2c0 3.8-3.4 6.7-9.6 6.7zm2.4-15c-3.2 0-6.1.6-8.8 1.8l1.2 2.8c2.2-.9 4.5-1.3 6.8-1.3 2.5 0 3.8.9 3.8 2.5v.8c-2.5-.2-5.4-.3-8.2.1-4 .4-7.5 2.2-7.5 6.6 0 4.1 3 6.9 7.8 6.9 3.9 0 6.6-1.5 8-3.8h.1v3.2h6.2V27.4c0-5.4-3.4-6.4-8.3-6.4zm32.8-1.4h-6.2l-5.6 19.8-5.6-19.8h-6.4l-5.6 19.8L12.4 19.6H6l8.8 27.2h6.4l5.6-18.8 5.6 18.8H39l8.2-27.2zm14.1 21c-1.3.2-2.5.3-3.6.3-2.1 0-3.3-1.1-3.3-3.2v-7.8h6.8c1.2 0 1.9-.3 1.9-1.2s-.7-1.1-1.9-1.1h-6.8V23c0-1.8 1-2.6 2.8-2.6h3.4V19h-3.6c-4.9 0-7.8 2.2-7.8 7.3v13.8c0 4.2 2.4 6.6 6.8 6.6s4.8-.8 5.4-1.2v-4.5z" />
          <path d="M16 48c10 4 23 6 36 6s26-2 36-6M80 44c2 0 4 .5 4 1.5S80 47 74 47s-8-1-8-1.5S70 44 80 44z" />
        </svg>
      )
    },
    {
      name: 'Microsoft',
      color: 'hover:text-[#F25022] hover:drop-shadow-[0_0_15px_rgba(242,80,34,0.12)]',
      svg: (
        <svg className="w-5 h-5 mr-3" viewBox="0 0 23 23" fill="currentColor">
          <path fill="#F25022" d="M0 0h11v11H0z" />
          <path fill="#7FBA00" d="M12 0h11v11H12z" />
          <path fill="#01A6F0" d="M0 12h11v11H0z" />
          <path fill="#FFB900" d="M12 12h11v11H12z" />
        </svg>
      )
    },
    {
      name: 'Figma',
      color: 'hover:text-[#F24E1E] hover:drop-shadow-[0_0_15px_rgba(242,78,30,0.1)]',
      svg: (
        <svg className="w-5 h-6 mr-3" viewBox="0 0 38 57" fill="currentColor">
          <path d="M19 0a19 19 0 0 0-19 19 19 19 0 0 0 19 19 19 19 0 0 0 19-19A19 19 0 0 0 19 0Z" fill="#F24E1E" />
          <path d="M0 38a19 19 0 0 0 19 19 19 19 0 0 0 19-19V19H0v19Z" fill="#0ACF83" />
        </svg>
      )
    },
    {
      name: 'Adobe',
      color: 'hover:text-[#FF0000] hover:drop-shadow-[0_0_15px_rgba(255,0,0,0.12)]',
      svg: (
        <svg className="w-6 h-6 mr-2" viewBox="0 0 100 100" fill="currentColor">
          <path d="M60.6 15l24.4 57.5H72.4l-8.3-20.9H44.6L36.3 72.5H15L39.4 15h21.2zm-9.3 14.8L40.2 52.3h22.1L51.3 29.8z" />
        </svg>
      )
    }
  ];

  // Duplicate items twice to handle infinite looping and seamless wrapping transition
  const brandsTriple = [...brands, ...brands, ...brands];

  return (
    <section id="marquee-logos" className="py-14 bg-white/40 border-y border-gray-100 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
          <Sparkles size={11} className="text-brand-pink" />
          <span>GLOBAL REPUTATION</span>
        </div>
        <p className="text-xs text-slate-500 font-sans">
          Trusted by engineers at industry leaders to roll out scalable SaaS architectures.
        </p>
      </div>

      {/* Marquee Track Overflow */}
      <div className="relative w-full overflow-hidden gradient-mask-fade py-4" id="logo-slider-viewport">
        <div className="marquee-track flex gap-12 items-center" id="logo-slider-track">
          {brandsTriple.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className={`flex items-center gap-1.5 text-slate-400 cursor-pointer font-display font-semibold transition-all duration-300 transform hover:scale-105 select-none ${brand.color}`}
              id={`marquee-brand-${brand.name}-${i}`}
            >
              {brand.svg}
              <span className="text-sm font-bold tracking-tight">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
