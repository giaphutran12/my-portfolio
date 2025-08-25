"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { smoothScrollTo } from "@/lib/utils";

export function HeroSection() {
  const handleSmoothScroll = (elementId: string) => {
    smoothScrollTo(elementId);
  };

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
              Hey, I&apos;m{" "}
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
              I&apos;m a{" "}
              <span className="text-cyan-300 font-semibold">
                Full Stack Software Engineer
              </span>{" "}
              specialized in{" "}
              <span className="text-cyan-300 font-semibold">
                AI Engineering
              </span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                size="lg"
                onClick={() => handleSmoothScroll("projects")}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleSmoothScroll("footer")}
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
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
                <Image
                  src="/Edward-photo-3.jpg"
                  alt="Edward - Full Stack Software Engineer"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover object-center scale-100"
                />
              </motion.div>

              {/* Floating Elements for Visual Interest */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{
                  rotate: 360,
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                animate={{
                  rotate: -360,
                  x: [0, -15, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
                animate={{
                  rotate: 360,
                  x: [0, 12, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
