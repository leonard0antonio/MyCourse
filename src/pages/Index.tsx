import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Modules } from "@/components/Modules";
import { Enrollment } from "@/components/Enrollment";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-inter">
      <Hero />
      <About />
      <Modules />
      <Enrollment />
      <Footer />
    </main>
  );
};

export default Index;
