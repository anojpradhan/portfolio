import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const SingleProject = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center py-20">Project not found.</p>;
  }

  const otherProjects = projects.filter((p) => p.slug !== slug);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {project.title}
          </h1>

          <p className="text-gray-600 mb-6">{project.type}</p>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            {project.longdesc.split("\n\n").map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* VIEW PROJECT BUTTON */}
          {project.url && (
            <div className="mt-6">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:underline underline-offset-4 transition-all"
              >
                View Project
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          )}

          {/* MOBILE SKILLS */}
          <div className="block lg:hidden mt-12">
            <h3 className="text-lg font-semibold mb-4">Skills Used</h3>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-5">Other Projects</h2>

            <div className="space-y-4">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  desc={project.desc}
                  slug={project.slug}
                  url={project.url}
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="hidden lg:block lg:col-span-1 sticky top-24 h-fit">
          <h3 className="text-xl font-semibold mb-5">Skills Used</h3>

          <ul className="space-y-3">
            {project.skills.map((skill, index) => (
              <li
                key={index}
                className="border border-gray-300 px-4 py-2 text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default SingleProject;
