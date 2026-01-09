import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIBuilt from "@/components/WhatIBuilt";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollProgress />
      <Hero />
      <WhatIBuilt />
      <Skills />
      <Journey />
      <WorkExperience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
