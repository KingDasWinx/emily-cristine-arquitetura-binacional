import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      quote: t('testimonials.items.businesswoman.quote'),
      author: t('testimonials.items.businesswoman.author'),
      location: t('testimonials.items.businesswoman.location'),
    },
    {
      id: 2,
      quote: t('testimonials.items.farmer.quote'),
      author: t('testimonials.items.farmer.author'),
      location: t('testimonials.items.farmer.location'),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [autoScrollKey, setAutoScrollKey] = useState(0);

  // Cria array infinito: [...testimonials, ...testimonials, ...testimonials]
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto scroll a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoScrollKey]);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setAutoScrollKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setAutoScrollKey((prev) => prev + 1);
  };

  // Detecta quando chegar nas bordas e reseta posição
  const handleTransitionEnd = () => {
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(testimonials.length);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 50);
    } else if (currentIndex < testimonials.length) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(testimonials.length * 2 - 1);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 50);
    }
  };

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            {t('testimonials.title')}
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full pb-12">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ 
                transform: `translateX(calc(-${currentIndex * 80}% + 10%))`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {infiniteTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 flex justify-center items-center py-4"
                  style={{ width: '80%' }}
                >
                  <div 
                    className={`bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 w-full mx-2 md:mx-4 ${
                      isTransitioning ? 'transition-all duration-500' : ''
                    } ${
                      index === currentIndex 
                        ? 'shadow-2xl scale-100 opacity-100' 
                        : 'shadow-md scale-90 opacity-30'
                    }`}
                  >
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    {/* Quote Text */}
                    <blockquote className="text-body text-foreground mb-6 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 bg-background/80 rounded-xl p-4 border border-border/30">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-medium">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(testimonials.length + index);
                  setAutoScrollKey((prev) => prev + 1);
                }}
                className={`transition-all duration-300 ${
                  (currentIndex % testimonials.length) === index
                    ? "bg-primary w-8 h-2"
                    : "bg-muted-foreground/40 w-2 h-2 hover:bg-muted-foreground/60"
                } rounded-full`}
                aria-label={`${t('testimonials.goTo')} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
