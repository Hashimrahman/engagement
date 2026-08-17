import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Divider from "./Divider";
import config from "../config";
import { scrollToSection } from "../utils/scrollTo";

export default function Hero() {
  const { partner1, partner2, connector, hashtag } = config.couple;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-warm-gradient px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mb-4 font-sans text-[11px] uppercase tracking-[0.35em] text-gold-500"
      >
        We&rsquo;re Getting Engaged
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="font-display text-5xl sm:text-6xl leading-tight text-ink"
      >
        {partner1}
        <span className="mx-2 block sm:inline text-gold-400">{connector}</span>
        {partner2}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Divider className="my-6" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.7 }}
        className="max-w-xs font-body text-xl italic text-ink-light"
      >
        {config.hero.quote}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.7 }}
        className="mt-8 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-sm tracking-widest text-ink-light">
          {config.hero.dateLabel}
        </span>
        <span className="font-display text-lg tracking-wide text-gold-500">
          {hashtag}
        </span>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("invitation")}
        aria-label="Scroll to invitation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-gold-500 focus:outline-none"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em]">
          {config.hero.scrollLabel}
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.button>
    </section>
  );
}
