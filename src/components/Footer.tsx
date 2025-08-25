"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";

export function Footer() {
  const handleSmoothScroll = (elementId: string) => {
    smoothScrollTo(elementId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      id="footer"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700"
    >
      <div className="absolute inset-0 bg-slate-900/80" />
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-white font-bold text-xl">Edward Tran</span>
            </div>
            <p className="text-blue-300 text-xs">
              Full Stack Software Engineer, AI oriented
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <div className="space-y-1">
              <button
                onClick={() => handleSmoothScroll("")}
                className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer w-full text-center"
              >
                Home
              </button>
              <button
                onClick={() => handleSmoothScroll("projects")}
                className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer w-full text-center"
              >
                Projects
              </button>
              <button
                onClick={() => handleSmoothScroll("experience")}
                className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm cursor-pointer w-full text-center"
              >
                Experience
              </button>
            </div>
          </motion.div>

          {/* Contact Me */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-white font-semibold mb-2">Contact Me</h3>
            <div className="space-y-1">
              <p className="text-blue-300 text-xs">giaphutran012@gmail.com</p>
              <p className="text-blue-300 text-xs">(778) 956-6158</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            variants={itemVariants}
          >
            <h3 className="text-white font-semibold mb-2">Connect</h3>
            <div className="space-y-1">
              <Link
                href="https://linkedin.com/in/edwardtran123"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/giaphutran12"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
              >
                GitHub
              </Link>
              <Link
                href="https://docs.google.com/document/d/1KJhEFd7_dtewONgrxbz6NdAwMOtl0Ye_kAkTxO3RcTE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700 mt-8 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-blue-300 text-sm">
            © 2024 Edward. Built with Next.js, Tailwind CSS, and Shadcn UI
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
