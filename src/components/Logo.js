"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
        >
          Awais Ahmad
        </motion.span>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary via-primary to-accent"
        />
      </motion.div>
    </Link>
  );
}
