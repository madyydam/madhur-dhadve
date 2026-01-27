import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Code, Palette, Video, TrendingUp, Target, Youtube,
  Brain, Shield, Layers, ExternalLink, Sparkles, Wrench
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative bg-white border border-slate-200 rounded-xl p-4 h-full shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-grow">
            <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {skill.name}
            </h3>
            <p className="text-[11px] text-slate-500 leading-tight mt-1 line-clamp-2">
              {skillDescriptions[skill.name as keyof typeof skillDescriptions]}
            </p>
            <div className="mt-3">
              <span className={`text-[9px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider ${skill.level === 'Learning'
                  ? 'bg-amber-50 text-amber-600'
                  : 'bg-emerald-50 text-emerald-600'
                }`}>
                {skill.level}
              </span>
            </div>
          </div>
        </div>

        {skill.name === "Video Editing" && (
          <div className="mt-4">
            <a
              href="https://drive.google.com/drive/folders/11huGanzy18lBr_BwahH3WEeOPyoxn1Di"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#121820] text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all duration-300 font-bold text-[10px] w-full shadow-lg"
            >
              View My Portfolio <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
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
      className="py-12 px-6 bg-[#f8fafc] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="w-8 h-8 text-slate-700" />
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tighter">
              Skills <span className="text-blue-600">&</span> Expertise
            </h2>
          </div>
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