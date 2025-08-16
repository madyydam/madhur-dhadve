const About = () => {
  return (
    <section id="about" className="py-20 px-6 border-t border-section-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="space-y-10">
          {/* Who I Am */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-2xl">👋</span> Who I Am
            </h3>
            <p className="text-lg leading-relaxed text-text-secondary">
              I'm <strong>Madhur Dhadve</strong>, 18 years old, currently studying <strong>Computer Engineering</strong>. 
              I'm curious about how technology, creativity, and business connect — and I'm building my journey step by step.
            </p>
          </div>

          {/* What I'm Learning */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-2xl">📚</span> What I'm Learning
            </h3>
            <p className="text-lg leading-relaxed text-text-secondary">
              I spend my time learning and practicing <strong>web design, graphic design, video editing, and digital marketing</strong>, 
              while also exploring <strong>AI, cybersecurity, and full-stack development</strong>. I also share videos about AI tools, 
              tech, and creativity on my YouTube channel.
            </p>
          </div>

          {/* What I've Built */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-2xl">🚀</span> What I've Built
            </h3>
            <div className="space-y-3 text-lg leading-relaxed text-text-secondary">
              <p>• An <strong>E-Commerce Store</strong> to practice design and user experience.</p>
              <p>• <strong>Futora AI</strong> (Founder) – exploring how AI tools help creators and businesses.</p>
              <p>• <strong>Velora Creatives</strong> (Co-Founder) – helping brands grow with creative design and strategy.</p>
            </div>
          </div>

          {/* Looking Ahead */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <span className="text-2xl">🌱</span> Looking Ahead
            </h3>
            <p className="text-lg leading-relaxed text-text-secondary">
              This portfolio isn't just a showcase of my work — it's a journal of growth. It reflects what I've done, 
              what I'm learning today, and the projects I'll build tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;