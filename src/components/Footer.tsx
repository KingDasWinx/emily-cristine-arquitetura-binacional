import { useLanguage } from "@/lib/LanguageContext";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent('Olá! Vi seu site e gostaria de conversar sobre um projeto.');
  const whatsappLink = `https://api.whatsapp.com/send?phone=5544998164074&text=${whatsappMessage}`;
  const instagramLink = "https://www.instagram.com/emilycristinemocellin";

  return (
    <footer className="section-padding-sm bg-foreground">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-background font-medium">
              {t('footer.brand')}
            </p>
            <p className="text-background/60 text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-background/60 text-xs uppercase tracking-wider">
              {t('footer.social')}
            </p>
            <div className="flex gap-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 text-background transition-all duration-300 hover:scale-110"
                aria-label={t('footer.instagram')}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-background/20 text-background transition-all duration-300 hover:scale-110"
                aria-label={t('footer.whatsapp')}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Location & Copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/60 text-sm mb-1">
              {t('footer.location')}
            </p>
            <p className="text-background/50 text-xs">
              © {currentYear} {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
