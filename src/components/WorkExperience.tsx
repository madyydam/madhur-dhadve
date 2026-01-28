import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Briefcase, ArrowRight, Sparkles, Hand } from "lucide-react";
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

const ExperienceCard = ({ exp, index, scrollProgress, windowWidth, totalCards }: { exp: Experience; index: number; scrollProgress: any, windowWidth: number, totalCards: number }) => {
  const isMobile = windowWidth < 768;

  // relativePos ranges from index (at scroll 0) to index - totalCards (at scroll 1)
  // When relativePos is 0, the card is at the front.
  // When relativePos is negative, it's moving out.
  // When relativePos is positive, it's in the background stack.
  const relativePos = useTransform(scrollProgress, [0, 1], [index, index - totalCards]);

  const yOffset = useTransform(
    relativePos,
    [-1, -0.5, 0, 1, 2, 3],
    isMobile ? [-120, -100, 0, 20, 40, 60] : [-200, -150, 0, 30, 60, 90]
  );
  // ... scaling and opacity stay similar but yOffset is now pushed down ...
  const opacity = useTransform(
    relativePos,
    [-1, -0.5, 0, 1, 2, 3],
    [0, 0, 1, 0.6, 0.3, 0.15]
  );

  const scale = useTransform(
    relativePos,
    [-1, 0, 1, 2, 3],
    [0.9, 1, 0.96, 0.92, 0.88]
  );

  const zIndex = useTransform(
    relativePos,
    [-1, 0, 1, 2, 3],
    [0, 10, 8, 6, 4]
  );

  const blur = useTransform(
    relativePos,
    [0, 1, 2],
    [0, 2, 4]
  );

  return (
    <motion.div
      style={{
        left: "50%",
        top: isMobile ? "55%" : "60%",
        x: "-50%",
        y: useTransform(yOffset, (v) => `calc(-50% + ${v}px)`),
        opacity,
        scale,
        zIndex: useTransform(zIndex, (v) => Math.round(v)),
        filter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
      className="absolute w-[92vw] md:w-[580px]"
    >
      <div className="bg-white border-[1px] border-gray-100 rounded-[32px] md:rounded-[48px] p-7 md:p-12 shadow-[0_45px_100px_-25px_rgba(0,0,0,0.08)] flex flex-col justify-between overflow-hidden relative">
        <div className="relative z-10 text-left">
          <div className="flex items-center gap-5 md:gap-6 mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
              {typeof exp.icon === 'string' && exp.icon.startsWith('http') ? (
                <img src={exp.icon} alt={exp.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl md:text-4xl">{exp.icon}</span>
              )}
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight uppercase">
                {exp.title}
              </h3>
              {exp.role && (
                <div className="flex items-center gap-2 mt-1 md:mt-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <p className="text-[9px] md:text-[11px] font-black text-accent-blue uppercase tracking-[0.25em]">
                    {exp.role.replace(/^[^\s\w]*\s*/, '')}
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-sm md:text-lg text-gray-500 font-medium leading-relaxed mb-7 md:mb-10 max-w-[95%]">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {exp.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 md:px-4 md:py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-400"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {exp.website && (
          <div className="mt-10 md:mt-12 relative z-10">
            <Button
              asChild
              className="w-full bg-gray-900 hover:bg-accent-blue text-white rounded-2xl h-12 md:h-14 text-[11px] md:text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-accent-blue/20"
            >
              <a href={exp.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 group/btn">
                Launch Project
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
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
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setPercent(Math.round(latest * 100));
  });

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative h-[400vh] bg-white mt-[-1px]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

        {/* Header - Fixed horizontally and vertically biased to top */}
        <motion.div
          style={{ opacity: useTransform(smoothProgress, [0.96, 1], [1, 0]) }}
          className="absolute top-16 md:top-32 left-0 right-0 z-[120] text-center px-6 pointer-events-none"
        >
          <h2 className="text-2xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
            Work <span className="text-accent-blue">&</span> Experience
          </h2>
        </motion.div>

        {/* Stack Scene - Card Stack */}
        <div className="absolute inset-0 z-10">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              index={index}
              exp={exp}
              scrollProgress={smoothProgress}
              windowWidth={windowWidth}
              totalCards={experiences.length}
            />
          ))}
        </div>

        {/* Realistic Hand Scroll Hint (Visible until 4th card) */}
        <motion.div
          style={{
            opacity: useTransform(smoothProgress, [0, 0.9, 0.95], [1, 1, 0]),
          }}
          className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-[130] pointer-events-none"
        >
          <div className="relative">
            {/* Subtle Glow Behind Hand */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-12 bg-accent-blue/20 rounded-full blur-[40px]"
            />

            {/* Realistic Hand Swipe Motion */}
            <motion.div
              animate={{
                y: [50, 40, -60, -70],
                x: [0, 5, -5, 0],
                rotate: [20, 18, 12, 20],
                scale: [0.9, 1.05, 1, 0.9]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                times: [0, 0.25, 0.85, 1],
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Hand
                size={48}
                strokeWidth={1.5}
                className="text-accent-blue fill-white/80 stroke-accent-blue filter drop-shadow-[0_10px_25px_rgba(96,165,250,0.4)]"
              />
            </motion.div>

            {/* Magical Particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  y: [20, -120],
                  x: [0, (i - 1.5) * 40],
                  opacity: [0, 0.7, 0],
                  scale: [0, 1.2, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
                className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-accent-blue rounded-full shadow-[0_0_12px_rgba(96,165,250,0.8)]"
              />
            ))}
          </div>
        </motion.div>

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