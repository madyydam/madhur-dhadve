import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const techStack = {
  frontend: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  ],
  ai: [
    { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" },
    { name: "Prompt Engineering", customIcon: "brain" },
    { name: "AI Agents", customIcon: "zap" },
  ],
  database: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  ],
  hosting: [
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
};

const categories = [
  { key: "frontend", label: "Frontend", icon: "🖥️" },
  { key: "backend", label: "Backend", icon: "⚙️" },
  { key: "ai", label: "AI / Automation", icon: "🧠" },
  { key: "database", label: "Database & Auth", icon: "🗄️" },
  { key: "hosting", label: "Hosting / DevOps", icon: "☁️" },
  { key: "tools", label: "Tools", icon: "🛠️" },
];

const CustomIcon = ({ type }: { type: string }) => {
  if (type === "brain") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-accent-blue">
        <path d="M12 4.5c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.8 3.7-.3.5-.5 1.1-.5 1.8 0 1.7 1.3 3 3 3h.4c1.7 0 3-1.3 3-3 0-.7-.2-1.3-.5-1.8 1.1-.9 1.8-2.2 1.8-3.7 0-2.5-2-4.5-4.5-4.5z"/>
        <path d="M12 2v2.5M12 17.5V22M4.5 9h2.5M15 9h4.5M6 14l2-1.5M16 14l2-1.5M6 5l2 2M14 5l2 2"/>
      </svg>
    );
  }
  if (type === "zap") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-accent-blue">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity="0.2"/>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    );
  }
  return null;
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Technologies I Use
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My toolkit for building modern web applications
        </p>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.key} className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-foreground/80">
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {techStack[category.key as keyof typeof techStack].map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <div className="w-14 h-14 rounded-xl bg-card border border-border hover:border-accent-blue/50 hover:bg-accent/10 transition-all duration-300 flex items-center justify-center cursor-pointer group hover:scale-110 hover:shadow-lg hover:shadow-accent-blue/10">
                        {tech.customIcon ? (
                          <CustomIcon type={tech.customIcon} />
                        ) : (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                            style={{
                              filter: tech.name === "Express.js" || tech.name === "Next.js" || tech.name === "Vercel" || tech.name === "GitHub"
                                ? "invert(var(--icon-invert, 0))"
                                : "none"
                            }}
                          />
                        )}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
