// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see — REPLACE with a real Unsplash URL matching: "Modern office workspace with natural light"
  hero: {
    src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&h=800&fit=crop&q=80",
    alt: "Modern high-rise law office building exterior with glass facade",
    width: 1200,
    height: 800,
  },

  // Alternative hero image (used on inner pages or as fallback) — REPLACE with a real Unsplash URL matching: "Professional team collaborating in bright office"
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=800&fit=crop&q=80",
    alt: "Diverse team of legal professionals collaborating in a bright conference room",
    width: 1200,
    height: 800,
  },

  // About page or About section on homepage — REPLACE with a real Unsplash URL matching: "Business professionals in modern meeting room"
  about: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=80",
    alt: "Senior partners discussing case details in a modern boardroom",
    width: 1200,
    height: 800,
  },

  // First service card image — REPLACE with a real Unsplash URL matching: "Creative professionals working together"
  "service-1": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80",
    alt: "Hands shaking over a business contract signing",
    width: 1200,
    height: 800,
  },

  // Second service card image — REPLACE with a real Unsplash URL matching: "Data analytics dashboard on screen"
  "service-2": {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80",
    alt: "Real estate blueprint and architectural model on a desk",
    width: 1200,
    height: 800,
  },

  // Third service card image — REPLACE with a real Unsplash URL matching: "Team workshop and brainstorming session"
  "service-3": {
    src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&h=800&fit=crop&q=80",
    alt: "Gavel and law books resting on a wooden table",
    width: 1200,
    height: 800,
  },

  // Gallery image 1 — REPLACE with a real Unsplash URL matching: "Professional handshake in business setting"
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=800&fit=crop&q=80",
    alt: "Colleagues celebrating a successful legal victory",
    width: 1200,
    height: 800,
  },

  // Gallery image 2 — REPLACE with a real Unsplash URL matching: "Modern conference room with city view"
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop&q=80",
    alt: "Private office library with mahogany furniture",
    width: 1200,
    height: 800,
  },

  // Team member photo — REPLACE with a real Unsplash URL matching: "Diverse team celebrating success"
  "team-1": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80",
    alt: "Portrait of Arthur Pendelton, Senior Partner",
    width: 600,
    height: 800,
  },

  "team-2": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&q=80",
    alt: "Portrait of Sarah Vance, Associate Attorney",
    width: 600,
    height: 800,
  },

  "team-3": {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&q=80",
    alt: "Portrait of Michael Chen, Senior Counsel",
    width: 600,
    height: 800,
  },

  // Gallery image 3 — REPLACE with a real Unsplash URL matching: "Technology workspace with multiple screens"
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=800&fit=crop&q=80",
    alt: "Houston skyline skyline view from office window",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background — REPLACE with a real Unsplash URL matching: "Innovation and technology concept"
  cta: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80",
    alt: "Abstract background representing justice and law",
    width: 1200,
    height: 600,
  },

  // Testimonials section background or decoration — REPLACE with a real Unsplash URL matching: "Professional business environment"
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop&q=80",
    alt: "Modern office interior blurred background",
    width: 1200,
    height: 800,
  },
} as const;

export type ImageSlot = keyof typeof images;