import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-primary/30">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Curso Profissional Completo</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Trancista
            <span className="block mt-2 text-primary">Iniciante</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light">
            Transforme sua paixão por beleza em profissão. Aprenda técnicas profissionais de tranças e construa uma carreira de sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection('inscricao')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 py-6 text-lg shadow-glow transition-all hover:scale-105"
            >
              Quero me Inscrever
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('modulos')}
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            >
              Ver Conteúdo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { number: "6", label: "Módulos Práticos" },
              { number: "100%", label: "Presencial" },
              { number: "∞", label: "Acesso Vitalício" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-md border-2 border-primary/20 rounded-2xl p-6 animate-scale-in shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-playfair text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                fill="hsl(var(--background))" 
          />
        </svg>
      </div>
    </section>
  );
};
