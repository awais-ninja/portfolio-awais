"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const contactInfo = [
  {
    name: "Email",
    icon: FaEnvelope,
    value: "awais.brainloggers@gmail.com",
    url: "mailto:awais.brainloggers@gmail.com",
    color: "hover:text-[#EA4335]",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    value: "+44 7443 098117",
    url: "https://wa.me/447443098117",
    color: "hover:text-[#25D366]",
  },
  {
    name: "Phone",
    icon: FaPhone,
    value: "+447780059219",
    url: "tel:+447780059219",
    color: "hover:text-[#34B7F1]",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/awais-ahmad-mirza/",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/mirza.awais.official/",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/MirzaAwais420",
    color: "hover:text-[#1877F2]",
  },
];

const BackgroundShapes = () => (
  <>
    <div className="absolute inset-0 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
    </div>
  </>
);

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      <BackgroundShapes />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text relative inline-block">
            Let's Work Together!
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            />
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Feel free to drop a message, and I'll get back to you as soon as
            possible. Let's discuss your next project!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card-bg rounded-2xl p-8 shadow-lg relative overflow-hidden"
          >
            <div className="relative z-10">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                </button>
              </form>
            </div>
            {/* Form Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pl-12 space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-card-bg rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-text mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={contact.name}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center space-x-4 text-text-secondary ${contact.color} transition-colors duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                        <div>
                          <div className="font-medium">{contact.name}</div>
                          <div className="text-sm">{contact.value}</div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              {/* Contact Info Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl" />
            </div>

            {/* Social Links */}
            <div className="bg-card-bg rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-text mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center space-x-4 text-text-secondary ${social.color} transition-colors duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                        <span>{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              {/* Social Links Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
