import { useState } from "react";

// Import project images
import projectCommercial from "@/assets/project-commercial-1.jpg";
import projectResidential1 from "@/assets/project-residential-1.png";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectInterior1 from "@/assets/project-interior-1.jpeg";
import projectInterior2 from "@/assets/project-interior-2.jpeg";
import projectPool from "@/assets/project-pool.png";
import projectFacade from "@/assets/project-facade.jpg";
import projectBedroom from "@/assets/project-bedroom.png";
import projectOutdoor from "@/assets/project-outdoor.png";

const projects = [
  {
    id: 1,
    title: "Shopping LG Importados",
    location: "Palotina/PR",
    category: "Comercial",
    image: projectCommercial,
    description: "Projeto comercial de alto impacto na fronteira Brasil–Paraguai.",
    details: {
      challenge: "Criar shopping funcional e atrativo sem perder controle de custos e prazos.",
      solution: "Projeto executivo completo + compatibilização técnica (elétrica, hidráulica, SPDA) + gestão total da obra.",
      result: "Espaço organizado, sustentável e pronto para crescer, sem improvisos."
    }
  },
  {
    id: 2,
    title: "Residencial Alto Padrão",
    location: "Oeste PR",
    category: "Residencial",
    image: projectResidential2,
    description: "Fachada contemporânea com elementos naturais e design funcional.",
  },
  {
    id: 3,
    title: "Área de Lazer com Piscina",
    location: "Oeste PR",
    category: "Residencial",
    image: projectPool,
    description: "Projeto de área externa integrada com paisagismo e deck em madeira.",
  },
  {
    id: 4,
    title: "Cozinha Gourmet Premium",
    location: "Palotina/PR",
    category: "Interiores",
    image: projectInterior2,
    description: "Cozinha integrada com acabamentos de alto padrão e iluminação LED.",
  },
  {
    id: 5,
    title: "Área de Convivência",
    location: "Oeste PR",
    category: "Residencial",
    image: projectResidential1,
    description: "Espaço coberto com pergolado em madeira e vista para a piscina.",
  },
  {
    id: 6,
    title: "Adega e Bar Residencial",
    location: "Palotina/PR",
    category: "Interiores",
    image: projectInterior1,
    description: "Cristaleira iluminada com design contemporâneo e funcional.",
  },
  {
    id: 7,
    title: "Residência Térrea",
    location: "Oeste PR",
    category: "Residencial",
    image: projectFacade,
    description: "Projeto residencial com jardim frontal e acabamentos em pedra natural.",
  },
  {
    id: 8,
    title: "Quarto Infantil Temático",
    location: "Palotina/PR",
    category: "Interiores",
    image: projectBedroom,
    description: "Neuroarquitetura aplicada ao universo lúdico e funcional.",
  },
  {
    id: 9,
    title: "Espaço Comercial Premium",
    location: "Palotina/PR",
    category: "Comercial",
    image: projectOutdoor,
    description: "Área externa com paisagismo integrado e arte urbana.",
  },
];

const categories = ["Todos", "Comercial", "Residencial", "Interiores"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="section-padding bg-card">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4 animate-fade-up">
            Meus Projetos Destaque
          </h2>
          <div className="divider-elegant animate-fade-up animate-delay-100" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-200">
            Aqui estão cases reais que provam minha autoridade em projetos no Brasil e Paraguai.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up animate-delay-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-primary-foreground/80 text-sm font-medium mb-1">
                  {project.category} • {project.location}
                </span>
                <h3 className="text-primary-foreground font-display text-xl font-medium">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Project Detail - Shopping LG */}
        <div className="mt-20 bg-background rounded-2xl p-8 md:p-12 animate-fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-2 block">
                Projeto Destaque
              </span>
              <h3 className="heading-subsection text-foreground mb-4">
                Shopping LG Importados – Palotina/PR
              </h3>
              <p className="text-body text-muted-foreground mb-6">
                Projeto comercial de alto impacto na fronteira Brasil–Paraguai.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Desafio:</h4>
                  <p className="text-muted-foreground text-sm">
                    Criar shopping funcional e atrativo sem perder controle de custos e prazos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Minha solução:</h4>
                  <p className="text-muted-foreground text-sm">
                    Projeto executivo completo + compatibilização técnica (elétrica, hidráulica, SPDA) + gestão total da obra.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Resultado:</h4>
                  <p className="text-muted-foreground text-sm">
                    Espaço organizado, sustentável e pronto para crescer, sem improvisos.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={projectCommercial}
                alt="Shopping LG Importados"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Other Project Types */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-background rounded-xl p-6">
            <h4 className="font-display text-lg font-medium text-foreground mb-2">
              Shoppings Premium: JBL e Ferracini
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Interiores humanizados para marcas de luxo</li>
              <li>• Sustentabilidade integrada</li>
              <li>• Foco na experiência do usuário</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-6">
            <h4 className="font-display text-lg font-medium text-foreground mb-2">
              Clínicas e Laboratórios
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Projetos com normas técnicas rigorosas (ANVISA)</li>
              <li>• Fluxos otimizados</li>
              <li>• Gestão que evita retrabalhos caros</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-6">
            <h4 className="font-display text-lg font-medium text-foreground mb-2">
              Residenciais Agro-Rural de Luxo
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Layouts humanizados</li>
              <li>• Sustentabilidade aplicada ao agro premium</li>
              <li>• Organização sem reformas radicais</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
