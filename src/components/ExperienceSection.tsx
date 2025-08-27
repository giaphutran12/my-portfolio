"use client";

import { ExperienceCard } from "@/components/ExperienceCard";
import { motion } from "framer-motion";

export function ExperienceSection() {
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
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-slate-800/50 to-purple-800/30" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Experience
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            My journey in software engineering and the companies I&apos;ve had
            the privilege to work with
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <ExperienceCard
              title="Software Engineer Resident"
              company="Headstarter"
              period="2025 July - Present"
              description={[
                "• Built 3+ AI engineering and fullstack projects in a fast-paced software team environment",
                "• Developed 3+ apps in TypeScript and NextJS on Vercel with production and dev environment",
                "• Coached by Google Machine Learning, Google Kubernetes, Two Sigma, Tesla, Figma and Citadel Engineers",
                "• Created 120+ commits on github with 7-day deadlines getting a Career Capital increase of 40% from start date",
              ]}
              technologies={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "TypeScript",
                  color:
                    "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
                },
                {
                  name: "Inngest",
                  color: "bg-cyan-600/20 text-cyan-300 border-blue-500/30",
                },
                {
                  name: "Prisma",
                  color:
                    "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
                },
                {
                  name: "Vercel",
                  color:
                    "bg-violet-600/20 text-violet-300 border-violet-500/30",
                },
                {
                  name: "Git",
                  color: "bg-slate-600/20 text-slate-300 border-slate-500/30",
                },
                {
                  name: "TRPC",
                  color: "bg-rose-600/20 text-rose-300 border-rose-500/30",
                },
                {
                  name: "Tailwind CSS",
                  color: "bg-teal-600/20 text-teal-300 border-teal-500/30",
                },
                {
                  name: "Shadcn UI",
                  color: "bg-amber-600/20 text-amber-300 border-amber-500/30",
                },
                {
                  name: "Inngest Agentkit",
                  color:
                    "bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-500/30",
                },
                {
                  name: "TanStack Query",
                  color:
                    "bg-orange-600/20 text-orange-300 border-orange-500/30",
                },
                {
                  name: "OAuth",
                  color: "bg-lime-600/20 text-lime-300 border-lime-500/30",
                },
                {
                  name: "PostgreSQL",
                  color: "bg-sky-600/20 text-sky-300 border-sky-500/30",
                },
                {
                  name: "Code Sanboxing",
                  color: "bg-pink-600/20 text-pink-300 border-pink-500/30",
                },
                {
                  name: "Scripting",
                  color: "bg-red-600/20 text-red-300 border-red-500/30",
                },
                {
                  name: "Docker",
                  color:
                    "bg-purple-600/20 text-purple-300 border-purple-500/30",
                },
                {
                  name: "Cursor",
                  color: "bg-green-600/20 text-green-300 border-green-500/30",
                },
                {
                  name: "Convex",
                  color:
                    "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
                },
              ]}
              logoUrl="/headstarter.png"
              logoAlt="Headstarter Logo"
              companyUrl="https://headstarter.co"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ExperienceCard
              title="Software Engineer Intern"
              company="Douglas College"
              period="2024 April - 2024 December"
              description={[
                "• Built and maintained White Board ITS, a work day management web app used by 100+ IT staffs in Douglas College",
                "• Deployed to production 10+ new features, reducing time spent in delegating organization tasks by 75% for 100+ daily users",
                "• Provided real-time information/announcement to 100+ staff in Douglas College's IT department, reducing time spent recommunicating and figuring out what to do for the day by 35%",
                "• Leveraged PHP and AJAX calls to MySQL to provide accurate and secure user's CRUD, implemented IP-based secured log in",
              ]}
              technologies={[
                {
                  name: "JavaScript",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "PHP",
                  color:
                    "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
                },
                {
                  name: "MySQL",
                  color: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
                },
                {
                  name: "CSS",
                  color:
                    "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
                },
                {
                  name: "HTML",
                  color:
                    "bg-violet-600/20 text-violet-300 border-violet-500/30",
                },
                {
                  name: "AJAX",
                  color: "bg-slate-600/20 text-slate-300 border-slate-500/30",
                },
                {
                  name: "IP-based secured log in",
                  color: "bg-rose-600/20 text-rose-300 border-rose-500/30",
                },
                {
                  name: "CRUD",
                  color: "bg-teal-600/20 text-teal-300 border-teal-500/30",
                },
              ]}
              logoUrl="/douglas-college.png"
              logoAlt="Douglas College Logo"
              companyUrl="https://www.douglascollege.ca"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
