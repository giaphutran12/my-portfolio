import { Card, CardContent } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: Array<{
    name: string;
    color: string;
  }>;
  logoUrl?: string;
  logoAlt?: string;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
  logoUrl,
  logoAlt,
}: ExperienceCardProps) {
  return (
    <Card className="bg-slate-800/60 border-slate-700 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-blue-300 text-lg mb-2">{company}</p>
            {description.map((desc, index) => (
              <p key={index} className="text-blue-100 mb-4">
                {desc}
              </p>
            ))}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full border ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Company Logo Section */}
          <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col items-center lg:items-end">
            {logoUrl ? (
              <div className="w-20 h-20 mb-3 bg-white rounded-lg p-2 flex items-center justify-center shadow-lg">
                <img
                  src={logoUrl}
                  alt={logoAlt || `${company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-20 h-20 mb-3 bg-slate-600 rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
            )}
            <p className="text-blue-300 text-lg text-center lg:text-right">
              {period}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
