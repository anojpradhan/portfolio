const skills = [
  // Data Science & AI/ML
  "Python",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Statistics",
  "Machine Learning",
  "Data Analysis",
  "EDA",

  // Web Development
  "JavaScript",
  "React",
  "NestJS",
  "Express",
  "Laravel",
  "Tailwind CSS",

  // Database & Tools
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
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
