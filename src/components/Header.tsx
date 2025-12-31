import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('header.about'), href: "#jornada" },
    { label: t('header.differentials'), href: "#diferenciais" },
    { label: t('header.projects'), href: "#projetos" },
    { label: t('header.testimonials'), href: "#depoimentos" },
    { label: t('header.contact'), href: "#contato" },
  ];

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-editorial flex items-center justify-between px-6 lg:px-24">
        {/* Logo */}
        <a href="#" className="font-display text-xl md:text-2xl font-medium text-foreground">
          Emily Cristine
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              aria-label="Selecionar idioma"
            >
              <Globe className="w-4 h-4" />
              {languages.find(l => l.code === language)?.flag}
            </button>

            {/* Language Dropdown */}
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden animate-fade-in min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in">
          <nav className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="pt-3 mt-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Idioma</p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
