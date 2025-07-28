

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-blue-100 px-30 py-16">
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">Hi, I'm Anoj Pradhan</h1>
        <p className="text-2xl">Fullstack Developer</p>
      </div>
    </section>
  );
};

export default Hero;
