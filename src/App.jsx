import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CoverScreen from "./components/CoverScreen";
import Hero from "./components/Hero";
import MusicToggle from "./components/MusicToggle";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened]);

  return (
    <div className="min-h-screen bg-cream-100">
      <AnimatePresence>
        {!isOpened && <CoverScreen onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

      {isOpened && <MusicToggle />}

      <main>
        <Hero />
        <Invitation />
        <Countdown />
        <EventDetails />
        {/* <Gallery /> */}
        <Venue />
      </main>
      <Footer />
    </div>
  );
}
