import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIBuilt from "@/components/WhatIBuilt";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FutoraPay from "@/components/FutoraPay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollProgress />
      <Hero />
      <WhatIBuilt />
      <FutoraPay />
      <Skills />
      <Journey />
      <WorkExperience />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
