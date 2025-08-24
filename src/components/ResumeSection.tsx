"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function ResumeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-blue-800/30 to-slate-800/50" />
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Get My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Resume
          </span>
        </motion.h2>
        <motion.p
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Download my detailed resume to learn more about my skills, experience,
          and qualifications
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link
            href="/Resume Headstarter Edward (7).pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
            >
              Download Resume (PDF)
            </Button>
          </Link>
          <Link href="https://docs.google.com/document/d/1KJhEFd7_dtewONgrxbz6NdAwMOtl0Ye_kAkTxO3RcTE/edit?tab=t.0">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
            >
              View Online
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
