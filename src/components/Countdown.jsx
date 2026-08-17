import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Divider from "./Divider";
import config from "../config";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/motionVariants";

function getTimeLeft(targetISO) {
  const diff = new Date(targetISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    total: clamped,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(config.event.dateTimeISO)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(config.event.dateTimeISO));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="section-wrap">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-center"
      >
        <motion.h2 variants={fadeUp} className="section-heading">
          {config.event.heading}
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Divider className="my-6" />
        </motion.div>

        {timeLeft.total > 0 ? (
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-4 gap-2.5 sm:gap-4"
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center rounded-2xl border border-gold-200 bg-cream-50/60 py-4 shadow-sm"
              >
                <span className="font-display text-2xl sm:text-4xl text-ink tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="mt-1 font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gold-500">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.p variants={fadeUp} className="font-display text-2xl text-gold-500">
            The day has arrived!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
