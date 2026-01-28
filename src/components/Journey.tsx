import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BookOpen } from "lucide-react";

const journeySteps = [
  {
    year: "STATUS",
    title: "AGE",
    description: "19 years old",
    icon: "🎯",
  },
  {
    year: "PURSUING",
    title: "EDUCATION",
    description: "First Year — Software Engineering",
    icon: "🎓",
  },
  {
    year: "FOCUS",
    title: "LEARNINGS",
    description: "AI, Cybersecurity, Full-stack development, Business",
    icon: "📚",
  },
  {
    year: "EXPERTISE",
    title: "SKILLS PRACTICED",
    description: "Web Development, Graphic Design, Video Editing, Digital Marketing",
    icon: "🛠️",
  },
  {
    year: "IMPACT",
    title: "EXPERIENCE",
    description: "Collaborated with 50+ clients across various domains",
    icon: "🚀",
  },
  {
    year: "UPCOMING",
    title: "FUTURE GOALS",
    description: "Building impactful products & companies",
    icon: "🗺️",
  }
];

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollDistance = -rect.top;
      const totalScrollableHeight = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(scrollDistance / totalScrollableHeight, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardWidth = 340;
  const gap = 80;
  const totalCards = journeySteps.length;
  const totalTrackWidth = (totalCards * cardWidth) + ((totalCards - 1) * gap);

  // Center alignment logic
  const viewportCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 600;
  const startOffset = viewportCenter - (cardWidth / 2);
  const maxTranslate = totalTrackWidth - cardWidth;
  const translationX = scrollProgress * maxTranslate;

  return (
    <section
      ref={containerRef}
      id="journey"
      className="relative h-[500vh] bg-[#fdfdfd]" // Clean White Background
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* HEADER: Restored Blue Book + Blue Text (As per Image 2 preference) */}
        <div className="absolute top-20 left-0 right-0 z-30 px-6 text-center transition-opacity duration-300"
          style={{ opacity: scrollProgress > 0.95 ? 0 : 1 }}
        >
          <div className="inline-flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-[#60a5fa]" fill="currentColor" fillOpacity={0.2} />
              <h2 className="text-4xl md:text-5xl font-black text-[#60a5fa] tracking-tight uppercase">
                My Journey
              </h2>
            </div>
            <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
              The Founder Timeline
            </p>
          </div>
        </div>

        {/* THE STEEL PIPE (Requested explicitly) */}
        <div className="absolute top-[40%] left-0 w-full h-[12px] z-10 -translate-y-1/2 flex items-center">
          {/* Metallic Gradient */}
          <div className="relative w-full h-full bg-gradient-to-b from-slate-300 via-slate-50 to-slate-400 shadow-[0_2px_5px_rgba(0,0,0,0.1)]" />
        </div>

        {/* CARDS TRACK */}
        <div
          className="flex items-center absolute top-[40%] -translate-y-1/2 left-0 z-20 will-change-transform"
          style={{
            transform: `translateX(${startOffset - translationX}px)`,
            gap: `${gap}px`,
          }}
        >
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{ width: `${cardWidth}px` }}
            >
              {/* WHITE CARD (Fixed visibility issue) */}
              <div className="bg-white rounded-[2rem] p-8 h-[260px] flex flex-col justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative group overflow-hidden">

                {/* Top Section */}
                <div className="flex justify-between items-start z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-500 rounded-2xl text-2xl shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-blue-300 uppercase mt-2">
                    {step.year}
                  </span>
                </div>

                {/* Content Section (Fixed Colors: Gray-900/Gray-400) */}
                <div className="z-10 mt-2">
                  <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 leading-relaxed max-w-[90%]">
                    {step.description}
                  </p>
                </div>

                {/* Ghost Number */}
                <div className="absolute bottom-[-10px] right-6 text-9xl font-black text-slate-50 select-none pointer-events-none z-0">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar (Bottom) */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center z-30">
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#60a5fa]"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;