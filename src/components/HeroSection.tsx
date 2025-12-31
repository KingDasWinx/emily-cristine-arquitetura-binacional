import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t('hero.whatsapp.message'));
  const whatsappLink = `https://api.whatsapp.com/send?phone=5544998164074&text=${whatsappMessage}`;

  return (
    <section className="min-h-screen flex items-center section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-editorial relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            {t('hero.eyebrow')}
          </p>

          {/* Main Heading */}
          <h1 className="heading-hero text-foreground mb-8 animate-fade-up animate-delay-100 text-balance">
            {t('hero.title')}
          </h1>

          {/* Subheadline */}
          <p className="text-body-lg text-muted-foreground max-w-2xl mb-12 animate-fade-up animate-delay-200">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-fade-up animate-delay-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:tracking-wide transition-all duration-300">{t('hero.cta')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
