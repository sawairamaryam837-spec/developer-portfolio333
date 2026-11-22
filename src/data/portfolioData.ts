export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'Tools & Design';
  proficiency: string;
  description: string;
  svgIcon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
  milestones: string[];
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  sublabel: string;
}

export const INITIAL_STATISTICS: Statistic[] = [
  {
    id: 'exp',
    label: 'Years of Experience',
    value: '3+',
    sublabel: 'Crafting responsive code & design',
  },
  {
    id: 'projects',
    label: 'Projects Completed',
    value: '8+',
    sublabel: 'Web apps, platforms & landing pages',
  },
  {
    id: 'tech',
    label: 'Technologies',
    value: '12+',
    sublabel: 'Modern stacks & dev toolchains',
  },
  {
    id: 'satisfaction',
    label: 'Client Satisfaction',
    value: '99%',
    sublabel: 'Delivered on time with quality',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEB DESIGN',
    description: 'Modern, responsive, and visually attractive website designs tailored to elevate your digital presence.',
    deliverables: [
      'Bespoke visual design systems',
      'High-conversion layouts & typography',
      'Mobile-first responsive architecture',
      'Design token systems & assets',
    ],
    icon: 'Layout',
  },
  {
    id: 'web-development',
    number: '02',
    title: 'WEB DEVELOPMENT',
    description: 'Scalable and functional web applications using modern technologies with clean, maintainable architecture.',
    deliverables: [
      'React.js & Next.js full-stack development',
      'REST & GraphQL API integrations',
      'State management & robust data pipelines',
      'Cross-browser testing & security compliance',
    ],
    icon: 'Code2',
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX DESIGN',
    description: 'Clean, intuitive, and user-friendly interfaces rooted in deep user research and frictionless interactions.',
    deliverables: [
      'Interactive wireframes & prototypes',
      'Information architecture & user journeys',
      'Usability testing & heuristics audit',
      'Micro-interactions & motion design',
    ],
    icon: 'Palette',
  },
  {
    id: 'website-optimization',
    number: '04',
    title: 'WEBSITE OPTIMIZATION',
    description: 'Performance optimization, responsive layouts, and bug fixing to maximize speed and conversions.',
    deliverables: [
      'Core Web Vitals & lighthouse 95+ score',
      'Asset compression & lazy loading',
      'SEO audit & structured Schema data',
      'Cross-device bug triage & hotfixes',
    ],
    icon: 'Zap',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'compliance-compass',
    number: '01',
    title: 'Compliance Compass',
    category: 'SaaS Platform',
    tagline: 'Risk Assessment & Complaints Management System',
    description:
      'A compliance management platform featuring risk assessment, complaints management, investigations, and dashboard functionality.',
    overview:
      'Compliance Compass is an enterprise-grade compliance governance suite engineered to streamline regulatory risk workflows, incident tracking, investigations lifecycle, and real-time executive analytics.',
    keyFeatures: [
      'Interactive 5x5 dynamic risk assessment matrix & heatmap analytics',
      'Incident and complaints management pipeline with role-based routing',
      'Audit trail tracker with multi-format export capabilities',
      'Real-time compliance score calculation and KPI overview dashboard',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Risk Analytics', 'Dashboard'],
    image: new URL('../assets/images/project_compliance_compass_1794045522098.jpg', import.meta.url).href,
    liveUrl: 'https://compliance-compass-web.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/Compliance-Compass22',
  },

  {
    id: 'literary-haven',
    number: '02',
    title: 'Literary Haven',
    category: 'E-commerce Platform',
    tagline: 'Discover Books. Explore Ideas. Find Your Next Read.',
    description:
      'A modern online bookstore offering a wide collection of books across multiple categories, including fiction, technology, computer science, business, psychology, and literature.',
    overview:
      'Literary Haven is a premium online bookstore designed to make book discovery and shopping easy. It features curated book collections, featured titles, bestsellers, new arrivals, category-based browsing, and a personalized reading experience.',
    keyFeatures: [
      'Extensive book collection with multiple categories and genres',
      'Featured books, bestsellers, and new arrivals sections',
      'Category-based book browsing and discovery',
      'Book ratings, pricing, and product details',
      'Add-to-cart shopping functionality',
      'Newsletter subscription for new releases and reading lists',
      'Responsive and user-friendly bookstore interface',
    ],
    tags: [
      'E-commerce',
      'Online Bookstore',
      'Book Catalog',
      'Shopping Cart',
      'Responsive Design',
      'Product Discovery'
    ],
    image: new URL('../assets/images/iterary-haven-main.png', import.meta.url).href,
    liveUrl: 'https://literary-haven-main11.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/literary-haven-main',
  },

  {
    id: 'dreamscape-worlds',
    number: '03',
    title: 'Dreamscape Worlds',
    category: 'Creative Storytelling Platform',
    tagline: 'An Animated Universe of Stories, Characters & Imagination',
    description:
      'An immersive anime-inspired storytelling platform featuring animated characters, cinematic short stories, video collections, digital artwork, wallpapers, and relaxing ambient experiences.',
    overview:
      'Dreamscape Worlds is a creative digital universe where visitors can explore unique characters, discover animated stories, watch cinematic videos, browse beautiful artwork, and download wallpapers. The platform brings together storytelling, anime-inspired visuals, music, and immersive experiences in one interactive website.',
    keyFeatures: [
      'Interactive character showcase featuring Yuna, Kai, Mio, and Haru',
      'Animated stories and cinematic video collections',
      'Artwork gallery with category-based filtering',
      'Downloadable desktop and mobile wallpapers',
      'Story playlists and music experiences',
      'Rainy Window ambient experience and Rain Mode',
      'Explore Stories and Watch Videos sections',
      'Responsive and visually immersive user interface',
    ],
    tags: [
      'Creative Web Design',
      'Anime',
      'Storytelling',
      'Interactive Gallery',
      'Video Experience',
      'Responsive Design',
    ],
    image: new URL('../assets/images/dreamscape_worlds.png', import.meta.url).href,
    liveUrl: 'https://dreamscape-worlds3478.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/dreamscape-worlds3478',
  },

  {
    id: 'nexus-apex-systems',
    number: '04',
    title: 'Nexus AI Systems',
    category: 'Enterprise AI Automation Platform',
    tagline: 'Replacing Sales Teams with Intelligent AI Systems',
    description:
      'An enterprise AI automation platform designed to automate sales operations, lead qualification, AI-powered calling, customer follow-ups, CRM management, and revenue workflows.',
    overview:
      'Nexus AI Systems is an intelligent business automation platform that helps organizations streamline their sales and revenue operations. It combines AI sales agents, voice calling agents, appointment scheduling, CRM automation, marketing automation, and custom AI solutions into one integrated operating system.',
    keyFeatures: [
      'AI-powered sales agents for lead qualification and customer engagement',
      'AI calling agents for automated voice conversations and follow-ups',
      'Automated appointment scheduling and meeting management',
      'CRM automation and customer data management',
      'Workflow and marketing automation',
      'AI chatbots for customer support and lead conversion',
      'Executive dashboard with revenue analytics and performance tracking',
      'ROI calculator and business performance insights',
      'CRM and telephony integrations',
      'Interactive AI solution finder and knowledge assistant',
    ],
    tags: [
      'AI Automation',
      'Artificial Intelligence',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'CRM Automation',
      'AI Agents',
      'SaaS Platform',
    ],
    image: new URL('../assets/images/nexus_apex_systems.png', import.meta.url).href,
    liveUrl: 'https://nexus-system89.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/nexus-apex-systems',
  },

  {
    id: 'developer-portfolio',
    number: '05',
    title: 'Developer Portfolio',
    category: 'Creative Web',
    tagline: 'High-Impact Personal Brand Showcase',
    description:
      'A professional personal portfolio showcasing web development skills, visual design finesse, and client case studies.',
    overview:
      'A bespoke portfolio developed to demonstrate creative frontend engineering, fluid motion choreography, dark neon visual identity, and responsive architecture.',
    keyFeatures: [
      'Custom dark purple neon visual theme with glassmorphic depth',
      'Fluid transitions and micro-interactions powered by modern animation libraries',
      'Interactive project showcase with live previews and modal case studies',
      'Performance-tuned score with zero-layout shift responsive behavior',
    ],
    tags: ['React.js', 'Motion', 'Dark Aesthetics', 'Glassmorphism', 'TypeScript'],
    image: new URL('../assets/images/project_developer_portfolio_1794045523030.jpg', import.meta.url).href,
    liveUrl: 'https://portfolio11117.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/portfolio11117',
  },

  {
    id: 'cert-of-things',
    number: '06',
    title: 'CertOfThings',
    category: 'Web Platform',
    tagline: 'Internship Discovery & Candidate Application Portal',
    description:
      'An internship platform featuring internship listings, candidate application flows, and custom duration selection.',
    overview:
      'CertOfThings bridges aspiring professionals with emerging tech opportunities. The application features intuitive exploration, granular filters, and a seamless multi-stage application pipeline.',
    keyFeatures: [
      'Multi-stage candidate application flow with live progress tracking',
      'Duration selection filters (1, 3, 6, 9+ months) and domain categorisation',
      'Applicant profile builder and document submission interface',
      'Fast responsive search across remote and hybrid opportunities',
    ],
    tags: ['React', 'Node.js', 'Tailored Forms', 'Interactive Application Flow', 'Tailwind CSS'],
    image: new URL('../assets/images/project_certofthings_1794045522503.jpg', import.meta.url).href,
    liveUrl: 'https://internship-for-student-12.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/internship-for-student-',
  },

  {
    id: 'humanify-ai-suite',
    number: '05',
    title: 'Humanify AI Suite',
    category: 'AI SaaS Platform',
    tagline: 'Transform Your Writing Instantly',
    description:
      'A premium AI-powered writing platform featuring six tools to humanize, paraphrase, simplify, summarize, change tone, and fix grammar.',
    overview:
      'A modern AI writing SaaS platform built with a premium purple-and-white visual identity, smooth animations, responsive layouts, and interactive writing interfaces.',
    keyFeatures: [
      'AI Humanizer for natural and human-like writing',
      'Paraphraser, Tone Changer, and Text Simplifier',
      'AI Summarizer and Grammar Fix tools',
      'Modern purple-and-white SaaS interface',
      'Responsive design with smooth animations',
      'Interactive AI writing experience',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'AI',
      'SaaS',
      'Tailwind CSS',
      'Supabase',
    ],
    image: new URL('../assets/images/12.jpg', import.meta.url).href,
    liveUrl: 'https://humanify-ai-suite-009.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/humanify-AI-Suite-',
  },

  {
    id: 'noor-studio',
    number: '07',
    title: 'Noor Studio',
    category: 'E-commerce Platform',
    tagline: 'Elegant Fashion. Effortless Shopping.',
    description:
      'A modern women’s fashion e-commerce website featuring product collections, shopping cart, customer authentication, and order management.',
    overview:
      'Noor Studio is a stylish online fashion store designed to provide a seamless shopping experience. It features product categories, product variations, customer authentication, cart and checkout functionality, and an admin dashboard for managing products and orders.',
    keyFeatures: [
      'Modern women’s fashion e-commerce website',
      'Product categories and collections',
      'Shopping cart and checkout functionality',
      'Customer registration and login',
      'Admin dashboard for product management',
      'Order management system',
      'Responsive design for mobile and desktop',
      'Firebase integration',
    ],
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Firebase',
      'E-commerce',
      'Tailwind CSS',
      'Full Stack Development',
    ],
    image: new URL('../assets/images/noor-studio.png', import.meta.url).href,
    liveUrl: 'https://noor-studio-o.vercel.app/',
    githubUrl: 'https://github.com/sawairamaryam837-spec/store-Noor-store123',
  },
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  // PROFESSIONAL EXPERIENCE

  {
    number: '01',
    title: 'FREELANCE WEB DEVELOPER',
    description: 'Self-Employed | January 2026 - Present',
    details:
      'Designed and developed personal portfolio websites, responsive interfaces, and functional web applications. Focused on debugging, user experience, and modern frontend solutions.',
    milestones: [
      'Personal portfolio development',
      'Responsive web applications',
      'Frontend debugging and optimization',
      'Client-focused development',
    ],
  },
  {
    number: '02',
    title: 'WEB DEVELOPER',
    description: 'ARCH Technology | March 2026 - May 2026',
    details:
      'Worked on web development tasks, creating user-friendly interfaces, improving frontend development skills, and gaining practical experience with professional development workflows.',
    milestones: [
      'Frontend development',
      'Responsive UI implementation',
      'Website functionality improvements',
      'Professional development workflow',
    ],
  },
  {
    number: '03',
    title: 'FULL STACK DEVELOPMENT INTERN',
    description: 'CodeOrbit Tech | Internship',
    details:
      'Gained hands-on experience in Full Stack Development by working on real-world learning modules and practical projects. Strengthened frontend and backend development knowledge while improving problem-solving, debugging, and coding skills.',
    milestones: [
      'Practical full stack development projects',
      'Frontend development',
      'Backend development fundamentals',
      'Problem-solving and debugging',
    ],
  },
  {
    number: '04',
    title: 'FRONT-END WEB DEVELOPMENT INTERN',
    description: 'One Stop Creator | November 2025 - January 2026',
    details:
      'Designed user-friendly web interfaces using HTML, CSS, and JavaScript. Built responsive web pages with Bootstrap, implemented CSS animations, collaborated with developers, and participated in testing and code reviews.',
    milestones: [
      'HTML, CSS and JavaScript',
      'Responsive Bootstrap layouts',
      'CSS animations and UI improvements',
      'Code reviews and feature testing',
    ],
  },
];