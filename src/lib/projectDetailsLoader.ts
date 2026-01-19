// Função para carregar metadados dos projetos destaques
// Esta função carrega todos os projetos da pasta /assets/project-detail

export interface ProjectDetail {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  details: {
    challenge: string;
    solution: string;
    result: string;
  };
  folderName: string; // Nome da pasta para referência
}

// Mapping manual dos projetos - em produção isto seria carregado dinamicamente
const projectsMap: Record<string, { folder: string; title: string }> = {
  "residencial-alto-padrao": {
    folder: "residencial-alto-padrao",
    title: "Residencial Alto Padrão"
  },
  "area-lazer-piscina": {
    folder: "area-lazer-piscina",
    title: "Área de Lazer com Piscina"
  }
};

export async function loadProjectDetails(): Promise<ProjectDetail[]> {
  const projects: ProjectDetail[] = [];

  for (const [key, { folder }] of Object.entries(projectsMap)) {
    try {
      // Carrega o metadata.json
      const metadataResponse = await fetch(
        `/src/assets/project-detail/${folder}/metadata.json`
      );
      
      if (metadataResponse.ok) {
        const metadata = await metadataResponse.json();
        projects.push({
          ...metadata,
          folderName: folder
        });
      }
    } catch (error) {
      console.error(`Erro ao carregar projeto ${folder}:`, error);
    }
  }

  // Ordena por ID
  return projects.sort((a, b) => a.id - b.id);
}

// Função auxiliar para resolver o caminho da imagem
export function getProjectImagePath(folderName: string): string {
  return `/src/assets/project-detail/${folderName}/image.jpg`;
}
