import { motion } from "framer-motion";
import Divider from "./Divider";
import config from "../config";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";

export default function Invitation() {
  const { partner1, partner2, connector } = config.couple;
  const {
    openingLine,
    relationLabel1,
    parents1,
    relationLabel2,
    parents2,
    inviteLine,
    closingLine,
  } = config.invitation;

  return (
    <section id="invitation" className="section-wrap">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.p
          variants={fadeUp}
          className="font-body text-lg italic text-ink-light"
        >
          {openingLine}
        </motion.p>

        <motion.div variants={fadeUp}>
          <Divider className="my-8" />
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={fadeUp}>
            <p className="font-display text-2xl text-ink">{partner1}</p>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-gold-500">
              {relationLabel1}
            </p>
            <p className="font-body text-base text-ink-light">{parents1}</p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-display text-xl text-gold-400"
          >
            {connector}
          </motion.p>

          <motion.div variants={fadeUp}>
            <p className="font-display text-2xl text-ink">{partner2}</p>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-gold-500">
              {relationLabel2}
            </p>
            <p className="font-body text-base text-ink-light">{parents2}</p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <Divider className="my-8" />
        </motion.div>

        <motion.p variants={fadeUp} className="font-body text-lg text-ink-light">
          {inviteLine}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 font-body text-lg italic text-gold-500"
        >
          {closingLine}
        </motion.p>
      </motion.div>
    </section>
  );
}
