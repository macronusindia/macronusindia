/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star 
} from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 't-1',
      name: 'Priya Nair',
      role: 'Head of Engineering',
      company: 'Vecta Technologies',
      avatar: 'PN',
      quote: "The team at Nexus didn't just build code; they engineered an interactive masterpiece. Our page loading speeds were reduced by over 300% within days of launching the decoupled system. Absolutely stellar execution.",
      rating: 5
    },
    {
      id: 't-2',
      name: 'Aditya Vardhan',
      role: 'VP of Product',
      company: 'Aura Fintech',
      avatar: 'AV',
      quote: 'We were blown away by the atomic design system. The handoffs were perfectly smooth, and the multi-tenant secure dashboard has been active for over a year with zero database transaction latency loops.',
      rating: 5
    },
    {
      id: 't-3',
      name: 'Karan Malhotra',
      role: 'Marketing Lead',
      company: 'Apex Apparel Group',
      avatar: 'KM',
      quote: 'Nexus transformed our e-commerce store. They took custom vector layouts and shaped them into static React modules that yielded perfect scores on desktop audits. Uptime has remained at 100%.',
      rating: 5
    }
  ];

  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FCFAFD] border-t border-b border-gray-100 relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-[20%] right-[-50px] w-72 h-72 rounded-full bg-brand-purple/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-50px] w-72 h-72 rounded-full bg-brand-pink/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col items-center">
        
        {/* Header Block */}
        <div className="max-w-3xl text-center mb-16" id="testimonials-header">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pink/5 border border-brand-pink/10 text-[10.5px] font-mono font-bold text-brand-pink uppercase tracking-widest mb-4">
            <Quote size={11} className="text-brand-pink" />
            <span>HEARD ON THE WIRE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-gray-950 mb-4 leading-tight">
            Client Verification & <span className="text-gradient">Endorsements</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-sans inline-block">
            See feedback directly from CTOs, product managers, and engineering heads which verify our high velocities, pixel fidelity, and robust performance scales.
          </p>
        </div>

        {/* Carousel Showcase Item */}
        <div className="w-full max-w-3xl relative" id="test-slider-container">
          
          {/* Main comments glass card */}
          <div className="min-h-[280px]" id="test-slide-viewport">
            <AnimatePresence mode="wait">
              {testimonials.map((comment, idx) => {
                if (idx !== activeIndex) return null;

                return (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-[2px] p-8 sm:p-12 border border-gray-100 shadow-premium-hard relative overflow-hidden flex flex-col justify-between text-left"
                    id={`test-slide-block-${comment.id}`}
                  >
                    {/* Double quotation visual backdrop mark */}
                    <Quote className="absolute right-8 top-8 text-neutral-100 w-24 h-24 stroke-[1.5] -z-10 select-none pointer-events-none" />

                    {/* Star ratings */}
                    <div className="flex gap-1.5 mb-6" id="test-stars">
                      {Array.from({ length: comment.rating }).map((_, sIdx) => (
                        <Star key={sIdx} size={15} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Quotation text contents */}
                    <blockquote className="text-gray-800 text-sm sm:text-lg font-sans font-medium leading-relaxed italic mb-8">
                      "{comment.quote}"
                    </blockquote>

                    {/* Profile cards card */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-4">
                        {/* Letter Stylized Avatar bubble */}
                        <div className="w-11 h-11 rounded-[2px] bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm select-none">
                          {comment.avatar}
                        </div>
                        <div className="text-left font-sans">
                          <div className="text-sm font-extrabold text-gray-950 leading-tight">
                            {comment.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            {comment.role} at <span className="font-semibold text-brand-purple uppercase tracking-tight">{comment.company}</span>
                          </div>
                        </div>
                      </div>

                      {/* Navigators inside panel */}
                      <div className="flex gap-2" id="comment-nav-buttons">
                        <button
                          onClick={handlePrev}
                          className="w-8 h-8 rounded-[2px] bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
                          aria-label="Previous Review"
                          id="btn-comment-prev"
                        >
                          <ChevronLeft size={14} />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-8 h-8 rounded-[2px] bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
                          aria-label="Next Review"
                          id="btn-comment-next"
                        >
                          <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bullet dot indicators */}
          <div className="flex justify-center gap-1.5 mt-6" id="comment-slider-dots">
            {testimonials.map((_, dotIdx) => (
              <span
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`w-2.5 h-2.5 rounded-[2px] cursor-pointer transition-all ${activeIndex === dotIdx ? 'bg-brand-purple w-6' : 'bg-gray-300'}`}
                id={`comment-dot-${dotIdx}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
