import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCard } from "@/components/ProjectCard";
import { GitHubCard } from "@/components/GitHubCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-white font-bold text-xl">Edward</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="https://linkedin.com/in/edwardtran123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/giaphutran12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                GitHub
              </Link>
              <Link
                href="https://docs.google.com/document/d/1KJhEFd7_dtewONgrxbz6NdAwMOtl0Ye_kAkTxO3RcTE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                Resume
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Hey, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Edward
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 leading-relaxed">
                I'm a{" "}
                <span className="text-cyan-300 font-semibold">
                  Full Stack Software Engineer
                </span>{" "}
                passionate about building amazing digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Profile Image */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                  <img
                    src="/Edward-photo-2.jpg"
                    alt="Edward - Full Stack Software Engineer"
                    className="w-full h-full object-cover object-center scale-100"
                  />
                </div>

                {/* Floating Elements for Visual Interest */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-blue-800/30 to-slate-800/50" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Projects
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Here are some of the projects I've built, showcasing my skills in
              full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <GitHubCard
              imageUrl="/github.png"
              title="There's a lot more on my GitHub"
              description="I keep listing the projects, but it never ends. So, you can go onto my GitHub to find out more interesting stuff."
              skills={[
                {
                  name: "Next.js",
                  color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                },
                {
                  name: "C++",
                  color: "bg-green-600/20 text-green-300 border-green-500/30",
                },
                {
                  name: "Front-end Development",
                  color:
                    "bg-purple-600/20 text-purple-300 border-purple-500/30",
                },
                {
                  name: "Back-end Development",
                  color:
                    "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
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
              githubUrl="https://github.com/giaphutran12"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-slate-800/50 to-purple-800/30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Experience
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              My journey in software development and the companies I've had the
              privilege to work with
            </p>
          </div>

          <div className="space-y-8">
            {/* Experience Item 1 */}
            <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Software Engineer Resident
                    </h3>
                    <p className="text-blue-300 text-lg mb-2">Headstarter</p>
                    <p className="text-blue-100 mb-4">
                      • Built 3+ AI engineering and fullstack projects in a
                      fast-paced software team environment
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Developed 3+ apps in TypeScript and NextJS on Vercel
                      with production and dev environment
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Coached by Google Machine Learning, Google Kubernetes,
                      Two Sigma, Tesla, Figma and Citadel Engineers
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Created 120+ commits on github with 7-day deadlines
                      getting a Career Capital increase of 40% from start date
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                        Inngest
                      </span>
                      <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">
                        Prisma
                      </span>
                      <span className="px-3 py-1 bg-violet-600/20 text-violet-300 text-sm rounded-full border border-violet-500/30">
                        Vercel
                      </span>
                      <span className="px-3 py-1 bg-slate-600/20 text-slate-300 text-sm rounded-full border border-slate-500/30">
                        Git
                      </span>
                      <span className="px-3 py-1 bg-rose-600/20 text-rose-300 text-sm rounded-full border border-rose-500/30">
                        TRPC
                      </span>
                      <span className="px-3 py-1 bg-teal-600/20 text-teal-300 text-sm rounded-full border border-teal-500/30">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 bg-amber-600/20 text-amber-300 text-sm rounded-full border border-amber-500/30">
                        Shadcn UI
                      </span>
                      <span className="px-3 py-1 bg-fuchsia-600/20 text-fuchsia-300 text-sm rounded-full border border-fuchsia-500/30">
                        Inngest Agentkit
                      </span>
                      <span className="px-3 py-1 bg-orange-600/20 text-orange-300 text-sm rounded-full border border-orange-500/30">
                        TanStack Query
                      </span>
                      <span className="px-3 py-1 bg-lime-600/20 text-lime-300 text-sm rounded-full border border-lime-500/30">
                        OAuth
                      </span>
                      <span className="px-3 py-1 bg-sky-600/20 text-sky-300 text-sm rounded-full border border-sky-500/30">
                        PostgreSQL
                      </span>
                      <span className="px-3 py-1 bg-pink-600/20 text-pink-300 text-sm rounded-full border border-pink-500/30">
                        Code Sanboxing
                      </span>
                      <span className="px-3 py-1 bg-red-600/20 text-red-300 text-sm rounded-full border border-red-500/30">
                        Scripting
                      </span>
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                        Docker
                      </span>
                      <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full border border-green-500/30">
                        Cursor
                      </span>
                      <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">
                        Convex
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <p className="text-blue-300 text-lg">2025 July - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Item 2 */}
            <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Software Engineer Intern
                    </h3>
                    <p className="text-blue-300 text-lg mb-2">
                      Douglas College
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Built and maintained White Board ITS, a work day
                      management web app used by 100+ IT staffs in Douglas
                      College
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Deployed to production 10+ new features, reducing time
                      spent in delegating organization tasks by 75% for 100+
                      daily users
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Provided real-time information/announcement to 100+
                      staff in Douglas College’s IT department, reducing time
                      spent recommunicating and figuring out what to do for the
                      day by 35%
                    </p>
                    <p className="text-blue-100 mb-4">
                      • Leveraged PHP and AJAX calls to MySQL to provide
                      accurate and secure user’s CRUD, implemented IP-based
                      secured log in
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30">
                        PHP
                      </span>
                      <span className="px-3 py-1 bg-amber-600/20 text-amber-300 text-sm rounded-full border border-amber-500/30">
                        MySQL
                      </span>
                      <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">
                        CSS
                      </span>
                      <span className="px-3 py-1 bg-orange-600/20 text-orange-300 text-sm rounded-full border border-orange-500/30">
                        HTML
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <p className="text-blue-300 text-lg">Apr 2024 - Dec 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Item 3 */}
            <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm hidden">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Junior Developer
                    </h3>
                    <p className="text-blue-300 text-lg mb-2">StartupHub</p>
                    <p className="text-blue-100 mb-4">
                      Built responsive web applications, learned modern
                      development practices, and contributed to team code
                      reviews.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full border border-green-500/30">
                        Express
                      </span>
                      <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-sm rounded-full border border-yellow-500/30">
                        MongoDB
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-8">
                    <p className="text-blue-300 text-lg">2018 - 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-blue-800/30 to-slate-800/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Resume
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Download my detailed resume to learn more about my skills,
            experience, and qualifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700"
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-white font-bold text-xl">Edward</span>
              </div>
              <p className="text-blue-300 text-xs">
                Full Stack Software Engineer, AI oriented
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Quick Links</h3>
              <div className="space-y-1">
                <Link
                  href="/"
                  className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
                <Link
                  href="#projects"
                  className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Projects
                </Link>
                <Link
                  href="#experience"
                  className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Experience
                </Link>
              </div>
            </div>

            {/* Contact Me */}
            <div className="text-center">
              <h3 className="text-white font-semibold mb-2">Contact Me</h3>
              <div className="space-y-1">
                <p className="text-blue-300 text-xs">giaphutran012@gmail.com</p>
                <p className="text-blue-300 text-xs">(778) 956-6158</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-semibold mb-2">Connect</h3>
              <div className="space-y-1">
                <Link
                  href="https://linkedin.com/in/your-profile"
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
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-blue-300 text-sm">
              © 2024 Edward. Built with Next.js, Tailwind CSS, and Shadcn UI
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
