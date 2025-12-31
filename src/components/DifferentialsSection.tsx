import { FileText, DollarSign, Eye, Heart, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const DifferentialsSection = () => {
  const { t } = useLanguage();
  
  const differentials = [
    {
      icon: FileText,
      title: t('differentials.items.complete.title'),
      description: t('differentials.items.complete.description'),
    },
    {
      icon: DollarSign,
      title: t('differentials.items.transparent.title'),
      description: t('differentials.items.transparent.description'),
    },
    {
      icon: Eye,
      title: t('differentials.items.tracking.title'),
      description: t('differentials.items.tracking.description'),
    },
    {
      icon: Heart,
      title: t('differentials.items.humanized.title'),
      description: t('differentials.items.humanized.description'),
    },
    {
      icon: Globe,
      title: t('differentials.items.binational.title'),
      description: t('differentials.items.binational.description'),
    },
  ];

  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            {t('differentials.title')}
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-200">
            {t('differentials.subtitle')}
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
        <p className="text-center text-body text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-600" dangerouslySetInnerHTML={{ __html: t('differentials.targetNote') }} />
      </div>
    </section>
  );
};

export default DifferentialsSection;
