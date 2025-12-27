const JourneySection = () => {
  return (
    <section id="jornada" className="section-padding bg-card">
      <div className="container-editorial">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            Minha Jornada Pessoal
          </h2>
          
          <div className="divider-elegant animate-fade-up animate-delay-100" />

          {/* Story Content */}
          <div className="text-body text-muted-foreground space-y-6 text-left md:text-center animate-fade-up animate-delay-200">
            <p>
              Eu sou <strong className="text-foreground">Emily Cristine</strong>, arquiteta e urbanista com mais de 10 anos de experiência, 
              especialista em projetos arquitetônicos, sustentabilidade e neuroarquitetura.
            </p>

            <p>
              Mas minha história vai além da formação técnica: em 2018, durante uma gravidez 
              delicada, vivi uma experiência de quase-morte que mudou tudo. Naquele momento limite, 
              entendi minha missão verdadeira – usar a arquitetura para acolher, curar e transformar 
              vidas através de espaços com propósito e fé cristã.
            </p>

            <p>
              Fundei a <strong className="text-foreground">HGM Empreendimentos</strong> para oferecer gestão completa de obras, 
              atuando binacionalmente entre Brasil e Paraguai. Hoje, cada projeto que assino 
              une técnica impecável, escuta profunda e sensibilidade humana, competindo com 
              grandes estúdios de Curitiba pela transparência e resultados reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
