import { Heart, Award, Users } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre o Curso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Um curso completo pensado especialmente para quem deseja iniciar na arte das tranças profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: "Com Amor & Dedicação",
                description: "Cada aula foi desenvolvida com carinho para proporcionar a melhor experiência de aprendizado"
              },
              {
                icon: Award,
                title: "Certificado Profissional",
                description: "Receba seu certificado de conclusão e comece a trabalhar com confiança"
              },
              {
                icon: Users,
                title: "Suporte Completo",
                description: "Conte com suporte direto para tirar suas dúvidas durante todo o curso"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary to-muted rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Por que escolher este curso?
              </h3>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Nosso curso foi desenvolvido para transformar iniciantes em profissionais confiantes e capacitados. 
                Você aprenderá desde os fundamentos básicos até técnicas avançadas de tranças, com aulas práticas 
                e passo a passo detalhado.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Seja para iniciar uma nova carreira, ter uma renda extra ou simplesmente dominar uma habilidade 
                incrível, este curso é perfeito para você!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
