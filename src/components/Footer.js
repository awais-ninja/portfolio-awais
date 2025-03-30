"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

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

export default function Footer() {
  return (
    <footer className="bg-card-bg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              Awais Ahmad Mirza
            </h3>
            <p className="text-text-secondary">
              Transforming ideas into digital reality with innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-text mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <li key={contact.name}>
                    <a
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-text-secondary ${contact.color} transition-colors duration-300`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{contact.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold text-text mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary ${social.color} transition-colors duration-300`}
                    title={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-text-secondary">
          <p>
            &copy; {new Date().getFullYear()} Awais Ahmad Mirza. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
