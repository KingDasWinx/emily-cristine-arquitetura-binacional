import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectDetail, loadProjectDetails, getProjectImagePath } from "@/lib/projectDetailsLoader";
import { useLanguage } from "@/lib/LanguageContext";

const ProjectDetailCarousel = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [autoScrollKey, setAutoScrollKey] = useState(0);

  // Carrega os projetos ao montar o componente
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const loadedProjects = await loadProjectDetails();
        setProjects(loadedProjects);
      } catch (error) {
        console.error("Erro ao carregar projetos destaques:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Auto scroll a cada 3 segundos
  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [projects.length, autoScrollKey]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setAutoScrollKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setAutoScrollKey((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="mt-20 bg-background rounded-2xl p-8 md:p-12 animate-fade-up">
        <div className="h-96 flex items-center justify-center text-muted-foreground">
          {t('projectDetail.loading')}
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];
  const imagePath = getProjectImagePath(currentProject.folderName);

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
              {currentProject.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('projectDetail.challenge')}:</h4>
                <p className="text-muted-foreground text-sm">
                  {currentProject.details.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('projectDetail.solution')}:</h4>
                <p className="text-muted-foreground text-sm">
                  {currentProject.details.solution}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">{t('projectDetail.result')}:</h4>
                <p className="text-muted-foreground text-sm">
                  {currentProject.details.result}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={imagePath}
              alt={currentProject.title}
              className="w-full h-full object-cover transition-opacity duration-500"
              onError={(e) => {
                // Fallback para placeholder se imagem não existir
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ccc' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='16' fill='%23999'%3EImagem não disponível%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        {projects.length > 1 && (
          <div className="flex justify-center mt-8">
            {/* Indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
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
