import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectPool from "@/assets/project-pool.png";

interface ProjectDetails {
  challenge: string;
  solution: string;
  result: string;
}

interface FeaturedProject {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
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

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "7 Saltos Resort",
    location: "Salto del Guairá/PY",
    category: "Comercial",
    image: projectCommercial,
    description: {
      'pt-BR': "Projeto comercial de alto impacto na fronteira Brasil–Paraguai.",
      'en': "High-impact commercial project on the Brazil-Paraguay border.",
      'es': "Proyecto comercial de alto impacto en la frontera Brasil-Paraguay."
    },
    details: {
      'pt-BR': {
        challenge: "Criar shopping funcional e atrativo sem perder controle de custos e prazos.",
        solution: "Projeto executivo completo + compatibilização técnica (elétrica, hidráulica, SPDA) + gestão total da obra.",
        result: "Espaço organizado, sustentável e pronto para crescer, sem improvisos."
      },
      'en': {
        challenge: "Create a functional and attractive shopping center without losing control of costs and deadlines.",
        solution: "Complete executive project + technical compatibility (electrical, plumbing, lightning protection) + full construction management.",
        result: "Organized, sustainable space ready to grow, without improvisation."
      },
      'es': {
        challenge: "Crear un centro comercial funcional y atractivo sin perder el control de costos y plazos.",
        solution: "Proyecto ejecutivo completo + compatibilización técnica (eléctrica, plomería, protección contra rayos) + gestión total de obra.",
        result: "Espacio organizado, sostenible y listo para crecer, sin improvisación."
      }
    }
  },
  {
    id: 2,
    title: "Residencial Alto Padrão",
    location: "Oeste PR",
    category: "Residencial",
    image: projectResidential2,
    description: {
      'pt-BR': "Fachada contemporânea com elementos naturais e design funcional.",
      'en': "Contemporary facade with natural elements and functional design.",
      'es': "Fachada contemporánea con elementos naturales y diseño funcional."
    },
    details: {
      'pt-BR': {
        challenge: "Conciliar modernidade com sustentabilidade em projeto residencial de alto padrão.",
        solution: "Integração de materiais naturais com tecnologia sustentável, projeto executivo detalhado com compatibilização de sistemas.",
        result: "Residência moderna, funcional e ambientalmente responsável."
      },
      'en': {
        challenge: "Reconcile modernity with sustainability in a high-end residential project.",
        solution: "Integration of natural materials with sustainable technology, detailed executive project with system compatibility.",
        result: "Modern, functional, and environmentally responsible residence."
      },
      'es': {
        challenge: "Conciliar modernidad con sostenibilidad en proyecto residencial de alto nivel.",
        solution: "Integración de materiales naturales con tecnología sostenible, proyecto ejecutivo detallado con compatibilización de sistemas.",
        result: "Residencia moderna, funcional y ambientalmente responsable."
      }
    }
  },
  {
    id: 3,
    title: "Área de Lazer com Piscina",
    location: "Oeste PR",
    category: "Residencial",
    image: projectPool,
    description: {
      'pt-BR': "Projeto de área externa integrada com paisagismo e deck em madeira.",
      'en': "Outdoor area project integrated with landscaping and wooden deck.",
      'es': "Proyecto de área externa integrada con paisajismo y deck de madera."
    },
    details: {
      'pt-BR': {
        challenge: "Criar espaço de lazer integrado com natureza e funcionalidade.",
        solution: "Projeto paisagístico integrado com deck em madeira premium, piscina com design contemporâneo e zonas de convivência.",
        result: "Área externa acolhedora, funcional e integrada à paisagem natural."
      },
      'en': {
        challenge: "Create a leisure space integrated with nature and functionality.",
        solution: "Integrated landscaping project with premium wooden deck, contemporary design pool, and social areas.",
        result: "Welcoming, functional outdoor area integrated with natural landscape."
      },
      'es': {
        challenge: "Crear espacio de ocio integrado con naturaleza y funcionalidad.",
        solution: "Proyecto paisajístico integrado con deck de madera premium, piscina con diseño contemporáneo y zonas de convivencia.",
        result: "Área externa acogedora, funcional e integrada al paisaje natural."
      }
    }
  }
];

const ProjectDetailCarousel = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScrollKey, setAutoScrollKey] = useState(0);

  // Auto scroll a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === featuredProjects.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [autoScrollKey]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
    setAutoScrollKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
    setAutoScrollKey((prev) => prev + 1);
  };

  const currentProject = featuredProjects[currentIndex];
  const currentDescription = currentProject.description[language] || currentProject.description['pt-BR'];
  const currentDetails = currentProject.details[language] || currentProject.details['pt-BR'];

  return (
    <div className="mt-20 bg-background rounded-2xl p-8 md:p-12 animate-fade-up">
      <div className="relative">
        {/* Carousel Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-96">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in">
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-2 block">
              {t('projectDetail.featured')}
            </span>
            <h3 className="heading-subsection text-foreground mb-4">
              {currentProject.title} – {currentProject.location}
            </h3>
            <p className="text-body text-muted-foreground mb-6">
              {currentDescription}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('projectDetail.challenge')}:</h4>
                <p className="text-muted-foreground text-sm">
                  {currentDetails.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('projectDetail.solution')}:</h4>
                <p className="text-muted-foreground text-sm">
                  {currentDetails.solution}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('projectDetail.result')}:</h4>
                <p className="text-muted-foreground text-sm">
                  {currentDetails.result}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Navigation Controls */}
        {featuredProjects.length > 1 && (
          <div className="flex justify-center mt-8">
            {/* Indicators */}
            <div className="flex gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoScrollKey((prev) => prev + 1);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`${t('projectDetail.goTo')} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailCarousel;
