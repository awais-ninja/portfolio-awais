"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const projects = [
  {
    id: "aaziz-and-co",
    title: "Aaziz & Co Accountants",
    description:
      "A professional accounting website that builds trust and streamlines client inquiries.",
    thumbnail: "/projects/aaziz/aaziz-main.jpg",
    images: [
      "/projects/aaziz/aaziz-home-1.jpg",
      "/projects/aaziz/aaziz-home-2.jpg",
      "/projects/aaziz/aaziz-home-3.jpg",
      "/projects/aaziz/aaziz-home-4.jpg",
      "/projects/aaziz/aaziz-home-5.jpg",
      "/projects/aaziz/aaziz-home-6.jpg",
      "/projects/aaziz/aaziz-home-7.jpg",
      "/projects/aaziz/aaziz-home-8.jpg",
      "/projects/aaziz/aaziz-about-1.jpg",
      "/projects/aaziz/aaziz-about-2.jpg",
      "/projects/aaziz/aaziz-about-3.jpg",
      "/projects/aaziz/aaziz-about-4.jpg",
      "/projects/aaziz/aaziz-about-5.jpg",
      "/projects/aaziz/aaziz-about-6.jpg",
      "/projects/aaziz/aaziz-blog-1.jpg",
      "/projects/aaziz/aaziz-blog-2.jpg",
      "/projects/aaziz/aaziz-blog-3.jpg",
      "/projects/aaziz/aaziz-blog-4.jpg",
      "/projects/aaziz/aaziz-contact-1.jpg",
      "/projects/aaziz/aaziz-contact-2.jpg",
      "/projects/aaziz/aaziz-contact-3.jpg",
      "/projects/aaziz/aaziz-pricing-1.jpg",
      "/projects/aaziz/aaziz-pricing-2.jpg",
      "/projects/aaziz/aaziz-pricing-3.jpg",
    ],
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Lead Generation"],
    projectStory:
      "Aaziz & Co, a fast-growing UK-based accounting firm, needed a reliable digital presence to gain local trust and attract small business clients. Their previous site lacked clarity, mobile optimization, and failed to convert website visitors into leads.",
    solution:
      "ADS redesigned their website with a sharp, modern layout that clearly communicates services like tax returns, bookkeeping, and business consultation. We also implemented an SEO strategy focused on local searches and added a quick-contact form with WhatsApp integration.",
    keyFeatures: [
      "Service Pages for Accounting, Bookkeeping, Tax Advice",
      "Lead Capture Form with WhatsApp Integration",
      "Google Maps Location & Embedded Reviews",
      "FAQ Section for Quick Answers",
      "SEO Optimization for 'Accountants in UK' and Local Search Terms",
    ],
    impact: [
      "2x increase in contact form submissions within 60 days",
      "Ranked on page 1 for 'accountants near me' in local area",
      "Boosted trust with over 25 Google reviews linked on-site",
    ],
  },
  {
    id: "flaggedupemployee",
    title: "FlaggedUpEmployee",
    description:
      "A landing page built to raise awareness around employee rights, workplace violations, and whistleblower support in the UK.",
    thumbnail: "/projects/flagged/flagged-main.jpg",
    images: [
      "/projects/flagged/flagged-1.jpg",
      "/projects/flagged/flagged-2.jpg",
      "/projects/flagged/flagged-3.jpg",
      "/projects/flagged/flagged-4.jpg",
      "/projects/flagged/flagged-5.jpg",
      "/projects/flagged/flagged-6.jpg",
      "/projects/flagged/flagged-7.jpg",
    ],
    category: "Web Development",
    tags: ["React", "Tailwind CSS", "SEO", "Awareness Campaign"],
    projectStory:
      "FlaggedUpEmployee was created to help workers in the UK understand their legal rights and anonymously report workplace issues like discrimination, harassment, and unfair dismissal. The mission was to build trust and reach victims in a safe, accessible way.",
    solution:
      "ADS developed an awareness-focused landing site with calm, empathetic visuals, accessible fonts, and a mobile-first layout. The content is structured for SEO using legal terms, FAQs, and calls to action that gently guide users to support and legal resources.",
    keyFeatures: [
      "Educational Content on Employment Rights & Protections",
      "Anonymous Contact & Support Request Form",
      "GDPR-Compliant Structure for Trust & Privacy",
      "Blog Section with Ongoing Employment News & Guides",
      "SEO Strategy Using Legal Keywords and Long-Tail Phrases",
    ],
    impact: [
      "Built strong organic reach on search engines through legal keyword content",
      "Received multiple support form submissions in the first month",
      "Created a digital space that empowers workers to take action",
    ],
  },
  {
    id: "brainloggers-limited",
    title: "Brainloggers Limited",
    description:
      "A cutting-edge corporate site for an IT & software company focused on innovation and partnerships.",
    thumbnail: "/projects/brainloggers/brainloggers-main.jpg",
    images: [
      "/projects/brainloggers/brainloggers-1.jpg",
      "/projects/brainloggers/brainloggers-2.jpg",
      "/projects/brainloggers/brainloggers-3.jpg",
      "/projects/brainloggers/brainloggers-4.jpg",
      "/projects/brainloggers/brainloggers-5.jpg",
    ],
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "B2B", "Corporate"],
    projectStory:
      "Brainloggers Limited needed a modern, high-trust website to reflect their expertise in custom software, cloud solutions, and digital transformation. Their old landing page was outdated, lacked authority, and didn't represent their B2B focus.",
    solution:
      "We built a modern corporate site with clear service breakdowns, sleek animations, client trust logos, and case study highlights. The new site positions Brainloggers as a strong partner for enterprise clients while staying startup-friendly.",
    keyFeatures: [
      "Clean Hero with Value Proposition & CTA",
      "Service Pages for Software, Cloud, AI, and Security",
      "Case Study Highlights & Client Logos",
      "Careers Page with Dynamic Job Listings",
      "Contact Page with Smart Lead Routing",
    ],
    impact: [
      "Increased B2B leads through improved authority messaging",
      "Lower bounce rate by 45% within 3 weeks",
      "Enabled better talent acquisition with structured job board",
    ],
  },
  {
    id: "daniyal-portfolio",
    title: "Daniyal Portfolio Website",
    description:
      "A clean, professional portfolio built to showcase Daniyal's design and development skills with real-world project highlights.",
    thumbnail: "/projects/daniyal/daniyal-main.jpg",
    images: [
      "/projects/daniyal/daniyal-1.jpg",
      "/projects/daniyal/daniyal-2.jpg",
      "/projects/daniyal/daniyal-3.jpg",
      "/projects/daniyal/daniyal-4.jpg",
      "/projects/daniyal/daniyal-5.jpg",
      "/projects/daniyal/daniyal-6.jpg",
      "/projects/daniyal/daniyal-7.jpg",
      "/projects/daniyal/daniyal-8.jpg",
      "/projects/daniyal/daniyal-cv-1.jpg",
      "/projects/daniyal/daniyal-cv-2.jpg",
      "/projects/daniyal/daniyal-cv-3.jpg",
    ],
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Portfolio", "Personal Branding"],
    projectStory:
      "Daniyal needed a portfolio website to present himself professionally to recruiters and clients. He wanted to showcase UI work, explain his process, and have a minimal contact system — all in a lightweight, modern layout.",
    solution:
      "We developed a smooth-scrolling, visually clean site with a strong focus on project visuals, technology tags, and a timeline-style resume. It's fully mobile-optimized and structured with semantic HTML for SEO and accessibility.",
    keyFeatures: [
      "Lightweight, Minimal Design with Bold Typography",
      "Project Cards with Tech Stack & Previews",
      "About Section with Skills & Education Timeline",
      "Sticky Header Navigation & Scroll Animations",
      "Contact Section with Mailto & WhatsApp",
    ],
    impact: [
      "Improved professional visibility in job applications",
      "Helped establish a personal brand for freelance work",
      "Enabled easier outreach through direct contact buttons",
    ],
  },
  {
    id: "clean-it-cleaner",
    title: "Clean It Cleaner Services",
    description:
      "A high-converting website for a UK cleaning company, designed to attract residential and commercial clients.",
    thumbnail: "/projects/cleanit/cleanit-main.jpg",
    images: [
      "/projects/cleanit/cleanit-1.jpg",
      "/projects/cleanit/cleanit-2.jpg",
      "/projects/cleanit/cleanit-3.jpg",
      "/projects/cleanit/cleanit-4.jpg",
    ],
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Local SEO", "Lead Generation"],
    projectStory:
      "Clean It Cleaner Services needed a website that would help them stand out in a competitive cleaning market. Their previous site had no clear service breakdown, poor mobile usability, and lacked any SEO structure — resulting in low enquiries.",
    solution:
      "ADS delivered a professional, responsive site tailored for both domestic and commercial clients. We included an instant quote form, Google reviews integration, and optimized for location-based keywords like 'cleaners near me'.",
    keyFeatures: [
      "Service Sections: Home Cleaning, Office Cleaning, End of Tenancy",
      "Instant Quote Request Form with Email Integration",
      "Live Google Reviews & Ratings Widget",
      "Photo Gallery for Before/After Results",
      "SEO for Local Searches Across Multiple Areas",
    ],
    impact: [
      "150% increase in quote requests within 30 days",
      "Ranked in top 3 for 'cleaning services [city name]' within 2 months",
      "Google Business profile views doubled after site launch",
    ],
  },
  {
    id: "awais-portfolio",
    title: "Awais Portfolio Website",
    description:
      "A personal portfolio built to showcase full-stack projects, technical skills, and client work with a clean, modern design.",
    thumbnail: "/projects/awais/awais-main.jpg",
    images: [
      "/projects/awais/awais-1.jpg",
      "/projects/awais/awais-2.jpg",
      "/projects/awais/awais-3.jpg",
      "/projects/awais/awais-4.jpg",
      "/projects/awais/awais-5.jpg",
      "/projects/awais/awais-6.jpg",
    ],
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Portfolio", "Full Stack"],
    projectStory:
      "As a full-stack developer, Awais needed a personal website to highlight his professional work, code projects, client experience, and technical stack. The goal was to attract freelance clients and establish a strong digital presence.",
    solution:
      "We designed and built a responsive, dark-themed portfolio using Next.js and TailwindCSS. The layout emphasizes clarity and smooth UX with smart navigation, a real-time project grid, and a minimal contact section.",
    keyFeatures: [
      "Fully Responsive Design (Next.js + Tailwind)",
      "Project Showcase with Visual Thumbnails",
      "Smooth Scroll Navigation & Sticky Navbar",
      "Dark Mode UI with Clean Typography",
      "Linked Contact Form (Email & WhatsApp)",
    ],
    impact: [
      "Created a strong personal brand to win freelance clients",
      "Improved visibility on Google for 'Freelance Web Developer UK'",
      "Boosted professional confidence through a polished online identity",
    ],
  },
];

