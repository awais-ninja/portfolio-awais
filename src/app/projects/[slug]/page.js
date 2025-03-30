"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// This would typically come from a CMS or database
const projectData = {
  "portfolio-website": {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
    timeline: [
      {
        phase: "Planning & Design",
        duration: "1 week",
        tasks: [
          "Requirements gathering",
          "UI/UX design",
          "Component architecture planning",
          "Animation strategy",
        ],
      },
      {
        phase: "Development",
        duration: "3 weeks",
        tasks: [
          "Frontend development with Next.js",
          "Responsive design implementation",
          "Animation integration with Framer Motion",
          "Performance optimization",
        ],
      },
      {
        phase: "Testing & Deployment",
        duration: "1 week",
        tasks: [
          "Cross-browser testing",
          "Mobile responsiveness testing",
          "Performance testing",
          "Production deployment",
        ],
      },
    ],
    challenges: [
      "Creating smooth animations across different devices",
      "Optimizing performance with large images",
      "Ensuring consistent design across all pages",
    ],
    solutions: [
      "Implemented progressive loading and lazy loading",
      "Used Framer Motion for optimized animations",
      "Created reusable components for consistent design",
    ],
    results: [
      "100% responsive design",
      "95+ Lighthouse performance score",
      "Smooth animations on all devices",
    ],
    github: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "/projects/ecommerce.jpg",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    timeline: [
      {
        phase: "Planning & Design",
        duration: "2 weeks",
        tasks: [
          "Requirements gathering",
          "UI/UX design",
          "Database schema design",
          "API architecture planning",
        ],
      },
      {
        phase: "Development",
        duration: "8 weeks",
        tasks: [
          "Frontend development with React",
          "Backend API development",
          "Database implementation",
          "Payment integration",
        ],
      },
      {
        phase: "Testing & Deployment",
        duration: "2 weeks",
        tasks: [
          "Quality assurance testing",
          "Performance optimization",
          "Security audit",
          "Production deployment",
        ],
      },
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple users",
      "Optimizing database queries for high-traffic scenarios",
      "Ensuring secure payment processing",
    ],
    solutions: [
      "Utilized WebSocket for real-time updates",
      "Implemented database indexing and caching",
      "Integrated Stripe with proper security measures",
    ],
    results: [
      "200% increase in sales",
      "50% reduction in inventory management time",
      "99.9% uptime",
    ],
    github: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform.com",
  },
  "digital-marketing": {
    title: "Digital Marketing Campaign",
    description:
      "Comprehensive digital marketing strategy that increased client's online presence by 200%.",
    image: "/projects/marketing.jpg",
    category: "Digital Marketing",
    tags: ["SEO", "Social Media", "Content Strategy", "Analytics"],
    timeline: [
      {
        phase: "Research & Analysis",
        duration: "2 weeks",
        tasks: [
          "Market research",
          "Competitor analysis",
          "Audience profiling",
          "Channel selection",
        ],
      },
      {
        phase: "Strategy Development",
        duration: "2 weeks",
        tasks: [
          "Content strategy planning",
          "SEO optimization",
          "Social media strategy",
          "Campaign planning",
        ],
      },
      {
        phase: "Implementation",
        duration: "12 weeks",
        tasks: [
          "Content creation",
          "Social media management",
          "SEO implementation",
          "Analytics tracking",
        ],
      },
    ],
    challenges: [
      "Increasing organic traffic in a competitive market",
      "Maintaining consistent brand voice across channels",
      "Measuring campaign effectiveness",
    ],
    solutions: [
      "Implemented comprehensive SEO strategy",
      "Created detailed content guidelines",
      "Set up advanced analytics tracking",
    ],
    results: [
      "200% increase in online presence",
      "150% growth in organic traffic",
      "300% increase in social media engagement",
    ],
    liveUrl: "https://marketing-campaign.com",
  },
  "brand-identity": {
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo, color scheme, and marketing materials.",
    image: "/projects/branding.jpg",
    category: "Graphic Design",
    tags: ["Logo Design", "Brand Strategy", "Typography", "Visual Identity"],
    timeline: [
      {
        phase: "Discovery",
        duration: "1 week",
        tasks: [
          "Client consultation",
          "Brand research",
          "Competitor analysis",
          "Target audience study",
        ],
      },
      {
        phase: "Design",
        duration: "3 weeks",
        tasks: [
          "Logo design",
          "Color palette development",
          "Typography selection",
          "Visual elements creation",
        ],
      },
      {
        phase: "Implementation",
        duration: "2 weeks",
        tasks: [
          "Brand guidelines creation",
          "Marketing materials design",
          "Social media assets",
          "Documentation",
        ],
      },
    ],
    challenges: [
      "Creating a unique and memorable brand identity",
      "Ensuring consistency across all touchpoints",
      "Meeting client expectations",
    ],
    solutions: [
      "Developed comprehensive brand guidelines",
      "Created detailed design system",
      "Regular client feedback sessions",
    ],
    results: [
      "100% client satisfaction",
      "Consistent brand presence",
      "Increased brand recognition",
    ],
    liveUrl: "https://brand-identity.com",
  },
};

export default function ProjectPage({ params }) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-text pt-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-text pt-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-text-secondary hover:text-primary transition-colors duration-300"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-background/50 text-text-secondary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl">
            {project.description}
          </p>

          <div className="flex gap-4 mt-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-background/50 rounded-full text-text-secondary hover:text-primary transition-colors duration-300"
              >
                <FaGithub className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300"
              >
                <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
          <div className="space-y-8">
            {project.timeline.map((phase, index) => (
              <div
                key={phase.phase}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full" />
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                  <span className="text-sm text-text-secondary">
                    {phase.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="text-text-secondary">
                      • {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Solutions</h3>
              <ul className="space-y-3">
                {project.solutions.map((solution) => (
                  <li key={solution} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result) => (
              <div
                key={result}
                className="bg-card-bg p-6 rounded-2xl text-center"
              >
                <p className="text-text-secondary">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
