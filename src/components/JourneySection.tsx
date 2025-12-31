import { useLanguage } from "@/lib/LanguageContext";

const JourneySection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="jornada" className="section-padding bg-card">
      <div className="container-editorial">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            {t('journey.title')}
          </h2>
          
          <div className="divider-elegant animate-fade-up animate-delay-100" />

          {/* Story Content */}
          <div className="text-body text-muted-foreground space-y-6 text-left md:text-center animate-fade-up animate-delay-200">
            <p dangerouslySetInnerHTML={{ __html: t('journey.paragraph1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('journey.paragraph2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('journey.paragraph3') }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
