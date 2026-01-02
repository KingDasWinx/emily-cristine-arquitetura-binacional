import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import projectCommercial from "@/assets/project-commercial-1.jpg";
import saltos1 from "@/assets/7-saltos1.png";
import saltos2 from "@/assets/7-saltos2.png";

interface ProjectDetails {
  challenge: string;
  solution: string;
  result: string;
}

interface FeaturedProject {
  title: string;
  location: string;
  category: string;
  images: string[]; // Array de imagens
  description: {
    'pt-BR': string;
    'en': string;
    'es': string;
  };
  details: {
    'pt-BR': ProjectDetails;
    'en': ProjectDetails;
    'es': ProjectDetails;
  };
}

// Projeto destaque único: 7 Saltos Resort
const featuredProject: FeaturedProject = {
  title: "7 Saltos Resort",
  location: "Salto del Guairá/PY",
  category: "Comercial",
  images: [
    projectCommercial,
    saltos1,
    saltos2,
  ],
  description: {
    'pt-BR': "Requalificação completa de resort urbano de alto padrão com fachada icônica e experiência memorável.",
    'en': "Complete requalification of a high-end urban resort with iconic facade and memorable experience.",
    'es': "Recalificación completa de resort urbano de alto estándar con fachada icónica y experiencia memorable."
  },
  details: {
    'pt-BR': {
      challenge: "Transformar experiência negativa do hóspede, com ambientes mal planejados, perda financeira invisível e falta de identidade da marca.",
      solution: "Portal 7 Saltos icônico + redesign completo de 13 suítes + iluminação técnica + identidade visual padronizada + gestão transparente da obra.",
      result: "Hotel que encanta e envolve hóspedes, fortalece a marca 7 Saltos como referência regional e gera retorno financeiro sustentável."
    },
    'en': {
      challenge: "Transform negative guest experience, with poorly planned spaces, invisible financial losses, and lack of brand identity.",
      solution: "Iconic 7 Saltos Portal + complete redesign of 13 suites + technical lighting + standardized visual identity + transparent construction management.",
      result: "Hotel that enchants and engages guests, strengthens 7 Saltos brand as regional reference and generates sustainable financial return."
    },
    'es': {
      challenge: "Transformar experiencia negativa del huésped, con ambientes mal planificados, pérdida financiera invisible y falta de identidad de marca.",
      solution: "Portal 7 Saltos icónico + rediseño completo de 13 suites + iluminación técnica + identidad visual estandarizada + gestión transparente de obra.",
      result: "Hotel que encanta e involucra a los huéspedes, fortalece la marca 7 Saltos como referencia regional y genera retorno financiero sostenible."
    }
  }
};

const ProjectDetailCarousel = () => {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoScrollKey, setAutoScrollKey] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto scroll de imagens a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === featuredProject.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoScrollKey]);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? featuredProject.images.length - 1 : prev - 1
    );
    setAutoScrollKey((prev) => prev + 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === featuredProject.images.length - 1 ? 0 : prev + 1
    );
    setAutoScrollKey((prev) => prev + 1);
  };

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
    setAutoScrollKey((prev) => prev + 1); // Pause auto-scroll
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleLightboxPrevious = () => {
    setLightboxImageIndex((prev) =>
      prev === 0 ? featuredProject.images.length - 1 : prev - 1
    );
  };

  const handleLightboxNext = () => {
    setLightboxImageIndex((prev) =>
      prev === featuredProject.images.length - 1 ? 0 : prev + 1
    );
  };

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextImage();
    }
    if (isRightSwipe) {
      handlePreviousImage();
    }
  };

  // Touch handlers for Lightbox
  const onLightboxTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onLightboxTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onLightboxTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleLightboxNext();
    }
    if (isRightSwipe) {
      handleLightboxPrevious();
    }
  };

  const currentDescription = featuredProject.description[language] || featuredProject.description['pt-BR'];
  const currentDetails = featuredProject.details[language] || featuredProject.details['pt-BR'];

  return (
    <>
      <div className="mt-20 animate-fade-up">
        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg">
        {/* Image Gallery - Large Display */}
        <div className="relative">
          <div 
            className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-muted cursor-pointer touch-pan-x"
            onClick={() => openLightbox(currentImageIndex)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={featuredProject.images[currentImageIndex]}
              alt={`${featuredProject.title} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-700 select-none"
            />
          
            {/* Navigation Arrows - Desktop Only */}
            {featuredProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePreviousImage();
                  }}
                  className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background text-foreground transition-all duration-300 shadow-lg hover:scale-110 z-10 border border-border"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                  className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background text-foreground transition-all duration-300 shadow-lg hover:scale-110 z-10 border border-border"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {featuredProject.images.length > 1 && (
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-[10px] md:text-xs font-medium text-foreground border border-border pointer-events-none">
                {currentImageIndex + 1} / {featuredProject.images.length}
              </div>
            )}
          </div>

          {/* Image Indicators */}
          {featuredProject.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {featuredProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                    setAutoScrollKey((prev) => prev + 1);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-primary w-8"
                      : "bg-white/60 w-1.5 hover:bg-white/80 hover:w-4"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            {/* Title and Location */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                {featuredProject.title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
                <span className="inline-block w-1 h-5 bg-primary rounded-full" />
                {featuredProject.location}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {currentDescription}
            </p>

            {/* Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                <h4 className="font-semibold text-foreground text-base mb-3 flex items-center gap-2">
                  <span className="text-primary text-xl">●</span> 
                  {t('projectDetail.challenge')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentDetails.challenge}
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                <h4 className="font-semibold text-foreground text-base mb-3 flex items-center gap-2">
                  <span className="text-primary text-xl">●</span> 
                  {t('projectDetail.solution')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentDetails.solution}
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                <h4 className="font-semibold text-foreground text-base mb-3 flex items-center gap-2">
                  <span className="text-primary text-xl">●</span> 
                  {t('projectDetail.result')}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentDetails.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 z-[10000]"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full h-full flex flex-col items-center justify-center touch-pan-x"
            onTouchStart={onLightboxTouchStart}
            onTouchMove={onLightboxTouchMove}
            onTouchEnd={onLightboxTouchEnd}
          >
            {/* Large Image */}
            <div className="relative max-w-7xl max-h-[80vh] flex items-center justify-center mb-6">
              <img
                src={featuredProject.images[lightboxImageIndex]}
                alt={`${featuredProject.title} - Imagem ${lightboxImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
              />

              {/* Navigation Arrows - Desktop Only */}
              {featuredProject.images.length > 1 && (
                <>
                  <button
                    onClick={handleLightboxPrevious}
                    className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleLightboxNext}
                    className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 left-4 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs md:text-sm font-medium text-white">
                {lightboxImageIndex + 1} / {featuredProject.images.length}
              </div>
            </div>

            {/* Thumbnails Strip */}
            {featuredProject.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto max-w-4xl px-4 pb-4 md:pb-4">
                {featuredProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setLightboxImageIndex(index)}
                    className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === lightboxImageIndex
                        ? "border-primary scale-110"
                        : "border-white/20 hover:border-white/50 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetailCarousel;
