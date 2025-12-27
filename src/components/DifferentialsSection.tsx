import { FileText, DollarSign, Eye, Heart, Globe } from "lucide-react";

const differentials = [
  {
    icon: FileText,
    title: "Projeto executivo completo",
    description: "Detalhamento total (elétrica, hidráulica, materiais, normas).",
  },
  {
    icon: DollarSign,
    title: "Gestão transparente de custos",
    description: "Orçamentos por etapas, sem surpresas ou improvisos.",
  },
  {
    icon: Eye,
    title: "Acompanhamento total da obra",
    description: "Do conceito à entrega final, com controle de prazos.",
  },
  {
    icon: Heart,
    title: "Abordagem humanizada",
    description: "Espaços com alma que influenciam emoções e bem-estar.",
  },
  {
    icon: Globe,
    title: "Atuação binacional",
    description: "Expertise em projetos BR/PY, incluindo shoppings fronteiriços.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            Por Que Escolher Meu Trabalho?
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-200">
            Arquitetura não é só estética. É responsabilidade técnica que protege seu investimento. Eu entrego:
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="card-elevated group hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-subsection text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Audience Note */}
        <p className="text-center text-body text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-600">
          Trabalho com quem valoriza qualidade sobre preço baixo – 
          <strong className="text-foreground"> empresários, produtores rurais de alto padrão e marcas premium.</strong>
        </p>
      </div>
    </section>
  );
};

export default DifferentialsSection;
