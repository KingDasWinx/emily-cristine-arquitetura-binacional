import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=5544998164074&text=Olá! Vim pela landing e quero falar sobre um projeto.";

  return (
    <section className="min-h-screen flex items-center section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-editorial relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            Arquitetura de Alto Padrão
          </p>

          {/* Main Heading */}
          <h1 className="heading-hero text-foreground mb-8 animate-fade-up animate-delay-100 text-balance">
            Eu transformo espaços de alto padrão com alma, propósito e gestão completa do início ao fim.
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-12 animate-fade-up animate-delay-200">
            Atuo em projetos residenciais e comerciais no Oeste do Paraná e Paraguai, 
            criando ambientes que funcionam na vida real, sem improvisos ou dores de cabeça.
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-fade-up animate-delay-300"
          >
            <MessageCircle className="w-5 h-5" />
            Fale diretamente comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
