import ProjectPageCard from "@/components/cards/ProjectPage";
import ProjectData from "@/data/projectData";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>; 
};
export async function generateStaticParams() {
  return ProjectData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Optional: Revalidate if content changes (for ISR)
export const revalidate = 86400; // once per day

const ProjectPage = async ({ params }: Props) => {
  const { id } = await params; 
  const projectId = parseInt(id, 10);
  const project = ProjectData.find((p) => p.id === projectId);

  if (!project) return notFound();

  const nextProject = ProjectData.find((p) => p.id === projectId - 1);
  const prevProject = ProjectData.find((p) => p.id === projectId + 1);

  return (
    <ProjectPageCard
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
};

export default ProjectPage;
