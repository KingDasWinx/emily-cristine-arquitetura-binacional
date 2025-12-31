import { useLanguage } from "@/lib/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t('process.items.listening.title'),
      description: t('process.items.listening.description'),
    },
    {
      number: "02",
      title: t('process.items.briefing.title'),
      description: t('process.items.briefing.description'),
    },
    {
      number: "03",
      title: t('process.items.technical.title'),
      description: t('process.items.technical.description'),
    },
    {
      number: "04",
      title: t('process.items.budget.title'),
      description: t('process.items.budget.description'),
    },
    {
      number: "05",
      title: t('process.items.management.title'),
      description: t('process.items.management.description'),
    },
    {
      number: "06",
      title: t('process.items.delivery.title'),
      description: t('process.items.delivery.description'),
    },
  ];
  return (
    <section id="processo" className="section-padding bg-card">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            {t('process.title')}
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
