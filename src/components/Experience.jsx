const Experience = () => {
  const experiences = [
    {
      title: "Trainee – Full Stack Web Development",
      duration: "Oct 2024 – Jan 2025",
      company: "CloveIt Pvt. Ltd.",
      desc: "Trained in full stack web development with a strong focus on NestJS, React, and Tailwind CSS. Learned how to design modern, scalable web applications with proper database integration, clean architecture, and best development practices.",
    },
    {
      title: "Trainer – Web Development Bootcamp",
      duration: "Feb 2025 – Mar 2025",
      company: "Birat Multiple College",
      desc: "Conducted web development bootcamp sessions covering HTML, CSS, and JavaScript fundamentals. Helped students understand core programming concepts, website structure, and real-world web development workflows through hands-on examples.",
    },
    {
      title: "Web Developer Intern",
      duration: "Jul 2025 – Sep 2025",
      company: "EEE Innovation Pvt. Ltd.",
      desc: "Worked on real-world web applications using Laravel and Tailwind CSS. Gained experience in building e-commerce features, following proper architectural patterns, and collaborating within a development team.",
    },
    {
      title: "Full Stack Web Developer",
      duration: "Oct 2025 – Present",
      company: "EEE Innovation Pvt. Ltd.",
      desc: "Actively contributing as a core team member in designing and developing full-stack web applications. Involved in application architecture planning, database design, feature development, and effective team coordination.",
    },
  ];

  return (
    <div className="space-y-10">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-1 w-4 h-4 border-2 border-black rounded-full bg-white"></div>

          {/* Timeline Line */}
          {index !== experiences.length - 1 && (
            <div className="absolute left-2 top-6 w-px h-full bg-gray-600"></div>
          )}

          {/* Content */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
              <h3 className="text-lg sm:text-xl font-semibold">{exp.title}</h3>

              <span className="text-gray-600 text-xs sm:text-sm font-medium px-3 py-1 bg-gray-100 rounded-full w-fit">
                {exp.duration}
              </span>
            </div>

            <p className="text-sm font-medium text-gray-700 mb-2">
              {exp.company}
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {exp.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
