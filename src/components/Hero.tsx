import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full-Stack Developer", "Curious Learner", "Founder"];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // "Shooting Star" Scroll Effect
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 1000]); // Falls further
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 15]); // Tumbles slightly
  const filter = useTransform(scrollYProgress, [0, 0.5], ["blur(0px) brightness(1)", "blur(10px) brightness(5)"]); // Glows

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToBuilt = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Element with id 'projects' not found");
    }
  };

  return (
    <section ref={containerRef} id="hero" className="min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-background to-accent/5 pt-16 overflow-hidden">

      {/* Background Ambient Glow (Reduced intensity for cleaner look) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <motion.div
        style={{ scale, opacity, y, rotate, filter }}
        className="text-center max-w-4xl mx-auto relative z-10 w-full"
      >

        {/* --- ORBITING CODE LINES SYSTEM (Doubled Density + High Blur) --- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 scale-[0.55] md:scale-100">

          {/* --- LAYER 1: INNER ORBITS --- */}
          {/* Orbit 1 */}
          <motion.div
            className="absolute flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(180px)' }}>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent blur-[1px] opacity-50 font-mono text-sm font-medium"
              >
                const stack = ['React', 'Next.js'];
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 2 (Counter) */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 180 }}
            animate={{ rotate: 540 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(220px)' }}>
              <motion.div
                initial={{ rotate: -180 }}
                animate={{ rotate: -540 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent blur-[1.5px] opacity-40 font-mono text-xs font-medium"
              >
                &lt;motion.div layout /&gt;
              </motion.div>
            </div>
          </motion.div>

          {/* --- LAYER 2: MIDDLE ORBITS --- */}
          {/* Orbit 3 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 120 }}
            animate={{ rotate: 480 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(260px)' }}>
              <motion.div
                initial={{ rotate: -120 }}
                animate={{ rotate: -480 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent blur-[1px] opacity-45 font-mono text-[15px] font-medium"
              >
                await orbit(logic);
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 4 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 300 }}
            animate={{ rotate: 660 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(300px)' }}>
              <motion.div
                initial={{ rotate: -300 }}
                animate={{ rotate: -660 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent blur-[2px] opacity-35 font-mono text-xs font-medium"
              >
                import &#123; Future &#125; from 'now';
              </motion.div>
            </div>
          </motion.div>

          {/* --- LAYER 3: OUTER ORBITS --- */}
          {/* Orbit 5 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 240 }}
            animate={{ rotate: 600 }}
            transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(340px)' }}>
              <motion.div
                initial={{ rotate: -240 }}
                animate={{ rotate: -600 }}
                transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent blur-[1.2px] opacity-40 font-mono text-xs font-medium"
              >
                interface Cinematic extends Experience &#123;&#125;
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 6 (Offset) */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 90 }}
            animate={{ rotate: 450 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(380px)' }}>
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: -450 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent blur-[2px] opacity-30 font-mono text-sm font-medium"
              >
                npm install magic
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 7 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 60 }}
            animate={{ rotate: 420 }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(410px)' }}>
              <motion.div
                initial={{ rotate: -60 }}
                animate={{ rotate: -420 }}
                transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent blur-[1.5px] opacity-35 font-mono text-[13px] font-medium"
              >
                &lt;motion.div animate=&#123;orbit&#125; /&gt;
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 8 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 200 }}
            animate={{ rotate: 560 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(450px)' }}>
              <motion.div
                initial={{ rotate: -200 }}
                animate={{ rotate: -560 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent blur-[2px] opacity-30 font-mono text-xs font-medium"
              >
                while (coding) &#123; create(); &#125;
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 9 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 180 }}
            animate={{ rotate: 540 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(480px)' }}>
              <motion.div
                initial={{ rotate: -180 }}
                animate={{ rotate: -540 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent blur-[1.5px] opacity-35 font-mono text-sm font-medium"
              >
                export default function Universe();
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 10 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 45 }}
            animate={{ rotate: 405 }}
            transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(510px)' }}>
              <motion.div
                initial={{ rotate: -45 }}
                animate={{ rotate: -405 }}
                transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent blur-[2px] opacity-25 font-mono text-xs font-medium"
              >
                git push origin master
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 11 */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 300 }}
            animate={{ rotate: 660 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(550px)' }}>
              <motion.div
                initial={{ rotate: -300 }}
                animate={{ rotate: -660 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent blur-[1.8px] opacity-30 font-mono text-xs font-medium"
              >
                return new Innovation();
              </motion.div>
            </div>
          </motion.div>

          {/* Orbit 12 (Farthest) */}
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ rotate: 150 }}
            animate={{ rotate: 510 }}
            transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute" style={{ transform: 'translateX(600px)' }}>
              <motion.div
                initial={{ rotate: -150 }}
                animate={{ rotate: -510 }}
                transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent blur-[2.5px] opacity-20 font-mono text-sm font-medium"
              >
                System.out.println("Hello World");
              </motion.div>
            </div>
          </motion.div>

        </div>

        <div
          className="relative z-10 p-8 rounded-3xl backdrop-blur-[2px]"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1] whitespace-nowrap">
            <span
              className="bg-clip-text text-transparent drop-shadow-sm transition-all duration-500 pb-2"
              style={{
                backgroundImage: "linear-gradient(90deg, #111827, #3b82f6, #60a5fa, #3b82f6, #111827)",
                backgroundSize: "200% auto",
                animation: "gradient 8s linear infinite"
              }}
            >
              Madhur Dhadve
            </span>
          </h1>

          {/* Rotating Role Text - Spacing Adjusted */}
          <div className="h-8 md:h-10 lg:h-12 mb-8 md:mb-12 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground/90 tracking-wide"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative z-20"
          >
            {/* 3D Button Effect Layer */}
            <div className="absolute inset-0 bg-blue-700/60 rounded-full blur-md opacity-50 translate-y-2"></div>

            <Button
              onClick={scrollToBuilt}
              className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-none hover:shadow-lg border-0 ring-0 px-4 py-2 md:px-6 md:py-3 text-[10px] sm:text-xs md:text-base rounded-full transition-all duration-300 group"
              style={{
                boxShadow: "0 6px 0 0 #1e40af, 0 10px 15px -3px rgba(0, 0, 0, 0.3)" // Custom 3D Shadow
              }}
              size="lg"
            >
              🚀 Explore My Work
              <ChevronDown className="ml-2 h-3 w-3 md:h-5 md:w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;