import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-accent px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src={heroImage} 
            alt="Madhur Dhadve" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Madhur Dhadve
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          A curious learner exploring technology, creativity, and business
        </p>
        
        <Button 
          onClick={scrollToAbout}
          variant="outline" 
          size="lg"
          className="group"
        >
          Know More About Me
          <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;