import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Emily entregou um espaço com alma, sem dores de cabeça. Controle total de custos e prazos!",
    author: "Empresária de importados",
    location: "Palotina/PR",
  },
  {
    id: 2,
    quote: "Gestão impecável no shopping. Sem surpresas, só resultados.",
    author: "Cliente LG Importados",
    location: "Palotina/PR",
  },
  {
    id: 3,
    quote:
      "Transformou minha casa rural sem reformas radicais. Funciona na vida real!",
    author: "Produtor rural",
    location: "Oeste PR",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            O Que Meus Clientes Dizem
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Quote Text */}
              <blockquote className="text-body text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about WhatsApp prints */}
        <p className="text-center text-sm text-muted-foreground mt-12 animate-fade-up animate-delay-500">
          Depoimentos reais de clientes satisfeitos
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
