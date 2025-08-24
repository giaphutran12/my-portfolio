"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Hey, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Edward
              </span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              I'm a{" "}
              <span className="text-cyan-300 font-semibold">
                Full Stack Software Engineer
              </span>{" "}
              passionate about building amazing digital experiences
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Link href="#projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
              </Link>
              <Link href="#footer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/Edward-photo-2.jpg"
                  alt="Edward - Full Stack Software Engineer"
                  className="w-full h-full object-cover object-center scale-100"
                />
              </motion.div>

              {/* Floating Elements for Visual Interest */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
