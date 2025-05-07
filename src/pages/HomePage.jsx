import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WhyJoinSection from "../sections/WhyJoinSection";
import ProgramsSection from "../sections/ProgramsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import JoinSection from "../sections/JoinSection";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#1e1b4b] text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <ProgramsSection />
      <TestimonialsSection />
      <JoinSection />
      <Footer />
    </div>
  );
}