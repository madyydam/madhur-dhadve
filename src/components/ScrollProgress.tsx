import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress((prev) => (Math.abs(prev - progress) > 0.1 ? progress : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-2 md:right-4 top-20 bottom-4 w-1 bg-border/30 rounded-full z-50">
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
