import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Modules } from "@/components/Modules";
import { Benefits } from "@/components/Benefits";
import { Enrollment } from "@/components/Enrollment";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <Hero />
      <About />
      <Modules />
      <Benefits />
      <Enrollment />
      <Footer />
    </main>
  );
};

export default Index;
