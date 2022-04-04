import AboutMe from "./features/abouteMe/AboutMe";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";
import Education from "./features/education/Education";
import Portfolio from "./features/portfolio/Portfolio";

function App() {
  return (
    <div className="appContainer">
      <AboutMe />
      <Portfolio />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
