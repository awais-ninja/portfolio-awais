"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDesktop,
  FaBullhorn,
  FaPaintBrush,
  FaEnvelope,
  FaVideo,
  FaTrademark,
  FaPencilRuler,
  FaSearch,
  FaInstagram,
  FaFileAlt,
  FaAd,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaCog,
  FaListAlt,
  FaPalette as FaDesign,
  FaPen,
  FaVoteYea,
  FaChartLine,
  FaNewspaper,
  FaReceipt,
  FaInbox,
  FaUserAlt,
  FaConnectdevelop,
  FaUsers,
  FaBroom,
  FaSeedling,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, responsive, and SEO-friendly websites tailored to your business needs.",
    icon: FaDesktop,
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Boosting your brand's online presence with targeted SEO, Google Ads, and social media strategies.",
    icon: FaBullhorn,
    gradient: "from-emerald-600/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "Creating eye-catching logos, graphics, and designs that resonate with your audience.",
    icon: FaPaintBrush,
    gradient: "from-violet-600/20 to-purple-500/20",
  },
  {
    id: 4,
    title: "Email Marketing",
    description:
      "Crafting engaging email campaigns to nurture your leads and drive sales.",
    icon: FaEnvelope,
    gradient: "from-blue-600/20 to-indigo-500/20",
  },
  {
    id: 5,
    title: "Video Editing",
    description:
      "Creating visually stunning and engaging video content for brands to captivate their audience.",
    icon: FaVideo,
    gradient: "from-cyan-600/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Branding",
    description:
      "Designing comprehensive branding packages, including logos, colors, and brand guidelines.",
    icon: FaTrademark,
    gradient: "from-teal-600/20 to-emerald-500/20",
  },
  // Email Marketing Services
  {
    id: 7,
    title: "Email Marketing Campaigns",
    description:
      "Creating, designing, and executing targeted email campaigns to increase customer engagement and drive sales.",
    icon: FaEnvelopeOpenText,
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    id: 8,
    title: "Email Automation",
    description:
      "Setting up automated email workflows to nurture leads, re-engage customers, and boost conversions.",
    icon: FaCog,
    gradient: "from-emerald-600/20 to-teal-500/20",
  },
  {
    id: 9,
    title: "Email List Management",
    description:
      "Managing and segmenting your email lists to ensure your messages reach the right audience at the right time.",
    icon: FaListAlt,
    gradient: "from-violet-600/20 to-purple-500/20",
  },
  {
    id: 10,
    title: "Email Template Design",
    description:
      "Designing visually appealing and responsive email templates that are optimized for all devices.",
    icon: FaDesign,
    gradient: "from-blue-600/20 to-indigo-500/20",
  },
  {
    id: 11,
    title: "Email Copywriting",
    description:
      "Crafting compelling email copy that captures attention and encourages recipients to take action.",
    icon: FaPen,
    gradient: "from-cyan-600/20 to-blue-500/20",
  },
  {
    id: 12,
    title: "A/B Testing",
    description:
      "Running A/B tests to determine the most effective subject lines, content, and calls to action for your emails.",
    icon: FaVoteYea,
    gradient: "from-teal-600/20 to-emerald-500/20",
  },
  {
    id: 13,
    title: "Campaign Analytics",
    description:
      "Tracking and analyzing the performance of email campaigns to refine strategies and improve ROI.",
    icon: FaChartLine,
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    id: 14,
    title: "Newsletter Creation",
    description:
      "Designing and sending regular newsletters to keep your audience informed about new updates, offers, and content.",
    icon: FaNewspaper,
    gradient: "from-emerald-600/20 to-teal-500/20",
  },
  {
    id: 15,
    title: "Transactional Email Design",
    description:
      "Designing and optimizing transactional emails, such as order confirmations, shipping notifications, and password resets.",
    icon: FaReceipt,
    gradient: "from-violet-600/20 to-purple-500/20",
  },
  {
    id: 16,
    title: "Deliverability Optimization",
    description:
      "Improving your email deliverability to ensure your emails land in your subscribers' inboxes rather than their spam folders.",
    icon: FaInbox,
    gradient: "from-blue-600/20 to-indigo-500/20",
  },
  {
    id: 17,
    title: "Behavioral Email Marketing",
    description:
      "Using customer behavior data to send personalized emails based on user actions, such as cart abandonment or product views.",
    icon: FaUserAlt,
    gradient: "from-cyan-600/20 to-blue-500/20",
  },
  {
    id: 18,
    title: "CRM Email Integration",
    description:
      "Integrating email marketing with your CRM system to automate email communication and track customer interactions.",
    icon: FaConnectdevelop,
    gradient: "from-teal-600/20 to-emerald-500/20",
  },
  {
    id: 19,
    title: "Subscriber Growth Strategies",
    description:
      "Implementing strategies to grow your email list organically through lead magnets, opt-ins, and other tactics.",
    icon: FaUsers,
    gradient: "from-blue-600/20 to-cyan-500/20",
  },
  {
    id: 20,
    title: "Email List Cleaning",
    description:
      "Regularly cleaning your email list to remove inactive or invalid contacts, ensuring better engagement and open rates.",
    icon: FaBroom,
    gradient: "from-emerald-600/20 to-teal-500/20",
  },
  {
    id: 21,
    title: "Drip Campaigns",
    description:
      "Creating targeted drip campaigns that send a series of emails over time, educating and guiding leads down the sales funnel.",
    icon: FaSeedling,
    gradient: "from-violet-600/20 to-purple-500/20",
  },
];

const ServiceCard = ({ service, index, isHiding }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: isHiding ? 0.2 : 0.5,
        delay: isHiding ? 0 : index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <div
        className={`h-full p-6 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm
        border border-white/10 hover:border-primary/20 transition-all duration-300
        hover:shadow-2xl hover:shadow-primary/5`}
      >
        <div className="relative">
          {/* Icon Background */}
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 blur" />
          <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-card-bg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        <h3 className="mt-6 text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="mt-4 text-text-secondary text-sm leading-relaxed">
          {service.description}
        </p>

        <div className="mt-6 flex items-center text-primary">
          <span className="text-sm font-medium">Learn More</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
        </div>
      </div>
    </motion.div>
  );
};

const BackgroundShapes = () => (
  <>
    <div className="absolute inset-0 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 -top-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-0 -bottom-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
    </div>
  </>
);

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  const toggleServices = () => {
    if (showAll) {
      setIsHiding(true);
      setTimeout(() => {
        setShowAll(false);
        setIsHiding(false);
      }, 200);
    } else {
      setIsHiding(false);
      setShowAll(true);
    }
  };

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-20 relative overflow-hidden" id="services">
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
            Our Services
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            />
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors duration-300"
          >
            <span>View All Services</span>
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
