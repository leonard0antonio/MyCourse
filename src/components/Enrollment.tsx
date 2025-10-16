import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Calendar, DollarSign, Users } from "lucide-react";

export const Enrollment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "0000000000"; // Replace with your WhatsApp number
    const message = `Olá! Gostaria de me inscrever no Curso de Trancista Iniciante.%0A%0ANome: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ATelefone: ${encodeURIComponent(formData.phone)}${formData.message ? `%0AMensagem: ${encodeURIComponent(formData.message)}` : ''}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será direcionado para continuar a inscrição pelo WhatsApp.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="inscricao" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Garanta Sua Vaga
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário e receba todas as informações sobre o curso
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Course Info */}
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 shadow-glow bg-gradient-to-br from-card to-secondary">
                <CardHeader>
                  <CardTitle className="font-playfair text-3xl">Informações do Curso</CardTitle>
                  <CardDescription className="text-base">Próxima turma abrindo em breve</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Duração</h3>
                      <p className="text-muted-foreground">Indeterminado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Investimento</h3>
                      <p className="text-muted-foreground">Condições especiais para as primeiras inscritas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Vagas Limitadas</h3>
                      <p className="text-muted-foreground">Turmas reduzidas para melhor acompanhamento</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">O que está incluso:</h3>
                    <ul className="space-y-3">
                      {[
                        "6 módulos completos presenciais",
                        "Material de apoio em apostila impressa",
                        "Certificado de conclusão",
                        "Suporte direto com instrutora",
                        "Conteúdo exclusivo",
                        "Acompanhamento personalizado"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enrollment Form */}
            <Card className="border-2 shadow-soft">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Formulário de Inscrição</CardTitle>
                <CardDescription>Preencha seus dados e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre você e suas expectativas..."
                      rows={4}
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-lg shadow-glow transition-all hover:scale-105"
                  >
                    Inscrever via WhatsApp
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar, você concorda em receber informações sobre o curso
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
