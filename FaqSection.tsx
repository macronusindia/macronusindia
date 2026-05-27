/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, MessageCircle, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What frameworks or technical stacks does Macronus prefer?',
      answer: 'We operate primarily with React and modern compilation systems (such as Vite and esbuild) combined with TypeScript for robust, type-safe environments. We also construct microservices using low-latency Go or Python endpoints tailored for GCP and AWS cloud clusters.'
    },
    {
      question: 'Do you design custom Figma files or work with existing ones?',
      answer: "We support both. We can design complete pixel-perfect atomic design libraries from scratch following 8px layout coordinates, or we can audit your current Figma design handoffs to clean margins and ready variables for immediate engineering."
    },
    {
      question: 'Is multi-tenancy and database security isolation handled by default?',
      answer: 'Yes. Every SaaS setup we design is engineered from the ground up to support strict database isolation boundaries, secure client authentication scopes, JWT token validators, and automated webhook tracking.'
    },
    {
      question: 'Will my website receive high Core Web Vitals audit scores?',
      answer: 'Absolutely. We compile our static websites inside robust Vite bundles, enforce asset compression, route traffic over rapid CDN edge servers, and audit performance under restricted bandwidths to secure steady 100% Core Passing logs on mobile and desktop.'
    },
    {
      question: 'What is the standard contract format and active delivery schedule?',
      answer: 'We structure projects under our rigorous 7-phase timeline, mapping out explicit milestones, measurable benchmarks, and design handshakes before proceeding. Typical delivery cycles range from 4 to 12 weeks based on design variables.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative gradient glow halos */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-indigo-50/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[8%] w-72 h-72 rounded-full bg-brand-pink/5 blur-[90px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col">
        
        {/* Header Block */}
        <div className="text-left mb-16" id="faq-text-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10.5px] font-mono font-bold text-indigo-600 uppercase tracking-widest mb-4">
            <MessageCircle size={11} className="text-indigo-500 animate-bounce" />
            <span>EXIGENT CUSTOMER ASSISTANCE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
            Frequently Queried <span className="text-gradient">Parameters</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-xl font-sans inline-block">
            Explore frequent queries regarding our contract milestones, technical stacks preferences, and performance audits guarantees.
          </p>
        </div>

        {/* Faq Accordion List */}
        <div className="flex flex-col gap-4 w-full" id="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border bg-white transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-purple shadow-premium-soft' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
                id={`faq-item-row-${idx}`}
              >
                {/* Header clickable question line */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-6 cursor-pointer"
                  id={`btn-faq-trigger-${idx}`}
                >
                  <h3 className={`font-display font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-brand-purple' : 'text-gray-900 group-hover:text-black'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Indicator icons */}
                  <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-black transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-purple/10 text-brand-purple' : ''}`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {/* Answer collapsing panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-50 pt-4 text-left">
                        <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                        
                        {/* Custom tag overlay marker */}
                        <div className="flex items-center gap-1.5 mt-4 text-[10px] font-mono text-brand-pink font-bold uppercase">
                          <Sparkles size={10} /> Verified Parameter
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
