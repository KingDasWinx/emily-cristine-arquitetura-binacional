const steps = [
  {
    number: "01",
    title: "Escuta profunda",
    description: "Entendo suas necessidades, sonhos e desafios antes de qualquer traço.",
  },
  {
    number: "02",
    title: "Briefing e conceito",
    description: "Transformo suas ideias em um conceito visual claro e alinhado.",
  },
  {
    number: "03",
    title: "Projeto técnico completo",
    description: "Desenvolvimento executivo com todos os detalhamentos necessários.",
  },
  {
    number: "04",
    title: "Orçamento por etapas",
    description: "Transparência total com custos divididos e sem surpresas.",
  },
  {
    number: "05",
    title: "Gestão da obra",
    description: "Acompanhamento presencial garantindo qualidade e prazos.",
  },
  {
    number: "06",
    title: "Entrega com alma",
    description: "Seu espaço pronto para transformar sua vida e rotina.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="section-padding bg-card">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            Meu Processo Passo a Passo
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Step Number */}
              <span className="text-6xl font-display font-medium text-primary/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              
              {/* Content */}
              <div className="relative pt-8 pl-4">
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line (hidden on last item of each row) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
