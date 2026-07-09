'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

// Parametric pour art adapted from Niki's crema espresso app
// (~/Desktop/sites/crema), self-contained so the portfolio has no
// dependency on that repo.

const COFFEE_PALETTE = {
  '--pour-milk': '#f0e4d0',
  '--pour-foam': '#faf4e6',
  '--pour-espresso': '#4d372a',
  '--pour-outline': '#35281d',
  '--pour-crema': '#d3a468',
  '--pour-ceramic': '#fbf8f0',
  '--pour-steel': '#a7adaf',
  '--pour-shadow': '#ebe2cf',
};

const OUTLINE = 'var(--pour-outline)';

// Cortado in a tumbler: espresso and milk in equal measure, kissed with foam
const CORTADO = {
  shape: { topW: 88, botW: 76, h: 68 },
  layers: [
    { id: 'espresso', ratio: 1 },
    { id: 'milk', ratio: 1 },
    { id: 'foam', ratio: 0.15 },
  ],
};

const POURED = new Set(['milk', 'foam']);

function cupGeometry() {
  const { topW, botW, h } = CORTADO.shape;
  const y1 = 178;
  const y0 = y1 - h;
  const tl = 100 - topW / 2;
  const tr = 100 + topW / 2;
  const bl = 100 - botW / 2;
  const br = 100 + botW / 2;
  const r = Math.min(12, botW / 5);
  const body = `M ${tl} ${y0} L ${bl} ${y1 - r} Q ${bl} ${y1} ${bl + r} ${y1} L ${br - r} ${y1} Q ${br} ${y1} ${br} ${y1 - r} L ${tr} ${y0} Z`;

  const yTop = y0 + 8;
  const yBot = y1 - 4;
  const total = CORTADO.layers.reduce((s, l) => s + l.ratio, 0);
  let acc = 0;
  const layers = CORTADO.layers.map((l) => {
    const lh = (l.ratio / total) * (yBot - yTop);
    const y = yBot - acc - lh;
    acc += lh;
    return { ...l, y, h: lh };
  });

  return { topW, y0, y1, body, layers };
}

function PourScene() {
  const g = cupGeometry();
  const rimY = 30 + g.y0 + 6;
  let pourIndex = 0;

  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Milk pouring into a cortado">
      {/* metal milk jug, tipped over the glass, spout leading the pour */}
      <g transform="translate(76 42) rotate(30)">
        <path d="M-18 -8 C -36 -6 -35 18 -17 20" fill="none" stroke={OUTLINE} strokeWidth="9" strokeLinecap="round" />
        <path d="M-18 -8 C -36 -6 -35 18 -17 20" fill="none" stroke="var(--pour-steel)" strokeWidth="4" strokeLinecap="round" />
        <path
          d="M30 -26 C 16 -20 -2 -18 -16 -18 L-21 22 Q-22 28 -16 28 L16 28 Q22 28 21 22 L15 -14 C 20 -18 25 -22 30 -26 Z"
          fill="var(--pour-steel)"
          stroke={OUTLINE}
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M-13 -12 L-17 24" stroke="var(--pour-ceramic)" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      </g>

      {/* milk stream */}
      <motion.path
        d={`M113 36 C 134 60, 152 ${rimY - 30}, 160 ${rimY}`}
        fill="none"
        stroke="var(--pour-milk)"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.25, duration: 0.5, ease: 'easeIn' }}
      />

      <g transform="translate(60 30)">
        <ellipse cx="100" cy={g.y1 + 8} rx={g.topW / 2 + 24} ry="7" fill="var(--pour-shadow)" opacity="0.45" />

        <path d={g.body} fill="var(--pour-ceramic)" />
        <defs>
          <clipPath id="cortado-pour-cup">
            <path d={g.body} />
          </clipPath>
        </defs>
        <g clipPath="url(#cortado-pour-cup)">
          {g.layers.map((l) => {
            if (!POURED.has(l.id)) {
              return <rect key={l.id} x="0" width="200" y={l.y} height={l.h + 0.6} fill={`var(--pour-${l.id})`} />;
            }
            const delay = 0.7 + pourIndex * 2.5;
            pourIndex += 1;
            return (
              <motion.rect
                key={l.id}
                x="0"
                width="200"
                fill={`var(--pour-${l.id})`}
                initial={{ y: l.y + l.h, height: 0 }}
                animate={{ y: l.y, height: l.h + 0.6 }}
                transition={{ delay, duration: l.id === 'milk' ? 2.2 : 1.1, ease: 'easeOut' }}
              />
            );
          })}
        </g>
        <path d={g.body} fill="none" stroke={OUTLINE} strokeWidth="5" strokeLinejoin="round" />

        {/* a little latte-art heart, drawn last */}
        <motion.path
          d={(() => {
            const hy = g.layers[g.layers.length - 1].y + 1;
            return `M 100 ${hy + 9} C 92 ${hy - 1} 86 ${hy + 8} 100 ${hy + 15} C 114 ${hy + 8} 108 ${hy - 1} 100 ${hy + 9}`;
          })()}
          fill="none"
          stroke="var(--pour-crema)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 3.9, duration: 0.9, ease: 'easeInOut' }}
        />
      </g>
    </svg>
  );
}

export default function CortadoPour({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const autoClose = setTimeout(onClose, 9500);

    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(autoClose);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Pouring a cortado. Press escape or click anywhere to close."
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center cursor-pointer outline-none"
      style={COFFEE_PALETTE}
    >
      <div className="w-full max-w-md px-8">
        <PourScene />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 0.5 }}
          className="mt-5 text-center font-mono text-sm text-[#f0e4d0]"
        >
          cortado ready ☕ // always time for a coffee chat
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 0.5 }}
          className="mt-2 text-center font-mono text-xs text-white/50"
        >
          press esc or click anywhere to close
        </motion.p>
      </div>
    </motion.div>,
    document.body
  );
}
