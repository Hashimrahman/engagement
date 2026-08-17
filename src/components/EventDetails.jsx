import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Divider from "./Divider";
import config from "../config";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";

export default function EventDetails() {
  const { title, date, day, timeRange, venueName, venueLocation } =
    config.eventDetails;

  return (
    <section id="events" className="section-wrap">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.h2 variants={fadeUp} className="section-heading">
          Events
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Divider className="my-6" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-3xl border border-gold-200 bg-cream-50/70 px-6 py-8 text-left shadow-sm"
        >
          <p className="text-center font-display text-2xl text-ink">{title}</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 shrink-0 text-gold-500" size={20} />
              <div>
                <p className="font-sans text-sm text-ink">
                  {date} &middot; {day}
                </p>
                <p className="font-sans text-xs text-ink-light">{timeRange}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-gold-500" size={20} />
              <div>
                <p className="font-sans text-sm text-ink">{venueName}</p>
                <p className="font-sans text-xs text-ink-light">
                  {venueLocation}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
