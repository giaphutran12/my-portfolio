"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { smoothScrollTo } from "@/lib/utils";

export function Navbar() {
  const handleSmoothScroll = (elementId: string) => {
    smoothScrollTo(elementId);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">E</span> */}
                <Image
                  src="/edward-logo.svg"
                  alt="Edward"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-white font-bold text-xl">Edward Tran</span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div whileHover={{ y: -2 }}>
              <button
                onClick={() => handleSmoothScroll("projects")}
                className="text-blue-300 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Projects
              </button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <button
                onClick={() => handleSmoothScroll("experience")}
                className="text-blue-300 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Experience
              </button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="https://linkedin.com/in/edwardtran123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="https://github.com/giaphutran12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                GitHub
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="https://docs.google.com/document/d/1KJhEFd7_dtewONgrxbz6NdAwMOtl0Ye_kAkTxO3RcTE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-300 hover:text-white hover:bg-slate-800"
            >
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
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
