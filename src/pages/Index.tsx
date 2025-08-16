import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import YouTube from "@/components/YouTube";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Journey />
      <Projects />
      <YouTube />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
