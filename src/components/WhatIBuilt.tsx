import { ExternalLink, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatIBuilt = () => {
  const builtProjects = [
    {
      emoji: "🏢",
      title: "FutoraLift",
      role: "Founder",
      content: "Helping businesses grow through creative strategy and digital marketing.",
      link: "https://futoralift.vercel.app/",
      hasWebsite: true,
      theme: "default"
    },
    {
      emoji: "💳",
      title: "FutoraPay",
      role: "Founder",
      content: "AI-powered smart payments and financial management platform.",
      link: "https://futorapay.vercel.app/",
      hasWebsite: true,
      theme: "futorapay"
    },
    {
      emoji: "🤖",
      title: "Futora AI",
      role: "Founder",
      content: "Exploring how AI tools help creators and businesses.",
      link: "https://futoraai.vercel.app/",
      hasWebsite: true,
      theme: "default"
    },
    {
      emoji: "🎨",
      title: "Velora Creatives",
      role: "Co-Founder",
      content: "Helping brands grow with creative design and strategy.",
      link: "https://veloracreative.vercel.app/",
      hasWebsite: true,
      theme: "default"
    },
    {
      emoji: "🤖",
      title: "Tech Social Media App",
      role: "For Founder & Developer",
      content: "Building an AI-powered social media platform for the tech community where developers can share projects, connect, collaborate, and learn.",
      link: "#",
      hasWebsite: false,
      useIcon: true,
      theme: "default"
    },
    {
      emoji: "🛒",
      title: "E-Commerce Store",
      role: "Developer",
      content: "Practice design and user experience for digital shops.",
      link: "#",
      hasWebsite: false,
      theme: "default"
    }
  ];

  const getCardStyles = (theme: string) => {
    if (theme === "futorapay") {
      return {
        wrapper: "bg-gradient-to-br from-[#00D9A5] via-[#0d1117] to-[#00D9A5] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#00D9A5]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#0d1117] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#00D9A5] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#00D9A5] hover:bg-[#00D9A5]/90 text-[#0d1117] font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#00D9A5]/20 flex items-center justify-center",
        iconColor: "text-[#00D9A5]"
      };
    }
    return {
      wrapper: "bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group",
      inner: "bg-card rounded-xl p-6 h-full flex flex-col",
      title: "text-lg font-semibold text-foreground bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent mb-1",
      role: "text-xs text-accent-blue font-medium",
      content: "text-sm text-text-secondary leading-relaxed mb-4 flex-1",
      button: "w-full bg-accent-blue hover:bg-accent-blue/90 text-white",
      iconBg: "w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center",
      iconColor: "text-accent-blue"
    };
  };

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
          {builtProjects.map((project, index) => {
            const styles = getCardStyles(project.theme);
            return (
              <div
                key={index}
                className={styles.wrapper}
              >
                <div className={styles.inner}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {project.useIcon ? (
                        <div className={styles.iconBg}>
                          <Smartphone className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : project.theme === "futorapay" ? (
                        <div className={styles.iconBg}>
                          <CreditCard className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : (
                        project.emoji
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={styles.title}>
                        {project.title}
                      </h3>
                      <p className={styles.role}>
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <p className={styles.content}>
                    {project.content}
                  </p>
                  
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

export default WhatIBuilt;
