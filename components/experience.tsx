import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Empact IT",
      period: "Sep 2024 – Present",
      description:
        "Led development of analytics-heavy enterprise dashboards using Next.js and Chart.js. Improved developer velocity by 35% with modular architecture, and cut page load time by 42% through performance optimizations.",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Vue.js", "CI/CD"],
    },
    {
      title: "Frontend Developer Intern",
      company: "Safaricom PLC",
      period: "Aug 2024 – Jan 2025",
      description:
        "Refactored internal CRM tools in React and PHP, improving Lighthouse scores by 38%. Collaborated with backend teams to implement GraphQL APIs and authored onboarding documentation.",
      technologies: ["React", "PHP", "GraphQL", "JavaScript", "Figma"],
    },
    {
      title: "Frontend Engineer",
      company: "Shiftup Energy",
      period: "Jan 2024 – Aug 2024",
      description:
        "Built reusable components in Next.js and TypeScript. Improved Core Web Vitals using code-splitting and deferred hydration. Integrated Cypress for end-to-end testing, reducing post-launch bugs by 60%.",
      technologies: ["Next.js", "TypeScript", "Cypress", "React", "Vercel"],
    },
    {
      title: "Software Engineer Intern",
      company: "Africa's Talking",
      period: "May 2023 – Jan 2024",
      description:
        "Built a USSD healthcare platform serving 10,000+ offline users. Developed a real-time monitoring dashboard and helped reduce regional time-to-market by 28%.",
      technologies: ["Node.js", "Vue.js", "USSD", "Supabase", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
