// ─────────────────────────────────────────────
//  BLOG POSTS
//  To add a new post:
//  1. Create a new HTML file in the posts/ folder (copy posts/template.html)
//  2. Add an entry to the POSTS array below
// ─────────────────────────────────────────────

const POSTS = [
   {
    slug: "ai-scientist",
    title: "What Happens When AI Becomes the Scientist?",
    date: "2026-04-07",
    tags: ["AI", "Research", "Systems"],
    excerpt: "A technical look at The AI Scientist and the emergence of autonomous research systems."
  },
];




// ─────────────────────────────────────────────
//  PROJECTS
//  To add a project, add an entry below.
//  githubUrl and demoUrl are optional (set to null if not applicable).
// ─────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Kalshi × Polymarket Arb Research System",
    tags: ["Python", "Quant", "Prediction Markets", "Research"],
    description: "Autonomous two-platform data collector and research agent studying mispricing between Kalshi and Polymarket BTC 15-min binary contracts. Live dashboard, hourly statistical analysis, and full audit trail for arXiv paper.",
    githubUrl: "https://github.com/ssiddiq1/quant-os",
    demoUrl: null,
  },
];
