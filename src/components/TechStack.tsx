import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

const techStack = {
  frontend: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "The structural foundation of every web page." },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Styles the web, adding colors, layouts, and animations." },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", description: "A utility-first framework for rapid, modern UI styling." },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "The programming language that makes websites interactive." },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "A stricter, safer version of JavaScript for building robust apps." },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "A library for building dynamic and interactive user interfaces." },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "A powerful framework for high-performance web applications." },
    { name: "Zustand", icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg", description: "A lightweight tool for managing application state efficiently." },
    { name: "TanStack Query", icon: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg", description: "Manages data fetching and caching for seamless updates." },
    { name: "PWA", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pwa-icon.png", description: "Makes web apps feel and work like native mobile apps." },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Allows JavaScript to run on the server-side." },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "A flexible framework for building web servers and APIs." },
    { name: "REST API", icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png", description: "The standard way for apps to communicate with servers." },
    { name: "Edge Functions", icon: "https://i.ibb.co/jZGGSdqc/A-green-icon-on-a-bl-removebg-preview.png", zoom: true, description: "Server logic that runs closer to the user for speed." },
  ],
  ai: [
    { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg", description: "Advanced AI models powering intelligent features." },
    { name: "LangChain", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAiZAAZAA0", zoom: true, description: "A framework for building complex AI-driven applications." },
    { name: "AI Automation", customIcon: "zap", description: "Automating tasks using artificial intelligence." },
  ],
  database: [
    { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", description: "A powerful, reliable open-source database." },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", description: "An open-source alternative to Firebase for databases and auth." },
  ],
  hosting: [
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", description: "A platform for deploying and hosting modern web apps." },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", description: "Hosting and backend services for web applications/static sites." },
    { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg", description: "Ensures security and speed by delivering content globally." },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "A version control system to track code changes." },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "A cloud platform for hosting and collaborating on code." },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", description: "The code editor used to build this project." },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "A tool for testing and developing APIs." },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "A design tool for creating user interfaces and prototypes." },
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
  if (type === "zap") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-accent-blue">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity="0.2" />
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }
  return null;
};

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<any>(null);

  return (
    <section id="tech" className="py-10 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-1 bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
            Technologies <span className="italic">I Use</span>
          </h2>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="relative p-[1px] rounded-[1.5rem] bg-gradient-to-br from-gray-200 via-accent-blue/50 to-gray-200 group hover:shadow-xl hover:shadow-accent-blue/15 transition-all duration-300 border border-gray-100 dark:border-white/5"
              >
                <div className="bg-white dark:bg-zinc-950 rounded-[1.5rem] p-5 h-full flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white border-b border-accent-blue/10 pb-0.5">
                      {category.label}
                    </h3>
                  </div>

                  <div className="grid grid-cols-5 gap-3 p-2 justify-items-center">
                    {techStack[category.key as keyof typeof techStack].map((tech) => (
                      <Tooltip key={tech.name}>
                        <TooltipTrigger asChild>
                          <div
                            onClick={() => setSelectedTech(tech)}
                            className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 flex items-center justify-center cursor-pointer group/icon hover:border-accent-blue hover:shadow-md hover:shadow-accent-blue/5 transition-all duration-300 ${tech.zoom ? 'scale-105' : ''}`}
                          >
                            {tech.customIcon ? (
                              <CustomIcon type={tech.customIcon} />
                            ) : (
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className={`${tech.zoom ? 'w-9 h-9' : 'w-8 h-8'} object-contain group-hover/icon:scale-110 transition-transform duration-300`}
                                style={{
                                  filter: (tech.name === "Next.js" || tech.name === "GitHub" || tech.name === "Express.js" || tech.name === "Vercel")
                                    ? "invert(var(--icon-invert, 0))"
                                    : "none"
                                }}
                              />
                            )}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-[10px] font-black uppercase tracking-widest">{tech.name}</p>
                          <p className="text-[9px] text-gray-400 mt-0.5">Click for info</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>

        <Dialog open={!!selectedTech} onOpenChange={(open) => !open && setSelectedTech(null)}>
          <DialogContent className="sm:max-w-md bg-white dark:bg-zinc-950 border-slate-100 dark:border-white/10">
            <DialogHeader className="flex flex-col items-center gap-4 pt-4">
              {selectedTech && (
                <>
                  <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center p-4 mb-2">
                    {selectedTech.customIcon ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-accent-blue">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity="0.2" />
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    ) : (
                      <img
                        src={selectedTech.icon}
                        alt={selectedTech.name}
                        className="w-full h-full object-contain"
                        style={{
                          filter: (selectedTech.name === "Next.js" || selectedTech.name === "GitHub" || selectedTech.name === "Express.js" || selectedTech.name === "Vercel")
                            ? "invert(var(--icon-invert, 0))"
                            : "none"
                        }}
                      />
                    )}
                  </div>
                  <DialogTitle className="text-2xl font-black uppercase tracking-tight text-center">
                    {selectedTech.name}
                  </DialogTitle>
                  <DialogDescription className="text-center text-base font-medium text-gray-500 max-w-[80%]">
                    {selectedTech.description}
                  </DialogDescription>
                </>
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TechStack;
