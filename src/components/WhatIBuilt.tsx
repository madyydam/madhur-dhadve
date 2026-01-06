import { ExternalLink, Smartphone, CreditCard, Rocket, Construction, Bot, Palette, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import futoraGroupLogo from "@/assets/futora-group-logo.png";

const WhatIBuilt = () => {
  const builtProjects = [
    {
      emoji: "🏢",
      title: "FutoraLift",
      tagline: "Growth at Scale",
      content: "Helping businesses grow through creative strategy and digital marketing.",
      link: "https://futoralift.vercel.app/",
      hasWebsite: true,
      theme: "futoralift"
    },
    {
      emoji: "💳",
      title: "FutoraPay",
      tagline: "Intelligent Money Management",
      content: "AI-powered smart payments and financial management platform.",
      link: "https://futorapay.vercel.app/",
      hasWebsite: true,
      theme: "futorapay"
    },
    {
      emoji: "🦅",
      title: "Futora Group",
      tagline: "Building the Future",
      content: "A group of companies building AI, fintech, social, and growth platforms.",
      link: "https://futoragroup.vercel.app/",
      hasWebsite: true,
      theme: "futoragroup",
      useLogo: true
    },
    {
      emoji: "🤖",
      title: "Futora AI",
      tagline: "Intelligence for Tomorrow",
      content: "Exploring how AI tools help creators and businesses.",
      link: "https://futoraai.vercel.app/",
      hasWebsite: true,
      theme: "futuraai"
    },
    {
      emoji: "📱",
      title: "FutoraOne",
      tagline: "Connect. Build. Grow.",
      content: "Building an AI-powered social media platform for the tech community where developers can share projects, connect, collaborate, and learn.",
      link: "#",
      hasWebsite: false,
      useIcon: true,
      theme: "futoraone",
      underConstruction: true
    },
    {
      emoji: "🎨",
      title: "Velora Creatives",
      tagline: "Creative Design & Strategy",
      content: "Helping brands grow with creative design and strategy.",
      link: "https://veloracreative.vercel.app/",
      hasWebsite: true,
      theme: "velora"
    },
    {
      emoji: "🛒",
      title: "E-Commerce Store",
      tagline: "Digital Shopping Experience",
      content: "Practice design and user experience for digital shops.",
      link: "#",
      hasWebsite: false,
      theme: "ecommerce"
    }
  ];

  const getCardStyles = (theme: string) => {
    if (theme === "futoralift") {
      return {
        wrapper: "bg-gradient-to-br from-[#00A3FF] via-[#0a1628] to-[#00A3FF] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#00A3FF]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#0a1628] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#00A3FF] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#00A3FF] hover:bg-[#00A3FF]/90 text-white font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#00A3FF]/20 flex items-center justify-center",
        iconColor: "text-[#00A3FF]"
      };
    }
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
    if (theme === "futoraone") {
      return {
        wrapper: "bg-gradient-to-br from-[#8B5CF6] via-[#1a1625] to-[#8B5CF6] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#8B5CF6]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#1a1625] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#8B5CF6] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center",
        iconColor: "text-[#8B5CF6]"
      };
    }
    if (theme === "futoragroup") {
      return {
        wrapper: "bg-gradient-to-br from-[#22D3EE] via-[#0a1628] to-[#22D3EE] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#22D3EE]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#0a1628] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#22D3EE] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-[#0a1628] font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#22D3EE]/20 flex items-center justify-center overflow-hidden",
        iconColor: "text-[#22D3EE]"
      };
    }
    if (theme === "futuraai") {
      return {
        wrapper: "bg-gradient-to-br from-[#3B82F6] via-[#0f1729] to-[#3B82F6] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#3B82F6]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#0f1729] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#3B82F6] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center",
        iconColor: "text-[#3B82F6]"
      };
    }
    if (theme === "velora") {
      return {
        wrapper: "bg-gradient-to-br from-[#EAB308] via-[#1a1814] to-[#EAB308] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#EAB308]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#1a1814] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#EAB308] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#1a1814] font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#EAB308]/20 flex items-center justify-center",
        iconColor: "text-[#EAB308]"
      };
    }
    if (theme === "ecommerce") {
      return {
        wrapper: "bg-gradient-to-br from-[#EC4899] via-[#1a1018] to-[#EC4899] p-[1px] rounded-xl hover:shadow-xl hover:shadow-[#EC4899]/20 transition-all duration-300 hover:-translate-y-2 group",
        inner: "bg-[#1a1018] rounded-xl p-6 h-full flex flex-col",
        title: "text-lg font-semibold text-white mb-1",
        role: "text-xs text-[#EC4899] font-medium",
        content: "text-sm text-gray-400 leading-relaxed mb-4 flex-1",
        button: "w-full bg-[#EC4899] hover:bg-[#EC4899]/90 text-white font-semibold",
        iconBg: "w-10 h-10 rounded-lg bg-[#EC4899]/20 flex items-center justify-center",
        iconColor: "text-[#EC4899]"
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
                      ) : project.useLogo ? (
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                          <img src={futoraGroupLogo} alt="Futora Group" className="w-12 h-12 object-contain" />
                        </div>
                      ) : project.theme === "futorapay" ? (
                        <div className={styles.iconBg}>
                          <CreditCard className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : project.theme === "futoralift" ? (
                        <div className={styles.iconBg}>
                          <Rocket className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : project.theme === "futuraai" ? (
                        <div className={styles.iconBg}>
                          <Bot className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : project.theme === "velora" ? (
                        <div className={styles.iconBg}>
                          <Palette className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : project.theme === "ecommerce" ? (
                        <div className={styles.iconBg}>
                          <ShoppingCart className={`w-6 h-6 ${styles.iconColor}`} />
                        </div>
                      ) : (
                        project.emoji
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={styles.title}>
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className={styles.role}>
                          {project.tagline}
                        </p>
                        {project.underConstruction && (
                          <span className="inline-flex items-center gap-1 text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full font-medium">
                            <Construction className="w-3 h-3" />
                            Under Construction
                          </span>
                        )}
                      </div>
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
