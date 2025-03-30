"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const rotateAnimation = {
  rotate: 360,
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 transform-gpu animate-gradient" />

        {/* Animated elements */}
        <div className="absolute inset-0">
          {/* Rotating world */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            animate={rotateAnimation}
          >
            <div className="w-full h-full rounded-full border-2 border-primary/20 relative">
              {/* World map elements */}
              <div className="absolute inset-0 rounded-full bg-primary/5" />
              <div className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full bg-primary/10" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-primary/10" />
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8"
            animate={floatingAnimation}
          >
            <div className="w-full h-full rounded-full bg-primary/20" />
          </motion.div>

          <motion.div
            className="absolute top-3/4 right-1/4 w-6 h-6"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 },
            }}
          >
            <div className="w-full h-full rounded-full bg-accent/20" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-10 h-10"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 2 },
            }}
          >
            <div className="w-full h-full rounded-full bg-primary/20" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-1/3 w-8 h-8"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 3 },
            }}
          >
            <div className="w-full h-full rounded-full bg-accent/20" />
          </motion.div>

          {/* Decorative lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          </div>
        </div>

        {/* Grid pattern with fade */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-lg text-accent font-medium">👋 Hey, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
          >
            Awais Ahmad
          </motion.h1>

          {/* Roles */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-8 text-text-secondary"
          >
            <span className="flex items-center gap-2">
              <span className="text-primary">💻</span> Web Dev
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">📢</span> Digital Marketing
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">🎨</span> Graphics
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✉️</span> Email Marketing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-text"
          >
            Transforming Ideas into Stunning Digital Experiences!
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto"
          >
            I'm a Web Developer, Digital Marketer, Graphic Designer, and Email
            Marketing Specialist. Let's create high-performing websites,
            captivating designs, and growth-driven marketing strategies
            together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="btn btn-accent hover:scale-105 transition-transform"
            >
              Hire Me
            </Link>
            <Link
              href="/inquiry"
              className="btn btn-primary hover:scale-105 transition-transform"
            >
              Make an Inquiry
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
