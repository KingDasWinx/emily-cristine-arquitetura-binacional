import { MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t('cta.whatsapp.message'));
  const whatsappLink = `https://api.whatsapp.com/send?phone=5544998164074&text=${whatsappMessage}`;

  return (
    <section id="contato" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Message */}
          <h2 className="heading-section text-primary-foreground mb-6 animate-fade-up" dangerouslySetInnerHTML={{ __html: t('cta.title') }} />

          <p className="text-body-lg text-primary-foreground/90 mb-10 max-w-xl mx-auto animate-fade-up animate-delay-100">
            {t('cta.subtitle')}
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 
                       px-10 py-5 
                       bg-card text-primary
                       font-medium text-lg
                       rounded-full
                       transition-all duration-300
                       hover:bg-background hover:shadow-elevated hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-card focus:ring-offset-2 focus:ring-offset-primary
                       animate-fade-up animate-delay-200
                       group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
            <MessageCircle className="w-6 h-6 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-500" />
            <span className="group-hover:tracking-wider transition-all duration-300">{t('cta.button')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
