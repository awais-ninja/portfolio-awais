"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

const ProjectCard = ({ project, index }) => (
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
          src={project.image || "/project-1.jpg"}
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
          {(project.tags || project.technologies || []).map((tag, i) => (
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

        {/* View Project Link */}
        <Link
          href={project.link}
          className="inline-flex items-center justify-center w-full text-primary hover:text-accent transition-colors border border-primary hover:border-accent rounded-full py-2 mt-4 group-hover:bg-primary/5"
        >
          <span>View Project</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
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
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors duration-300"
          >
            <span>View All Projects</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
