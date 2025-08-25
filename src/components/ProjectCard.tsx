import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Array<{
    name: string;
    color: string;
  }>;
  projectUrl: string;
  imageUrl?: string;
  customButtonText?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  projectUrl,
  imageUrl,
  customButtonText,
}: ProjectCardProps) {
  const isGitHub = projectUrl.includes("github.com");
  const buttonText =
    customButtonText ||
    (isGitHub ? "Explore My GitHub Repo" : "View Project, It's Live!");

  return (
    <Card className="bg-slate-800/60 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm flex flex-col">
      {/* Project Image */}
      <div className="w-full h-48 bg-slate-700/50 rounded-t-lg flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} Screenshot`}
            width={400}
            height={192}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        ) : (
          <div className="text-slate-400 text-sm text-center p-4">
            <div className="w-16 h-16 mx-auto mb-2 bg-slate-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p>Project Screenshot</p>
            <p className="text-xs mt-1">Add your project image here</p>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
        <CardDescription className="text-blue-200">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full border ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
