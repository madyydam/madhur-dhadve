import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-20 bottom-4 w-1 bg-border/30 rounded-full z-50 hidden md:block">
      {/* Progress fill */}
      <div 
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-blue to-accent-blue-light rounded-full transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
      
      {/* Animated arrow at the end of progress */}
      {scrollProgress > 0 && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
          style={{ top: `${scrollProgress}%` }}
        >
          <div className="relative -mt-2">
            <ChevronDown className="h-4 w-4 text-accent-blue animate-bounce" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollProgress;
