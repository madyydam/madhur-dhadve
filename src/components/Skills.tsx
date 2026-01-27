import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Code, Palette, Video, TrendingUp, Target, Youtube,
  Brain, Shield, Layers, ExternalLink, Sparkles
} from "lucide-react";

const skills = [
  { name: "Web Design", icon: Code, level: "Intermediate", category: "Design" },
  { name: "Graphic Design", icon: Palette, level: "Intermediate", category: "Design" },
  { name: "Video Editing", icon: Video, level: "Intermediate", category: "Content" },
  { name: "Digital Marketing", icon: TrendingUp, level: "Intermediate", category: "Growth" },
  { name: "Meta Ads", icon: Target, level: "Intermediate", category: "Growth" },
  { name: "Content Creation (YouTube)", icon: Youtube, level: "Intermediate", category: "Content" },
  { name: "AI", icon: Brain, level: "Learning", category: "Tech" },
  { name: "Cybersecurity", icon: Shield, level: "Learning", category: "Tech" },
  { name: "Full-Stack Development", icon: Layers, level: "Learning", category: "Tech" },
];

const skillDescriptions = {
  "Web Design": "Designed responsive and user-friendly websites",
  "Graphic Design": "Created engaging brand visuals and social media creatives",
  "Video Editing": "Edited over 50+ commercial reels",
  "Digital Marketing": "Executed campaigns to boost online reach and engagement",
  "Meta Ads": "Managed targeted ad campaigns for lead generation",
  "Content Creation (YouTube)": "Creating engaging content and building audience",
  "AI": "Exploring and applying AI to enhance creativity and productivity",
  "Cybersecurity": "Learning fundamentals of securing applications and data",
  "Full-Stack Development": "Building projects with both front-end and back-end skills",
};

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  const Icon = skill.icon;

  // Wave entry + Scroll focus animation variants
  const itemVariants = {
    hidden: { opacity: 0.3, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative"
    >
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />

      <div className="relative bg-white border border-slate-100 rounded-[1.8rem] p-6 h-full shadow-[0_15px_35px_-20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] group-hover:border-blue-200/60 transition-all duration-500 z-10 flex flex-col justify-between overflow-hidden">

        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000 blur-3xl opacity-50" />

        <div className="relative">
          <div className="flex justify-between items-start mb-6">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="p-3 bg-blue-50 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm"
            >
              <Icon className="h-6 w-6" />
            </motion.div>

            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[9px] font-black tracking-[0.2em] text-slate-300 uppercase"
            >
              {skill.category}
            </motion.span>
          </div>

          <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
            {skill.name}
          </h3>

          <p className="text-sm font-medium text-slate-400 leading-relaxed mb-6 group-hover:text-slate-500 transition-colors duration-300 italic">
            {skillDescriptions[skill.name as keyof typeof skillDescriptions]}
          </p>
        </div>

        <div className="flex justify-between items-center mt-auto pt-5 border-t border-slate-50">
          <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-5 py-2 rounded-full shadow-sm transition-all duration-500 ${skill.level === 'Learning'
            ? 'bg-amber-50 text-amber-600 border border-amber-100/30 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-105'
            : 'bg-emerald-50 text-emerald-600 border border-emerald-100/30 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105'
            }`}>
            {skill.level}
          </span>

          {skill.name === "Video Editing" && (
            <motion.a
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/drive/folders/11huGanzy18lBr_BwahH3WEeOPyoxn1Di"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 flex items-center gap-1.5 text-xs font-black tracking-tight hover:underline"
            >
              Portfolio <ExternalLink className="h-3 w-3" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-12 px-6 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[9px] font-black uppercase tracking-[0.3em] text-blue-500 mb-3 shadow-sm"
          >
            <Sparkles className="w-2.5 h-2.5" />
            Domain Expertise
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-2">
            Skills <span className="text-blue-500">&</span> Expertise
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full mb-4" />
          <p className="max-w-2xl mx-auto text-slate-400 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em]">
            Bridging Design, Code, and Marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;