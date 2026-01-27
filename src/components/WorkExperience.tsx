import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Briefcase, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  title: string;
  role?: string;
  description: string;
  icon: string | React.ReactNode;
  website?: string;
  badges: string[];
}

const experiences: Experience[] = [
  {
    title: "Gadget Dash",
    role: "🧠 Founding Team Member — Head of Innovation & Technology",
    description: "Leading innovation and technology development at Gadget Dash.",
    icon: "https://i.ibb.co/JWX6vBbk/CIRCLE-STCIKER-sits-2.jpg",
    website: "https://www.gadgetdash.in/",
    badges: ["Innovation", "Tech Lead", "Founding Team"]
  },
  {
    title: "Velora Creatives",
    role: "🎨 Co-Founder",
    description: "Creative agency helping brands grow with innovative design and marketing strategies.",
    icon: "🎨",
    website: "https://veloracreative.vercel.app/",
    badges: ["Co-Founder", "Creative Agency", "Design"]
  },
  {
    title: "TNA Marketing Agency",
    role: "Video Editor",
    description: "Worked as a Video Editor, managing and editing client projects.",
    icon: "🎬",
    badges: ["Video Production", "Ad Specialist"]
  },
  {
    title: "Freelance Work",
    role: "Independent Creator",
    description: "Worked with 50+ clients on video editing, design, and marketing projects.",
    icon: "💼",
    badges: ["50+ Clients", "Multi-disciplinary"]
  }
];

const ExperienceCard = ({ exp, index, scrollProgress, windowWidth }: { exp: Experience; index: number; scrollProgress: any, windowWidth: number }) => {
  const isMobile = windowWidth < 768;
  const cardCount = experiences.length;

  const start = index / cardCount;
  const end = (index + 1) / cardCount;
  const mid = (start + end) / 2;
  const stay = 0.05;

  const position = useTransform(
    scrollProgress,
    index === 0
      ? [0, 0.15, end]
      : [start, mid - stay, mid + stay, end],
    index === 0
      ? [0, 0, -1.5]
      : [1.2, 0, 0, -1.5]
  );

  const smoothPosition = useSpring(position, { stiffness: 70, damping: 25 });

  const xMove = isMobile ? 300 : 500;
  const leftBias = isMobile ? 5 : 15;
  const topAnchor = isMobile ? "62%" : "62%";

  const xMovement = useTransform(smoothPosition, (p: number) => (p * xMove) + leftBias);
  const z = useTransform(smoothPosition, (p: number) => Math.abs(p) * -350);
  const opacity = useTransform(smoothPosition, [-1.2, -0.6, 0, 0.6, 1.2], [0, 0.4, 1, 0.4, 0]);
  const scale = useTransform(smoothPosition, [-1, 0, 1], [0.85, 1, 0.85]);
  const rotateY = useTransform(smoothPosition, (p: number) => p * -45);

  return (
    <motion.div
      style={{
        left: "50%",
        top: topAnchor,
        x: useTransform(xMovement, (v) => `calc(-50% + ${v}px)`),
        y: "-50%",
        z,
        rotateY,
        opacity,
        scale,
        zIndex: useTransform(smoothPosition, (p) => Math.round(100 - Math.abs(p) * 50)),
        transformStyle: "preserve-3d",
      }}
      className="absolute w-[90vw] md:w-[500px]"
    >
      <div className="bg-white border-2 border-gray-100 rounded-[28px] md:rounded-[40px] p-6 md:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] flex flex-col justify-between overflow-hidden relative">
        <div className="relative z-10 text-left">
          <div className="flex items-center gap-4 md:gap-5 mb-5 md:mb-7">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
              {typeof exp.icon === 'string' && exp.icon.startsWith('http') ? (
                <img src={exp.icon} alt={exp.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl md:text-3xl">{exp.icon}</span>
              )}
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-black text-gray-900 leading-tight tracking-tight uppercase">
                {exp.title}
              </h3>
              {exp.role && (
                <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent-blue animate-pulse" />
                  <p className="text-[8px] md:text-[10px] font-black text-accent-blue uppercase tracking-[0.2em]">
                    {exp.role.replace(/^[^\s\w]*\s*/, '')}
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-500 font-bold leading-relaxed mb-6 md:mb-8">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-lg bg-gray-50 border border-gray-100 text-[8px] md:text-[10px] font-black uppercase tracking-tight text-gray-400"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {exp.website && (
          <div className="mt-8 md:mt-10 relative z-10">
            <Button
              asChild
              className="w-full bg-gray-900 hover:bg-accent-blue text-white rounded-xl h-10 md:h-12 text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl"
            >
              <a href={exp.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 group/btn">
                Visit Website
                <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [percent, setPercent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative h-[600vh] bg-white mt-[-1px]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

        {/* Header - Fixed horizontally and vertically biased to top */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.96, 1], [1, 0]) }}
          className="absolute top-16 md:top-24 left-0 right-0 z-[120] text-center px-6 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gray-50 border-2 border-gray-100 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent-blue mb-3 md:mb-4 shadow-sm">
            <Sparkles className="w-2.5 md:w-3 h-2.5 md:h-3" />
            Selected Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight mb-1 md:mb-2">
            Work <span className="text-accent-blue">&</span> Experience
          </h2>
          <p className="text-gray-400 font-bold uppercase text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em]">Scroll down to see the proof</p>
        </motion.div>

        {/* 3D Scene - Card Stack */}
        <div className="absolute inset-0 z-10" style={{ perspective: "2000px", transformStyle: "preserve-3d" }}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              index={index}
              exp={exp}
              scrollProgress={smoothProgress}
              windowWidth={windowWidth}
            />
          ))}
        </div>

        {/* Indicator System */}
        <div className="absolute bottom-12 md:bottom-16 left-0 right-0 flex justify-center z-[120] pointer-events-none">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-32 md:w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="absolute top-0 left-0 w-full h-full bg-accent-blue origin-left"
              />
            </div>
            <p className="text-[10px] font-black text-gray-300 w-8">{percent}%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;