import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />

      <HeroSection />

      <ExperienceSection />
      <ProjectsSection />

      <ResumeSection />

      <Footer />
    </main>
  );
}
