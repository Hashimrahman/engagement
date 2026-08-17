import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import config from "../config";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.muted = true;
    audio.play().catch(() => {});
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    if (!audio.muted) audio.play().catch(() => {});
    setIsMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} src={config.music.src} loop playsInline />
      <motion.button
        type="button"
        onClick={toggleMusic}
        aria-label={isMuted ? "Play background music" : "Mute background music"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileTap={{ scale: 0.85 }}
        className="fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gold-300/90 text-cream-50 shadow-md backdrop-blur-sm transition-colors hover:bg-gold-400"
      >
        {isMuted ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} className="animate-pulse-slow" />
        )}
      </motion.button>
    </>
  );
}
