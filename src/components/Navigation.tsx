import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Stack", href: "#tech", id: "tech" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Journey", href: "#journey", id: "journey" },
    { name: "Work", href: "#work", id: "work" },
    { name: "About", href: "#about", id: "about" },
    { name: "Let's Talk", href: "https://wa.me/918446653644", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => {
        if (item.href.startsWith('#')) {
          return document.getElementById(item.id);
        }
        return null;
      });

      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-0 right-0 z-[100] px-4 md:px-8 transition-all duration-500",
          isScrolled ? "top-2" : "top-4"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto rounded-full border transition-all duration-500",
          "bg-black/90 dark:bg-zinc-950/90 backdrop-blur-2xl px-6 md:px-10",
          "border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]",
          isScrolled ? "py-2" : "py-4"
        )}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="group cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="font-black text-xl md:text-2xl tracking-tighter text-white hover:scale-105 transition-transform">
                Madhur<span className="text-accent-blue">.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative group",
                    activeSection === item.id
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-accent-blue/20 rounded-full border border-accent-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-white hover:bg-white/10 rounded-full"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Black Theme Mobile Menu - Hidden by default on desktop */}
      <div className={cn(
        "fixed inset-0 z-[110] transition-all duration-700 lg:hidden",
        isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl p-8 flex flex-col justify-center items-center text-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white hover:bg-white/10 rounded-full w-12 h-12"
          >
            <X className="h-8 w-8" />
          </Button>

          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-4xl md:text-6xl font-black tracking-tighter uppercase transition-all duration-500",
                  activeSection === item.id ? "text-accent-blue" : "text-white/30 hover:text-white"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;