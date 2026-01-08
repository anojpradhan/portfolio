import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, desc, slug }) => {
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

      <button
        className="flex items-center gap-1.5 text-sm font-medium group-hover:underline underline-offset-4 transition-all hover:cursor-pointer"
        onClick={() => navigate(`/projects/${slug}`)}
      >
        Learn More
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
};

export default ProjectCard;
