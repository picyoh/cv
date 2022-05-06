import AboutMe from "./sections/Aboutme";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <article className="app">
      <AboutMe />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </article>
  );
}

export default App;
