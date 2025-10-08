import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "TNA Marketing Agency",
      description: "Worked as a Video Editor, managing and editing client projects.",
      icon: "🎬"
    },
    {
      title: "Freelance Work",
      description: "Worked with 50+ clients on video editing, design, and marketing projects.",
      icon: "💼"
    }
  ];

  return (
    <section id="work-experience" className="py-20 px-6 border-t border-section-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-light/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Briefcase className="h-8 w-8 text-accent-blue" />
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
            Work & Experience
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-card rounded-xl p-8 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {experience.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
                    {experience.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Coming Soon with animated gradient border */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue via-accent-blue to-accent-blue rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="relative bg-card rounded-lg p-6 flex items-center justify-center">
            <p className="text-xl font-semibold text-accent-blue animate-pulse">
              More Coming Soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;