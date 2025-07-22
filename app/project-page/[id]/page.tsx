import ProjectPageCard from "@/components/cards/ProjectPage";
import ProjectData from "@/data/projectData";
import { notFound } from "next/navigation";

// Generate all possible static params at build time
export async function generateStaticParams() {
  return ProjectData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Optional: Revalidate if content changes (for ISR)
export const revalidate = 86400; // once per day

const ProjectPage = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10);
  const project = ProjectData.find((p) => p.id === id);

  if (!project) return notFound();

  const prevProject = ProjectData.find((p) => p.id === id - 1);
  const nextProject = ProjectData.find((p) => p.id === id + 1);

  return (
    <ProjectPageCard
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
};

export default ProjectPage;
