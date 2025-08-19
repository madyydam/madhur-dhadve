import { Code, Palette, Video, TrendingUp, Target, Youtube, Brain, Shield, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Web Design", icon: Code, level: "Intermediate" },
    { name: "Graphic Design", icon: Palette, level: "Intermediate" },
    { name: "Video Editing", icon: Video, level: "Intermediate" },
    { name: "Digital Marketing", icon: TrendingUp, level: "Intermediate" },
    { name: "Meta Ads", icon: Target, level: "Beginner" },
    { name: "Content Creation (YouTube)", icon: Youtube, level: "Intermediate" },
    { name: "AI", icon: Brain, level: "Learning" },
    { name: "Cybersecurity", icon: Shield, level: "Learning" },
    { name: "Full-Stack Development", icon: Layers, level: "Learning" },
  ];

  return (
    <section id="skills" className="py-20 px-6 border-t border-section-border bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-card rounded-lg p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-blue-light rounded-lg">
                    <Icon className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      skill.level === 'Learning' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : skill.level === 'Beginner'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;