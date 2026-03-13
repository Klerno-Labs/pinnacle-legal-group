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
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1600&h=900&fit=crop",
    alt: "Modern law firm library with warm lighting",
    width: 1600,
    height: 900,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop",
    alt: "Professional team collaborating in bright office",
    width: 1600,
    height: 900,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=800&fit=crop",
    alt: "Business professionals in modern meeting room",
    width: 1200,
    height: 800,
  },

  // First service card image — Business Law
  "service-1": {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&h=800&fit=crop",
    alt: "Legal documents and gavel on wooden desk",
    width: 1200,
    height: 800,
  },

  // Second service card image — Real Estate
  "service-2": {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
    alt: "Modern real estate architecture",
    width: 1200,
    height: 800,
  },

  // Third service card image — Personal Matters
  "service-3": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
    alt: "Strategic planning meeting",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
    alt: "Professional handshake in business setting",
    width: 1200,
    height: 800,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&h=800&fit=crop",
    alt: "Modern conference room with city view",
    width: 1200,
    height: 800,
  },

  // Team member photo — Founding Partner
  "team-1": {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
    alt: "Portrait of senior attorney",
    width: 800,
    height: 1000,
  },
  
  // Team member photo — Associate
  "team-2": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
    alt: "Portrait of attorney",
    width: 800,
    height: 1000,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    alt: "Technology workspace with multiple screens",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=600&fit=crop",
    alt: "Innovation and technology concept",
    width: 1600,
    height: 600,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop",
    alt: "Professional business environment",
    width: 1600,
    height: 900,
  },
} as const;

export type ImageSlot = keyof typeof images;