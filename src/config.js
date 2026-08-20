// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit everything here. No need to touch component files.
// ─────────────────────────────────────────────────────────────────────────

const config = {
  // Browser tab title
  siteTitle: "We're Getting Engaged",

  // Short names used in the cover, hero, and footer (e.g. "Aisha & Zayd")
  couple: {
    partner1: "Hashim",
    partner2: "Rifa",
    connector: "&", // shown between names, e.g. "Aisha & Zayd"
    hashtag: "#HashimRifa",
  },

  // Cover / seal screen (first thing guests see)
  cover: {
    eyebrow: "Together with our families",
    invocation:
      "“And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He placed between you love and mercy.” — Qur'an 30:21",
    dividerSymbol: "✶ ✶ ✶",
    tapLabel: "Tap to open",
  },

  // Hero section (after the invitation is opened)
  hero: {
    quote:
      "“In the quiet space between two hearts, a promise blooms where forever starts.”",
    dateLabel: "1st November 2026",
    scrollLabel: "Scroll",
  },

  // Formal invitation paragraph
  invitation: {
    openingLine: "With hearts full of joy and gratitude,",
    relationLabel1: "Son of", // change to "Daughter of" as needed
    parents1: "Mr. Shamsudheen & Mrs. Jameela",
    relationLabel2: "Daughter of",
    parents2: "Mr. Jabbar & Mrs. Kadeeja",
    inviteLine:
      "request the honor of your presence as we celebrate the union of two hearts at our engagement ceremony.",
    closingLine:
      "Your presence and prayers would mean the world to us on this joyous occasion.",
  },

  // Countdown target — ISO 8601 with timezone offset
  event: {
    dateTimeISO: "2026-11-01T17:00:00+05:30",
    heading: "Counting Down to Our Engagement",
  },

  // Event details card
  eventDetails: {
    title: "Engagement Ceremony",
    date: "1st November 2026",
    day: "Sunday",
    timeRange: "1:00 PM – 5:00 PM",
    venueName: "Grand Mist Resort",
    venueLocation: "Niravilupuzha, Wayanad",
  },

  // Gallery — drop images in /public/images and list them here
  gallery: {
    heading: "Our Moments",
    // Swap these for real photos (jpg/png/webp) — keep the same array shape.
    images: [
      { src: "/images/photo-1.svg", alt: "Placeholder photo 1" },
      { src: "/images/photo-2.svg", alt: "Placeholder photo 2" },
      { src: "/images/photo-3.svg", alt: "Placeholder photo 3" },
      { src: "/images/photo-4.svg", alt: "Placeholder photo 4" },
      { src: "/images/photo-5.svg", alt: "Placeholder photo 5" },
      { src: "/images/photo-6.svg", alt: "Placeholder photo 6" },
    ],
  },

  // Venue section
  venue: {
    name: "Grand Mist Resort",
    address: "Niravilupuzha, Wayanad",
    mapsUrl: "https://maps.google.com/?q=Grand+Mist+Resort+Niravilupuzha+Wayanad",
  },

  // Footer
  footer: {
    thankYou: "With love and gratitude, we can't wait to celebrate with you.",
    credit: "Made with love for our special day",
  },

  // Background music
  music: {
    src: "/audio/bg-music.mp3",
    title: "Our Song",
  },

  // Theme colors — mirror of tailwind.config.js palette, for reference or
  // any inline styling that can't use Tailwind classes.
  theme: {
    cream: "#FBF6EE",
    gold: "#C6A15B",
    blush: "#E8C4C4",
    ink: "#3A2E22",
  },
};

export default config;
