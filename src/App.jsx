import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App =()=>{
  return(
    <div className="font-sans bg-gray-50 text-gray-900">
      <Hero/>
      <About/>
      <Projects/>
      <Contact />
    </div>
  );
}
export default App;