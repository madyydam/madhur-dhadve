import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatIBuilt = () => {
  const builtProjects = [
    {
      emoji: "🏢",
      title: "BrandLift",
      role: "Founder",
      content: "Helping businesses grow through creative strategy and digital marketing.",
      link: "https://brandl1ft.vercel.app/",
      hasWebsite: true
    },
    {
      emoji: "🤖",
      title: "Futora AI",
      role: "Founder",
      content: "Exploring how AI tools help creators and businesses.",
      link: "https://futoraai.vercel.app/",
      hasWebsite: true
    },
    {
      emoji: "🎨",
      title: "Velora Creatives",
      role: "Co-Founder",
      content: "Helping brands grow with creative design and strategy.",
      link: "https://veloracreative.vercel.app/",
      hasWebsite: true
    },
    {
      emoji: "🤖",
      title: "Tech Social Media App",
      role: "For Founder & Developer",
      content: "Building an AI-powered social media platform for the tech community where developers can share projects, connect, collaborate, and learn.",
      link: "#",
      hasWebsite: false
    },
    {
      emoji: "🛒",
      title: "E-Commerce Store",
      role: "Developer",
      content: "Practice design and user experience for digital shops.",
      link: "#",
      hasWebsite: false
    }
  ];

  return (
    <section id="built" className="py-20 px-6 border-t border-section-border relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-light/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
            🚀 What I've Built
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light mx-auto mb-12 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {builtProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-card rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent-blue font-medium">
                      {project.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.content}
                </p>
                
                {project.hasWebsite && (
                  <Button 
                    onClick={() => window.open(project.link, '_blank')}
                    size="sm"
                    className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white"
                  >
                    View Website
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuilt;
