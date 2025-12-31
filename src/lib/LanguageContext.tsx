import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  resetToAuto: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detecta o idioma do navegador
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Verifica se o idioma do navegador é suportado
  if (browserLang.startsWith('pt')) return 'pt-BR';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('en')) return 'en';
  
  // Verifica idiomas preferidos
  const preferredLanguages = navigator.languages || [];
  for (const lang of preferredLanguages) {
    if (lang.startsWith('pt')) return 'pt-BR';
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('en')) return 'en';
  }
  
  // Padrão: português brasileiro
  return 'pt-BR';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Sempre detecta o idioma do navegador ao carregar a página
  const [language, setLanguageState] = useState<Language>(() => {
    // Detecta o idioma do navegador
    const browserLang = detectBrowserLanguage();
    
    // Verifica se há idioma salvo manualmente pelo usuário
    const savedLang = localStorage.getItem('language-manual') as Language;
    
    // Se o usuário já selecionou um idioma manualmente, usa esse
    // Caso contrário, sempre usa o idioma do navegador
    return savedLang || browserLang;
  });

  // Atualiza o idioma toda vez que a página carrega baseado no navegador
  useEffect(() => {
    const savedLang = localStorage.getItem('language-manual');
    
    // Se NÃO houver idioma salvo manualmente, atualiza para o idioma do navegador
    if (!savedLang) {
      const browserLang = detectBrowserLanguage();
      if (browserLang !== language) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  // Salva no localStorage quando o usuário mudar manualmente
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Marca que foi uma escolha manual do usuário
    localStorage.setItem('language-manual', lang);
  };

  // Reseta para detecção automática do navegador
  const resetToAuto = () => {
    localStorage.removeItem('language-manual');
    const browserLang = detectBrowserLanguage();
    setLanguageState(browserLang);
  };

  // Função de tradução
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, resetToAuto, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
