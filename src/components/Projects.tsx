import { ExternalLink, Rocket, Bot, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "FutoraLift",
      description: "A digital marketing agency helping businesses grow through creative strategy, digital marketing, and technical solutions including websites, apps, and campaigns.",
      link: "https://futoralift.vercel.app/",
      tags: ["Marketing", "Strategy", "Growth"],
      hasWebsite: true,
      theme: "futoralift"
    },
    {
      title: "Futora AI",
      description: "An AI-focused agency I started to explore how artificial intelligence tools can help creators and businesses. Currently building projects and sharing resources.",
      link: "https://futoraai.vercel.app/",
      tags: ["AI", "Tools", "Innovation"],
      hasWebsite: true,
      theme: "futuraai"
    },
    {
      title: "Velora Creatives",
      description: "A creative marketing agency I co-founded, helping brands grow through design, social media, and digital campaigns.",
      link: "https://veloracreative.vercel.app/",
      tags: ["Design", "Creative", "Marketing"],
      hasWebsite: true,
      theme: "velora"
    }
  ];

  const getCardStyles = (theme: string) => {
    if (theme === "futoralift") {
      return {
        wrapper: "bg-gradient-to-br from-[#00A3FF] via-[#0a1628] to-[#00A3FF] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#00A3FF]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#0a1628] rounded-xl p-6 h-full flex flex-col",
        title: "text-xl font-semibold text-white mb-2",
        description: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#00A3FF] hover:bg-[#00A3FF]/90 text-white font-semibold",
        tag: "px-3 py-1 text-xs bg-[#00A3FF]/20 text-[#00A3FF] rounded-full border border-[#00A3FF]/30",
        iconBg: "w-10 h-10 rounded-lg bg-[#00A3FF]/20 flex items-center justify-center",
        iconColor: "text-[#00A3FF]"
      };
    }
    if (theme === "futuraai") {
      return {
        wrapper: "bg-gradient-to-br from-[#3B82F6] via-[#0f1729] to-[#3B82F6] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#3B82F6]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#0f1729] rounded-xl p-6 h-full flex flex-col",
        title: "text-xl font-semibold text-white mb-2",
        description: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold",
        tag: "px-3 py-1 text-xs bg-[#3B82F6]/20 text-[#3B82F6] rounded-full border border-[#3B82F6]/30",
        iconBg: "w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center",
        iconColor: "text-[#3B82F6]"
      };
    }
    if (theme === "velora") {
      return {
        wrapper: "bg-gradient-to-br from-[#EAB308] via-[#1a1814] to-[#EAB308] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#EAB308]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#1a1814] rounded-xl p-6 h-full flex flex-col",
        title: "text-xl font-semibold text-white mb-2",
        description: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#1a1814] font-semibold",
        tag: "px-3 py-1 text-xs bg-[#EAB308]/20 text-[#EAB308] rounded-full border border-[#EAB308]/30",
        iconBg: "w-10 h-10 rounded-lg bg-[#EAB308]/20 flex items-center justify-center",
        iconColor: "text-[#EAB308]"
      };
    }
    return {
      wrapper: "bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group",
      inner: "bg-card rounded-xl p-6 h-full flex flex-col",
      title: "text-xl font-semibold text-foreground mb-2",
      description: "text-sm text-text-secondary leading-relaxed mb-4 flex-1",
      button: "w-full bg-accent-blue hover:bg-accent-blue/90 text-white",
      tag: "px-3 py-1 text-xs bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20",
      iconBg: "w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center",
      iconColor: "text-accent-blue"
    };
  };

  const getIcon = (theme: string, iconColor: string) => {
    if (theme === "futoralift") return <Rocket className={`w-5 h-5 ${iconColor}`} />;
    if (theme === "futuraai") return <Bot className={`w-5 h-5 ${iconColor}`} />;
    if (theme === "velora") return <Palette className={`w-5 h-5 ${iconColor}`} />;
    return null;
  };

  return (
    <section id="projects" className="py-20 px-6 border-t border-section-border relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-light/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
            💻 Projects & Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light mx-auto mb-12 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const styles = getCardStyles(project.theme);
            return (
              <div key={index} className={styles.wrapper}>
                <div className={styles.inner}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={styles.iconBg}>
                      {getIcon(project.theme, styles.iconColor)}
                    </div>
                    <h3 className={styles.title}>{project.title}</h3>
                  </div>
                  
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  
                  {project.hasWebsite && (
                    <Button 
                      onClick={() => window.open(project.link, '_blank')}
                      size="sm"
                      className={styles.button}
                    >
                      View Website
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;