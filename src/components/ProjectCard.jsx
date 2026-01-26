import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, desc, slug, url }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-gray-300 p-5 hover:border-black transition-all duration-300 flex flex-col justify-between group hover:cursor-pointer"
      onClick={() => navigate(`/projects/${slug}`)}
    >
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>

      <div className="flex gap-3">
        {/* Learn More button */}
        <button
          className="flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4 transition-all hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${slug}`);
          }}
        >
          Learn More
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        {/* View Project button */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline underline-offset-4 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            View Project
            <ArrowRight
              size={14}
              className="translate-x-0 group-hover:translate-x-1 transition-transform"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
