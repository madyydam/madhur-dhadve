const About = () => {
  const aboutCards = [
    {
      emoji: "👋",
      title: "Who I Am",
      content: "I'm Madhur Dhadve, 19 years old, currently studying Software Engineering. I'm curious about how technology, creativity, and business connects and I'm building my journey step by step."
    },
    {
      emoji: "📚",
      title: "What I'm Learning",
      content: "I spend my time exploring web design, graphic design, video editing, and digital marketing, while diving deeper into AI, cybersecurity, and full-stack development. Along the way, I share practical insights, creative experiments, and AI-driven tools on my YouTube channel blending tech with creativity to build something meaningful."
    },
    {
      emoji: "🌱",
      title: "Looking Ahead",
      content: "This portfolio isn't just a showcase of my work — it's a journal of growth. It reflects what I've done, what I'm learning today, and the projects I'll build tomorrow."
    }
  ];


  return (
    <section id="about" className="py-20 px-6 border-t border-section-border relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue-light/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-blue-light mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-foreground via-accent-blue to-foreground p-[1px] rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-card rounded-xl p-8 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {card.emoji}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground bg-gradient-to-r from-foreground to-accent-blue bg-clip-text text-transparent">
                    {card.title}
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;