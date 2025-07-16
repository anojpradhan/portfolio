const projects = [
  { title: "Portfolio Website", description: "My personal portfolio website built with React and Tailwind." },
  { title: "Todo App", description: "A simple task management app using React." },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
