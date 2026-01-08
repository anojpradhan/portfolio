import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          desc={project.desc}
          slug={project.slug}
        />
      ))}
    </div>
  );
};

export default Projects;
