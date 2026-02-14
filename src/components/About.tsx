import { useRef, useState } from "react";
import { motion, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AboutCard {
  emoji: string;
  title: string;
  content: string;
}

const aboutCards: AboutCard[] = [
  {
    emoji: "👋",
    title: "Who I Am",
    content: "I'm Madhur Dhadve, 19 years old, a First Year Software Engineering student. I'm curious about how technology, creativity, and business connects and I'm building my journey step by step."
  },
  {
    emoji: "📚",
    title: "What I'm Learning",
    content: "I spend my time exploring web design, graphic design, video editing, and digital marketing, while diving deeper into AI, cybersecurity, and full-stack development. Along the way, I share practical insights, creative experiments, and AI-driven tools on my YouTube channel blending tech with creativity to build something meaningful."
  },
  {
    emoji: "🌱",
    title: "Looking Ahead",
    content: "This portfolio isn't just a showcase of my work it's a journal of growth. It reflects what I've done, what I'm learning today, and the projects I'll build tomorrow."
  }
];

// Floating orb particle
const FloatingOrb = ({ delay, size, left, top, duration }: {
  delay: number;
  size: number;
  left: string;
  top: string;
  duration: number;
}) => (
  <motion.div
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [-30, 30, -30],
      opacity: [0.15, 0.35, 0.15]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    style={{
      position: 'absolute',
      left,
      top,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(96,165,250,0.4) 0%, rgba(59,130,246,0.1) 100%)',
      filter: 'blur(25px)',
      pointerEvents: 'none',
    }}
  />
);

// Sparkle particle
const SparkleParticle = ({ delay, left, top }: {
  delay: number;
  left: string;
  top: string;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    style={{
      position: 'absolute',
      left,
      top,
      pointerEvents: 'none',
    }}
  >
    <Sparkles className="w-3 h-3 text-accent-blue" />
  </motion.div>
);

// 3D Tilt Card Component with Scroll-Driven Animations
const TiltCard = ({ card, index }: { card: AboutCard; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Mouse position for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Detect if device has fine pointer (mouse)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isMouse = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  // Smooth spring values for tilt
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  // Tilt rotation (desktop only)
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], isMouse ? [-12, 12] : [0, 0]);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], isMouse ? [12, -12] : [0, 0]);

  // Dynamic shadow based on tilt
  const shadowX = useTransform(smoothMouseX, [-0.5, 0.5], isMouse ? [30, -30] : [0, 0]);
  const shadowY = useTransform(smoothMouseY, [-0.5, 0.5], isMouse ? [-30, 30] : [0, 0]);

  // Scroll-driven animations (works on mobile too!)
  const scrollY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1],
    index === 0 ? [100, 0, 0, -50] :
      index === 1 ? [120, 0, 0, -60] :
        [140, 0, 0, -70]
  );

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.95]);
  const scrollRotate = useTransform(scrollYProgress, [0, 0.5, 1],
    index === 0 ? [8, 0, -4] :
      index === 1 ? [-8, 0, 4] :
        [8, 0, -4]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isMouse) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: scrollY,
        opacity: scrollOpacity,
        scale: scrollScale,
        rotate: isMobile ? scrollRotate : 0,
        perspective: 1200,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="h-full will-change-transform"
    >
      <motion.div
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([x, y]) => `${x}px ${y}px 60px rgba(96, 165, 250, 0.25), 0 20px 40px rgba(0,0,0,0.08)`
          )
        }}
        animate={{ z: isHovered && isMouse ? 50 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden group will-change-transform"
      >
        {/* Animated gradient border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
          style={{
            background: 'conic-gradient(from 0deg, rgba(96,165,250,0.3), rgba(147,197,253,0.3), rgba(59,130,246,0.3), rgba(96,165,250,0.3))',
            filter: isMobile ? 'none' : 'blur(20px)',
          }}
        />
        <div className={`absolute inset-[2px] bg-white/70 ${isMobile ? '' : 'backdrop-blur-2xl'} rounded-2xl md:rounded-3xl z-10`} />
        <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="relative p-6 md:p-8 h-full flex flex-col z-20" style={{ transform: "translateZ(40px)" }}>
          <motion.div
            animate={{
              scale: isHovered && isMouse ? [1, 1.25, 1.15] : 1,
              rotate: isHovered && isMouse ? [0, -10, 5, 0] : 0,
              y: isHovered && isMouse ? [0, -8, -4] : 0
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.6 }}
            className="text-4xl md:text-5xl mb-4 select-none"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(30px)",
              filter: "drop-shadow(0 4px 12px rgba(96,165,250,0.3))"
            }}
          >
            {card.emoji}
          </motion.div>
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-accent-blue to-gray-900 bg-clip-text text-transparent">
            {card.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {card.content}
          </p>
        </div>
        {isMouse && (
          <motion.div
            animate={{
              opacity: isHovered ? 0.2 : 0,
              x: isHovered ? ["-100%", "200%"] : "-100%"
            }}
            transition={{
              x: { duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 0.3 }
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-30"
            style={{ transform: "skewX(-20deg)" }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

// Extracted Orb component to safely use hooks
const Orb = ({ orb, scrollYProgress }: { orb: any, scrollYProgress: any }) => {
  const scrollY = useTransform(scrollYProgress, orb.scrollRange, orb.yRange);
   return (
     <motion.div style={{ y: scrollY as any }} className="will-change-transform">
      <FloatingOrb {...orb} />
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const orbCount = isMobile ? 3 : 12;
  const orbs = Array.from({ length: orbCount }).map(() => ({
    delay: Math.random() * 2,
    size: isMobile ? 60 + Math.random() * 40 : 80 + Math.random() * 70,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 4 + Math.random() * 4,
    scrollRange: [0, 1] as [number, number],
    yRange: [Math.random() * 100 - 50, Math.random() * -100 + 50] as [number, number]
  }));

  const sparkleCount = isMobile ? 0 : 8;
  const sparkles = Array.from({ length: sparkleCount }).map(() => ({
    delay: Math.random() * 3,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`
  }));



  return (
    <section ref={sectionRef} id="about" className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, i) => (
          <Orb key={`orb-${i}`} orb={orb} scrollYProgress={scrollYProgress} />
        ))}
        {sparkles.map((sparkle, i) => (
          <SparkleParticle key={`sparkle-${i}`} {...sparkle} />
        ))}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]),
            y: useTransform(scrollYProgress, [0, 0.15], [50, 0])
          }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4 uppercase tracking-tighter inline-block"
            whileInView={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(90deg, #111827, #3b82f6, #60a5fa, #3b82f6, #111827)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            About Me
          </motion.h2>
          <motion.div
            style={{ scaleX: useTransform(scrollYProgress, [0, 0.15], [0, 1]) }}
            className="w-20 md:w-24 h-1 bg-gradient-to-r from-accent-blue via-accent-blue-light to-accent-blue mx-auto rounded-full origin-center"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {aboutCards.map((card, index) => (
            <TiltCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;