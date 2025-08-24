import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface GitHubCardProps {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    color: string;
  }>;
  githubUrl: string;
  imageUrl?: string;
}

export function GitHubCard({
  title,
  description,
  skills,
  githubUrl,
  imageUrl,
}: GitHubCardProps) {
  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-blue-800/40 border-slate-600 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm flex flex-col">
      {/* GitHub Card Image */}
      <div className="w-full h-48 bg-slate-700/50 rounded-t-lg flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} Screenshot`}
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
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </div>
            <p>GitHub Projects</p>
            <p className="text-xs mt-1">Add your GitHub showcase image here</p>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-white text-2xl">{title}</CardTitle>
        <CardDescription className="text-blue-200 text-lg">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full border ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
            >
              Explore My GitHub
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
