"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const progressBarVariants = {
  initial: { width: 0 },
  animate: (percentage) => ({
    width: `${percentage}%`,
    transition: { duration: 1.5, ease: "easeOut" },
  }),
};

const skills = [
  {
    name: "Web Development",
    percentage: 95,
    color: "bg-blue-500",
  },
  {
    name: "Digital Marketing",
    percentage: 90,
    color: "bg-purple-500",
  },
  {
    name: "Graphic Design",
    percentage: 85,
    color: "bg-pink-500",
  },
  {
    name: "Email Marketing",
    percentage: 92,
    color: "bg-green-500",
  },
  {
    name: "Social Media Marketing",
    percentage: 95,
    color: "bg-yellow-500",
  },
  {
    name: "Lead Generation",
    percentage: 90,
    color: "bg-red-500",
  },
];

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text relative inline-block">
            About Me
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            />
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
            }}
            className="relative"
          >
            <div className="bg-card-bg rounded-3xl p-8 relative z-10">
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-48 h-48 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src="/avatar.jpg"
                        alt="Awais Ahmad Mirza"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <h2 className="text-3xl font-bold text-text mb-3">
                  Awais Ahmad
                </h2>
                <p className="text-lg text-text-secondary text-center max-w-md mb-6">
                  A passionate Web Developer, Digital Marketer, and Graphic
                  Designer with expertise in creating engaging digital
                  experiences.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
            }}
            className="bg-card-bg rounded-3xl p-8 relative"
          >
            <h3 className="text-2xl font-bold text-text mb-8">
              My Professional Skills
            </h3>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text font-medium">{skill.name}</span>
                    <span className="text-text-secondary">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      variants={progressBarVariants}
                      custom={skill.percentage}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
