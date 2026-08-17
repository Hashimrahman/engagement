import { motion } from "framer-motion";
import Divider from "./Divider";
import config from "../config";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";

export default function Footer() {
  const { partner1, partner2, connector, hashtag } = config.couple;

  return (
    <footer className="bg-warm-gradient px-6 py-16 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2 variants={fadeUp} className="font-display text-3xl text-ink">
          {partner1}
          <span className="mx-2 text-gold-400">{connector}</span>
          {partner2}
        </motion.h2>

        <motion.div variants={fadeUp}>
          <Divider className="my-5" />
        </motion.div>

        <motion.p variants={fadeUp} className="font-sans text-sm text-ink-light">
          {config.hero.dateLabel}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xs font-body text-base italic text-ink-light"
        >
          {config.footer.thankYou}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-4 font-display text-lg tracking-wide text-gold-500"
        >
          {hashtag}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-10 font-sans text-[11px] uppercase tracking-[0.25em] text-gold-400/80"
        >
          {config.footer.credit}
        </motion.p>
      </motion.div>
    </footer>
  );
}
