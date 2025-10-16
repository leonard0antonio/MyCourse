import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-accent text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-playfair text-3xl font-bold">
            Curso Profissional de Trancista
          </h3>
          
          <p className="text-white/90 max-w-2xl mx-auto">
            Transforme sua paixão em profissão. Seja uma trancista profissional e conquiste sua independência financeira fazendo o que ama.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <span>Feito com</span>
            <Heart className="w-4 h-4 fill-white" />
            <span>para futuras trancistas de sucesso</span>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()}Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
