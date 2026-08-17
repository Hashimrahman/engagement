import { motion } from "framer-motion";
import Divider from "./Divider";
import config from "../config";

const CURTAIN_EASE = [0.76, 0, 0.24, 1];

const foldTexture = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(140,106,50,0.07) 0px, rgba(140,106,50,0.07) 2px, transparent 2px, transparent 22px), linear-gradient(180deg, #FBF6EE 0%, #F5EBD9 55%, #EFE0BB 100%)",
};

export default function CoverScreen({ onOpen }) {
  const { partner1, partner2, connector } = config.couple;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Left curtain panel */}
      <motion.div
        exit={{ x: "-100%" }}
        transition={{ duration: 0.9, delay: 0.25, ease: CURTAIN_EASE }}
        style={foldTexture}
        className="absolute inset-y-0 left-0 w-1/2"
      >
        <CornerFlourish className="left-4 top-4" />
        <CornerFlourish className="left-4 bottom-4 -scale-y-100" />
      </motion.div>

      {/* Right curtain panel */}
      <motion.div
        exit={{ x: "100%" }}
        transition={{ duration: 0.9, delay: 0.25, ease: CURTAIN_EASE }}
        style={foldTexture}
        className="absolute inset-y-0 right-0 w-1/2"
      >
        <CornerFlourish className="right-4 top-4 -scale-x-100" />
        <CornerFlourish className="right-4 bottom-4 -scale-x-100 -scale-y-100" />
      </motion.div>

      {/* Center content — fades out first, then the curtains part */}
      <motion.div
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-5 font-sans text-[11px] uppercase tracking-[0.35em] text-gold-500"
        >
          {config.cover.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl leading-tight text-ink"
        >
          {partner1}
          <span className="mx-2 text-gold-400">{connector}</span>
          {partner2}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Divider className="my-5" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="max-w-xs font-body text-lg italic text-ink-light"
        >
          {config.cover.invocation}
        </motion.p>

        <motion.button
          type="button"
          onClick={onOpen}
          aria-label="Open invitation"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92, rotate: -3 }}
          className="group relative mt-10 flex h-24 w-24 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
        >
          <span className="absolute inset-0 rounded-full bg-gold-300/40 blur-md animate-pulse-slow" />
          <WaxSeal className="relative h-full w-full drop-shadow-md transition-transform duration-300 group-hover:rotate-6" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mt-4 animate-pulse-slow font-sans text-xs uppercase tracking-[0.3em] text-gold-500"
        >
          {config.cover.tapLabel}
        </motion.p>
      </motion.div>
    </div>
  );
}

function WaxSeal({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="#AD8642" />
      <circle cx="50" cy="50" r="46" fill="url(#seal-gradient)" />
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#F7EFDD"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeDasharray="2 4"
      />
      <g fill="none" stroke="#F7EFDD" strokeOpacity="0.85" strokeWidth="1.4">
        <path d="M50 27 L50 73" />
        <path d="M27 50 L73 50" />
        <path d="M35 35 Q50 50 35 65" />
        <path d="M65 35 Q50 50 65 65" />
      </g>
      <circle cx="50" cy="50" r="9" fill="#F7EFDD" fillOpacity="0.9" />
      <defs>
        <radialGradient id="seal-gradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#DFC490" />
          <stop offset="55%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#8C6A32" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function CornerFlourish({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`pointer-events-none absolute h-10 w-10 sm:h-14 sm:w-14 text-gold-300 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M4 4 C 4 24, 24 4, 44 4" />
      <path d="M4 4 C 24 4, 4 24, 4 44" />
      <circle cx="4" cy="4" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
