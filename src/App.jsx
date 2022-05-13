import AboutMe from "./sections/Aboutme";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <article className="app">
      <Contact /> 
      <AboutMe />
      <Portfolio />
      <Skills />
      <Education />
    </article>
  );
}

export default App;
