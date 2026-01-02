import { useLanguage } from "@/lib/LanguageContext";

const JourneySection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="jornada" className="section-padding bg-card">
      <div className="container-editorial">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className="heading-section text-foreground mb-4 animate-fade-up text-center">
            {t('journey.title')}
          </h2>
          
          <div className="divider-elegant animate-fade-up animate-delay-100" />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* Photo */}
            <div className="animate-fade-up animate-delay-200">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/src/assets/emily-photo.jpg"
                  alt="Emily Cristine - Arquiteta e Urbanista"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback para placeholder se imagem não existir
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='533'%3E%3Crect fill='%23e5e5e5' width='400' height='533'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='16' fill='%23999'%3EAdicione emily-photo.jpg em /src/assets/%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Story Content */}
            <div className="text-body text-muted-foreground space-y-6 text-left animate-fade-up animate-delay-300">
              <p dangerouslySetInnerHTML={{ __html: t('journey.paragraph1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('journey.paragraph2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('journey.paragraph3') }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
