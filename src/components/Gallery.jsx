import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Divider from "./Divider";
import config from "../config";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const images = config.gallery.images;

  return (
    <section id="gallery" className="section-wrap">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.h2 variants={fadeUp} className="section-heading">
          {config.gallery.heading}
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Divider className="my-6" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="columns-2 gap-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block w-full break-inside-avoid overflow-hidden rounded-xl border border-gold-200/70 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 px-6"
          >
            <motion.button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 text-cream-50"
              whileTap={{ scale: 0.9 }}
            >
              <X size={26} />
            </motion.button>
            <motion.img
              key={images[activeIndex].src}
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
