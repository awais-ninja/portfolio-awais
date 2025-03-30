"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
    link: "/projects/portfolio-website",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/projects/ecommerce-platform",
  },
  {
    id: 3,
    title: "Digital Marketing Campaign",
    description:
      "Comprehensive digital marketing strategy that increased client's online presence by 200%.",
    image: "/project-1.jpg",
    category: "Digital Marketing",
    tags: ["SEO", "Social Media", "Content Strategy", "Analytics"],
    link: "/projects/digital-marketing",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo, color scheme, and marketing materials.",
    image: "/project-1.jpg",
    category: "Graphic Design",
    tags: ["Logo Design", "Brand Strategy", "Typography", "Visual Identity"],
    link: "/projects/brand-identity",
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "Developed a custom portfolio website for a freelance web developer, showcasing their work, client testimonials, and services. The design focused on a clean and professional layout.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    link: "/projects/personal-portfolio",
  },
  {
    id: 6,
    title: "E-commerce Website for Fashion Retailer",
    description:
      "Built an e-commerce platform for a fashion retailer, featuring product categories, shopping cart integration, and payment gateway setup. The store saw a 30% increase in conversions after launch.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["Shopify", "React.js", "Stripe API", "Tailwind CSS"],
    link: "/projects/fashion-ecommerce",
  },
  {
    id: 7,
    title: "SEO-Optimized Website for Local Business",
    description:
      "Redesigned a local business website with an emphasis on SEO, increasing organic traffic by 50% within two months. Focused on local SEO strategies and content optimization.",
    image: "/project-1.jpg",
    category: "Digital Marketing",
    tags: ["WordPress", "Elementor", "Yoast SEO"],
    link: "/projects/seo-website",
  },
  {
    id: 8,
    title: "Email Marketing Campaign for Health & Wellness Brand",
    description:
      "Created an automated email marketing campaign that improved customer engagement and product sales for a health & wellness brand. The campaign included newsletters and seasonal promotions.",
    image: "/project-1.jpg",
    category: "Digital Marketing",
    tags: ["Mailchimp", "Klaviyo", "HTML/CSS"],
    link: "/projects/email-campaign",
  },
  {
    id: 9,
    title: "Multi-Page Website for Real Estate Agency",
    description:
      "Designed a real estate website with property listings, search filters, and an interactive map for a local agency. The website increased lead generation by 30%.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["React.js", "Tailwind CSS", "Google Maps API"],
    link: "/projects/real-estate",
  },
  {
    id: 10,
    title: "Branding and Logo Design for Restaurant",
    description:
      "Designed a complete branding package, including logo, menus, and business cards for a new restaurant. The brand identity helped attract customers and build a loyal following.",
    image: "/project-1.jpg",
    category: "Graphic Design",
    tags: ["Adobe Illustrator", "Photoshop"],
    link: "/projects/restaurant-branding",
  },
  {
    id: 11,
    title: "Event Landing Page for Music Festival",
    description:
      "Developed a landing page for a music festival that included event details, ticket purchasing options, and a countdown timer. The page generated significant traffic and ticket sales.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "Mailchimp"],
    link: "/projects/music-festival",
  },
  {
    id: 12,
    title: "Custom Blog for Travel Influencer",
    description:
      "Created a custom blog website for a travel influencer to showcase their travel stories, photography, and travel guides. Integrated social media feeds and a newsletter sign-up form.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["WordPress", "Elementor", "Instagram API"],
    link: "/projects/travel-blog",
  },
  {
    id: 13,
    title: "Professional Website for Freelance Designer",
    description:
      "Designed a personal website for a freelance designer, including a portfolio gallery, client testimonials, and contact forms. The website helped increase new client inquiries.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    link: "/projects/designer-portfolio",
  },
  {
    id: 14,
    title: "Social Media Marketing for Fitness Brand",
    description:
      "Managed a comprehensive social media marketing campaign for a fitness brand, using Facebook and Instagram Ads to increase engagement and brand awareness.",
    image: "/project-1.jpg",
    category: "Digital Marketing",
    tags: ["Facebook Ads", "Instagram Ads", "Canva"],
    link: "/projects/fitness-marketing",
  },
  {
    id: 15,
    title: "Online Booking System for Hair Salon",
    description:
      "Developed a website for a hair salon that included an online booking system, service descriptions, and a contact page. The site helped increase appointment bookings.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["React.js", "Node.js", "MongoDB"],
    link: "/projects/salon-booking",
  },
  {
    id: 16,
    title: "Graphic Design for Product Launch Campaign",
    description:
      "Designed promotional materials (posters, banners, and flyers) for a product launch. The visual designs helped increase attention and engagement during the launch.",
    image: "/project-1.jpg",
    category: "Graphic Design",
    tags: ["Adobe Illustrator", "Photoshop"],
    link: "/projects/product-launch",
  },
  {
    id: 17,
    title: "Newsletter Template for Non-Profit Organization",
    description:
      "Created an engaging newsletter template for a non-profit organization, helping them reach their donors and volunteers effectively.",
    image: "/project-1.jpg",
    category: "Digital Marketing",
    tags: ["Mailchimp", "HTML", "CSS"],
    link: "/projects/nonprofit-newsletter",
  },
  {
    id: 18,
    title: "Landing Page for Software Product",
    description:
      "Built a high-conversion landing page for a SaaS product, highlighting its features, pricing, and call-to-action (CTA) buttons to increase sign-ups.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["React.js", "Tailwind CSS"],
    link: "/projects/saas-landing",
  },
  {
    id: 19,
    title: "Website Redesign for Law Firm",
    description:
      "Redesigned a website for a law firm, improving the user experience, mobile responsiveness, and navigation. The redesign helped increase lead inquiries by 20%.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["WordPress", "Elementor", "Google Analytics"],
    link: "/projects/law-firm",
  },
  {
    id: 20,
    title: "Digital Ad Campaign for E-commerce Store",
    description:
      "Designed and managed digital ads for an online store, including Google Shopping and Facebook Ads, resulting in a 35% increase in conversions.",
    image: "/project-1.jpg",
    category: "Digital Marketing",
    tags: ["Google Ads", "Facebook Ads", "Photoshop"],
    link: "/projects/ecommerce-ads",
  },
  {
    id: 21,
    title: "Corporate Website for a Marketing Agency",
    description:
      "Developed a corporate website for a marketing agency, including service pages, case studies, and client testimonials. The website helped showcase their expertise and increase client trust.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["WordPress", "Elementor", "Google Analytics"],
    link: "/projects/marketing-agency",
  },
  {
    id: 22,
    title: "E-commerce Website for Handmade Jewelry Store",
    description:
      "Built an e-commerce platform for a handmade jewelry business, including product catalog, shopping cart, and payment gateway integration.",
    image: "/project-1.jpg",
    category: "Web Development",
    tags: ["Shopify", "React.js", "Stripe API"],
    link: "/projects/jewelry-store",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              All Projects
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Explore my complete portfolio of web development, digital
              marketing, and design projects. Each project represents a unique
              challenge and solution.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <Link key={project.id} href={project.link} className="group">
                <motion.div
                  variants={item}
                  className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary">
                        {project.category}
                      </span>
                      <FaArrowRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-background/50 rounded-full text-xs text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
