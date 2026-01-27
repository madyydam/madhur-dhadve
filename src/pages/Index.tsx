import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIBuilt from "@/components/WhatIBuilt";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import WorkExperience from "@/components/WorkExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionContainer from "@/components/SectionContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation />
      <ScrollProgress />

      <Hero />

      <SectionContainer>
        <WhatIBuilt />
      </SectionContainer>

      <SectionContainer>
        <TechStack />
      </SectionContainer>

      <SectionContainer>
        <Skills />
      </SectionContainer>

      <SectionContainer>
        <Journey />
      </SectionContainer>

      <SectionContainer>
        <WorkExperience />
      </SectionContainer>

      <SectionContainer>
        <About />
      </SectionContainer>

      <SectionContainer>
        <Contact />
      </SectionContainer>

      <Footer />
    </div>
  );
};

export default Index;
