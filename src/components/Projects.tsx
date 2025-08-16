import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured online store with modern design and seamless user experience",
      link: "#",
      tags: ["Web Design", "E-commerce", "Full-stack"]
    },
    {
      title: "Futora AI",
      description: "AI-powered platform I founded to explore the future of artificial intelligence applications",
      link: "https://futoraai.vercel.app/",
      tags: ["AI", "Founder", "Startup"]
    },
    {
      title: "Velora Creatives",
      description: "Creative agency I co-founded focusing on digital design and brand development",
      link: "https://veloracreative.vercel.app/",
      tags: ["Design", "Co-founder", "Branding"]
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