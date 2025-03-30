"use client";

import { motion, AnimatePresence } from "framer-motion";
import CustomLink from "./CustomLink";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { useNavigation } from "@/context/NavigationContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: 20,
  },
  open: {
    opacity: 1,
    x: 0,
  },
};

export default function Navigation() {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigation();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-card-bg border-b border-border z-50 backdrop-blur-sm bg-opacity-80"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CustomLink href={link.href} className="nav-link">
                      {link.name}
                    </CustomLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="hidden md:block"
              >
                <a href="/contact" className="btn btn-accent">
                  Hire Me
                </a>
              </motion.div>

              <ThemeToggle />

              <button
                className="block md:hidden text-text hover:text-primary p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background bg-opacity-50 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed right-0 top-0 h-full w-64 bg-card-bg shadow-lg z-50 md:hidden"
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={linkVariants}>
                    <CustomLink
                      href={link.href}
                      className="nav-link block py-2"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </CustomLink>
                  </motion.div>
                ))}
                <motion.div variants={linkVariants}>
                  <a
                    href="/contact"
                    className="btn btn-accent w-full text-center"
                    onClick={closeMenu}
                  >
                    Hire Me
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
