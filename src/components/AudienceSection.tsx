import { Building2, Wheat, Stethoscope, Tag, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const AudienceSection = () => {
  const { t } = useLanguage();
  
  const audiences = [
    {
      icon: Building2,
      title: t('audience.items.entrepreneurs'),
    },
    {
      icon: Wheat,
      title: t('audience.items.farmers'),
    },
    {
      icon: Stethoscope,
      title: t('audience.items.clinics'),
    },
    {
      icon: Tag,
      title: t('audience.items.brands'),
    },
    {
      icon: CheckCircle,
      title: t('audience.items.planning'),
    },
  ];
  return (
    <section id="publico" className="section-padding bg-background">
      <div className="container-editorial">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            {t('audience.title')}
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
          <p className="text-body text-muted-foreground mb-12 animate-fade-up animate-delay-200">
            {t('audience.subtitle')}
          </p>

          {/* Audience List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {audiences.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-4 rounded-lg bg-card hover:shadow-card transition-shadow duration-300 animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground text-left font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Filter Note */}
          <div className="bg-muted/30 rounded-lg p-6 animate-fade-up animate-delay-600">
            <p className="text-muted-foreground text-sm italic">
              {t('audience.filterNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
