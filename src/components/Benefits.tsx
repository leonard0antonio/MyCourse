import { Star, TrendingUp, Clock, Sparkles } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Alta Demanda no Mercado",
      description: "Tranças são tendência mundial e estão sempre em alta, garantindo trabalho constante"
    },
    {
      icon: Clock,
      title: "Flexibilidade de Horários",
      description: "Trabalhe no seu ritmo, monte sua própria agenda e tenha liberdade de horários"
    },
    {
      icon: Star,
      title: "Reconhecimento Profissional",
      description: "Seja reconhecida como especialista em uma técnica valorizada e admirada"
    },
    {
      icon: Sparkles,
      title: "Transforme Vidas",
      description: "Eleve a autoestima das suas clientes e faça parte de momentos especiais"
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Ex-aluna",
      text: "Melhor investimento que já fiz! Em 3 meses já estava atendendo minhas próprias clientes e hoje vivo disso.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Trancista Profissional",
      text: "O curso é muito completo e didático. Aprendi técnicas que uso até hoje no meu dia a dia profissional.",
      rating: 5
    },
    {
      name: "Juliana Ferreira",
      role: "Empreendedora",
      text: "Comecei do zero e hoje tenho minha própria agenda cheia. O curso mudou minha vida financeiramente!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Por que ser Trancista?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma profissão em alta com benefícios incríveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-3xl bg-gradient-to-br from-card to-secondary border border-border hover:shadow-soft transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que nossas alunas dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-3xl p-8 shadow-soft border border-border animate-scale-in hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
