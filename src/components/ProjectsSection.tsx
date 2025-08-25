"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-blue-800/30 to-slate-800/50" />
      <div className="relative z-10 max-w-7xl mx-auto">
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
              Projects
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve built, showcasing my skills
            in full-stack development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/vibe.png"
              title="AI Website Builder"
              description="Create a website with AI in minutes, with live preview, 3-layer security, and pay-as-you-go pricing"
              technologies={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "Inngest Agentkit",
                  color: "bg-green-600/20 text-green-300 border-green-500/30",
                },
                {
                  name: "Prisma ORM",
                  color:
                    "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
                },
              ]}
              projectUrl="https://github.com/giaphutran12/vibe-saas"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/serverless-image-style-transformer.png"
              title="Serverless Image Style Transformer"
              description="Transform images using client-side webGPU, with a serverless setup using WebAssembly and Rust"
              technologies={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "Rust",
                  color:
                    "bg-purple-600/20 text-purple-300 border-purple-500/30",
                },
                {
                  name: "WebAssembly",
                  color: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
                },
              ]}
              projectUrl="https://image-style-transformer-demo.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/llm-router.png"
              title="Intelligent LLM Router"
              description="Save money, time, and resources by routing your requests to the best LLM for the job"
              technologies={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "OpenRouter",
                  color:
                    "bg-orange-600/20 text-orange-300 border-orange-500/30",
                },
                {
                  name: "OpenAI API",
                  color:
                    "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
                },
              ]}
              projectUrl="https://llm-router-demo.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/customer-support-aven.png"
              title="AI Customer Support Agent"
              description="Talk to AI about your questions and have it answer them, used webscraping, RAG, embedding API, vector database to generate the best answer"
              technologies={[
                {
                  name: "RAG",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "Embedding API",
                  color:
                    "bg-purple-600/20 text-purple-300 border-purple-500/30",
                },
                {
                  name: "Vector Database",
                  color: "bg-green-600/20 text-green-300 border-green-500/30",
                },
              ]}
              projectUrl="https://github.com/giaphutran12/ai-customer-support-agent-aven"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/vr-bus.png"
              title="VR Bus Simulator"
              description="You basically drive a bus in VR with some sick music and a nostalgic GTA Vice City map"
              technologies={[
                {
                  name: "Three.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "Cannon.js",
                  color:
                    "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
                },
                {
                  name: "VR",
                  color: "bg-red-600/20 text-red-300 border-red-500/30",
                },
              ]}
              projectUrl="https://vr-bus-simulator-demo.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/whiteboard.png"
              title="Workday management web app"
              description="A web app that helps 100+ IT staffs at Douglas College save 75% times spent delegating organizational tasks"
              technologies={[
                {
                  name: "PHP",
                  color:
                    "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
                },
                {
                  name: "MySQL",
                  color: "bg-amber-600/20 text-amber-300 border-amber-500/30",
                },
                {
                  name: "JavaScript",
                  color:
                    "bg-indigo-600/20 text-indigo-300 border-indigo-500/30",
                },
                {
                  name: "HTML",
                  color:
                    "bg-orange-600/20 text-orange-300 border-orange-500/30",
                },
                {
                  name: "CSS",
                  color: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
                },
              ]}
              projectUrl="https://ai-customer-support-platform-demo.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/echo.png"
              title="AI Customer Support Platform"
              description="Enterprise-level, multi-tenant AI customer support platform, businesses can white-label their own agent with their own docs"
              technologies={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "Monorepo",
                  color: "bg-green-600/20 text-green-300 border-green-500/30",
                },
                {
                  name: "Convex",
                  color:
                    "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
                },
              ]}
              projectUrl="https://ai-customer-support-platform-demo.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard
              imageUrl="/github.png"
              title="There's a lot more on my GitHub"
              description="I keep listing the projects, but it never ends. So, you can go onto my GitHub to find out more interesting stuff."
              technologies={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "C++",
                  color: "bg-green-600/20 text-green-300 border-green-500/30",
                },
                {
                  name: "Full-stack Development",
                  color: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
                },
                {
                  name: "Deployment",
                  color:
                    "bg-orange-600/20 text-orange-300 border-orange-500/30",
                },
              ]}
              projectUrl="https://github.com/giaphutran12"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
