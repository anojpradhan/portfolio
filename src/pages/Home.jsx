import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const Divider = () => (
  <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-8">
    <div className="border-t border-gray-700/70 w-full" />
  </div>
);

const Home = () => {
  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden">
      <Hero />

      <Divider />

      <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl font-bold tracking-tight mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto">
          <Skills />
        </div>
      </section>

      <Divider />

      <section
        id="projects"
        className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl font-bold tracking-tight mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10">
          Projects
        </h2>
        <Projects />
      </section>

      <Divider />

      <section
        id="experience"
        className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl font-bold tracking-tight mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10">
          Experience
        </h2>
        <Experience />
      </section>

      <Divider />
      <section
        id="contact"
        className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl font-bold tracking-tight mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10">
          Contact
        </h2>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
