import { ChevronDown, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWebsite = () => {
    window.open('https://futoraai.vercel.app/', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/madhur_dhadve?utm_source=ig_web_button_share_sheet&igsh=MTZzZ3Y2b3AyOHhlZw==', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-background to-accent/5 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-blue/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl"></div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
          Madhur Dhadve
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          A curious learner exploring technology, creativity, and business
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={openWebsite}
            className="bg-gradient-to-r from-foreground to-accent-blue text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            size="lg"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Website
          </Button>
          
          <Button 
            onClick={openInstagram}
            className="bg-gradient-to-r from-foreground to-accent-blue text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            size="lg"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            DM on Insta
          </Button>
          
          <Button 
            onClick={scrollToAbout}
            variant="outline" 
            size="lg"
            className="group hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Know More About Me
            <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;