"use client";

import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
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
    <section id="contact" className="py-20 bg-background">
      <BackgroundShapes />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 bg-card-bg p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <CustomLink
                    key={contact.name}
                    href={contact.url}
                    newTab={true}
                    className={`flex items-center space-x-4 text-text-secondary ${contact.color} transition-colors duration-300`}
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm">{contact.value}</p>
                    </div>
                  </CustomLink>
                );
              })}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 bg-card-bg p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="grid grid-cols-1 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <CustomLink
                    key={social.name}
                    href={social.url}
                    newTab={true}
                    className={`flex items-center space-x-4 text-text-secondary ${social.color} transition-colors duration-300`}
                  >
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">{social.name}</p>
                      <p className="text-sm">Follow me on {social.name}</p>
                    </div>
                  </CustomLink>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
