import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import Divider from "./Divider";
import config from "../config";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";

export default function Venue() {
  const { name, address, mapsUrl } = config.venue;

  return (
    <section id="venue" className="section-wrap">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.h2 variants={fadeUp} className="section-heading">
          Venue
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Divider className="my-6" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
          <MapPin className="text-gold-500" size={26} />
          <p className="font-display text-2xl text-ink">{name}</p>
          <p className="max-w-xs font-sans text-sm text-ink-light">{address}</p>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-cream-50 shadow-sm transition-colors hover:bg-gold-400"
        >
          Open Location
          <ExternalLink size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
