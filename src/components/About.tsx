const About = () => {
  return (
    <section id="about" className="py-20 px-6 border-t border-section-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-text-secondary">
            Hi, I'm Madhur Dhadve, an 18-year-old currently pursuing a degree in Computer Engineering. 
            I enjoy exploring how technology, creativity, and business connect. Over the past few years, 
            I've been learning and practicing skills like web design, graphic design, video editing, 
            and digital marketing, while also getting deeper into AI, cybersecurity, and full-stack development.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary mt-6">
            I've built projects like an e-commerce store, Futora AI (which I founded), and Velora Creatives 
            (which I co-founded). I also experiment with different ideas, share content on my YouTube channel, 
            and keep building step by step.
          </p>
          <p className="text-lg leading-relaxed text-text-secondary mt-6">
            This site is not just a portfolio—it's my journey. It shows what I've done, what I'm learning now, 
            and what I plan to build in the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;