const Journey = () => {
  const journeySteps = [
    {
      title: "Age",
      description: "19 years old",
      icon: "🎯"
    },
    {
      title: "Education", 
      description: "Pursuing Software Engineering",
      icon: "🎓"
    },
    {
      title: "Current Learnings",
      description: "AI, Cybersecurity, Full-stack development, Business",
      icon: "📚"
    },
    {
      title: "Skills Practiced",
      description: "Web Design, Graphic Design, Video Editing, Digital Marketing", 
      icon: "🛠️"
    },
    {
      title: "Future Goals",
      description: "Building impactful products & companies",
      icon: "🚀"
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">🗺️ My Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>
          
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-blue rounded-full border-4 border-background transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-background p-6 rounded-lg shadow-card border border-border">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{step.icon}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;