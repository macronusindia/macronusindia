import React from 'react';

interface MacronusLogoProps {
  size?: number;
  className?: string;
  id?: string;
}

export const MacronusLogo: React.FC<MacronusLogoProps> = ({
  size = 32,
  className = '',
  id = 'macronus-brand-logo'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      id={id}
    >
      <defs>
        {/* Soft, premium gradients matching the original uploaded glossy purple-to-blue range */}
        <linearGradient id="macronus-gradient-top" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#C084FC" /> {/* Lavender */}
          <stop offset="60%" stopColor="#A855F7" /> {/* Vibrant Purple */}
          <stop offset="100%" stopColor="#EC4899" /> {/* Warm Highlight Magenta */}
        </linearGradient>

        <linearGradient id="macronus-gradient-middle" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#818CF8" /> {/* Electric Indigo */}
          <stop offset="50%" stopColor="#6366F1" /> {/* Indigo */}
          <stop offset="100%" stopColor="#4F46E5" /> {/* Cobalt */}
        </linearGradient>

        <linearGradient id="macronus-gradient-bottom" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#4F46E5" /> {/* Cobalt Violet */}
          <stop offset="100%" stopColor="#2563EB" /> {/* Royal Blue */}
        </linearGradient>

        {/* Filters for premium 3D lift */}
        <filter id="macronus-shadow-top" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-1" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.3" />
        </filter>
        <filter id="macronus-shadow-mid" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-1.2" dy="2" stdDeviation="1.2" floodColor="#000000" floodOpacity="0.35" />
        </filter>
        <filter id="macronus-shadow-bot" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="-1.5" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Solid Black Circular Background as shown in the original design logo image */}
      <circle cx="50" cy="50" r="47" fill="#000000" />

      {/* Core Plates Group: Translated perfectly to center horizontally (translate -1) and vertically (translate 10) */}
      <g transform="translate(-1, 10)">
        
        {/* Layer 3: Bottom Plate (Deep Cobalt / Royal Blue) */}
        <path
          d="M 14 74 C 14 74 19 63 21 60 L 52 60 C 55 60 58 57 59 54 L 79 54 C 79 54 75 66 73 70 C 71 73 68 74 64 74 Z"
          fill="url(#macronus-gradient-bottom)"
          filter="url(#macronus-shadow-bot)"
        />

        {/* Layer 2: Middle Plate (Medium Indigo / Violet) */}
        <path
          d="M 19 50 C 19 50 33 21 35 18 C 36 15 39 14 43 14 L 83 14 C 83 14 79 26 77 30 C 75 33 71 34 67 34 L 56 34 C 53 34 50 37 49 40 L 44 50 Z"
          fill="url(#macronus-gradient-middle)"
          filter="url(#macronus-shadow-mid)"
        />

        {/* Layer 1: Top Plate (Lavender & Magenta) */}
        <path
          d="M 43 14 M 23 34 C 23 34 32 15 35 11 C 38 7 42 6 46 6 L 88 6 C 88 6 84 18 82 22 C 81 25 78 26 74 26 L 48 26 L 44 34 Z"
          fill="url(#macronus-gradient-top)"
          filter="url(#macronus-shadow-top)"
        />

        {/* Subtle glowing reflection line for high-premium gloss edge shine */}
        <path
          d="M 48 6 L 44 14 L 38 26 L 35 34"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.32"
          className="pointer-events-none"
        />
        
      </g>
    </svg>
  );
};
