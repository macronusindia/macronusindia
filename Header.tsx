/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { MacronusLogo } from './MacronusLogo';

interface HeaderProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onContactClick, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const menuItems = [
    { id: 'services', label: 'Services' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'showcase', label: 'Our Work' },
    { id: 'process', label: 'Workflow' },
    { id: 'stats', label: 'Performance' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <nav id="navbar-container" className="max-w-7xl mx-auto backdrop-blur-md bg-white/75 border border-gray-200/60 shadow-premium-soft rounded-[2px] px-6 py-3 md:px-8 flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 cursor-pointer group text-gray-900 font-display font-bold text-lg tracking-tight"
          id="brand-logo"
        >
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <MacronusLogo size={36} className="h-9 w-auto" />
          </div>
          <div className="flex flex-col leading-[1.1] text-left">
            <span 
              className="font-brand-outline text-transparent uppercase tracking-[0.08em] text-[11px] md:text-[13px] font-bold select-none group-hover:opacity-85 transition-all duration-300"
              style={{
                WebkitTextStroke: '1.2px #111827',
              }}
            >
              Macronus
            </span>
            <span className="text-[8px] tracking-[0.16em] font-mono font-bold text-brand-purple/95 uppercase mt-0.5">
              digital labs
            </span>
          </div>
        </div>

        {/* Desktop Menu with Sliding Hover Backdrop Animation */}
        <div className="hidden lg:flex items-center gap-1 relative" id="desktop-nav-menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative px-3.5 py-1.5 cursor-pointer text-[11px] font-mono font-semibold text-gray-500 hover:text-gray-950 transition-colors uppercase tracking-wider"
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              id={`nav-${item.id}`}
            >
              <span className="relative z-10">{item.label}</span>
              {hoveredTab === item.id && (
                <motion.div
                  layoutId="nav-hover-backdrop"
                  className="absolute inset-0 rounded-[2px] bg-gray-100/90 -z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3" id="header-actions">
          <button
            onClick={() => onNavigate('services')}
            className="px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 hover:text-gray-950 transition-colors flex items-center gap-1.5"
            id="btn-explore"
          >
            Explore Options
          </button>
          <button
            onClick={onContactClick}
            className="px-5 py-2 rounded-[2px] bg-gray-950 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-brand-purple transition-all duration-300 shadow-md hover:shadow-brand-purple/20 flex items-center gap-1.5 group relative overflow-hidden"
            id="btn-start-project"
          >
            <span className="relative z-10 flex items-center gap-1">
              Start Project
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2" id="mobile-menu-trigger-container">
          <a
            href="https://tally.so/r/PdGrq0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-[2px] bg-gray-950 text-white font-mono uppercase tracking-wider font-semibold text-[10px] shadow-sm animate-pulse block text-center"
            id="mobile-nav-cta"
          >
            Join Ready
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-[2px] bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Toggle Menu"
            id="mobile-burger-btn"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-150 rounded-[2px] p-6 shadow-2xl flex flex-col gap-4 lg:hidden"
            id="mobile-drawer-portal"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className="px-4 py-3 rounded-[2px] hover:bg-gray-50 text-[12px] font-mono uppercase tracking-wider text-gray-800 hover:text-black transition-colors cursor-pointer"
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
            
            <div className="h-[1px] bg-gray-100 my-1" />
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate('services');
                }}
                className="w-full py-3 rounded-[2px] border border-gray-200 text-gray-700 text-center font-bold text-xs uppercase tracking-wider font-mono bg-white"
                id="btn-mobile-secondary"
              >
                Services Guide
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 rounded-[2px] bg-gradient-to-r from-brand-purple to-brand-pink text-white text-center font-bold text-xs uppercase tracking-wider font-mono shadow-md"
                id="btn-mobile-primary"
              >
                Start Project Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
