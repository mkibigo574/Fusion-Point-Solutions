/**
 * Editable site content. Copy here is placeholder but uses the real
 * positioning facts (Australian photo/video, worldwide web/IT).
 * Swap imagery for real assets where marked with TODO in components.
 */

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Photography", href: "#photography" },
  { label: "Videography", href: "#videography" },
  { label: "IT & Web", href: "#it-web" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceKey = "photography" | "videography" | "it-web";

export const PILLARS: {
  key: ServiceKey;
  index: string;
  title: string;
  location: string;
  blurb: string;
  points: string[];
  /** Optional concrete tech stack chips (used on IT & Web). */
  stack?: string[];
  href: string;
  image: string;
  alt: string;
}[] = [
  {
    key: "photography",
    index: "01",
    title: "Photography",
    location: "Australia-based",
    blurb:
      "Portraits, events, landscape and product — light shaped with intent. Frames that hold up on a gallery wall, not just a feed.",
    points: ["Portrait & editorial", "Events & weddings", "Landscape", "Product & brand"],
    href: "/photography",
    // TODO: replace with real photography hero asset
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1600&auto=format&fit=crop",
    alt: "Studio portrait lit with warm directional light — placeholder",
  },
  {
    key: "videography",
    index: "02",
    title: "Videography",
    location: "Australia-based",
    blurb:
      "Showreels, brand films and event coverage. Cinematic, story-driven motion with the pacing and grade of a short film.",
    points: ["Brand films", "Showreels", "Event coverage", "Colour & grade"],
    href: "/videography",
    // TODO: replace with real videography poster frame
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop",
    alt: "Cinema camera rig on set during a film shoot — placeholder",
  },
  {
    key: "it-web",
    index: "03",
    title: "IT & Web",
    location: "Worldwide",
    blurb:
      "The differentiator. Full-stack websites and web apps, machine-learning and AI integration, data tooling and automation — engineered with the same craft as the camera work, delivered to clients anywhere.",
    points: [
      "Full-stack web & e-commerce",
      "Machine learning & AI",
      "NLP & deep learning",
      "Data analytics & visualisation",
      "Automation pipelines",
      "Hosting, DNS & system design",
    ],
    stack: [
      "Python",
      "JavaScript",
      "Next.js",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Flask",
      "Pandas",
      "APIs",
    ],
    href: "/it-web",
    // TODO: replace with real product / code visual
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop",
    alt: "Abstract dark technology workspace with screens — placeholder",
  },
];

/**
 * Rich content for the dedicated service pages (/photography, /videography,
 * /it-web). Hero copy, capabilities, deliverables and a CTA per service.
 */
export const SERVICE_DETAIL: Record<
  ServiceKey,
  {
    eyebrow: string;
    heroLead: string;
    heroAccent: string;
    heroImage: string;
    heroAlt: string;
    tagline: string;
    intro: string[];
    offerings: { title: string; body: string }[];
    deliverables: string[];
    ctaTitle: string;
    ctaBody: string;
  }
> = {
  photography: {
    eyebrow: "Photography · Darwin-based",
    heroLead: "Light,",
    heroAccent: "shaped.",
    // TODO: replace with real photography hero asset
    heroImage:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Studio portrait lit with warm directional light — placeholder",
    tagline:
      "Portraits, events, landscape and product — frames with the craft of a gallery wall, shot on the ground in Darwin and across the Territory.",
    intro: [
      "We started behind the lens, and it still anchors everything we do. Whether it's a founder portrait, a wedding, a product range or the Top End landscape, we light and compose with intent — images built to last, not just to fill a feed.",
      "Every frame is hand-edited and graded to sit consistently with your brand, delivered both web-ready and print-ready.",
    ],
    offerings: [
      { title: "Portrait & editorial", body: "Founders, teams and personal branding — directed, flattering and on-message." },
      { title: "Events & weddings", body: "Unobtrusive coverage that captures the day exactly as it felt." },
      { title: "Landscape & travel", body: "The Top End at its best — golden hour, wide country and big skies." },
      { title: "Product & brand", body: "Clean, consistent product and lifestyle imagery for web and campaigns." },
    ],
    deliverables: [
      "Hand-edited high-resolution images",
      "Colour graded to your brand",
      "Web-optimised + print-ready exports",
      "Fast, reliable turnaround",
      "Clear commercial usage rights",
    ],
    ctaTitle: "Have a shoot in mind?",
    ctaBody:
      "Tell us the brief and the date — we'll come back with an approach and a quote.",
  },
  videography: {
    eyebrow: "Videography · Darwin-based",
    heroLead: "Stories,",
    heroAccent: "in motion.",
    // TODO: replace with real videography poster frame
    heroImage:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Cinema camera rig on set during a film shoot — placeholder",
    tagline:
      "Brand films, showreels and event coverage with the pacing, sound and grade of a short film.",
    intro: [
      "Motion is where the story breathes. We direct, shoot and edit films that carry a narrative — not just b-roll — with considered sound design and a cinematic colour grade.",
      "We deliver in every ratio your channels need, from a 16:9 hero film to vertical social cut-downs.",
    ],
    offerings: [
      { title: "Brand films", body: "Story-driven films that explain who you are and why it matters." },
      { title: "Showreels & promos", body: "High-energy edits for launches, events and social." },
      { title: "Event coverage", body: "Multi-cam capture of conferences, performances and milestones." },
      { title: "Colour & grade", body: "A consistent cinematic look, finished to a broadcast standard." },
    ],
    deliverables: [
      "Graded master film",
      "16:9, 9:16 & 1:1 versions",
      "Licensed music & sound design",
      "Captions & social cut-downs",
      "Source files on request",
    ],
    ctaTitle: "Got a film to make?",
    ctaBody:
      "Share the goal and where it'll live — we'll shape a treatment and a budget.",
  },
  "it-web": {
    eyebrow: "IT & Web · Worldwide",
    heroLead: "Built to",
    heroAccent: "ship.",
    // TODO: replace with real product / code visual
    heroImage:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400&auto=format&fit=crop",
    heroAlt: "Abstract dark technology workspace with screens — placeholder",
    tagline:
      "Websites, web apps, AI integration and automation — engineered for clients anywhere in the world.",
    intro: [
      "This is the differentiator. The same studio that shoots your story also builds and runs the platform it lives on — so nothing gets lost between vendors.",
      "From marketing sites and e-commerce to data tooling and machine-learning features, we ship maintainable software and support it worldwide, on any timezone.",
    ],
    offerings: [
      { title: "Full-stack web & e-commerce", body: "Fast, accessible, SEO-ready sites and stores that convert." },
      { title: "Web apps & dashboards", body: "Custom tools, portals and dashboards built around your workflow." },
      { title: "Machine learning & AI", body: "Model training, NLP and deep-learning features integrated into real products." },
      { title: "Data analytics & visualisation", body: "Pipelines, analysis and clear dashboards that turn data into decisions." },
      { title: "Automation pipelines", body: "Remove manual busywork with reliable, monitored automation." },
      { title: "Hosting, DNS & system design", body: "Architecture, deployment and ongoing reliability — handled." },
    ],
    deliverables: [
      "Responsive, accessible front-end",
      "Clean, maintainable codebase",
      "CI/CD & managed hosting",
      "Analytics, SEO & monitoring",
      "Worldwide ongoing support",
    ],
    ctaTitle: "Building something?",
    ctaBody:
      "Tell us what you need — a site, an app, an AI feature or all of it — and we'll scope it.",
  },
};

export type WorkCategory = "photo" | "video" | "web";

export const WORK: {
  id: string;
  title: string;
  category: WorkCategory;
  tag: string;
  image: string;
  alt: string;
  /** Live URL — web projects link out from the lightbox. */
  href?: string;
  /** Grid emphasis — "tall" spans two rows for masonry rhythm. */
  span?: "tall" | "wide";
}[] = [
  // --- Real web work (live screenshots) ---
  {
    id: "darwin-talent",
    title: "Darwin Has Talent",
    category: "web",
    tag: "Events Platform",
    href: "https://darwinhastalents.com.au/",
    image: "/work/darwin-talent.png",
    alt: "Darwin Has Talent — Northern Territory music competition website",
    span: "wide",
  },
  {
    id: "kuri",
    title: "Kuri Investments",
    category: "web",
    tag: "Business Website",
    href: "https://kuriinvestments.co.ke/",
    image: "/work/kuri.png",
    alt: "Kuri Investments — stone crushing & aggregate supply website, Kenya",
  },
  {
    id: "wakanda",
    title: "Wakanda Lawn Care",
    category: "web",
    tag: "Service Business",
    href: "https://www.wakandalawncare.com.au/",
    image: "/work/wakanda.png",
    alt: "Wakanda Lawn Care — Darwin lawn & garden services site with bookings",
  },
  {
    id: "christines",
    title: "Christine's Exotic Eats",
    category: "web",
    tag: "Hospitality",
    href: "https://www.christines-exoticeats.com.au/",
    image: "/work/christines.png",
    alt: "Christine's Exotic Eats — Darwin catering & grazing boxes website",
  },
  {
    id: "afcom",
    title: "AFCOM NT",
    category: "web",
    tag: "Community / NFP",
    href: "https://www.afcomnt.org.au/",
    image: "/work/afcom.png",
    alt: "African Community Northern Territory — not-for-profit community & events website",
    span: "wide",
  },
  {
    id: "anchor",
    title: "Anchor NDS",
    category: "web",
    tag: "NDIS / Healthcare",
    href: "https://www.anchornds.com.au/",
    image: "/work/anchor.png",
    alt: "Anchor Nursing & Disability Support — registered NDIS provider website, Darwin",
  },
  // --- Photography / videography (placeholder until real assets land) ---
  {
    id: "coastal",
    title: "Coastal Light",
    category: "photo",
    tag: "Landscape",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    alt: "Golden-hour coastline — placeholder photography sample",
    span: "tall",
  },
  {
    id: "studio9",
    title: "Studio No. 9",
    category: "photo",
    tag: "Portrait",
    image:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1400&auto=format&fit=crop",
    alt: "Editorial studio portrait — placeholder photography sample",
    span: "tall",
  },
  {
    id: "reel",
    title: "Northern Reel",
    category: "video",
    tag: "Showreel",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    alt: "Drone landscape still from a showreel — placeholder video sample",
  },
];

export const TEAM: {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  initials: string;
}[] = [
  {
    name: "Desmond Gitonyi",
    role: "Photography & Videography",
    discipline: "The lens",
    bio: "Shoots the stills and directs the films — portraits, events and cinematic brand work on the ground in Australia.",
    initials: "DG",
  },
  {
    name: "Michael Kibigo",
    role: "Software & IT",
    discipline: "The engine",
    bio: "Computer science graduate, Charles Darwin University. Handles the harder technical problems — infrastructure, integrations and reliability.",
    initials: "MK",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "We get the brief, the audience and the constraints. One conversation across all three disciplines — no hand-offs between vendors.",
  },
  {
    step: "02",
    title: "Direct",
    body: "Art direction, shot lists, sitemaps, architecture. We plan the look and the build before a shutter clicks or a line is written.",
  },
  {
    step: "03",
    title: "Produce",
    body: "Shoot, edit, design, develop. The same team carries the vision from camera to deploy so nothing gets lost in translation.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Graded films, retouched frames, a live site — handed over with everything you need to run it. Web supported worldwide.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They shot our campaign and built the site it lives on. One team, one vision — the whole thing just felt coherent.",
    name: "Mara Lindqvist",
    role: "Brand Director, Lumen",
  },
  {
    quote:
      "The film gave me chills and the booking platform behind it never skips a beat. Rare to get both from one studio.",
    name: "Daniel Osei",
    role: "Founder, Northbound",
  },
  {
    quote:
      "We're three timezones away and the web side has been flawless. The photography? Still gets compliments two years on.",
    name: "Priya Nair",
    role: "CMO, Meridian",
  },
  {
    quote:
      "Cinematic, technical, on time. Fusion Point is the only vendor we didn't have to manage.",
    name: "Tom Whitfield",
    role: "Producer, Atlas Studios",
  },
];

export const STUDIO = {
  email: "hello@fusionpoint.studio",
  location: "Darwin, Australia · web & IT worldwide",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Vimeo", href: "https://vimeo.com" },
  ],
};
