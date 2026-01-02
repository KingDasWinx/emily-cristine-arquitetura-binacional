import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProjectDetailCarousel from "@/components/ProjectDetailCarousel";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <JourneySection />
      <DifferentialsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ProcessSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
