import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";

const YouTube = () => {
  return (
    <section id="youtube" className="py-20 px-6 bg-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">YouTube Channel</h2>
        
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative bg-gradient-to-br from-accent-blue-light to-accent-blue aspect-video flex items-center justify-center">
              <div className="text-center text-accent-blue">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Latest Videos</p>
                <p className="text-sm opacity-80">AI tools, tech, and creativity</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          I also share videos on AI tools, tech, and creativity on my channel. 
          Join me as I explore new technologies and share insights from my learning journey.
        </p>
        
        <Button size="lg" className="group">
          Visit My Channel
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default YouTube;