const BackgroundShapes = () => (
  <>
    {/* Animated circles */}
    <motion.div
      initial={{ x: -100, y: -100 }}
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl"
    />
    <motion.div
      initial={{ x: 100, y: 100 }}
      animate={{
        x: [0, -100, 0],
        y: [0, 100, 0],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl"
    />
    {/* Animated squares */}
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={{
        x: [0, 50, 0],
        y: [0, 50, 0],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute right-1/4 top-1/4 w-20 h-20 rounded-lg bg-primary/3 blur-2xl"
    />
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0 }}
      animate={{
        x: [0, -50, 0],
        y: [0, -50, 0],
        rotate: [0, -90, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute left-1/4 bottom-1/4 w-20 h-20 rounded-lg bg-accent/3 blur-2xl"
    />
  </>
);

const ProjectCard = ({ project, index, onOpenModal }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
    }}
    className="group"
  >
    <div className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags/Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* View Project Button */}
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center justify-center w-full text-primary hover:text-accent transition-colors border border-primary hover:border-accent rounded-full py-2 mt-4 group-hover:bg-primary/5"
        >
          <span>View Project</span>
          <FaArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card-bg rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-primary transition-colors z-10"
        >
          <FaTimes size={24} />
        </button>

        {/* Gallery */}
        <div className="relative">
          <div className="relative h-[60vh]">
            <Image
              src={project.images[currentImageIndex]}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <FaArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Details */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-text mb-4">{project.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-text mb-2">
                Project Story
              </h3>
              <p className="text-text-secondary mb-6">{project.projectStory}</p>

              <h3 className="text-xl font-bold text-text mb-2">Solution</h3>
              <p className="text-text-secondary mb-6">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-text-secondary mb-6">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-text mb-2">Impact</h3>
              <ul className="list-disc list-inside text-text-secondary">
                {project.impact.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="projects">
      {/* Background Shapes */}
      <BackgroundShapes />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text relative inline-block">
            Featured Projects
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            />
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenModal={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
