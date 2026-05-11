import {
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  CloudCog,
  Code2,
  GraduationCap,
  Megaphone,
  Network,
  ShoppingCart,
  Waypoints,
} from "lucide-react";

export const serviceCategories = [
  {
    slug: "amazon-ecommerce-management",
    title: "Amazon & eCommerce Management",
    eyebrow: "Marketplace growth",
    icon: ShoppingCart,
    summary:
      "A2Z marketplace operations for Amazon, eBay, and growing ecommerce brands that need reliable execution, better listings, and cleaner account health.",
    outcomes: ["Launch-ready marketplace setup", "Stronger product pages", "Inventory and order clarity", "Account health support"],
    features: [
      "Amazon FBA",
      "eBay business support",
      "A2Z Amazon account management",
      "Product research",
      "Listing optimization",
      "Store management",
      "Order, inventory, and account health support",
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    eyebrow: "Product engineering",
    icon: Code2,
    summary:
      "Modern websites, SaaS products, business portals, ERP/CRM systems, automation tools, and API integrations designed for real teams and measurable operations.",
    outcomes: ["Premium web presence", "Workflow automation", "Custom dashboards", "Scalable software architecture"],
    features: ["Website development", "Web application development", "SaaS development", "ERP / CRM solutions", "Custom automation tools", "API integration"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Demand creation",
    icon: Megaphone,
    summary:
      "Conversion-focused growth systems across SEO, social media, paid acquisition, content strategy, lead generation, and brand positioning.",
    outcomes: ["Better organic visibility", "Performance-led campaigns", "Cleaner lead funnels", "Brand authority"],
    features: ["Social media marketing", "SEO", "Paid ads", "Content strategy", "Lead generation", "Brand growth"],
  },
  {
    slug: "affiliate-business-support",
    title: "Affiliate Business Support",
    eyebrow: "Revenue systems",
    icon: Waypoints,
    summary:
      "Affiliate business setup and campaign support, from niche strategy and website foundations to funnels, tracking, analytics, and content planning.",
    outcomes: ["Focused niche strategy", "Affiliate website setup", "Measurable funnels", "Campaign execution support"],
    features: ["Affiliate marketing strategy", "Website setup", "Funnel planning", "Tracking and analytics", "Content and campaign support"],
  },
];

export const trainingPrograms = [
  {
    slug: "amazon-fba",
    title: "Amazon FBA",
    icon: Boxes,
    duration: "10 weeks",
    format: "Online / Offline / Hybrid",
    overview: "A practical Amazon FBA program covering product research, sourcing, listing, launch operations, inventory planning, and account health.",
    audience: ["Aspiring ecommerce entrepreneurs", "Freelancers building marketplace careers", "Business owners entering Amazon"],
    learn: ["Product validation frameworks", "Supplier and sourcing workflows", "Listing SEO and launch planning", "Account health and operational controls"],
    modules: ["Amazon ecosystem and business models", "Product research and validation", "Sourcing, costing, and logistics", "Listing creation and optimization", "Launch, PPC basics, and growth", "Operations, risk, and account health"],
    outcome: "Students leave with a clear FBA launch roadmap and marketplace operations skills that can support a business or client service career.",
    instructor: "Led by ecommerce operators with hands-on marketplace management experience.",
  },
  {
    slug: "ebay-dropshipping",
    title: "eBay Dropshipping",
    icon: ShoppingCart,
    duration: "8 weeks",
    format: "Online / Offline / Hybrid",
    overview: "A focused program for building compliant, research-driven eBay dropshipping workflows with strong supplier, listing, and customer support practices.",
    audience: ["Beginners in online business", "Marketplace freelancers", "Small ecommerce teams"],
    learn: ["Store setup and policy essentials", "Product and supplier research", "Listing optimization", "Order processing and customer service"],
    modules: ["eBay marketplace foundations", "Store setup and compliance", "Product research systems", "Supplier and fulfillment workflows", "Listing copy and optimization", "Customer service and performance metrics"],
    outcome: "Graduates understand how to operate an eBay store with a professional process instead of guesswork.",
    instructor: "Taught by marketplace specialists focused on compliant operations and practical execution.",
  },
  {
    slug: "supply-chain-procurement",
    title: "Supply Chain & Procurement",
    icon: BarChart3,
    duration: "12 weeks",
    format: "Online / Offline / Hybrid",
    overview: "Industry-focused supply chain training covering procurement, vendor management, inventory planning, logistics, negotiation, and reporting.",
    audience: ["Fresh graduates", "Operations executives", "Entrepreneurs managing suppliers"],
    learn: ["Procurement lifecycle", "Supplier evaluation", "Inventory and demand planning", "Cost control and negotiation"],
    modules: ["Supply chain fundamentals", "Procurement planning", "Vendor selection and negotiation", "Inventory and warehouse coordination", "Logistics and documentation", "KPI reporting and risk management"],
    outcome: "A practical foundation for procurement, logistics, warehouse, and operations roles.",
    instructor: "Delivered by professionals with procurement and business operations experience.",
  },
  {
    slug: "ccna-cisco-networking",
    title: "CCNA / Cisco Networking",
    icon: Network,
    duration: "14 weeks",
    format: "Online / Offline / Hybrid",
    overview: "A career-ready networking program aligned with CCNA concepts: routing, switching, IP services, security basics, automation awareness, and labs.",
    audience: ["IT beginners", "Support engineers", "Students preparing for networking careers"],
    learn: ["Network fundamentals", "Routing and switching", "Subnetting and troubleshooting", "Security and automation basics"],
    modules: ["Network models and IP addressing", "Switching and VLANs", "Routing fundamentals", "Wireless and IP services", "Security fundamentals", "Troubleshooting labs and exam preparation"],
    outcome: "Students gain practical networking confidence for junior network, support, and infrastructure roles.",
    instructor: "Guided by networking practitioners using lab-based instruction.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: BrainCircuit,
    duration: "8 weeks",
    format: "Online / Offline / Hybrid",
    overview: "A business-first AI automation program for building useful workflows with AI tools, no-code automation, APIs, prompts, and operational dashboards.",
    audience: ["Business owners", "Marketers", "Freelancers", "Operations teams"],
    learn: ["AI workflow design", "Prompt systems", "No-code automation", "API and tool integration"],
    modules: ["AI automation strategy", "Prompt and assistant design", "Workflow mapping", "Automation tools and integrations", "Lead, content, and support automation", "Deployment, monitoring, and governance"],
    outcome: "Participants finish with automation playbooks and practical workflows for sales, operations, marketing, and support.",
    instructor: "Led by automation builders focused on measurable business outcomes.",
  },
];

export const testimonials = [
  { name: "Nadia Rahman", role: "Founder, Retail Brand", quote: "TechWave-X helped us turn scattered marketplace activity into a measurable ecommerce operation." },
  { name: "Imran Hasan", role: "Amazon FBA Student", quote: "The training was practical, direct, and built around real decisions, not theory slides." },
  { name: "Sarah Chowdhury", role: "Operations Lead", quote: "Their software team understood the workflow first, then built a portal our team actually uses." },
];

export const blogPosts = [
  {
    slug: "amazon-account-health-growth",
    title: "Why Account Health Is the Foundation of Amazon Growth",
    excerpt: "Growth becomes fragile when marketplace operations ignore account health, inventory signals, and listing discipline.",
    category: "eCommerce",
    readTime: "5 min read",
  },
  {
    slug: "ai-automation-for-small-teams",
    title: "AI Automation Ideas Small Teams Can Implement First",
    excerpt: "Start with repeatable workflows: lead routing, content repurposing, support triage, and reporting.",
    category: "AI Automation",
    readTime: "6 min read",
  },
  {
    slug: "what-makes-training-career-ready",
    title: "What Makes a Tech Training Program Career-Ready?",
    excerpt: "Career-ready training connects concepts to projects, feedback, market context, and a clear execution path.",
    category: "Training",
    readTime: "4 min read",
  },
];

export const stats = [
  ["250+", "learners and founders supported"],
  ["4", "business growth service lines"],
  ["5", "industry-focused programs"],
  ["24h", "lead response target"],
];

export const processSteps = ["Discover", "Plan", "Build", "Launch", "Scale"];

export const whyChoose = [
  { icon: CloudCog, title: "Business-first execution", text: "We connect technology, ecommerce, marketing, and training to practical business outcomes." },
  { icon: GraduationCap, title: "Career-ready learning", text: "Training is structured around real workflows, tools, modules, and measurable outcomes." },
  { icon: Bot, title: "Modern systems mindset", text: "AI, automation, cloud, marketplaces, and software are treated as one connected growth engine." },
];
