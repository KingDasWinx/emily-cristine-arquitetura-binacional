import { useLanguage } from "@/lib/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding-sm bg-foreground">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-background font-medium">
              {t('footer.brand')}
            </p>
            <p className="text-background/60 text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © {currentYear} {t('footer.rights')}
          </p>

          {/* Location */}
          <p className="text-background/60 text-sm text-center md:text-right">
            {t('footer.location')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
