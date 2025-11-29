import { ExternalLink, Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "BrandLift",
      description: "A digital marketing agency helping businesses grow through creative strategy, digital marketing, and technical solutions including websites, apps, and campaigns.",
      link: "https://brandl1ft.vercel.app/",
      tags: ["Founder", "Marketing", "Strategy"],
      hasWebsite: true
    },
    {
      title: "Futora AI",
      description: "An AI-focused agency I started to explore how artificial intelligence tools can help creators and businesses. Currently building projects and sharing resources.",
      link: "https://futoraai.vercel.app/",
      tags: ["Founder", "AI", "Tools"],
      hasWebsite: true
    },
    {
      title: "Velora Creatives",
      description: "A creative marketing agency I co-founded, helping brands grow through design, social media, and digital campaigns.",
      link: "https://veloracreative.vercel.app/",
      tags: ["Co-founder", "Tech Head", "Marketing"],
      hasWebsite: true
    },
    {
      title: "E-Commerce Website",
      description: "An online store I built to practice web design and understand how digital shops work. Focused on clean design, smooth navigation, and mobile-friendly shopping.",
      link: "#",
      tags: ["Web Design", "E-commerce", "Practice"],
      hasWebsite: false
    }
  ];

  const featuredProject = {
    title: "Tech Social Media App",
    role: "Founder & Developer",
    description: "Building an AI-powered social media platform for the tech community where developers can share projects, connect, collaborate, and learn — all in one place.",
    tags: ["AI", "Social Platform", "In Development"],
    inDevelopment: true
  };

  return (
    <section id="projects" className="py-20 px-6 border-t border-section-border bg-gradient-to-b from-background to-accent/3">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
          💻 Projects & Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] bg-card/50 backdrop-blur-sm overflow-hidden relative rounded-lg"
            >
              <div className="bg-card/90 backdrop-blur-sm rounded-lg h-full">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-accent-blue transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent-blue transition-colors duration-300" />
                </div>
                <CardDescription className="text-text-secondary leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.hasWebsite && (
                  <Button 
                    onClick={() => window.open(project.link, '_blank')}
                    size="sm"
                    className="w-full bg-gradient-to-r from-foreground to-accent-blue text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View Website
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                )}
              </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Project - Tech Social Media App */}
        <div className="mt-12">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border-2 bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[2px] overflow-hidden relative rounded-xl">
            <div className="bg-card backdrop-blur-sm rounded-xl h-full">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Network className="h-6 w-6 text-accent-blue" strokeWidth={1.5} />
                    <div>
                      <CardTitle className="text-2xl md:text-3xl group-hover:text-accent-blue transition-colors duration-300">
                        {featuredProject.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{featuredProject.role}</p>
                    </div>
                  </div>
                  {featuredProject.inDevelopment && (
                    <Badge className="bg-accent-blue/10 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/20">
                      In Development
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-text-secondary leading-relaxed text-base md:text-lg mt-4">
                  {featuredProject.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative pt-0">
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-4 py-1.5 text-sm bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        <p className="text-center text-muted-foreground mt-12 text-lg">More Coming Soon…</p>
      </div>
    </section>
  );
};

export default Projects;