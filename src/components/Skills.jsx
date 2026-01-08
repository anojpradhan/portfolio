const skills = [
  "Git",
  "JavaScript",
  "tailwindcss",
  "NestJS",
  "MySQL",
  "Laravel",
  "React",
  "Express",
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="border border-gray-300 p-4 text-center font-medium text-sm hover:bg-black hover:text-white transition-all duration-200 cursor-default"
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default Skills;
