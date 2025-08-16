import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Velora Creatives",
      description: "A marketing agency co-founded to help brands with creative design, social media, and digital growth. My role includes web design, branding, and strategy.",
      link: "https://veloracreative.vercel.app/",
      tags: ["Co-founder", "Design", "Marketing"]
    },
    {
      title: "Futora AI",
      description: "An AI-focused agency I started to explore how artificial intelligence tools can help creators and businesses. Currently building projects and sharing resources.",
      link: "https://futoraai.vercel.app/",
      tags: ["Founder", "AI", "Tools"]
    },
    {
      title: "E-Commerce Website",
      description: "An online store I built to practice web design and understand how digital shops work. Focused on clean design, smooth navigation, and mobile-friendly shopping.",
      link: "#",
      tags: ["Web Design", "E-commerce", "Practice"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 border-t border-section-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects & Work</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border"
              onClick={() => window.open(project.link, '_blank')}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent-blue transition-colors" />
                </div>
                <CardDescription className="text-text-secondary">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-accent-blue-light text-accent-blue rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;