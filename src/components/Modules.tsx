import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Modules = () => {
  const modules = [
    {
      number: "01",
      title: "Materiais para Trançar",
      description: "Conheça todos os materiais necessários e aprenda a escolher os melhores produtos",
      topics: [
        "Pomada Modeladora",
        "Pente fino com cabo de ferro",
        "Agulha de crochê",
        "Tesoura profissional",
        "Presilhas e Lastex",
        "Jumbo e cachos orgânicos"
      ]
    },
    {
      number: "02",
      title: "Preparação do Cabelo",
      description: "Técnicas de preparação pré-procedimento para resultados perfeitos",
      topics: [
        "Lavagem e secagem adequada",
        "Técnica Blowout",
        "Preparação de diferentes tipos de cabelo",
        "Dicas para facilitar o processo"
      ]
    },
    {
      number: "03",
      title: "Divisão",
      description: "Aprenda a fazer divisões perfeitas para tranças uniformes e duráveis",
      topics: [
        "Técnica de divisão em quadradinhos",
        "Repartição em formato tijolinho",
        "Tamanhos de seção",
        "Acabamento profissional"
      ]
    },
    {
      number: "04",
      title: "Box Braids Ponta Reta",
      description: "Domine a técnica mais popular de tranças box braids",
      topics: [
        "Passo a passo completo",
        "Técnica de finalização",
        "Truques para agilizar o processo",
        "Dicas de durabilidade"
      ]
    },
    {
      number: "05",
      title: "Gypsy Braids",
      description: "Aprenda a criar as lindas tranças estilo cigana",
      topics: [
        "Técnica Gypsy completa",
        "Combinação de texturas",
        "Finalização romântica",
        "Variações de estilo"
      ]
    },
    {
      number: "06",
      title: "Boho Braids",
      description: "Crie as trendy boho braids que são sucesso nas redes sociais",
      topics: [
        "Estilo boho moderno",
        "Cachos naturais integrados",
        "Acabamento despojado",
        "Personalização do look"
      ]
    }
  ];

  return (
    <section id="modulos" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Conteúdo Programático
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              6 módulos completos para você dominar as principais técnicas de tranças
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 animate-scale-in hover:shadow-glow bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                      <span className="font-playfair text-2xl font-bold text-white">{module.number}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-playfair text-2xl mb-2">{module.title}</CardTitle>
                      <CardDescription className="text-base">{module.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
